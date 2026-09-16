const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const crypto = require('crypto');

const execPromise = util.promisify(exec);

// ==========================================
// CONFIGURATION & ENVIRONMENT VARIABLES
// ==========================================
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'your-gemini-api-key';
const IG_USER_ID = process.env.IG_USER_ID || 'your-ig-user-id';
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN || 'your-meta-long-lived-access-token';

const LOGO_PATH = path.join(__dirname, '../../public/beeclue-logo.png');

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ==========================================
// 1. FETCH REAL-TIME TRENDS
// ==========================================
async function fetchTrendingTopic(niche) {
  console.log(`📈 Checking real-time trending topics for: ${niche}...`);
  try {
    const query = encodeURIComponent(`${niche} technology OR web design`);
    const res = await fetch(`https://news.google.com/rss/search?q=${query}&hl=en-CA&gl=CA&ceid=CA:en`);
    const xml = await res.text();
    const match = xml.match(/<item>\s*<title>(.*?)<\/title>/);
    if (match && match[1]) {
      const cleanTitle = match[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1');
      console.log(`📰 Trend Found: "${cleanTitle}"`);
      return cleanTitle;
    }
  } catch (e) {
    console.error("Trend fetch failed, falling back to general concepts.");
  }
  return "modern digital growth and workflow automation";
}

// ==========================================
// 2. GENERATE EDITORIAL PROMPT (GEMINI 2.5)
// ==========================================
async function generatePostConcept(niche, trendingTopic) {
  console.log("🧠 Generating strict Editorial Master Prompt...");
  
  const templatePrompt = `We are targeting the "${niche}" niche this week.
  The current trending topic in this industry is: "${trendingTopic}".
  
  Generate a concept for a highly visual Instagram Reel. Return ONLY a JSON object with two keys:
  1. 'imagePrompt': This MUST be a meticulously formatted prompt based on our Master Editorial Template. Keep the exact branding (#004D99, no neon, no 3D objects, no glowing holograms), but swap out the CORE PITCH, HEADLINE, and PRIMARY VISUAL to match the ${niche} niche and the trending topic. CRITICAL: Include the instruction "Leave the top 15% of the canvas completely blank (solid color) for a logo overlay. Do not draw any logos."
  2. 'caption': An engaging Instagram caption referencing the trend, with 5 relevant hashtags.`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: templatePrompt }] }],
      generationConfig: { responseMimeType: "application/json" }
    })
  });

  const data = await response.json();
  const rawText = data.candidates[0].content.parts[0].text;
  return JSON.parse(rawText);
}

// ==========================================
// 3. GENERATE 9:16 IMAGE (GEMINI IMAGEN 3)
// ==========================================
async function generateImageAndSave(prompt, destPath) {
  console.log("🎨 Generating 9:16 Image via Gemini Imagen 3 (Blank Logo Space)...");
  
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [ { prompt: prompt } ],
      parameters: {
        sampleCount: 1,
        aspectRatio: "9:16",
        outputOptions: { mimeType: "image/jpeg" }
      }
    })
  });

  const data = await response.json();
  if (data.error) throw new Error(`Imagen API Error: ${JSON.stringify(data.error)}`);

  const base64Image = data.predictions[0].bytesBase64Encoded;
  fs.writeFileSync(destPath, Buffer.from(base64Image, 'base64'));
}

// ==========================================
// 4. ANIMATE & OVERLAY REAL LOGO (FFMPEG)
// ==========================================
async function createVideoWithLogoOverlay(imagePath, logoPath, videoPath) {
  console.log("🎬 Compositing: Adding Zoom animation to background & overlaying real PNG Logo...");
  
  // This command does two things at once:
  // 1. Takes the background image and applies a slow 5-second zoom.
  // 2. Takes your real public/beeclue-logo.png, scales it to 450px wide, and pins it perfectly static at the top center.
  const ffmpegCmd = `ffmpeg -y -loop 1 -i ${imagePath} -i ${logoPath} -filter_complex "[0:v]scale=1080:1920,zoompan=z='min(zoom+0.0015,1.15)':d=150:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'[bg];[1:v]scale=450:-1[logo];[bg][logo]overlay=(W-w)/2:150" -c:v libx264 -t 5 -pix_fmt yuv420p ${videoPath}`;
  
  try {
    await execPromise(ffmpegCmd);
    console.log("✅ Final composite Video Reel generated successfully!");
  } catch (error) {
    console.error("❌ FFmpeg Error:", error);
    throw error;
  }
}

// ==========================================
// ORCHESTRATOR
// ==========================================
async function runAgent() {
  try {
    console.log("🤖 Starting Premium Editorial Instagram Reel Agent...");
    
    // Niche Rotation Logic
    const weekNumber = Math.ceil(new Date().getDate() / 7);
    const niches = ["Lawyers & Law Firms", "Accountants & CPA Firms", "Dental Clinics", "Real Estate Agencies", "Construction"];
    const targetNiche = niches[(weekNumber - 1) % niches.length];
    
    console.log(`🎯 Target Niche for this week: ${targetNiche}`);

    const tempDir = path.join(__dirname, '../../seo-reports');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const uuid = crypto.randomUUID().substring(0, 6);
    const imagePath = path.join(tempDir, `temp_image_${uuid}.jpg`);
    const videoPath = path.join(tempDir, `temp_reel_${uuid}.mp4`);

    const trendingTopic = await fetchTrendingTopic(targetNiche);
    const content = await generatePostConcept(targetNiche, trendingTopic);
    console.log(`\n📋 Final Prompt:\n${content.imagePrompt}\n`);

    // --- ENABLE THESE TO RUN LIVE ---
    // await generateImageAndSave(content.imagePrompt, imagePath);
    // await createVideoWithLogoOverlay(imagePath, LOGO_PATH, videoPath);
    // console.log(`🎉 Check out your finished video at: ${videoPath}`);

    console.log("\n✅ Test Run Complete. (API calls commented out for dry-run).");
  } catch (error) {
    console.error("Agent failed:", error);
  }
}

runAgent();

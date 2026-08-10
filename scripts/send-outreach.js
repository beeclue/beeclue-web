const fs = require('fs');
const path = require('path');

// 1. Load Environment Variables from local .env
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const val = parts.slice(1).join('=').trim();
            process.env[key] = val;
        }
    });
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
    console.error("Error: RESEND_API_KEY is not defined in .env or environment.");
    process.exit(1);
}

const pipelinePath = path.join(__dirname, '../sales/leads_pipeline.md');
if (!fs.existsSync(pipelinePath)) {
    console.error("Error: leads_pipeline.md not found at " + pipelinePath);
    process.exit(1);
}

let pipelineContent = fs.readFileSync(pipelinePath, 'utf8');
const lines = pipelineContent.split('\n');

const today = new Date().toISOString().split('T')[0];
const updatedLines = [...lines];
let emailsSentCount = 0;

// Parse markdown link [text](url) to HTML <a href="url">text</a>
function mdToHtmlLinks(text) {
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

// Convert markdown email body (blockquote) to clean HTML paragraphs
function formatEmailBody(bodyText) {
    const lines = bodyText.split('\n');
    let html = "";
    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed === "") {
            html += "<br/>";
        } else {
            html += `<p style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 14px; line-height: 1.5; color: #333;">${mdToHtmlLinks(trimmed)}</p>`;
        }
    });
    return html;
}

async function sendOutreach() {
    // 2. Scan lines for Active Leads table rows with DRAFTED status
    for (let i = 0; i < updatedLines.length; i++) {
        const line = updatedLines[i];
        if (!line.includes('|') || !line.includes('DRAFTED')) continue;

        // Extract columns: | Name | Location | Issues | Status | Date |
        const columns = line.split('|').map(col => col.trim());
        if (columns.length < 6) continue;

        const businessName = columns[1];
        const location = columns[2];
        const issues = columns[3];
        const status = columns[4];

        if (status !== 'DRAFTED') continue;

        console.log(`\nFound drafted lead: "${businessName}"`);

        // 3. Extract matching draft from the "Outreach Drafts" section
        const draftHeader = `### Lead #`;
        let emailAddress = "";
        let subject = "";
        let emailBodyLines = [];
        let insideTargetDraft = false;

        for (let j = 0; j < lines.length; j++) {
            const currentLine = lines[j];
            if (currentLine.startsWith(draftHeader) && currentLine.includes(businessName)) {
                insideTargetDraft = true;
                continue;
            } else if (currentLine.startsWith(draftHeader) && insideTargetDraft) {
                // Stopped at the next draft section
                break;
            }

            if (insideTargetDraft) {
                if (currentLine.includes('**Contact Email**')) {
                    const match = currentLine.match(/\*\*Contact Email\*\*:\s*(\S+)/i);
                    if (match) emailAddress = match[1];
                } else if (currentLine.includes('**Subject:**')) {
                    const match = currentLine.match(/\*\*Subject:\*\*\s*(.+)/i);
                    if (match) subject = match[1].trim();
                } else if (currentLine.startsWith('>')) {
                    // Extract blockquote text
                    let content = currentLine.replace(/^>\s*/, '').trim();
                    // Skip subject line in body if it got pulled in
                    if (!content.includes('**Subject:**')) {
                        emailBodyLines.push(content);
                    }
                }
            }
        }

        const emailBody = emailBodyLines.join('\n');

        if (!emailAddress || !subject || !emailBody) {
            console.error(`Warning: Could not parse complete draft for "${businessName}". Skipping.`);
            console.log(`Parsed details: Email="${emailAddress}", Subject="${subject}", BodyLines=${emailBodyLines.length}`);
            continue;
        }

        // Convert body to rich HTML
        const htmlBody = formatEmailBody(emailBody);

        console.log(`Sending email to ${emailAddress} via Resend...`);

        try {
            // 4. Call Resend API using native fetch
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${RESEND_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'Kay N <hello@beeclue.com>',
                    to: emailAddress,
                    subject: subject,
                    html: htmlBody
                })
            });

            const resData = await response.json();

            if (response.ok && resData.id) {
                console.log(`Success! Resend Email ID: ${resData.id}`);

                // 5. Update pipeline row status to SENT and update Last Outbound Date to today
                // Columns layout: | [0] | [1] Name | [2] Location | [3] Issues | [4] Status | [5] Date | [6] |
                columns[4] = 'SENT';
                columns[5] = ` ${today} `;
                updatedLines[i] = columns.join(' | ').trim();
                emailsSentCount++;
            } else {
                console.error(`API Error: Resend rejected request.`, resData);
            }
        } catch (error) {
            console.error(`Network error sending email:`, error);
        }
    }

    if (emailsSentCount > 0) {
        // 6. Save updated leads_pipeline.md back to file
        fs.writeFileSync(pipelinePath, updatedLines.join('\n'), 'utf8');
        console.log(`\nFinished: Sent ${emailsSentCount} emails and updated leads_pipeline.md.`);
    } else {
        console.log('\nNo drafted emails to send today.');
    }
}

sendOutreach();

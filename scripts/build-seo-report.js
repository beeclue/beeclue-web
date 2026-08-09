const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../seo-reports/temp_data.json');
const liveReportPath = path.join(__dirname, '../seo-reports/beeclue.com_Live_SEO_Report.html');
const historyDir = path.join(__dirname, '../seo-reports/history');

if (!fs.existsSync(dataPath)) {
    console.error("Error: seo-reports/temp_data.json is missing.");
    process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const { date, score, summary, gsc, ga, trendingUp, trendingDown, quickWins } = payload;

// Archive old report if it exists
if (fs.existsSync(liveReportPath)) {
    const stats = fs.statSync(liveReportPath);
    const lastModifiedDate = new Date(stats.mtime).toISOString().split('T')[0];
    const archivePath = path.join(historyDir, `beeclue.com_SEO_Report_${lastModifiedDate}.html`);
    if (!fs.existsSync(historyDir)) {
        fs.mkdirSync(historyDir, { recursive: true });
    }
    fs.copyFileSync(liveReportPath, archivePath);
}

// Render HTML content
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Traffic Master Report - beeclue.com (Live)</title>
    <style>
        :root {
            --bc-primary: #004d99;
            --bc-primary-dark: #003d7a;
            --bc-primary-light: #e6f0ff;
            --bc-success: #10B981;
            --bc-success-light: #D1FAE5;
            --bc-warning: #F59E0B;
            --bc-warning-light: #FEF3C7;
            --bc-danger: #EF4444;
            --bc-danger-light: #FEE2E2;
            --bc-info: #3B82F6;
            --bc-info-light: #DBEAFE;
            --bc-bg: #F8FAFC;
            --bc-surface: #FFFFFF;
            --bc-border: #E2E8F0;
            --bc-text: #1E293B;
            --bc-text-muted: #64748B;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bc-bg);
            color: var(--bc-text);
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container { max-width: 1000px; margin: 0 auto; padding: 20px; }
        .card { background: var(--bc-surface); padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 24px; border: 1px solid var(--bc-border); }
        .header { text-align: center; padding: 40px 20px; background: var(--bc-surface); border-radius: 12px; margin-bottom: 30px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid var(--bc-border); }
        .header img { height: 40px; margin-bottom: 20px; }
        h1, h2, h3 { color: var(--bc-primary); }
        h1 { font-size: 2.5rem; margin-bottom: 10px; }
        h2 { font-size: 1.5rem; margin-top: 0; padding-bottom: 15px; border-bottom: 2px solid var(--bc-primary-light); }
        .score-circle { width: 140px; height: 140px; background: var(--bc-primary-light); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 30px auto; border: 6px solid var(--bc-primary); }
        .score-number { font-size: 48px; font-weight: bold; color: var(--bc-primary); line-height: 1; }
        .score-label { font-size: 14px; color: var(--bc-primary-dark); font-weight: 600; margin-top: 5px; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { padding: 16px; text-align: left; border-bottom: 1px solid var(--bc-border); }
        th { background: var(--bc-bg); color: var(--bc-text-muted); font-weight: 600; }
        .status { display: inline-block; padding: 6px 12px; border-radius: 99px; font-size: 13px; font-weight: 600; }
        .status.pass { background: var(--bc-success-light); color: var(--bc-success); }
        .status.warn { background: var(--bc-warning-light); color: var(--bc-warning); }
        .status.fail { background: var(--bc-danger-light); color: var(--bc-danger); }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
        .footer { text-align: center; padding: 40px; color: var(--bc-text-muted); font-size: 14px; border-top: 1px solid var(--bc-border); margin-top: 40px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/beeclue-horizontal-blue.png" alt="Beeclue Tech">
            <h1>SEO Traffic Master Report</h1>
            <p>Domain: <strong>beeclue.com</strong> | Date: <strong>${date}</strong></p>
            <div class="score-circle">
                <div class="score-number">${score}</div>
                <div class="score-label">/100</div>
            </div>
            <p>Overall SEO Health Score</p>
        </div>

        <div class="card">
            <h2>Executive Summary</h2>
            <p>${summary}</p>
        </div>

        <div class="card">
            <h2>Google Search Console Analysis (Last 28 Days)</h2>
            <div class="grid">
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-primary); font-weight: bold;">${gsc.impressions}</div>
                    <div style="color: var(--bc-text-muted);">Impressions</div>
                </div>
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-primary); font-weight: bold;">${gsc.clicks}</div>
                    <div style="color: var(--bc-text-muted);">Clicks</div>
                </div>
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-warning); font-weight: bold;">${gsc.ctr}%</div>
                    <div style="color: var(--bc-text-muted);">Avg CTR</div>
                </div>
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-text-muted); font-weight: bold;">${gsc.position}</div>
                    <div style="color: var(--bc-text-muted);">Avg Position</div>
                </div>
            </div>

            <h3 style="margin-top: 30px;">🔥 Trending Keywords</h3>
            <table>
                <thead>
                    <tr><th>Keyword</th><th>Impressions</th><th>Clicks</th><th>Change Details</th></tr>
                </thead>
                <tbody>
                    ${(trendingUp || []).map(item => `
                        <tr><td><strong>${item.keyword}</strong></td><td>${item.impressions}</td><td>${item.clicks}</td><td><span class="status pass">${item.change}</span></td></tr>
                    `).join('')}
                </tbody>
            </table>

            <h3 style="margin-top: 30px;">⚠️ Keywords Going Down</h3>
            <table>
                <thead>
                    <tr><th>Keyword</th><th>Impressions</th><th>Clicks</th><th>Change Details</th></tr>
                </thead>
                <tbody>
                    ${(trendingDown || []).map(item => `
                        <tr><td><strong>${item.keyword}</strong></td><td>${item.impressions}</td><td>${item.clicks}</td><td><span class="status fail">${item.change}</span></td></tr>
                    `).join('')}
                </tbody>
            </table>

            <h3 style="margin-top: 30px;">🎯 Quick-Win Keyword Recommendations (Pos 4-15)</h3>
            <table>
                <thead>
                    <tr><th>Keyword</th><th>Position</th><th>Impressions</th><th>Suggested Action</th></tr>
                </thead>
                <tbody>
                    ${(quickWins || []).map(item => `
                        <tr><td><strong>${item.keyword}</strong></td><td>${item.position}</td><td>${item.impressions}</td><td>${item.action}</td></tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="card">
            <h2>Google Analytics Performance (GA4)</h2>
            <div class="grid">
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-primary); font-weight: bold;">${ga.sessions}</div>
                    <div style="color: var(--bc-text-muted);">Total Sessions</div>
                </div>
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-primary); font-weight: bold;">${ga.pageviews}</div>
                    <div style="color: var(--bc-text-muted);">Page Views</div>
                </div>
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-warning); font-weight: bold;">${ga.bounceRate}%</div>
                    <div style="color: var(--bc-text-muted);">Bounce Rate</div>
                </div>
                <div style="background: var(--bc-bg); padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; color: var(--bc-text-muted); font-weight: bold;">${ga.engagement}s</div>
                    <div style="color: var(--bc-text-muted);">Avg Engagement Time</div>
                </div>
            </div>
        </div>

        <div class="footer">
            Generated by Beeclue Tech — SEO Traffic Master Agent
        </div>
    </div>
</body>
</html>`;

const seoReportsDir = path.dirname(liveReportPath);
if (!fs.existsSync(seoReportsDir)) {
    fs.mkdirSync(seoReportsDir, { recursive: true });
}

fs.writeFileSync(liveReportPath, html, 'utf8');
console.log("Success: Live report generated at " + liveReportPath);

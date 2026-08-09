const fs = require('fs');
const path = require('path');

const indexFilePath = path.join(__dirname, '../marketing/website_index.json');
const appDirPath = path.join(__dirname, '../src/app');

const routes = [];

function scanDirectory(dir, routePath = "") {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    
    let hasPage = false;
    let pageContent = "";

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file.startsWith('(') || file.startsWith('_')) {
                // Skip route groups/internal directories but scan children
                scanDirectory(fullPath, routePath);
            } else {
                scanDirectory(fullPath, routePath + "/" + file);
            }
        } else if (file === "page.tsx") {
            hasPage = true;
            pageContent = fs.readFileSync(fullPath, 'utf8');
        }
    }

    if (hasPage) {
        // Extract metadata title and description
        let title = "Beeclue Page";
        let desc = "B2B Software and Web Services";

        const titleMatch = pageContent.match(/title:\s*["']([^"']+)["']/);
        if (titleMatch) title = titleMatch[1];

        const descMatch = pageContent.match(/description:\s*["']([^"']+)["']/);
        if (descMatch) desc = descMatch[1];

        routes.push({
            route: routePath || "/",
            title,
            description: desc,
            lastChecked: new Date().toISOString().split('T')[0]
        });
    }
}

scanDirectory(appDirPath);

if (!fs.existsSync(path.dirname(indexFilePath))) {
    fs.mkdirSync(path.dirname(indexFilePath), { recursive: true });
}

fs.writeFileSync(indexFilePath, JSON.stringify(routes, null, 2), 'utf8');
console.log("Success: Marketing site index compiled with " + routes.length + " pages.");

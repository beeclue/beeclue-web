<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Beeclue Tech</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          :root {
            --bg-base: #090a0f;
            --bg-card: rgba(18, 20, 29, 0.75);
            --bg-card-hover: rgba(26, 29, 43, 0.9);
            --border: rgba(255, 255, 255, 0.08);
            --border-highlight: rgba(99, 102, 241, 0.3);
            --primary: #6366f1;
            --primary-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
            --accent: #38bdf8;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --text-subtle: #64748b;
            --badge-bg: rgba(99, 102, 241, 0.12);
            --badge-border: rgba(99, 102, 241, 0.25);
            --badge-text: #a5b4fc;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--bg-base);
            color: var(--text-main);
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            min-height: 100vh;
            padding: 40px 20px 80px;
            background-image: 
              radial-gradient(circle at 15% 10%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 85% 60%, rgba(168, 85, 247, 0.12) 0%, transparent 45%);
            background-attachment: fixed;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .header {
            background: var(--bg-card);
            border: 1px solid var(--border);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 20px;
            padding: 32px 40px;
            margin-bottom: 28px;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
          }

          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary-gradient);
          }

          .brand-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 20px;
          }

          .brand-title {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text-main);
          }

          .brand-logo {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: var(--primary-gradient);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 18px;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
          }

          .brand-name {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          .home-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            color: var(--text-muted);
            text-decoration: none;
            font-weight: 600;
            font-size: 13px;
            transition: all 0.2s ease;
          }

          .home-btn:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
          }

          h1 {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin-bottom: 8px;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          p.description {
            color: var(--text-muted);
            font-size: 14px;
            max-width: 800px;
            line-height: 1.6;
          }

          .stats-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid var(--border);
          }

          .badge-counter {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 14px;
            border-radius: 100px;
            background: var(--badge-bg);
            border: 1px solid var(--badge-border);
            color: var(--badge-text);
            font-size: 13px;
            font-weight: 600;
          }

          .badge-counter strong {
            color: #ffffff;
          }

          .search-box {
            position: relative;
            flex: 1;
            max-width: 320px;
          }

          .search-input {
            width: 100%;
            padding: 10px 16px 10px 38px;
            border-radius: 10px;
            background: rgba(10, 12, 18, 0.8);
            border: 1px solid var(--border);
            color: var(--text-main);
            font-size: 13px;
            outline: none;
            transition: all 0.2s ease;
          }

          .search-input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
          }

          .search-icon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-subtle);
            pointer-events: none;
          }

          .card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
          }

          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }

          thead th {
            background: rgba(15, 17, 26, 0.95);
            padding: 16px 24px;
            color: var(--text-muted);
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            border-bottom: 1px solid var(--border);
          }

          tbody tr {
            border-bottom: 1px solid var(--border);
            transition: background-color 0.15s ease;
          }

          tbody tr:last-child {
            border-bottom: none;
          }

          tbody tr:hover {
            background: var(--bg-card-hover);
          }

          td {
            padding: 16px 24px;
            color: var(--text-main);
            font-size: 13.5px;
          }

          td.url-cell {
            max-width: 500px;
            word-break: break-all;
          }

          td.url-cell a {
            color: var(--text-main);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }

          td.url-cell a:hover {
            color: var(--accent);
          }

          .priority-pill {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
          }

          .p-high {
            background: rgba(34, 197, 94, 0.15);
            color: #4ade80;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }

          .p-med {
            background: rgba(99, 102, 241, 0.15);
            color: #818cf8;
            border: 1px solid rgba(99, 102, 241, 0.3);
          }

          .p-normal {
            background: rgba(148, 163, 184, 0.1);
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.2);
          }

          .changefreq-text {
            color: var(--text-muted);
            text-transform: capitalize;
            font-size: 13px;
          }

          .date-text {
            color: var(--text-subtle);
            font-size: 12.5px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          }

          .footer {
            margin-top: 32px;
            text-align: center;
            color: var(--text-subtle);
            font-size: 13px;
          }

          .footer a {
            color: var(--text-muted);
            text-decoration: none;
          }

          .footer a:hover {
            color: #ffffff;
          }

          @media (max-width: 768px) {
            body {
              padding: 20px 12px 60px;
            }
            .header {
              padding: 24px 20px;
            }
            .stats-bar {
              flex-direction: column;
              align-items: stretch;
            }
            .search-box {
              max-width: 100%;
            }
            thead th:nth-child(3), thead th:nth-child(4),
            tbody td:nth-child(3), tbody td:nth-child(4) {
              display: none;
            }
            td, thead th {
              padding: 12px 16px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header class="header">
            <div class="brand-row">
              <a href="https://beeclue.com" class="brand-title">
                <div class="brand-logo">B</div>
                <div class="brand-name">Beeclue Tech</div>
              </a>
              <a href="https://beeclue.com" class="home-btn">
                <span>&#8592;</span> Back to Home
              </a>
            </div>

            <h1>XML Sitemap</h1>
            <p class="description">
              This XML sitemap outlines the published URLs and site architecture of Beeclue Tech. Search engines like Google and Bing crawl this file to index and discover our web development services, case studies, and industry guides.
            </p>

            <div class="stats-bar">
              <div class="badge-counter">
                <span>Total Indexed URLs:</span>
                <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
              </div>

              <div class="search-box">
                <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" id="sitemapSearch" class="search-input" placeholder="Filter URLs..." onkeyup="filterSitemap()" />
              </div>
            </div>
          </header>

          <main class="card">
            <table id="sitemapTable">
              <thead>
                <tr>
                  <th style="width: 55%;">URL / Location</th>
                  <th style="width: 15%;">Priority</th>
                  <th style="width: 15%;">Change Frequency</th>
                  <th style="width: 15%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="url-cell">
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:variable name="p" select="sitemap:priority"/>
                      <xsl:choose>
                        <xsl:when test="$p &gt;= 0.9">
                          <span class="priority-pill p-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="$p &gt;= 0.7">
                          <span class="priority-pill p-med"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-pill p-normal">
                            <xsl:choose>
                              <xsl:when test="sitemap:priority">
                                <xsl:value-of select="sitemap:priority"/>
                              </xsl:when>
                              <xsl:otherwise>0.5</xsl:otherwise>
                            </xsl:choose>
                          </span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <span class="changefreq-text">
                        <xsl:choose>
                          <xsl:when test="sitemap:changefreq">
                            <xsl:value-of select="sitemap:changefreq"/>
                          </xsl:when>
                          <xsl:otherwise>monthly</xsl:otherwise>
                        </xsl:choose>
                      </span>
                    </td>
                    <td>
                      <span class="date-text">
                        <xsl:choose>
                          <xsl:when test="sitemap:lastmod">
                            <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                          </xsl:when>
                          <xsl:otherwise>—</xsl:otherwise>
                        </xsl:choose>
                      </span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </main>

          <footer class="footer">
            <p>Generated for <a href="https://beeclue.com">Beeclue Tech</a> • Designed with performance, accessibility, and SEO excellence.</p>
          </footer>
        </div>

        <script type="text/javascript">
          function filterSitemap() {
            var input = document.getElementById("sitemapSearch");
            var filter = input.value.toLowerCase();
            var table = document.getElementById("sitemapTable");
            var tr = table.getElementsByTagName("tr");

            for (var i = 1; i &lt; tr.length; i++) {
              var td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toLowerCase().indexOf(filter) &gt; -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

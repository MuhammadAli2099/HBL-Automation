const fs = require('fs');
const path = require('path');

const resultsPath = path.join(process.cwd(), 'test-results', 'results.json');
const outputDir = path.join(process.cwd(), 'manager-report');
const outputPath = path.join(outputDir, 'manager-report.html');
const historyPath = path.join(outputDir, 'history.json');

if (!fs.existsSync(resultsPath)) {
  console.error('results.json not found. Run Playwright tests first.');
  process.exit(1);
}

const raw = fs.readFileSync(resultsPath, 'utf-8');
const data = JSON.parse(raw);
const collected = [];

function walkSuites(suites, parentTitle = '') {
  for (const suite of suites || []) {
    const currentTitle = [parentTitle, suite.title].filter(Boolean).join(' > ');

    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        const latestResult = test.results?.[test.results.length - 1] || {};
        collected.push({
          title: prettifyText(spec.title),
          suite: prettifySuiteName(currentTitle || spec.file || 'General Validation'),
          status: latestResult.status || 'unknown',
          durationMs: latestResult.duration || 0,
          error: latestResult.error?.message || '',
        });
      }
    }

    walkSuites(suite.suites || [], currentTitle);
  }
}

walkSuites(data.suites || []);

const total = collected.length;
const passed = collected.filter(t => t.status === 'passed').length;
const failed = collected.filter(t => t.status === 'failed').length;
const skipped = collected.filter(t => t.status === 'skipped').length;
const passRate = total ? Math.round((passed / total) * 100) : 0;

const suiteSummaryMap = new Map();
for (const item of collected) {
  if (!suiteSummaryMap.has(item.suite)) {
    suiteSummaryMap.set(item.suite, { passed: 0, failed: 0, skipped: 0 });
  }
  suiteSummaryMap.get(item.suite)[item.status] =
    (suiteSummaryMap.get(item.suite)[item.status] || 0) + 1;
}

const suiteRows = Array.from(suiteSummaryMap.entries()).map(([suite, values]) => ({
  suite,
  passed: values.passed || 0,
  failed: values.failed || 0,
  skipped: values.skipped || 0,
}));

const history = loadHistory(historyPath);
history.push({
  runLabel: new Date().toLocaleString(),
  total,
  passed,
  failed,
  skipped,
});

while (history.length > 10) {
  history.shift();
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf-8');

const pieSegments = buildPieSegments({ passed, failed, skipped });
const trendSvg = buildTrendSvg(history, 'passed', '#16a34a', 320, 170);
const failTrendSvg = buildTrendSvg(history, 'failed', '#dc2626', 320, 170);

const suiteCards = suiteRows.map((suite) => `
  <div class="suite-card">
    <div class="suite-title">${escapeHtml(suite.suite)}</div>
    <div class="suite-metrics">
      <span class="metric pass">Passed: ${suite.passed}</span>
      <span class="metric fail">Failed: ${suite.failed}</span>
      <span class="metric skip">Skipped: ${suite.skipped}</span>
    </div>
  </div>
`).join('');

const rows = collected.map((t, index) => {
  const badgeClass =
    t.status === 'passed' ? 'passed' :
    t.status === 'failed' ? 'failed' : 'skipped';

  return `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(t.title)}</td>
      <td>${escapeHtml(t.suite)}</td>
      <td><span class="badge ${badgeClass}">${t.status.toUpperCase()}</span></td>
      <td>${(t.durationMs / 1000).toFixed(2)}s</td>
      <td>${escapeHtml(t.error || '-')}</td>
    </tr>
  `;
}).join('');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Automation Executive Report</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: #f5f7fb;
      color: #111827;
    }
    .container {
      max-width: 1320px;
      margin: 0 auto;
      padding: 28px;
    }
    .hero {
      background: linear-gradient(135deg, #1d4ed8, #0f766e);
      color: white;
      border-radius: 20px;
      padding: 28px 32px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
      margin-bottom: 24px;
    }
    .hero h1 {
      margin: 0 0 8px;
      font-size: 30px;
    }
    .hero p {
      margin: 0;
      font-size: 15px;
      opacity: 0.95;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    .card {
      background: white;
      border-radius: 18px;
      padding: 22px;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    }
    .card h3 {
      margin: 0;
      font-size: 14px;
      color: #6b7280;
    }
    .card .value {
      margin-top: 10px;
      font-size: 32px;
      font-weight: 700;
    }
    .chart-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    .chart-card {
      background: white;
      border-radius: 18px;
      padding: 20px;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    }
    .chart-card h3 {
      margin: 0 0 14px;
      font-size: 16px;
    }
    .pie-wrap {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .pie {
      width: 170px;
      height: 170px;
      border-radius: 50%;
      background: conic-gradient(${pieSegments});
      box-shadow: inset 0 0 0 18px white;
      flex-shrink: 0;
    }
    .legend {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    }
    .swatch {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      display: inline-block;
    }
    .suite-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    .suite-card {
      background: white;
      border-radius: 18px;
      padding: 18px 20px;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    }
    .suite-title {
      font-weight: 700;
      margin-bottom: 10px;
    }
    .suite-metrics {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      font-size: 14px;
    }
    .metric.pass { color: #16a34a; }
    .metric.fail { color: #dc2626; }
    .metric.skip { color: #6b7280; }
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
    }
    thead {
      background: #111827;
      color: white;
    }
    th, td {
      padding: 14px 16px;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
      vertical-align: top;
      font-size: 14px;
    }
    tr:hover { background: #f9fafb; }
    .badge {
      display: inline-block;
      padding: 6px 10px;
      border-radius: 999px;
      color: white;
      font-size: 12px;
      font-weight: 700;
    }
    .passed { background: #16a34a; }
    .failed { background: #dc2626; }
    .skipped { background: #6b7280; }
    .footer {
      margin-top: 18px;
      color: #6b7280;
      font-size: 13px;
      text-align: right;
    }
    .svg-title {
      font-size: 13px;
      color: #6b7280;
      margin-bottom: 8px;
    }
    .chart-note {
      margin-top: 8px;
      font-size: 12px;
      color: #6b7280;
    }
    @media (max-width: 1100px) {
      .chart-grid, .cards, .suite-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>Automation Executive Report</h1>
      <p>Login and Add Account Payee validation coverage with positive and negative scenarios</p>
    </div>

    <div class="cards">
      <div class="card">
        <h3>Total Tests</h3>
        <div class="value">${total}</div>
      </div>
      <div class="card">
        <h3>Passed</h3>
        <div class="value">${passed}</div>
      </div>
      <div class="card">
        <h3>Failed</h3>
        <div class="value">${failed}</div>
      </div>
      <div class="card">
        <h3>Pass Rate</h3>
        <div class="value">${passRate}%</div>
      </div>
    </div>

    <div class="chart-grid">
      <div class="chart-card">
        <h3>Execution Distribution</h3>
        <div class="pie-wrap">
          <div class="pie"></div>
          <div class="legend">
            <div class="legend-item"><span class="swatch" style="background:#16a34a;"></span> Passed: ${passed}</div>
            <div class="legend-item"><span class="swatch" style="background:#dc2626;"></span> Failed: ${failed}</div>
            <div class="legend-item"><span class="swatch" style="background:#6b7280;"></span> Skipped: ${skipped}</div>
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h3>Pass Trend</h3>
        <div class="svg-title">Recent execution history</div>
        ${trendSvg}
        <div class="chart-note">Tracks passed tests across the last 10 runs.</div>
      </div>

      <div class="chart-card">
        <h3>Fail Trend</h3>
        <div class="svg-title">Recent execution history</div>
        ${failTrendSvg}
        <div class="chart-note">Tracks failed tests across the last 10 runs.</div>
      </div>
    </div>

    <div class="suite-grid">
      ${suiteCards}
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Test Case</th>
          <th>Test Suite</th>
          <th>Status</th>
          <th>Duration</th>
          <th>Error Summary</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <div class="footer">
      Generated automatically from Playwright JSON results
    </div>
  </div>
</body>
</html>
`;

fs.writeFileSync(outputPath, html, 'utf-8');
console.log(`Manager report generated: ${outputPath}`);

function loadHistory(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return [];
  }
}

function buildPieSegments({ passed, failed, skipped }) {
  const total = Math.max(passed + failed + skipped, 1);
  const passedPct = (passed / total) * 100;
  const failedPct = (failed / total) * 100;
  const skippedPct = (skipped / total) * 100;

  const s1 = passedPct;
  const s2 = passedPct + failedPct;
  const s3 = passedPct + failedPct + skippedPct;

  return `#16a34a 0% ${s1}%, #dc2626 ${s1}% ${s2}%, #6b7280 ${s2}% ${s3}%`;
}

function buildTrendSvg(history, key, strokeColor, width, height) {
  const padding = 22;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;
  const maxValue = Math.max(...history.map(h => h[key] || 0), 1);

  const points = history.map((item, index) => {
    const x = padding + (history.length === 1 ? innerWidth / 2 : (index * innerWidth) / (history.length - 1));
    const y = padding + innerHeight - ((item[key] || 0) / maxValue) * innerHeight;
    return `${x},${y}`;
  }).join(' ');

  const circles = history.map((item, index) => {
    const x = padding + (history.length === 1 ? innerWidth / 2 : (index * innerWidth) / (history.length - 1));
    const y = padding + innerHeight - ((item[key] || 0) / maxValue) * innerHeight;
    return `<circle cx="${x}" cy="${y}" r="4" fill="${strokeColor}" />`;
  }).join('');

  const labels = history.map((item, index) => {
    const x = padding + (history.length === 1 ? innerWidth / 2 : (index * innerWidth) / (history.length - 1));
    return `<text x="${x}" y="${height - 4}" font-size="10" text-anchor="middle" fill="#6b7280">${index + 1}</text>`;
  }).join('');

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#d1d5db" />
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#d1d5db" />
      <polyline fill="none" stroke="${strokeColor}" stroke-width="3" points="${points}" />
      ${circles}
      ${labels}
    </svg>
  `;
}

function prettifySuiteName(raw) {
  const text = String(raw || '')
    .replace(/tests?[\\/]/gi, '')
    .replace(/\.spec\.ts$/i, '')
    .replace(/>/g, ' ')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (/login/i.test(text)) return 'Login Validation';
  if (/payee|beneficiary/i.test(text)) return 'Add Account Payee Validation';
  if (/auth/i.test(text)) return 'Login Validation';

  return toTitleCase(text || 'General Validation');
}

function prettifyText(text) {
  return toTitleCase(String(text || '').replace(/[_-]+/g, ' ').trim());
}

function toTitleCase(text) {
  return text
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
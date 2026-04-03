const fs = require('fs');
const path = require('path');

const resultsPath = path.join(process.cwd(), 'test-results', 'cucumber-report.json');
const reportDir = path.join(process.cwd(), 'manager-report');
const reportPath = path.join(reportDir, 'manager-report.html');

if (!fs.existsSync(resultsPath)) {
  console.error('cucumber-report.json not found. Run npm test first.');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
const scenarios = [];

for (const feature of raw) {
  for (const element of feature.elements || []) {
    scenarios.push({
      feature: feature.name,
      scenario: element.name,
      status: (element.steps || []).some(s => s.result?.status === 'failed')
        ? 'FAILED'
        : (element.steps || []).every(s => s.result?.status === 'passed')
          ? 'PASSED'
          : 'UNKNOWN',
      durationMs: Math.round(((element.steps || []).reduce((sum, s) => sum + (s.result?.duration || 0), 0)) / 1000000)
    });
  }
}

const total = scenarios.length;
const passed = scenarios.filter(s => s.status === 'PASSED').length;
const failed = scenarios.filter(s => s.status === 'FAILED').length;
const unknown = scenarios.filter(s => s.status === 'UNKNOWN').length;

fs.mkdirSync(reportDir, { recursive: true });

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Manager Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #222; }
    h1 { margin-bottom: 8px; }
    .cards { display: flex; gap: 16px; margin: 20px 0; flex-wrap: wrap; }
    .card { border: 1px solid #ddd; border-radius: 10px; padding: 16px; min-width: 180px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    th { background: #f5f5f5; }
    .PASSED { color: green; font-weight: bold; }
    .FAILED { color: red; font-weight: bold; }
    .UNKNOWN { color: #b36b00; font-weight: bold; }
  </style>
</head>
<body>
  <h1>HBL Automation Manager Report</h1>
  <p>Generated from Cucumber JSON execution results.</p>

  <div class="cards">
    <div class="card"><strong>Total</strong><div>${total}</div></div>
    <div class="card"><strong>Passed</strong><div>${passed}</div></div>
    <div class="card"><strong>Failed</strong><div>${failed}</div></div>
    <div class="card"><strong>Unknown</strong><div>${unknown}</div></div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Scenario</th>
        <th>Status</th>
        <th>Duration (ms)</th>
      </tr>
    </thead>
    <tbody>
      ${scenarios.map(s => `
        <tr>
          <td>${s.feature}</td>
          <td>${s.scenario}</td>
          <td class="${s.status}">${s.status}</td>
          <td>${s.durationMs}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
</body>
</html>
`;

fs.writeFileSync(reportPath, html, 'utf-8');
console.log(`Manager report generated: ${reportPath}`);

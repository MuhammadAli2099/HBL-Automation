module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'features/step_definitions/**/*.ts',
      'features/support/**/*.ts'
    ],
    format: [
      'progress-bar',
      'json:test-results/cucumber-report.json',
      'html:test-results/cucumber-report.html'
    ],
    paths: ['features/**/*.feature'],
    parallel: 1,
    retry: 0
  }
};

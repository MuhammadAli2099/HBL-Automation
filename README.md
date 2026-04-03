# HBL Automation - Cucumber + Playwright

**Cucumber (Gherkin) + Playwright + TypeScript** framework.

## Covered flows

### Login
- Valid maker login and logout
- Invalid login should show error

### Add Account Payee
- Create account payee successfully with valid data
- Fail with invalid account number
- Fail with invalid email
- Fail with blank nickname
- Fail with blank account number

## Project structure

```text
features/
  login.feature
  add-account-payee.feature
  step_definitions/
  support/

pages/
  LoginPage.ts
  PayeePage.ts

utils/
  testData.ts

scripts/
  generate-manager-report.js
```

## Setup

1. Open the folder in VS Code
2. Install dependencies

```bash
npm install
npx playwright install
```

3. Create a `.env` file from `.env.example`
4. Run tests

```bash
npm test
```

## Useful commands

```bash
npm run test:headed
npm run test:login
npm run test:payee
npm run report:cucumber
```

## Notes

- This framework reuses the original locator approach from the repo's page objects.
- Update `.env` with valid HBL environment credentials and test data before execution.

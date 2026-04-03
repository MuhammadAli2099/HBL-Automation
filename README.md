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

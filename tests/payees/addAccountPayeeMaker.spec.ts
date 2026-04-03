import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PayeePage } from '../../pages/PayeePage';
import { testData } from '../../utils/testData';

test.describe('Add Account Payee Validation', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginAndWaitForDashboard(
      testData.validUser.username,
      testData.validUser.password
    );
  });

  test.afterEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.logout().catch(() => {});
  });

  test('Create account payee successfully with valid data', async ({ page }) => {
    test.setTimeout(70000);

    const payeePage = new PayeePage(page);

    await payeePage.createValidPayeeAndVerify(
      testData.payee.validAccountNumber,
      testData.payee.validNickname,
      testData.payee.validEmail
    );
  });

  test('Account payee creation should fail with invalid account number', async ({ page }) => {
    test.setTimeout(70000);

    const payeePage = new PayeePage(page);

    await payeePage.navigateToAddAccountPayee();
    await payeePage.enterPayeeDetails(
      testData.payee.invalidAccountNumber,
      testData.payee.validNickname,
      testData.payee.validEmail
    );
    await payeePage.clickSubmit();
    await payeePage.validateSubmissionBlocked();
  });

  test('Account payee creation should fail with invalid email', async ({ page }) => {
    test.setTimeout(70000);

    const payeePage = new PayeePage(page);

    await payeePage.navigateToAddAccountPayee();
    await payeePage.enterPayeeDetails(
      testData.payee.validAccountNumber,
      testData.payee.validNickname,
      testData.payee.invalidEmail
    );
    await payeePage.clickSubmit();
    await payeePage.validateSubmissionBlocked();
  });

  test('Account payee creation should fail with blank nickname', async ({ page }) => {
    test.setTimeout(70000);

    const payeePage = new PayeePage(page);

    await payeePage.navigateToAddAccountPayee();
    await payeePage.enterPayeeDetails(
      testData.payee.validAccountNumber,
      testData.payee.blankValue,
      testData.payee.validEmail
    );
    await payeePage.clickSubmit();
    await payeePage.validateSubmissionBlocked();
  });

  test('Account payee creation should fail with blank account number', async ({ page }) => {
    test.setTimeout(70000);

    const payeePage = new PayeePage(page);

    await payeePage.navigateToAddAccountPayee();
    await payeePage.enterPayeeDetails(
      testData.payee.blankValue,
      testData.payee.validNickname,
      testData.payee.validEmail
    );
    await payeePage.clickSubmit();
    await payeePage.validateSubmissionBlocked();
  });
});
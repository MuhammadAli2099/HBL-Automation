import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AccountsPage } from '../../pages/AccountsPage';
import { testData } from '../../utils/testData';

test.describe('Accounts Module', () => {
  test('Overview download + Account Details flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const accountsPage = new AccountsPage(page);

    // Login
    await loginPage.goto();
    await loginPage.loginAndWaitForDashboard(
      testData.validUser.username,
      testData.validUser.password
    );

    // Overview flow (with scroll inside method)
    await accountsPage.navigateToOverview();
    await accountsPage.downloadPdf();
    await accountsPage.downloadCsv();

    // Logout
    await loginPage.logout();

    // Login again
    await loginPage.goto();
    await loginPage.loginAndWaitForDashboard(
      testData.validUser.username,
      testData.validUser.password
    );

    // Account Details flow (with scroll inside method)
    await accountsPage.navigateToCurrentAndSavingsAccountDetails();

    // Final logout
    await loginPage.logout();
  });
});
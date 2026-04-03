import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { testData } from '../../utils/testData';

test.describe('Login Validation', () => {
  test('Valid maker login and logout', async ({ page }) => {
    test.setTimeout(60000);

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginAndWaitForDashboard(
      testData.validUser.username,
      testData.validUser.password
    );
    await loginPage.logout();
  });

  test('Invalid login should show error', async ({ page }) => {
    test.setTimeout(40000);

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      testData.invalidUser.username,
      testData.invalidUser.password
    );
    await loginPage.expectLoginFailure();
  });
});
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { BillPaymentHistoryPage } from '../../pages/BillPaymentHistoryPage';
import { testData } from '../../utils/testData';

test.describe('Bill Payment History', () => {
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

  test('Download Bill Payment History in PDF and CSV', async ({ page }) => {
    const billPaymentHistoryPage = new BillPaymentHistoryPage(page);

    await billPaymentHistoryPage.navigateToBillPaymentHistory();

    await billPaymentHistoryPage.downloadPdf();
    await billPaymentHistoryPage.downloadCsv();
  });
});
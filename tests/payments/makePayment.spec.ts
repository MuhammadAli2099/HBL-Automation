import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PaymentPage } from '../../pages/PaymentPage';
import { testData } from '../../utils/testData';

test.describe('Payments Feature', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const paymentPage = new PaymentPage(page);

    await loginPage.goto();
    await loginPage.loginAndWaitForDashboard(
      testData.validUser.username,
      testData.validUser.password
    );

    await paymentPage.navigateToPayments();
  });

  test.afterEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.logout().catch(() => {});
  });

  // Existing working saved-payee flow preserved
  test('Valid payment using Saved Payee', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.makeSavedPayeePayment(
      testData.payment.savedPayeeName,
      testData.payment.validAmount,
      testData.payment.validRemarks
    );

    await paymentPage.validateProceedWorked();
  });

  test('Payment with blank amount', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.clickMakePayment();
    await paymentPage.clickSavedPayee();
    await paymentPage.selectSavedPayee(testData.payment.savedPayeeName);
    await paymentPage.enterAmount('');
    await paymentPage.enterRemarks(testData.payment.validRemarks);
    await paymentPage.clickProceedToPay();

    await paymentPage.validateProceedBlocked();
  });

  test('Payment with blank remarks', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.clickMakePayment();
    await paymentPage.clickSavedPayee();
    await paymentPage.selectSavedPayee(testData.payment.savedPayeeName);
    await paymentPage.enterAmount(testData.payment.validAmount);
    await paymentPage.enterRemarks('');
    await paymentPage.clickProceedToPay();

    await paymentPage.validateProceedBlocked();
  });

  test('Payment with zero amount', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.clickMakePayment();
    await paymentPage.clickSavedPayee();
    await paymentPage.selectSavedPayee(testData.payment.savedPayeeName);
    await paymentPage.enterAmount('0');
    await paymentPage.enterRemarks(testData.payment.validRemarks);
    await paymentPage.clickProceedToPay();

    await paymentPage.validateProceedBlocked();
  });

  test('Payment with invalid amount format', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.clickMakePayment();
    await paymentPage.clickSavedPayee();
    await paymentPage.selectSavedPayee(testData.payment.savedPayeeName);
    await paymentPage.enterAmount('abc');
    await paymentPage.enterRemarks(testData.payment.validRemarks);
    await paymentPage.clickProceedToPay();

    await paymentPage.validateProceedBlocked();
  });

  // New payee flow added without touching saved-payee behavior
  test('Valid payment using New Payee', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.makeNewPayeePayment(
      testData.payment.newPayeeAccount,
      testData.payment.newPayeeNickname,
      testData.payment.newPayeeEmail,
      testData.payment.validAmount,
      testData.payment.validRemarks
    );

    await paymentPage.validateProceedWorked();
  });

  test('New Payee - blank account number', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.clickMakePayment();
    await paymentPage.clickNewPayee();
    await paymentPage.enterNewPayeeDetails(
      '',
      testData.payment.newPayeeNickname,
      testData.payment.newPayeeEmail
    );
    await paymentPage.clickProceedAfterNewPayee();

    await paymentPage.validateProceedBlocked();
  });

  test('New Payee - invalid email format', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

    await paymentPage.clickMakePayment();
    await paymentPage.clickNewPayee();
    await paymentPage.enterNewPayeeDetails(
      testData.payment.newPayeeAccount,
      testData.payment.newPayeeNickname,
      'invalid-email'
    );
    await paymentPage.clickProceedAfterNewPayee();

    await paymentPage.validateProceedBlocked();
  });
});
import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get sideMenuButton(): Locator {
    return this.page.locator('span.oj-ux-ico-menu').first();
  }

  private get paymentsMenuItem(): Locator {
    return this.page.locator(
      `xpath=(
        //*[
          (@role="menuitem" or contains(@class,"oj-navigationlist-item") or self::li or self::a)
          and .//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Payments"]
        ]
      )[1]`
    );
  }

  private get paymentsMenuLabel(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Payments"])[1]`
    );
  }

  private get makePaymentButton(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-button-text") and normalize-space()="Make Payment"])[1]`
    );
  }

  private get savedPayeeIcon(): Locator {
    return this.page.locator('div.oj-avatar-icon.oj-ux-ico-contact-group').first();
  }

  private get savedPayeeTextOption(): Locator {
    return this.page.locator(`xpath=(//*[normalize-space()="Saved Payee"])[1]`);
  }

  private savedPayeeCard(payeeName: string): Locator {
    return this.page.locator(
      `xpath=(//div[contains(@class,"body") and contains(@class,"oj-flex-bar")]
        [.//h4[normalize-space()="${payeeName}"]])[1]`
    );
  }

  private get transferAmountInput(): Locator {
    return this.page.locator('#dd-amount\\|input');
  }

  private get remarksInput(): Locator {
    return this.page.locator('#purposeRemarks\\|input');
  }

  private get proceedToPayButton(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-button-text") and normalize-space()="Proceed to Pay"])[1]`
    );
  }

  private get validationMessage(): Locator {
    return this.page.locator(
      'text=/required|mandatory|invalid|please enter|please provide|cannot be blank|must be greater than 0/i'
    ).first();
  }

  async navigateToPayments(): Promise<void> {
    await expect(this.sideMenuButton).toBeVisible({ timeout: 20000 });
    await this.sideMenuButton.click();
    await this.page.waitForTimeout(2000);

    const menuItemVisible = await this.paymentsMenuItem.isVisible().catch(() => false);

    if (menuItemVisible) {
      await this.paymentsMenuItem.click({ timeout: 10000 });
    } else {
      await expect(this.paymentsMenuLabel).toBeVisible({ timeout: 10000 });
      await this.paymentsMenuLabel.click({ timeout: 10000 });
    }

    await this.page.waitForTimeout(2500);
  }

  async clickMakePayment(): Promise<void> {
    await expect(this.makePaymentButton).toBeVisible({ timeout: 20000 });
    await this.makePaymentButton.click();
    await this.page.waitForTimeout(2000);
  }

  async clickSavedPayee(): Promise<void> {
    const iconVisible = await this.savedPayeeIcon.isVisible().catch(() => false);

    if (iconVisible) {
      await this.savedPayeeIcon.click();
    } else {
      await expect(this.savedPayeeTextOption).toBeVisible({ timeout: 10000 });
      await this.savedPayeeTextOption.click();
    }

    await this.page.waitForTimeout(2500);
  }

  async selectSavedPayee(payeeName: string): Promise<void> {
    const payee = this.savedPayeeCard(payeeName);
    await expect(payee).toBeVisible({ timeout: 20000 });
    await payee.click();
    await this.page.waitForTimeout(2000);
  }

  async enterAmount(amount: string): Promise<void> {
    await expect(this.transferAmountInput).toBeVisible({ timeout: 20000 });
    await this.transferAmountInput.fill('');
    if (amount !== '') {
      await this.transferAmountInput.fill(amount);
    }
  }

  async enterRemarks(remarks: string): Promise<void> {
    await expect(this.remarksInput).toBeVisible({ timeout: 20000 });
    await this.remarksInput.fill('');
    if (remarks !== '') {
      await this.remarksInput.fill(remarks);
    }
  }

  async clickProceedToPay(): Promise<void> {
    await expect(this.proceedToPayButton).toBeVisible({ timeout: 15000 });
    await this.proceedToPayButton.click();
    await this.page.waitForTimeout(2500);
  }

  async validateProceedBlocked(): Promise<void> {
    const validationVisible = await this.validationMessage.isVisible().catch(() => false);

    if (validationVisible) {
      await expect(this.validationMessage).toBeVisible({ timeout: 10000 });
      return;
    }

    await expect(this.proceedToPayButton).toBeVisible({ timeout: 10000 });
  }

  async validateProceedWorked(): Promise<void> {
    await expect(this.proceedToPayButton).not.toBeVisible({ timeout: 10000 });
  }

  async makeSavedPayeePayment(payeeName: string, amount: string, remarks: string): Promise<void> {
    await this.clickMakePayment();
    await this.clickSavedPayee();
    await this.selectSavedPayee(payeeName);
    await this.enterAmount(amount);
    await this.enterRemarks(remarks);
    await this.clickProceedToPay();
  }
}
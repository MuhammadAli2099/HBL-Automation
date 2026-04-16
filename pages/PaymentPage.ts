import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ===== FIXED NAVIGATION =====

  private get sideMenuButton(): Locator {
    return this.page
      .locator('span.oj-ux-ico-menu')
      .locator('xpath=ancestor::*[contains(@class,"oj-button") or @role="button" or self::button][1]');
  }

  private get paymentsMenu(): Locator {
    return this.page
      .locator('span.oj-navigationlist-item-label:visible')
      .filter({ hasText: 'Payments' })
      .locator('xpath=ancestor::*[@role="menuitem" or self::a or self::li][1]')
      .first();
  }

  async navigateToPayments(): Promise<void> {
    await expect(this.sideMenuButton).toBeVisible({ timeout: 15000 });
    await this.sideMenuButton.click();
    await this.page.waitForTimeout(1500);

    await expect(this.paymentsMenu).toBeVisible({ timeout: 15000 });
    await this.paymentsMenu.click();
    await this.page.waitForTimeout(2000);
  }

  // ===== EXISTING WORKING COMMON LOCATORS =====

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

  // ===== EXISTING WORKING SAVED PAYEE FLOW =====

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

  // ===== NEW PAYEE FLOW ONLY =====
  // These methods are isolated so saved-payee flow remains unchanged.

  private get newPayeeIcon(): Locator {
    return this.page.locator('div.oj-avatar-icon.oj-ux-ico-contact-plus:visible').first();
  }

  private get accountNumberInput(): Locator {
    return this.page.locator('input[id*="AccountInput"][id$="|input"]').first();
  }

  private get nickNameInput(): Locator {
    return this.page.locator('input[id*="NickName"][id$="|input"]').first();
  }

  private get emailInput(): Locator {
    return this.page.locator('#default_email\\|input').first();
  }

  private get proceedButtonNewPayee(): Locator {
    return this.page
      .locator('span.oj-button-text:visible')
      .filter({ hasText: /^Proceed$/ })
      .locator('xpath=ancestor::*[contains(@class,"oj-button") or @role="button" or self::button][1]')
      .first();
  }

  async clickNewPayee(): Promise<void> {
    await expect(this.newPayeeIcon).toBeVisible({ timeout: 15000 });
    await this.newPayeeIcon.click();
    await this.page.waitForTimeout(2000);
  }

  private async setNewPayeeFieldValue(locator: Locator, value: string): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 15000 });
    await locator.scrollIntoViewIfNeeded();

    await locator.evaluate((el) => {
      const input = el as HTMLInputElement;
      input.focus();
    });

    await locator.evaluate((el) => {
      const input = el as HTMLInputElement;
      input.value = '';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    if (value) {
      await locator.evaluate((el, v) => {
        const input = el as HTMLInputElement;
        input.focus();
        input.value = v;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.dispatchEvent(new Event('blur', { bubbles: true }));
      }, value);
    }

    const currentValue = await locator.inputValue().catch(() => '');
    if (currentValue !== value) {
      await this.page.screenshot({ path: 'new-payee-field-input-failure.png', fullPage: true });
      throw new Error(`Failed to enter value "${value}" into new payee field.`);
    }
  }

  async enterNewPayeeDetails(account: string, nickname: string, email?: string): Promise<void> {
    await this.setNewPayeeFieldValue(this.accountNumberInput, account);
    await this.setNewPayeeFieldValue(this.nickNameInput, nickname);

    if (email !== undefined) {
      await this.setNewPayeeFieldValue(this.emailInput, email);
    }
  }

  async clickProceedAfterNewPayee(): Promise<void> {
    await expect(this.proceedButtonNewPayee).toBeVisible({ timeout: 15000 });
    await this.proceedButtonNewPayee.click();
    await this.page.waitForTimeout(2500);
  }

  async makeNewPayeePayment(
    account: string,
    nickname: string,
    email: string,
    amount: string,
    remarks: string
  ): Promise<void> {
    await this.clickMakePayment();
    await this.clickNewPayee();
    await this.enterNewPayeeDetails(account, nickname, email);
    await this.clickProceedAfterNewPayee();
    await this.enterAmount(amount);
    await this.enterRemarks(remarks);
    await this.clickProceedToPay();
  }
}
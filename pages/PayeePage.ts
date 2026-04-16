import { Page, Locator, expect } from '@playwright/test';

export class PayeePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

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

  private get moreActionsButton(): Locator {
    return this.page
      .locator('span.oj-button-text:visible')
      .filter({ hasText: 'More Actions' })
      .locator('xpath=ancestor::*[contains(@class,"oj-button") or @role="button" or self::button][1]')
      .first();
  }

  private get payeesOption(): Locator {
    return this.page.locator('a[role="menuitem"]:visible').filter({ hasText: 'Payees' }).first();
  }

  private get addAccountPayeeOption(): Locator {
    return this.page
      .locator('span[data-bind="text:nls[contextChildrenData.label]"]:visible')
      .filter({ hasText: 'Add Account Payee' })
      .first();
  }

  private get accountNumberInput(): Locator {
    return this.page.locator('input[id^="AccountInput"][id$="|input"]:visible').first();
  }

  private get nicknameInput(): Locator {
    return this.page.locator('input[id^="NickName"][id$="|input"]:visible').first();
  }

  private get emailInput(): Locator {
    return this.page.locator('input[id="default_email|input"]:visible').first();
  }

  private get submitButton(): Locator {
    return this.page
      .locator('span.oj-button-text:visible')
      .filter({ hasText: 'Submit' })
      .locator('xpath=ancestor::*[contains(@class,"oj-button") or @role="button" or self::button][1]')
      .first();
  }

  private get reviewPageMarker(): Locator {
    return this.page
      .locator('h2.page-section-heading__text:visible')
      .filter({ hasText: /Account Details|Personal Details|Additional Details/ })
      .first();
  }

  private get reviewConfirmButton(): Locator {
    return this.page.locator('#flow-button-container oj-button.action-button-primary:visible').first();
  }

  private get modalConfirmationText(): Locator {
    return this.page.locator('text=/Do you want to confirm the transaction\\?/i').first();
  }

  private get modalConfirmButton(): Locator {
    return this.page.locator('#yesButton:visible').first();
  }

  private get modalConfirmInnerButton(): Locator {
    return this.page.locator('#yesButton button:visible').first();
  }

  private get successMessage(): Locator {
    return this.page.locator(
      'text=/success|successfully|submitted|completed|request created|transaction submitted|payee added|beneficiary added/i'
    ).first();
  }

  private get referenceNumberLabel(): Locator {
    return this.page.locator('text=/reference number|reference no|ref no|ref#/i').first();
  }

  private get validationMessage(): Locator {
    return this.page.locator(
      'text=/required|mandatory|invalid|please enter|please provide|enter valid/i'
    ).first();
  }

  async navigateToAddAccountPayee() {
    await expect(this.sideMenuButton).toBeVisible({ timeout: 15000 });
    await this.sideMenuButton.click();
    await this.page.waitForTimeout(1500);

    await expect(this.paymentsMenu).toBeVisible({ timeout: 15000 });
    await this.paymentsMenu.click();
    await this.page.waitForTimeout(2000);

    await expect(this.moreActionsButton).toBeVisible({ timeout: 15000 });
    await this.moreActionsButton.click();
    await this.page.waitForTimeout(1200);

    await expect(this.payeesOption).toBeVisible({ timeout: 10000 });
    await this.payeesOption.hover();
    await this.page.waitForTimeout(1200);

    await expect(this.addAccountPayeeOption).toBeVisible({ timeout: 10000 });
    await this.addAccountPayeeOption.click();
    await this.page.waitForTimeout(2000);
  }

  async enterPayeeDetails(accountNumber: string, nickname: string, email: string) {
    await expect(this.accountNumberInput).toBeVisible({ timeout: 15000 });
    await this.accountNumberInput.fill(accountNumber);

    await expect(this.nicknameInput).toBeVisible({ timeout: 15000 });
    await this.nicknameInput.fill(nickname);

    await expect(this.emailInput).toBeVisible({ timeout: 15000 });
    await this.emailInput.fill(email);
  }

  async clickSubmit() {
    await expect(this.submitButton).toBeVisible({ timeout: 10000 });
    await this.submitButton.click();
    await this.page.waitForTimeout(1500);
  }

  async validateReviewPageLoaded() {
    await expect(this.reviewPageMarker).toBeVisible({ timeout: 10000 });
    await expect(this.reviewConfirmButton).toBeVisible({ timeout: 10000 });
  }

  async clickReviewConfirm() {
    await expect(this.reviewConfirmButton).toBeVisible({ timeout: 10000 });

    await this.reviewConfirmButton.scrollIntoViewIfNeeded();

    try {
      await this.reviewConfirmButton.click({ timeout: 5000 });
    } catch {
      await this.reviewConfirmButton.click({ force: true });
    }

    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
    await this.page.waitForTimeout(2500);
  }

  async confirmTransactionModalIfPresent() {
    const modalVisible = await this.modalConfirmationText.isVisible({ timeout: 5000 }).catch(() => false);

    if (!modalVisible) {
      return;
    }

    if (await this.modalConfirmInnerButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      try {
        await this.modalConfirmInnerButton.click({ timeout: 5000 });
      } catch {
        await this.modalConfirmInnerButton.click({ force: true, timeout: 5000 });
      }
      return;
    }

    if (await this.modalConfirmButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      try {
        await this.modalConfirmButton.click({ timeout: 5000 });
      } catch {
        await this.modalConfirmButton.click({ force: true, timeout: 5000 });
      }
    }
  }

  async validateSuccessfulSubmission() {
    const successCandidates = [
      this.successMessage,
      this.referenceNumberLabel,
      this.page.locator('text=/pending approval|submitted for approval|awaiting approval/i').first(),
      this.page.locator('text=/request submitted|transaction submitted/i').first(),
      this.page.locator('text=/payee and biller|workflow transactions|dashboard/i').first()
    ];

    for (const locator of successCandidates) {
      try {
        await expect(locator).toBeVisible({ timeout: 12000 });
        return;
      } catch {
        // try next locator
      }
    }

    try {
      await expect(this.reviewConfirmButton).not.toBeVisible({ timeout: 5000 });
      return;
    } catch {
      // continue to failure
    }

    await this.page.screenshot({ path: 'payee-success-validation-failed.png', fullPage: true });
    throw new Error('Payee creation success state not detected.');
  }

  async validateSubmissionBlocked() {
    try {
      await expect(this.validationMessage).toBeVisible({ timeout: 8000 });
      return;
    } catch {
      // fallback below
    }

    await expect(this.referenceNumberLabel).not.toBeVisible({ timeout: 3000 });
  }

  async createValidPayeeAndVerify(accountNumber: string, nickname: string, email: string) {
    if (!nickname.trim()) {
      throw new Error('Valid payee creation received blank nickname. Please check the valid test data.');
    }

    await this.navigateToAddAccountPayee();
    await this.enterPayeeDetails(accountNumber, nickname, email);
    await this.clickSubmit();
    await this.validateReviewPageLoaded();
    await this.clickReviewConfirm();
    await this.confirmTransactionModalIfPresent();
    await this.validateSuccessfulSubmission();
  }
}
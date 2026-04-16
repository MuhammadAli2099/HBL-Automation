import { Page, Locator, expect } from '@playwright/test';

export class BillPaymentHistoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get sideMenuButton(): Locator {
    return this.page
      .locator('span.oj-ux-ico-menu')
      .locator('xpath=ancestor::*[contains(@class,"oj-button") or @role="button" or self::button][1]');
  }

  private get billPaymentsMenu(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Bill Payments"])[1]`
    );
  }

  private get billPaymentHistoryMenu(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Bill Payment History"])[1]`
    );
  }

  // Main page download dropdown
  private get historyDownloadButton(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-button-text") and normalize-space()="Download"])[1]`
    );
  }

  private get pdfOption(): Locator {
    return this.page.locator(
      `xpath=(//a[@role="menuitem"]//span[normalize-space()="PDF"])[1]`
    );
  }

  private get csvOption(): Locator {
    return this.page.locator(
      `xpath=(//a[@role="menuitem"]//span[normalize-space()="CSV"])[1]`
    );
  }

  // Drawer opened after choosing PDF/CSV
  private get selectColumnsDrawer(): Locator {
    return this.page.getByRole('dialog', { name: /Right Drawer/i });
  }

  private get finalDownloadButton(): Locator {
    return this.page.locator('button').filter({ hasText: /^Download$/ }).last();
  }

  // Password popup after file generation
  private get passwordCombinationModal(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: 'Password Combination' });
  }

  private get passwordCombinationCloseButton(): Locator {
    return this.passwordCombinationModal.locator('button').filter({ hasText: /close/i }).first();
  }

  async navigateToBillPaymentHistory(): Promise<void> {
    await expect(this.sideMenuButton).toBeVisible({ timeout: 15000 });
    await this.sideMenuButton.click();
    await this.page.waitForTimeout(1500);

    await expect(this.billPaymentsMenu).toBeVisible({ timeout: 15000 });
    await this.billPaymentsMenu.click();
    await this.page.waitForTimeout(1500);

    await expect(this.billPaymentHistoryMenu).toBeVisible({ timeout: 15000 });
    await this.billPaymentHistoryMenu.click();
    await this.page.waitForTimeout(2000);
  }

  async closeDownloadPopupIfPresent(): Promise<void> {
    const modalVisible = await this.passwordCombinationModal.isVisible().catch(() => false);

    if (!modalVisible) {
      return;
    }

    await expect(this.passwordCombinationCloseButton).toBeVisible({ timeout: 5000 });

    try {
      await this.passwordCombinationCloseButton.click({ timeout: 3000 });
    } catch {
      await this.passwordCombinationCloseButton.click({ force: true });
    }

    await expect(this.passwordCombinationModal).not.toBeVisible({ timeout: 10000 });
    await this.page.waitForTimeout(800);
  }

  async openDownloadMenu(): Promise<void> {
    // Important: close blocking popup before clicking anything underneath it
    await this.closeDownloadPopupIfPresent();

    await expect(this.historyDownloadButton).toBeVisible({ timeout: 10000 });

    try {
      await this.historyDownloadButton.click({ timeout: 5000 });
    } catch {
      await this.historyDownloadButton.click({ force: true });
    }

    await this.page.waitForTimeout(1000);
  }

  async choosePdf(): Promise<void> {
    await this.openDownloadMenu();
    await expect(this.pdfOption).toBeVisible({ timeout: 10000 });
    await this.pdfOption.click();
    await this.page.waitForTimeout(1500);
  }

  async chooseCsv(): Promise<void> {
    await this.openDownloadMenu();
    await expect(this.csvOption).toBeVisible({ timeout: 10000 });
    await this.csvOption.click();
    await this.page.waitForTimeout(1500);
  }

  async clickFinalDownloadAndCapture(): Promise<void> {
    await expect(this.selectColumnsDrawer).toBeVisible({ timeout: 10000 });
    await expect(this.finalDownloadButton).toBeVisible({ timeout: 10000 });
    await this.finalDownloadButton.scrollIntoViewIfNeeded();

    const [response] = await Promise.all([
      this.page.waitForResponse(
        (resp) =>
          resp.status() === 200 &&
          (
            resp.url().toLowerCase().includes('download') ||
            resp.url().toLowerCase().includes('export') ||
            resp.url().toLowerCase().includes('report') ||
            resp.headers()['content-disposition'] !== undefined ||
            resp.headers()['content-type']?.toLowerCase().includes('pdf') ||
            resp.headers()['content-type']?.toLowerCase().includes('csv') ||
            resp.headers()['content-type']?.toLowerCase().includes('octet-stream')
          ),
        { timeout: 20000 }
      ),
      this.finalDownloadButton.click({ force: true })
    ]);

    expect(response.ok()).toBeTruthy();
    await this.page.waitForTimeout(1200);
  }

  async downloadPdf(): Promise<void> {
    await this.choosePdf();
    await this.clickFinalDownloadAndCapture();
    await this.closeDownloadPopupIfPresent();
  }

  async downloadCsv(): Promise<void> {
    await this.chooseCsv();
    await this.clickFinalDownloadAndCapture();
    await this.closeDownloadPopupIfPresent();
  }
}
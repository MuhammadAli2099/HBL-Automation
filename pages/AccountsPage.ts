import { Page, Locator, expect } from '@playwright/test';

export class AccountsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get sideMenuButton(): Locator {
    return this.page
      .locator('span.oj-ux-ico-menu')
      .locator('xpath=ancestor::*[contains(@class,"oj-button") or @role="button" or self::button][1]');
  }

  private get accountsMenu(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Accounts"])[1]`
    );
  }

  private get currentAndSavingsMenu(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Current & Savings"])[1]`
    );
  }

  private get overviewMenu(): Locator {
    return this.page.locator(
      `xpath=(//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Overview"])[1]`
    );
  }

  private get currentAndSavingsAccountDetailsMenu(): Locator {
    return this.page.locator(
      `xpath=(//a[@role="menuitem"]//span[contains(@class,"oj-navigationlist-item-label") and normalize-space()="Current & Savings Account Details"])[1]`
    );
  }

  private get mainDownloadButton(): Locator {
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

  private get sideDrawer(): Locator {
    return this.page.getByRole('dialog', { name: /Right Drawer/i });
  }

  private get finalDownloadButton(): Locator {
    return this.page.locator('button').filter({ hasText: /^Download$/ }).last();
  }

  private get passwordCombinationModal(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: 'Password Combination' });
  }

  private get passwordCombinationCloseButton(): Locator {
    return this.passwordCombinationModal.locator('button').filter({ hasText: /close/i }).first();
  }

  // ================= NAVIGATION =================

  async navigateToOverview(): Promise<void> {
    await expect(this.sideMenuButton).toBeVisible({ timeout: 15000 });
    await this.sideMenuButton.click();
    await this.page.waitForTimeout(1500);

    await expect(this.accountsMenu).toBeVisible({ timeout: 15000 });
    await this.accountsMenu.click();
    await this.page.waitForTimeout(1500);

    await expect(this.currentAndSavingsMenu).toBeVisible({ timeout: 15000 });
    await this.currentAndSavingsMenu.click();
    await this.page.waitForTimeout(1500);

    await expect(this.overviewMenu).toBeVisible({ timeout: 15000 });
    await this.overviewMenu.click();
    await this.page.waitForTimeout(2000);

    // ✅ Scroll after landing
    await this.scrollDownPage();
  }

  async navigateToCurrentAndSavingsAccountDetails(): Promise<void> {
    await expect(this.sideMenuButton).toBeVisible({ timeout: 15000 });
    await this.sideMenuButton.click();
    await this.page.waitForTimeout(1500);

    await expect(this.accountsMenu).toBeVisible({ timeout: 15000 });
    await this.accountsMenu.click();
    await this.page.waitForTimeout(1500);

    await expect(this.currentAndSavingsMenu).toBeVisible({ timeout: 15000 });
    await this.currentAndSavingsMenu.click();
    await this.page.waitForTimeout(1500);

    await expect(this.currentAndSavingsAccountDetailsMenu).toBeVisible({ timeout: 15000 });
    await this.currentAndSavingsAccountDetailsMenu.click();
    await this.page.waitForTimeout(2000);

    // ✅ Scroll after landing
    await this.scrollDownPage();
  }

  // ================= DOWNLOAD FLOW =================

  async closeDownloadPopupIfPresent(): Promise<void> {
    const visible = await this.passwordCombinationModal.isVisible().catch(() => false);
    if (!visible) return;

    await expect(this.passwordCombinationCloseButton).toBeVisible({ timeout: 5000 });

    try {
      await this.passwordCombinationCloseButton.click();
    } catch {
      await this.passwordCombinationCloseButton.click({ force: true });
    }

    await expect(this.passwordCombinationModal).not.toBeVisible({ timeout: 10000 });
    await this.page.waitForTimeout(800);
  }

  async openDownloadMenu(): Promise<void> {
    await this.closeDownloadPopupIfPresent();

    await expect(this.mainDownloadButton).toBeVisible({ timeout: 10000 });

    try {
      await this.mainDownloadButton.click();
    } catch {
      await this.mainDownloadButton.click({ force: true });
    }

    await this.page.waitForTimeout(1000);
  }

  async choosePdf(): Promise<void> {
    await this.openDownloadMenu();
    await expect(this.pdfOption).toBeVisible();
    await this.pdfOption.click();
    await this.page.waitForTimeout(1500);
  }

  async chooseCsv(): Promise<void> {
    await this.openDownloadMenu();
    await expect(this.csvOption).toBeVisible();
    await this.csvOption.click();
    await this.page.waitForTimeout(1500);
  }

  async clickFinalDownload(): Promise<void> {
    await expect(this.sideDrawer).toBeVisible({ timeout: 10000 });
    await expect(this.finalDownloadButton).toBeVisible();

    const [response] = await Promise.all([
      this.page.waitForResponse(res => res.status() === 200, { timeout: 20000 }),
      this.finalDownloadButton.click({ force: true })
    ]);

    expect(response.ok()).toBeTruthy();
    await this.page.waitForTimeout(1200);
  }

  async downloadPdf(): Promise<void> {
    await this.choosePdf();
    await this.clickFinalDownload();
    await this.closeDownloadPopupIfPresent();
  }

  async downloadCsv(): Promise<void> {
    await this.chooseCsv();
    await this.clickFinalDownload();
    await this.closeDownloadPopupIfPresent();
  }

  // ================= SCROLL =================

  async scrollDownPage(): Promise<void> {
    await this.page.mouse.wheel(0, 1500);
    await this.page.waitForTimeout(800);
    await this.page.mouse.wheel(0, 1500);
    await this.page.waitForTimeout(800);
  }
}
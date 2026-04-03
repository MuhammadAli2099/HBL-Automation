import { Page, Locator, FrameLocator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;
  readonly appFrame: FrameLocator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator(
      'input[name="username"], input[id*="user"], input[placeholder*="User"], input[type="text"]'
    ).first();

    this.passwordInput = page.locator(
      'input[name="password"], input[type="password"], input[id*="pass"], input[placeholder*="Password"]'
    ).first();

    this.loginButton = page
      .locator('span[data-bind="text:nls.loginForm.labels.login"]')
      .locator('xpath=ancestor::*[contains(@class,"oj-button") or @role="button" or self::button][1]');

    this.loginErrorMessage = page.locator(
      'text=/invalid|incorrect|failed|error|unable|unsuccessful/i'
    ).first();

    this.appFrame = page.frameLocator('iframe');
  }

  async goto() {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
      throw new Error('BASE_URL is missing. Please set it in your .env file.');
    }

    await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await this.waitForLoginForm();
  }

  async waitForLoginForm() {
    await expect(this.usernameInput).toBeVisible({ timeout: 20000 });
    await expect(this.passwordInput).toBeVisible({ timeout: 20000 });
  }

  async login(username: string, password: string) {
    if (!username || !password) {
      throw new Error('Login credentials are missing. Please set them in your .env file.');
    }

    await this.waitForLoginForm();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await expect(this.loginButton).toBeVisible({ timeout: 15000 });

    try {
      await this.loginButton.click({ timeout: 10000 });
    } catch {
      await this.loginButton.click({ force: true });
    }

    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
    await this.page.waitForTimeout(2500);
  }

  async loginAndWaitForDashboard(username: string, password: string) {
    await this.login(username, password);
    await this.waitForDashboard();
  }

  async waitForDashboard() {
    const dashboardCandidates: Locator[] = [
      this.page.locator('#obdx-component-dashboard-container'),
      this.page.locator('[id*="dashboard"]'),
      this.page.locator('[class*="dashboard"]'),
      this.page.getByText(/dashboard/i).first(),
      this.page.locator('text=/welcome|last login|accounts|summary/i').first(),
      this.appFrame.locator('[id*="dashboard"]').first(),
    ];

    for (const locator of dashboardCandidates) {
      try {
        await locator.waitFor({ state: 'visible', timeout: 6000 });
        return;
      } catch {
        // try next
      }
    }

    await this.page.screenshot({ path: 'dashboard-not-found.png', fullPage: true });
    throw new Error('Dashboard did not become visible after login.');
  }

  async expectLoginFailure() {
    await expect(this.loginErrorMessage).toBeVisible({ timeout: 10000 });
  }

  async logout() {
    const menuCandidates: Locator[] = [
      this.page.locator('oj-button[title*="User"], oj-button[title*="Profile"]').first(),
      this.page.locator('button[aria-label*="user" i], button[aria-label*="profile" i]').first(),
      this.page.locator('[title*="User" i], [title*="Profile" i]').first(),
      this.page.locator('[aria-label*="user" i], [aria-label*="profile" i]').first(),
      this.page.locator('.oj-avatar, [class*="avatar"], [class*="profile"], [class*="user"]').first(),
    ];

    for (const locator of menuCandidates) {
      try {
        if (await locator.isVisible({ timeout: 3000 })) {
          await locator.click({ timeout: 5000 });
          break;
        }
      } catch {
        // try next
      }
    }

    await this.page.waitForTimeout(1200);

    const logoutCandidates: Locator[] = [
      this.page.getByText(/^logout$/i),
      this.page.getByText(/sign out/i),
      this.page.locator('a:has-text("Logout"), button:has-text("Logout"), span:has-text("Logout")').first(),
      this.page.locator('[id*="logout" i], [class*="logout" i]').first(),
    ];

    for (const locator of logoutCandidates) {
      try {
        if (await locator.isVisible({ timeout: 3000 })) {
          await locator.click({ timeout: 5000 });
          await this.page.waitForTimeout(2500);
          return;
        }
      } catch {
        // try next
      }
    }

    await this.page.screenshot({ path: 'logout-failure.png', fullPage: true });
    throw new Error('Logout option was not found or not clickable.');
  }
}
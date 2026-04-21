import { Page, Locator, expect } from '@playwright/test';

export class LodgeClaimPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get skipToMainContent(): Locator {
    return this.page.getByRole('link', { name: /Skip to main content/i }).first();
  }

  get toggleMenu(): Locator {
    return this.page.getByLabel(/Toggle Menu/i).first();
  }

  get openMenu(): Locator {
    return this.page.getByRole('button', { name: /Open Menu/i }).first();
  }

  get link3(): Locator {
    return this.page.locator('a').nth(3);
  }

  get searchinputcontainerHeadersearch(): Locator {
    return this.page.locator('#searchInputContainer_headerSearch').first();
  }

  get presentation5(): Locator {
    return this.page.locator('span').nth(5);
  }

  get searchTransaction(): Locator {
    return this.page.getByRole('combobox', { name: /Search Transaction/i }).first();
  }

  get searchTransaction2(): Locator {
    return this.page.getByRole('textbox', { name: /Search Transaction/i }).first();
  }

  get field9(): Locator {
    return this.page.getByLabel(/99\+/i).first();
  }

  get field10(): Locator {
    return this.page.getByRole('button', { name: /99\+/i }).first();
  }

  get cm(): Locator {
    return this.page.getByRole('button', { name: /CM/i }).first();
  }

  get corpmaker2(): Locator {
    return this.page.getByRole('img', { name: /corpmaker2/i }).first();
  }

  get referenceNumber21047cb53019(): Locator {
    return this.page.getByLabel(/Reference Number
21047CB53019/i).first();
  }

  get referenceNumber21047cb530192(): Locator {
    return this.page.getByRole('presentation', { name: /Reference Number
21047CB53019/i }).first();
  }

  get referenceNumber(): Locator {
    return this.page.getByRole('textbox', { name: /Reference Number/i }).first();
  }

  get statusPendingForApproval(): Locator {
    return this.page.getByLabel(/Status
Pending for Approval/i).first();
  }

  get statusPendingForApproval2(): Locator {
    return this.page.getByRole('presentation', { name: /Status
Pending for Approval/i }).first();
  }

  get status(): Locator {
    return this.page.getByRole('textbox', { name: /Status/i }).first();
  }

  get home(): Locator {
    return this.page.getByRole('link', { name: /Home/i }).first();
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

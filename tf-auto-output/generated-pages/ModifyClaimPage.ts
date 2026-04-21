import { Page, Locator, expect } from '@playwright/test';

export class ModifyClaimPage {
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

  get back(): Locator {
    return this.page.getByLabel(/Back/i).first();
  }

  get back2(): Locator {
    return this.page.getByRole('button', { name: /Back/i }).first();
  }

  get modifyClaimScreen(): Locator {
    return this.page.getByRole('tablist', { name: /Modify Claim Screen/i }).first();
  }

  get claimResponseAttachments(): Locator {
    return this.page.getByRole('presentation', { name: /Claim Response
Attachments/i }).first();
  }

  get claimResponseAttachments2(): Locator {
    return this.page.getByRole('presentation', { name: /Claim Response
Attachments/i }).first();
  }

  get claimResponseAttachments3(): Locator {
    return this.page.getByRole('presentation', { name: /Claim Response
Attachments/i }).first();
  }

  get claimResponse(): Locator {
    return this.page.getByRole('presentation', { name: /Claim Response/i }).first();
  }

  get clickHereForClaimResponse(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Claim Response/i }).first();
  }

  get attachments(): Locator {
    return this.page.getByRole('presentation', { name: /Attachments/i }).first();
  }

  get clickHereForAttachments(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Attachments/i }).first();
  }

  get nlsPleaseselect(): Locator {
    return this.page.getByLabel(/\[\[nls\.pleaseSelect\]\]/i).first();
  }

  get claimResponsePleaseSelect(): Locator {
    return this.page.getByRole('presentation', { name: /Claim Response
Please Select/i }).first();
  }

  get claimResponse2(): Locator {
    return this.page.getByRole('combobox', { name: /Claim Response/i }).first();
  }

  get presentation25(): Locator {
    return this.page.locator('a').nth(25);
  }

  get instruction(): Locator {
    return this.page.getByLabel(/Instruction/i).first();
  }

  get instruction2(): Locator {
    return this.page.getByRole('presentation', { name: /Instruction/i }).first();
  }

  get instruction3(): Locator {
    return this.page.getByRole('textbox', { name: /Instruction/i }).first();
  }

  get next(): Locator {
    return this.page.getByLabel(/Next/i).first();
  }

  get next2(): Locator {
    return this.page.getByRole('button', { name: /Next/i }).first();
  }

  get cancel(): Locator {
    return this.page.getByLabel(/Cancel/i).first();
  }

  get cancel2(): Locator {
    return this.page.getByRole('button', { name: /Cancel/i }).first();
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

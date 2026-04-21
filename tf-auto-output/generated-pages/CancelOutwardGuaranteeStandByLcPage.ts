import { Page, Locator, expect } from '@playwright/test';

export class CancelOutwardGuaranteeStandByLcPage {
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

  get initiateScreens(): Locator {
    return this.page.getByRole('tablist', { name: /Initiate Screens/i }).first();
  }

  get outwardGuaranteeDetailsAttachments(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details
Attachments/i }).first();
  }

  get outwardGuaranteeDetailsAttachments2(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details
Attachments/i }).first();
  }

  get outwardGuaranteeDetailsAttachments3(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details
Attachments/i }).first();
  }

  get outwardGuaranteeDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details/i }).first();
  }

  get clickHereForOutwardGuaranteeDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Outward Guarantee Details/i }).first();
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

  get lookupGuaranteeReferenceNoPleaseSelect(): Locator {
    return this.page.getByRole('presentation', { name: /Lookup Guarantee Reference No
Please Select/i }).first();
  }

  get lookupGuaranteeReferenceNo(): Locator {
    return this.page.getByRole('combobox', { name: /Lookup Guarantee Reference No/i }).first();
  }

  get presentation25(): Locator {
    return this.page.locator('a').nth(25);
  }

  get verify(): Locator {
    return this.page.getByLabel(/Verify/i).first();
  }

  get verify2(): Locator {
    return this.page.getByRole('button', { name: /Verify/i }).first();
  }

  get advancedLookup(): Locator {
    return this.page.getByRole('link', { name: /Advanced Lookup/i }).first();
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

import { Page, Locator, expect } from '@playwright/test';

export class HblPage {
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

  get viewClaimsScreens(): Locator {
    return this.page.getByRole('tablist', { name: /View Claims Screens/i }).first();
  }

  get viewClaimDetailsAttachedDocumentsChargesAndTaxesSwiftMessages(): Locator {
    return this.page.getByRole('presentation', { name: /View Claim Details
Attached Documents
Charges and Taxes
SWIFT Messages/i }).first();
  }

  get viewClaimDetailsAttachedDocumentsChargesAndTaxesSwiftMessages2(): Locator {
    return this.page.getByRole('presentation', { name: /View Claim Details
Attached Documents
Charges and Taxes
SWIFT Messages/i }).first();
  }

  get viewClaimDetailsAttachedDocumentsChargesAndTaxesSwiftMessages3(): Locator {
    return this.page.getByRole('presentation', { name: /View Claim Details
Attached Documents
Charges and Taxes
SWIFT Messages/i }).first();
  }

  get viewClaimDetails(): Locator {
    return this.page.getByRole('presentation', { name: /View Claim Details/i }).first();
  }

  get clickHereForViewClaimDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for View Claim Details/i }).first();
  }

  get attachedDocuments(): Locator {
    return this.page.getByRole('presentation', { name: /Attached Documents/i }).first();
  }

  get clickHereForAttachedDocuments(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Attached Documents/i }).first();
  }

  get chargesAndTaxes(): Locator {
    return this.page.getByRole('presentation', { name: /Charges and Taxes/i }).first();
  }

  get clickHereForChargesAndTaxes(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Charges and Taxes/i }).first();
  }

  get swiftMessages(): Locator {
    return this.page.getByRole('presentation', { name: /SWIFT Messages/i }).first();
  }

  get clickHereForSwiftMessages(): Locator {
    return this.page.getByRole('tab', { name: /Click here for SWIFT Messages/i }).first();
  }

  get back3(): Locator {
    return this.page.getByLabel(/Back/i).first();
  }

  get back4(): Locator {
    return this.page.getByRole('button', { name: /Back/i }).first();
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

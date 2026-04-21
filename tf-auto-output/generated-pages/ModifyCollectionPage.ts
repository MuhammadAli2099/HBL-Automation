import { Page, Locator, expect } from '@playwright/test';

export class ModifyCollectionPage {
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

  get viewCollectionDetails(): Locator {
    return this.page.getByLabel(/View Collection Details/i).first();
  }

  get viewCollectionDetails2(): Locator {
    return this.page.getByRole('button', { name: /View Collection Details/i }).first();
  }

  get initiateScreens(): Locator {
    return this.page.getByRole('tablist', { name: /Initiate Screens/i }).first();
  }

  get discountForexDealsAttachments(): Locator {
    return this.page.getByRole('presentation', { name: /Discount
Forex Deals
Attachments/i }).first();
  }

  get discountForexDealsAttachments2(): Locator {
    return this.page.getByRole('presentation', { name: /Discount
Forex Deals
Attachments/i }).first();
  }

  get discountForexDealsAttachments3(): Locator {
    return this.page.getByRole('presentation', { name: /Discount
Forex Deals
Attachments/i }).first();
  }

  get discount(): Locator {
    return this.page.getByRole('presentation', { name: /Discount/i }).first();
  }

  get clickHereForDiscount(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Discount/i }).first();
  }

  get forexDeals(): Locator {
    return this.page.getByRole('presentation', { name: /Forex Deals/i }).first();
  }

  get clickHereForForexDeals(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Forex Deals/i }).first();
  }

  get attachments(): Locator {
    return this.page.getByRole('presentation', { name: /Attachments/i }).first();
  }

  get clickHereForAttachments(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Attachments/i }).first();
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

import { Page, Locator, expect } from '@playwright/test';

export class InitiateCollectionPage {
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

  get collectionOptions(): Locator {
    return this.page.getByRole('tablist', { name: /Collection options/i }).first();
  }

  get templatesDrafts(): Locator {
    return this.page.getByRole('presentation', { name: /Templates
Drafts/i }).first();
  }

  get templatesDrafts2(): Locator {
    return this.page.getByRole('presentation', { name: /Templates
Drafts/i }).first();
  }

  get templatesDrafts3(): Locator {
    return this.page.getByRole('presentation', { name: /Templates
Drafts/i }).first();
  }

  get templates(): Locator {
    return this.page.getByRole('presentation', { name: /Templates/i }).first();
  }

  get clickHereForTemplates(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Templates/i }).first();
  }

  get drafts(): Locator {
    return this.page.getByRole('presentation', { name: /Drafts/i }).first();
  }

  get clickHereForDrafts(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Drafts/i }).first();
  }

  get initiateCollection(): Locator {
    return this.page.getByLabel(/Initiate Collection/i).first();
  }

  get initiateCollection2(): Locator {
    return this.page.getByRole('button', { name: /Initiate Collection/i }).first();
  }

  get searchinputcontainerFwksearchbox(): Locator {
    return this.page.locator('#searchInputContainer_fwkSearchBox').first();
  }

  get presentation25(): Locator {
    return this.page.locator('span').nth(25);
  }

  get search(): Locator {
    return this.page.getByRole('textbox', { name: /Search\.\.\./i }).first();
  }

  get thumbviewListview(): Locator {
    return this.page.getByRole('toolbar', { name: /thumbView
listView/i }).first();
  }

  get thumbview(): Locator {
    return this.page.getByRole('radio', { name: /thumbView/i }).first();
  }

  get listview(): Locator {
    return this.page.getByRole('radio', { name: /listView/i }).first();
  }

  get templateListView(): Locator {
    return this.page.getByRole('grid', { name: /Template List View/i }).first();
  }

  get farhanTemplateTestPublicUpdatedOn2112026PublicDraweeNameProductShehzadUlHassanEscpCreatedByDe174cf3d19412d38d7da69914b36424FarhanTemplatePrivateUpdatedOn2112026PrivateDraweeNameProductShehzadUlHassanEscpCreatedByDe174cf3d19412d38d7da69914b36424(): Locator {
    return this.page.getByRole('presentation', { name: /Farhan template test public
Updated on : 2/11/2026
Public
Drawee Name
Product
Shehzad ul hassan
ESCP
Created By
De174cf3d19412d38d7da69914b36424
Farhan template private
Updated on : 2/11/2026
Private
Drawee Name
Product
Shehzad ul hassan
ESCP
Created By
De174cf3d19412d38d7da69914b36424/i }).first();
  }

  get farhanTemplateTestPublicUpdatedOn2112026PublicDraweeNameProductShehzadUlHassanEscpCreatedByDe174cf3d19412d38d7da69914b36424FarhanTemplatePrivateUpdatedOn2112026PrivateDraweeNameProductShehzadUlHassanEscpCreatedByDe174cf3d19412d38d7da69914b364242(): Locator {
    return this.page.getByRole('row', { name: /Farhan template test public
Updated on : 2/11/2026
Public
Drawee Name
Product
Shehzad ul hassan
ESCP
Created By
De174cf3d19412d38d7da69914b36424
Farhan template private
Updated on : 2/11/2026
Private
Drawee Name
Product
Shehzad ul hassan
ESCP
Created By
De174cf3d19412d38d7da69914b36424/i }).first();
  }

  get farhanTemplateTestPublicUpdatedOn2112026PublicDraweeNameProductShehzadUlHassanEscpCreatedByDe174cf3d19412d38d7da69914b36424(): Locator {
    return this.page.getByRole('gridcell', { name: /Farhan template test public
Updated on : 2/11/2026
Public
Drawee Name
Product
Shehzad ul hassan
ESCP
Created By
De174cf3d19412d38d7da69914b36424/i }).first();
  }

  get farhanTemplatePrivateUpdatedOn2112026PrivateDraweeNameProductShehzadUlHassanEscpCreatedByDe174cf3d19412d38d7da69914b36424(): Locator {
    return this.page.getByRole('gridcell', { name: /Farhan template private
Updated on : 2/11/2026
Private
Drawee Name
Product
Shehzad ul hassan
ESCP
Created By
De174cf3d19412d38d7da69914b36424/i }).first();
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

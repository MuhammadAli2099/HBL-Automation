import { Page, Locator, expect } from '@playwright/test';

export class InitiateFinanceRequestPage {
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

  get stages(): Locator {
    return this.page.getByRole('tablist', { name: /Stages/i }).first();
  }

  get generalDetailsApplicantAndFinancingDetailsAmountAndAdditionalDetailsAttachments(): Locator {
    return this.page.getByRole('presentation', { name: /General Details
Applicant and Financing Details
Amount and Additional Details
Attachments/i }).first();
  }

  get generalDetailsApplicantAndFinancingDetailsAmountAndAdditionalDetailsAttachments2(): Locator {
    return this.page.getByRole('presentation', { name: /General Details
Applicant and Financing Details
Amount and Additional Details
Attachments/i }).first();
  }

  get generalDetailsApplicantAndFinancingDetailsAmountAndAdditionalDetailsAttachments3(): Locator {
    return this.page.getByRole('presentation', { name: /General Details
Applicant and Financing Details
Amount and Additional Details
Attachments/i }).first();
  }

  get generalDetails(): Locator {
    return this.page.getByRole('presentation', { name: /General Details/i }).first();
  }

  get clickHereForGeneralDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for General Details/i }).first();
  }

  get applicantAndFinancingDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Applicant and Financing Details/i }).first();
  }

  get clickHereForApplicantAndFinancingDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Applicant and Financing Details/i }).first();
  }

  get amountAndAdditionalDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Amount and Additional Details/i }).first();
  }

  get clickHereForAmountAndAdditionalDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Amount and Additional Details/i }).first();
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

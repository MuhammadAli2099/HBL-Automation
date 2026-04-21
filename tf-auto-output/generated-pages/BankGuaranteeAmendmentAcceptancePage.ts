import { Page, Locator, expect } from '@playwright/test';

export class BankGuaranteeAmendmentAcceptancePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get uiId359Overlay(): Locator {
    return this.page.locator('#ui-id-359_overlay').first();
  }

  get rightDrawer(): Locator {
    return this.page.getByRole('dialog', { name: /Right Drawer/i }).first();
  }

  get clickToDismissOverlay(): Locator {
    return this.page.getByLabel(/Click to dismiss overlay/i).first();
  }

  get clickToDismissOverlay2(): Locator {
    return this.page.getByRole('button', { name: /Click to dismiss overlay/i }).first();
  }

  get referenceNumberHostReferenceNumberGuaranteeNumberApplicantNameProductStatusFailureReason2104fd129b43Pk2guad223640014DigitalTelecomInwardBankGuaranteePendingForApprovalSelectRow(): Locator {
    return this.page.getByRole('application', { name: /Reference Number
	
Host Reference Number
	
Guarantee Number
	
Applicant Name
	
Product
	
Status
	
Failure Reason

2104FD129B43		PK2GUAD223640014	DIGITAL TELECOM	Inward Bank Guarantee	Pending for Approval	
Select Row/i }).first();
  }

  get status5(): Locator {
    return this.page.locator('div').nth(5);
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

  get link9(): Locator {
    return this.page.locator('a').nth(9);
  }

  get searchinputcontainerHeadersearch(): Locator {
    return this.page.locator('#searchInputContainer_headerSearch').first();
  }

  get presentation11(): Locator {
    return this.page.locator('span').nth(11);
  }

  get searchTransaction(): Locator {
    return this.page.getByRole('combobox', { name: /Search Transaction/i }).first();
  }

  get searchTransaction2(): Locator {
    return this.page.getByRole('textbox', { name: /Search Transaction/i }).first();
  }

  get field15(): Locator {
    return this.page.getByLabel(/99\+/i).first();
  }

  get field16(): Locator {
    return this.page.getByRole('button', { name: /99\+/i }).first();
  }

  get cm(): Locator {
    return this.page.getByRole('button', { name: /CM/i }).first();
  }

  get corpmaker2(): Locator {
    return this.page.getByRole('img', { name: /corpmaker2/i }).first();
  }

  get statusCompleted(): Locator {
    return this.page.getByLabel(/Status
Completed/i).first();
  }

  get statusCompleted2(): Locator {
    return this.page.getByRole('presentation', { name: /Status
Completed/i }).first();
  }

  get status(): Locator {
    return this.page.getByRole('textbox', { name: /Status/i }).first();
  }

  get viewApprovalAmendDetails(): Locator {
    return this.page.getByRole('link', { name: /View Approval amend Details/i }).first();
  }

  get home(): Locator {
    return this.page.getByRole('link', { name: /Home/i }).first();
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

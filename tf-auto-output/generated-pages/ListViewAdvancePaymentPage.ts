import { Page, Locator, expect } from '@playwright/test';

export class ListViewAdvancePaymentPage {
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

  get relatedPartyJznnziZoAznzmUliKzkviYlcvhZmw(): Locator {
    return this.page.getByRole('presentation', { name: /Related Party
JZNNZI ZO AZNZM ULI KZKVI YLCVH ZMW/i }).first();
  }

  get jznnziZoAznzmUliKzkviYlcvhZmwRemove(): Locator {
    return this.page.getByRole('button', { name: /JZNNZI ZO AZNZM ULI KZKVI YLCVH ZMW remove/i }).first();
  }

  get relatedParty(): Locator {
    return this.page.getByRole('combobox', { name: /Related Party/i }).first();
  }

  get search(): Locator {
    return this.page.getByRole('link', { name: /Search/i }).first();
  }

  get filters(): Locator {
    return this.page.getByLabel(/Filters/i).first();
  }

  get filters2(): Locator {
    return this.page.getByRole('button', { name: /Filters/i }).first();
  }

  get download(): Locator {
    return this.page.getByRole('button', { name: /Download/i }).first();
  }

  get manageColumns(): Locator {
    return this.page.getByLabel(/Manage Columns/i).first();
  }

  get manageColumns2(): Locator {
    return this.page.getByRole('button', { name: /Manage Columns/i }).first();
  }

  get nlsFilterplaceholder(): Locator {
    return this.page.getByLabel(/\[\[nls\.filterPlaceHolder\]\]/i).first();
  }

  get filter(): Locator {
    return this.page.getByRole('presentation', { name: /Filter/i }).first();
  }

  get filter2(): Locator {
    return this.page.getByRole('textbox', { name: /Filter/i }).first();
  }

  get clear(): Locator {
    return this.page.getByRole('link', { name: /Clear/i }).first();
  }

  get customerReferenceNumberApplicantNameBeneficiaryNameAdvancePaymentAmountBankNameIssueDateCustRef20250729001AbcTextilesPvtLtdGlobalSuppliersInc25000000InternationalTradeBank7252025CustRef20250729001AbcTextilesPvtLtdGlobalSuppliersInc25000000InternationalTradeBank7252025SelectRow(): Locator {
    return this.page.getByRole('application', { name: /Customer Reference Number
	
Applicant Name
	
Beneficiary Name
	
Advance Payment Amount
	
Bank Name
	
Issue Date


CUST-REF-20250729-001
	ABC Textiles Pvt Ltd	Global Suppliers Inc\.	\$250,000\.00	International Trade Bank	7/25/2025

CUST-REF-20250729-001
	ABC Textiles Pvt Ltd	Global Suppliers Inc\.	\$250,000\.00	International Trade Bank	7/25/2025
Select Row/i }).first();
  }

  get custRef20250729001(): Locator {
    return this.page.getByRole('link', { name: /CUST-REF-20250729-001/i }).first();
  }

  get custRef202507290012(): Locator {
    return this.page.getByRole('link', { name: /CUST-REF-20250729-001/i }).first();
  }

  get status30(): Locator {
    return this.page.locator('div').nth(30);
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

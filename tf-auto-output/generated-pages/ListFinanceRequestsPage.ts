import { Page, Locator, expect } from '@playwright/test';

export class ListFinanceRequestsPage {
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

  get customerReferenceNumberApplicantNameFinanceAmountMaturityDateBeneficiaryNameBankNameIssueDateFinanceIdFinancingTypeApplicationDateCustRef7891DefIndustries100000001152026LmnManufacturingGmbhFinLContinentalCommercialBank7212025Fin123457ImportFinancing7202025CustRef7891DefIndustries100000001152026LmnManufacturingGmbhFinLContinentalCommercialBank7212025Fin123457ImportFinancing7202025SelectRow(): Locator {
    return this.page.getByRole('application', { name: /Customer Reference Number
	
Applicant Name
	
Finance Amount
	
Maturity Date
	
Beneficiary Name
	
Bank Name
	
Issue Date
	
Finance Id
	
Financing Type
	
Application Date


CUST-REF-7891
	DEF Industries	€100,000\.00	1/15/2026	LMN Manufacturing GmbH FIN-L	Continental Commercial Bank	7/21/2025	FIN123457	Import Financing	7/20/2025

CUST-REF-7891
	DEF Industries	€100,000\.00	1/15/2026	LMN Manufacturing GmbH FIN-L	Continental Commercial Bank	7/21/2025	FIN123457	Import Financing	7/20/2025
Select Row/i }).first();
  }

  get custRef7891(): Locator {
    return this.page.getByRole('link', { name: /CUST-REF-7891/i }).first();
  }

  get custRef78912(): Locator {
    return this.page.getByRole('link', { name: /CUST-REF-7891/i }).first();
  }

  get status30(): Locator {
    return this.page.locator('div').nth(30);
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

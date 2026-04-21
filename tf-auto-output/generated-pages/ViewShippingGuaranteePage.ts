import { Page, Locator, expect } from '@playwright/test';

export class ViewShippingGuaranteePage {
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

  get relatedParty(): Locator {
    return this.page.getByRole('presentation', { name: /Related Party/i }).first();
  }

  get allParties(): Locator {
    return this.page.getByLabel(/All Parties/i).first();
  }

  get presentation16(): Locator {
    return this.page.locator('div').nth(16);
  }

  get relatedParty2(): Locator {
    return this.page.getByRole('combobox', { name: /Related Party/i }).first();
  }

  get link18(): Locator {
    return this.page.locator('a').nth(18);
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

  get shippingGuaranteeNumberApplicantNameBeneficiaryNameLinkedLcNumberAmountEquivalentAmountExpiryDateStatusCustomerReferenceNumberObdxReferenceNumberPk2sglc223620001DigitalTelecomLuluGroupInternational20000200001272023Active13024a38ec91SelectRow(): Locator {
    return this.page.getByRole('application', { name: /Shipping Guarantee Number
	
Applicant Name
	
Beneficiary Name
	
Linked LC Number
	
Amount
	
Equivalent Amount
	
Expiry Date
	
Status
	
Customer Reference Number
	
Obdx Reference Number


PK2SGLC223620001
	DIGITAL TELECOM	LuLu Group International		£200\.00	£200\.00	1/27/2023	
Active
		13024A38EC91
Select Row/i }).first();
  }

  get pk2sglc223620001(): Locator {
    return this.page.getByRole('link', { name: /PK2SGLC223620001/i }).first();
  }

  get status31(): Locator {
    return this.page.locator('div').nth(31);
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

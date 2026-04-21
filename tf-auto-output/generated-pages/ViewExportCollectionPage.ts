import { Page, Locator, expect } from '@playwright/test';

export class ViewExportCollectionPage {
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

  get collectionReferenceNumberObdxReferenceNumberCustomerReferenceNumberDraweeDrawerReleasedAgainstTransactionDateCollectionAmountEquivalentAmountOutstandingAmountEquivalentOutstandingAmountFinancedStatusPk1iuna21125250513024a38ec91SdsdfManhattanBankNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000000000NoActivePk1iuna211254001NnnnPhilHamptonNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000100000100000NoActivePk1iuna211252510SdsdfManhattanBankNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000000000NoCancelledPk1iuna211252510SdsdfManhattanBankNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000000000NoClosedPk1iuna211252510SdsdfManhattanBankNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000000000NoHoldPk1iuna211252510SdsdfManhattanBankNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000000000NoLiquidatedPk1iuna211252510SdsdfManhattanBankNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000000000NoReversedPk2escp221108077SdsdfManhattanBankNationalFreightCorpIncomingDocumentaryUsanceBillsNotUnderLcOnAcceptance552021100000100000000000NoReversedSelectRow(): Locator {
    return this.page.getByRole('application', { name: /Collection Reference Number
	
Obdx Reference Number
	
Customer Reference Number
	
Drawee
	
Drawer
	
Released Against
	
Transaction Date
	
Collection Amount
	
Equivalent Amount
	
Outstanding Amount
	
Equivalent Outstanding Amount
	
Financed
	
Status


PK1IUNA211252505
	13024A38EC91	sdsdf	MANHATTAN BANK	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£0\.00	£0\.00	
No
	
Active


PK1IUNA211254001
		NNNN	PHIL HAMPTON	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£1,000\.00	£1,000\.00	
No
	
Active


PK1IUNA211252510
		sdsdf	MANHATTAN BANK	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£0\.00	£0\.00	
No
	
Cancelled


PK1IUNA211252510
		sdsdf	MANHATTAN BANK	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£0\.00	£0\.00	
No
	
Closed


PK1IUNA211252510
		sdsdf	MANHATTAN BANK	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£0\.00	£0\.00	
No
	
Hold


PK1IUNA211252510
		sdsdf	MANHATTAN BANK	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£0\.00	£0\.00	
No
	
Liquidated


PK1IUNA211252510
		sdsdf	MANHATTAN BANK	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£0\.00	£0\.00	
No
	
Reversed


PK2ESCP221108077
		sdsdf	MANHATTAN BANK	NATIONAL FREIGHT CORP	INCOMING DOCUMENTARY USANCE BILLS NOT UNDER LC ON ACCEPTANCE	5/5/2021	£1,000\.00	£1,000\.00	£0\.00	£0\.00	
No
	
Reversed
Select Row/i }).first();
  }

  get pk1iuna211252505(): Locator {
    return this.page.getByRole('link', { name: /PK1IUNA211252505/i }).first();
  }

  get pk1iuna211254001(): Locator {
    return this.page.getByRole('link', { name: /PK1IUNA211254001/i }).first();
  }

  get pk1iuna211252510(): Locator {
    return this.page.getByRole('link', { name: /PK1IUNA211252510/i }).first();
  }

  get pk1iuna2112525102(): Locator {
    return this.page.getByRole('link', { name: /PK1IUNA211252510/i }).first();
  }

  get pk1iuna2112525103(): Locator {
    return this.page.getByRole('link', { name: /PK1IUNA211252510/i }).first();
  }

  get pk1iuna2112525104(): Locator {
    return this.page.getByRole('link', { name: /PK1IUNA211252510/i }).first();
  }

  get pk1iuna2112525105(): Locator {
    return this.page.getByRole('link', { name: /PK1IUNA211252510/i }).first();
  }

  get pk2escp221108077(): Locator {
    return this.page.getByRole('link', { name: /PK2ESCP221108077/i }).first();
  }

  get status38(): Locator {
    return this.page.locator('div').nth(38);
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

import { Page, Locator, expect } from '@playwright/test';

export class ViewOutwardGuaranteePage {
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

  get guaranteeNumberPk2guir211250504(): Locator {
    return this.page.getByLabel(/Guarantee Number
PK2GUIR211250504/i).first();
  }

  get guaranteeNumberPk2guir2112505042(): Locator {
    return this.page.getByRole('presentation', { name: /Guarantee Number
PK2GUIR211250504/i }).first();
  }

  get guaranteeNumber(): Locator {
    return this.page.getByRole('textbox', { name: /Guarantee Number/i }).first();
  }

  get obdxReferenceNumber13024a38ec91(): Locator {
    return this.page.getByLabel(/Obdx Reference Number
13024A38EC91/i).first();
  }

  get obdxReferenceNumber13024a38ec912(): Locator {
    return this.page.getByRole('presentation', { name: /Obdx Reference Number
13024A38EC91/i }).first();
  }

  get obdxReferenceNumber(): Locator {
    return this.page.getByRole('textbox', { name: /Obdx Reference Number/i }).first();
  }

  get maturityDate9222021(): Locator {
    return this.page.getByLabel(/Maturity Date
9/22/2021/i).first();
  }

  get maturityDate92220212(): Locator {
    return this.page.getByRole('presentation', { name: /Maturity Date
9/22/2021/i }).first();
  }

  get maturityDate(): Locator {
    return this.page.getByRole('textbox', { name: /Maturity Date/i }).first();
  }

  get contractAmount900000(): Locator {
    return this.page.getByLabel(/Contract Amount
£9,000\.00/i).first();
  }

  get contractAmount9000002(): Locator {
    return this.page.getByRole('presentation', { name: /Contract Amount
£9,000\.00/i }).first();
  }

  get contractAmount(): Locator {
    return this.page.getByRole('textbox', { name: /Contract Amount/i }).first();
  }

  get productGuaranteeIssuanceReissuanceUponReceivingRequest(): Locator {
    return this.page.getByLabel(/Product
Guarantee Issuance Reissuance upon receiving request/i).first();
  }

  get productGuaranteeIssuanceReissuanceUponReceivingRequest2(): Locator {
    return this.page.getByRole('presentation', { name: /Product
Guarantee Issuance Reissuance upon receiving request/i }).first();
  }

  get product(): Locator {
    return this.page.getByRole('textbox', { name: /Product/i }).first();
  }

  get initiateTracer(): Locator {
    return this.page.getByRole('link', { name: /Initiate Tracer/i }).first();
  }

  get viewGuaranteeScreens(): Locator {
    return this.page.getByRole('tablist', { name: /View Guarantee Screens/i }).first();
  }

  get viewGuaranteeDetailsAmendmentsAttachedDocumentsLinkagesChargesCommissionsAndTaxesSwiftMessages(): Locator {
    return this.page.getByRole('presentation', { name: /View Guarantee Details
Amendments
Attached Documents
Linkages
Charges, Commissions and Taxes
SWIFT Messages/i }).first();
  }

  get viewGuaranteeDetailsAmendmentsAttachedDocumentsLinkagesChargesCommissionsAndTaxesSwiftMessages2(): Locator {
    return this.page.getByRole('presentation', { name: /View Guarantee Details
Amendments
Attached Documents
Linkages
Charges, Commissions and Taxes
SWIFT Messages/i }).first();
  }

  get viewGuaranteeDetailsAmendmentsAttachedDocumentsLinkagesChargesCommissionsAndTaxesSwiftMessages3(): Locator {
    return this.page.getByRole('presentation', { name: /View Guarantee Details
Amendments
Attached Documents
Linkages
Charges, Commissions and Taxes
SWIFT Messages/i }).first();
  }

  get viewGuaranteeDetails(): Locator {
    return this.page.getByRole('presentation', { name: /View Guarantee Details/i }).first();
  }

  get clickHereForViewGuaranteeDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for View Guarantee Details/i }).first();
  }

  get amendments(): Locator {
    return this.page.getByRole('presentation', { name: /Amendments/i }).first();
  }

  get clickHereForAmendments(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Amendments/i }).first();
  }

  get attachedDocuments(): Locator {
    return this.page.getByRole('presentation', { name: /Attached Documents/i }).first();
  }

  get clickHereForAttachedDocuments(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Attached Documents/i }).first();
  }

  get linkages(): Locator {
    return this.page.getByRole('presentation', { name: /Linkages/i }).first();
  }

  get clickHereForLinkages(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Linkages/i }).first();
  }

  get chargesCommissionsAndTaxes(): Locator {
    return this.page.getByRole('presentation', { name: /Charges, Commissions and Taxes/i }).first();
  }

  get clickHereForChargesCommissionsAndTaxes(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Charges, Commissions and Taxes/i }).first();
  }

  get swiftMessages(): Locator {
    return this.page.getByRole('presentation', { name: /SWIFT Messages/i }).first();
  }

  get clickHereForSwiftMessages(): Locator {
    return this.page.getByRole('tab', { name: /Click here for SWIFT Messages/i }).first();
  }

  get accountNumberContributionAmountForCollateralContributionPercentageNoDataToDisplaySelectRow(): Locator {
    return this.page.getByRole('application', { name: /Account Number
	
Contribution Amount for Collateral
	
Contribution Percentage

No data to display\.
Select Row/i }).first();
  }

  get status47(): Locator {
    return this.page.locator('div').nth(47);
  }

  get initiateAmendment(): Locator {
    return this.page.getByLabel(/Initiate Amendment/i).first();
  }

  get initiateAmendment2(): Locator {
    return this.page.getByRole('button', { name: /Initiate Amendment/i }).first();
  }

  get copyAndInitiate(): Locator {
    return this.page.getByLabel(/Copy and Initiate/i).first();
  }

  get copyAndInitiate2(): Locator {
    return this.page.getByRole('button', { name: /Copy and Initiate/i }).first();
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

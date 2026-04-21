import { Page, Locator, expect } from '@playwright/test';

export class InitiateShippingGuaranteePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get skipToMainContent(): Locator {
    return this.page.getByRole('link', { name: /Skip to main content/i }).first();
  }

  get error1241PmNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableNoAccountSAvailableClose(): Locator {
    return this.page.getByRole('alert', { name: /Error
12:41 PM
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
No Account\(s\) available
Close/i }).first();
  }

  get presentation2(): Locator {
    return this.page.locator('div').nth(2);
  }

  get error(): Locator {
    return this.page.getByRole('img', { name: /Error/i }).first();
  }

  get error1241Pm(): Locator {
    return this.page.getByRole('presentation', { name: /Error
12:41 PM/i }).first();
  }

  get error2(): Locator {
    return this.page.getByRole('heading', { name: /Error/i }).first();
  }

  get close(): Locator {
    return this.page.getByLabel(/Close/i).first();
  }

  get close2(): Locator {
    return this.page.getByRole('button', { name: /Close/i }).first();
  }

  get toggleMenu(): Locator {
    return this.page.getByLabel(/Toggle Menu/i).first();
  }

  get openMenu(): Locator {
    return this.page.getByRole('button', { name: /Open Menu/i }).first();
  }

  get link10(): Locator {
    return this.page.locator('a').nth(10);
  }

  get searchinputcontainerHeadersearch(): Locator {
    return this.page.locator('#searchInputContainer_headerSearch').first();
  }

  get presentation12(): Locator {
    return this.page.locator('span').nth(12);
  }

  get searchTransaction(): Locator {
    return this.page.getByRole('combobox', { name: /Search Transaction/i }).first();
  }

  get searchTransaction2(): Locator {
    return this.page.getByRole('textbox', { name: /Search Transaction/i }).first();
  }

  get field16(): Locator {
    return this.page.getByLabel(/99\+/i).first();
  }

  get field17(): Locator {
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

  get initiateShippingGuaranteeScreens(): Locator {
    return this.page.getByRole('tablist', { name: /Initiate Shipping Guarantee Screens/i }).first();
  }

  get shippingGuaranteeDetailsGoodsAndShipmentDetailsLinkagesInstructionsAndAttachments(): Locator {
    return this.page.getByRole('presentation', { name: /Shipping Guarantee Details
Goods and Shipment Details
Linkages
Instructions and Attachments/i }).first();
  }

  get shippingGuaranteeDetailsGoodsAndShipmentDetailsLinkagesInstructionsAndAttachments2(): Locator {
    return this.page.getByRole('presentation', { name: /Shipping Guarantee Details
Goods and Shipment Details
Linkages
Instructions and Attachments/i }).first();
  }

  get shippingGuaranteeDetailsGoodsAndShipmentDetailsLinkagesInstructionsAndAttachments3(): Locator {
    return this.page.getByRole('presentation', { name: /Shipping Guarantee Details
Goods and Shipment Details
Linkages
Instructions and Attachments/i }).first();
  }

  get shippingGuaranteeDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Shipping Guarantee Details/i }).first();
  }

  get clickHereForShippingGuaranteeDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Shipping Guarantee Details/i }).first();
  }

  get goodsAndShipmentDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Goods and Shipment Details/i }).first();
  }

  get clickHereForGoodsAndShipmentDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Goods and Shipment Details/i }).first();
  }

  get linkages(): Locator {
    return this.page.getByRole('presentation', { name: /Linkages/i }).first();
  }

  get clickHereForLinkages(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Linkages/i }).first();
  }

  get instructionsAndAttachments(): Locator {
    return this.page.getByRole('presentation', { name: /Instructions and Attachments/i }).first();
  }

  get clickHereForInstructionsAndAttachments(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Instructions and Attachments/i }).first();
  }

  get nlsNumericplaceholder(): Locator {
    return this.page.getByLabel(/\[\[nls\.numericPlaceholder\]\]/i).first();
  }

  get percent(): Locator {
    return this.page.getByRole('presentation', { name: /Percent/i }).first();
  }

  get percent2(): Locator {
    return this.page.getByRole('textbox', { name: /Percent/i }).first();
  }

  get srNo5(): Locator {
    return this.page.getByRole('application', { name: /Sr\. No\. 5/i }).first();
  }

  get uiId1003(): Locator {
    return this.page.locator('#ui-id-1003').first();
  }

  get selectAccount(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd0000(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation40(): Locator {
    return this.page.locator('div').nth(40);
  }

  get contributionAmountForCollateral(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage6862560(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation43(): Locator {
    return this.page.locator('div').nth(43);
  }

  get contributionPercentage(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get uiId1005(): Locator {
    return this.page.locator('#ui-id-1005').first();
  }

  get selectAccount2(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00002(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation48(): Locator {
    return this.page.locator('div').nth(48);
  }

  get contributionAmountForCollateral2(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625602(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation51(): Locator {
    return this.page.locator('div').nth(51);
  }

  get contributionPercentage2(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get uiId1007(): Locator {
    return this.page.locator('#ui-id-1007').first();
  }

  get selectAccount3(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00003(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation56(): Locator {
    return this.page.locator('div').nth(56);
  }

  get contributionAmountForCollateral3(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625603(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation59(): Locator {
    return this.page.locator('div').nth(59);
  }

  get contributionPercentage3(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get uiId1009(): Locator {
    return this.page.locator('#ui-id-1009').first();
  }

  get selectAccount4(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00004(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation64(): Locator {
    return this.page.locator('div').nth(64);
  }

  get contributionAmountForCollateral4(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625604(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation67(): Locator {
    return this.page.locator('div').nth(67);
  }

  get contributionPercentage4(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get uiId1011(): Locator {
    return this.page.locator('#ui-id-1011').first();
  }

  get selectAccount5(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00005(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation72(): Locator {
    return this.page.locator('div').nth(72);
  }

  get contributionAmountForCollateral5(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625605(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation75(): Locator {
    return this.page.locator('div').nth(75);
  }

  get contributionPercentage5(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get presentation77(): Locator {
    return this.page.locator('div').nth(77);
  }

  get selectAccount6(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00006(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation80(): Locator {
    return this.page.locator('div').nth(80);
  }

  get contributionAmountForCollateral6(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625606(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation83(): Locator {
    return this.page.locator('div').nth(83);
  }

  get contributionPercentage6(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get presentation85(): Locator {
    return this.page.locator('div').nth(85);
  }

  get selectAccount7(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00007(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation88(): Locator {
    return this.page.locator('div').nth(88);
  }

  get contributionAmountForCollateral7(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625607(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation91(): Locator {
    return this.page.locator('div').nth(91);
  }

  get contributionPercentage7(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get presentation93(): Locator {
    return this.page.locator('div').nth(93);
  }

  get selectAccount8(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00008(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation96(): Locator {
    return this.page.locator('div').nth(96);
  }

  get contributionAmountForCollateral8(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625608(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation99(): Locator {
    return this.page.locator('div').nth(99);
  }

  get contributionPercentage8(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get presentation101(): Locator {
    return this.page.locator('div').nth(101);
  }

  get selectAccount9(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd00009(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation104(): Locator {
    return this.page.locator('div').nth(104);
  }

  get contributionAmountForCollateral9(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage68625609(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation107(): Locator {
    return this.page.locator('div').nth(107);
  }

  get contributionPercentage9(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get presentation109(): Locator {
    return this.page.locator('div').nth(109);
  }

  get selectAccount10(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get bhd000010(): Locator {
    return this.page.getByLabel(/BHD0\.000/i).first();
  }

  get presentation112(): Locator {
    return this.page.locator('div').nth(112);
  }

  get contributionAmountForCollateral10(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Amount for Collateral/i }).first();
  }

  get contributionpercentage686256010(): Locator {
    return this.page.locator('#ContributionPercentage6862560').first();
  }

  get presentation115(): Locator {
    return this.page.locator('div').nth(115);
  }

  get contributionPercentage10(): Locator {
    return this.page.getByRole('textbox', { name: /Contribution Percentage/i }).first();
  }

  get status117(): Locator {
    return this.page.locator('div').nth(117);
  }

  get addCollateralAccount(): Locator {
    return this.page.getByRole('link', { name: /Add Collateral Account/i }).first();
  }

  get srNoAccountNumberAmountAmountInTransactionalCurrencyMaturityDateNoDataToDisplaySelectRow(): Locator {
    return this.page.getByRole('application', { name: /Sr\. No\.
	
Account Number
	
Amount
	
Amount in Transactional Currency
	
Maturity Date
	

No data to display\.
Select Row/i }).first();
  }

  get status120(): Locator {
    return this.page.locator('div').nth(120);
  }

  get addDepositAccount(): Locator {
    return this.page.getByRole('link', { name: /Add Deposit Account/i }).first();
  }

  get next(): Locator {
    return this.page.getByLabel(/Next/i).first();
  }

  get next2(): Locator {
    return this.page.getByRole('button', { name: /Next/i }).first();
  }

  get saveAsDraft(): Locator {
    return this.page.getByLabel(/Save As Draft/i).first();
  }

  get saveAsDraft2(): Locator {
    return this.page.getByRole('button', { name: /Save As Draft/i }).first();
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

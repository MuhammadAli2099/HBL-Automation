import { Page, Locator, expect } from '@playwright/test';

export class InitiateOutwardGuaranteeAmendmentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get currentBalance9000000(): Locator {
    return this.page.getByRole('tooltip', { name: /Current Balance : £90,000\.00/i }).first();
  }

  get currentBalance90000002(): Locator {
    return this.page.getByRole('presentation', { name: /Current Balance : £90,000\.00/i }).first();
  }

  get info(): Locator {
    return this.page.getByRole('img', { name: /Info/i }).first();
  }

  get uiId535Tail(): Locator {
    return this.page.locator('#ui-id-535_tail').first();
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

  get link7(): Locator {
    return this.page.locator('a').nth(7);
  }

  get searchinputcontainerHeadersearch(): Locator {
    return this.page.locator('#searchInputContainer_headerSearch').first();
  }

  get presentation9(): Locator {
    return this.page.locator('span').nth(9);
  }

  get searchTransaction(): Locator {
    return this.page.getByRole('combobox', { name: /Search Transaction/i }).first();
  }

  get searchTransaction2(): Locator {
    return this.page.getByRole('textbox', { name: /Search Transaction/i }).first();
  }

  get field13(): Locator {
    return this.page.getByLabel(/99\+/i).first();
  }

  get field14(): Locator {
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

  get amendBankGuaranteeScreens(): Locator {
    return this.page.getByRole('tablist', { name: /Amend Bank Guarantee Screens/i }).first();
  }

  get outwardGuaranteeDetailsCommitmentDetailsPresentationTermsConditionsInstructionsDeliveryDetailsLocalUndertakingLinkagesAttachments(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details
Commitment Details
Presentation Terms & Conditions
Instructions
Delivery Details
Local Undertaking
Linkages
Attachments/i }).first();
  }

  get outwardGuaranteeDetailsCommitmentDetailsPresentationTermsConditionsInstructionsDeliveryDetailsLocalUndertakingLinkagesAttachments2(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details
Commitment Details
Presentation Terms & Conditions
Instructions
Delivery Details
Local Undertaking
Linkages
Attachments/i }).first();
  }

  get outwardGuaranteeDetailsCommitmentDetailsPresentationTermsConditionsInstructionsDeliveryDetailsLocalUndertakingLinkagesAttachments3(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details
Commitment Details
Presentation Terms & Conditions
Instructions
Delivery Details
Local Undertaking
Linkages
Attachments/i }).first();
  }

  get outwardGuaranteeDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Outward Guarantee Details/i }).first();
  }

  get clickHereForOutwardGuaranteeDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Outward Guarantee Details/i }).first();
  }

  get commitmentDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Commitment Details/i }).first();
  }

  get clickHereForCommitmentDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Commitment Details/i }).first();
  }

  get presentationTermsConditions(): Locator {
    return this.page.getByRole('presentation', { name: /Presentation Terms & Conditions/i }).first();
  }

  get clickHereForPresentationTermsConditions(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Presentation Terms & Conditions/i }).first();
  }

  get instructions(): Locator {
    return this.page.getByRole('presentation', { name: /Instructions/i }).first();
  }

  get clickHereForInstructions(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Instructions/i }).first();
  }

  get deliveryDetails(): Locator {
    return this.page.getByRole('presentation', { name: /Delivery Details/i }).first();
  }

  get clickHereForDeliveryDetails(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Delivery Details/i }).first();
  }

  get localUndertaking(): Locator {
    return this.page.getByRole('presentation', { name: /Local Undertaking/i }).first();
  }

  get clickHereForLocalUndertaking(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Local Undertaking/i }).first();
  }

  get linkages(): Locator {
    return this.page.getByRole('presentation', { name: /Linkages/i }).first();
  }

  get clickHereForLinkages(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Linkages/i }).first();
  }

  get attachments(): Locator {
    return this.page.getByRole('presentation', { name: /Attachments/i }).first();
  }

  get clickHereForAttachments(): Locator {
    return this.page.getByRole('tab', { name: /Click here for Attachments/i }).first();
  }

  get accountNumberContributionAmountForCollateralContributionPercentageExchangeRateContributionAmountInAccountCurrencyNoDataToDisplaySelectRow(): Locator {
    return this.page.getByRole('application', { name: /Account Number
	
Contribution Amount for Collateral
	
Contribution Percentage
	
Exchange Rate
	
Contribution amount in Account currency
	

No data to display\.
Select Row/i }).first();
  }

  get status39(): Locator {
    return this.page.locator('div').nth(39);
  }

  get accountNumber9MatchesFound(): Locator {
    return this.page.getByRole('application', { name: /Account Number 9 matches found/i }).first();
  }

  get uiId660(): Locator {
    return this.page.locator('#ui-id-660').first();
  }

  get selectAccount(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get field44(): Locator {
    return this.page.getByLabel(/£0\.00/i).first();
  }

  get presentation44(): Locator {
    return this.page.locator('div').nth(44);
  }

  get field46(): Locator {
    return this.page.getByRole('textbox', { name: /£0\.00/i }).first();
  }

  get clickHereToDeleteDepositLinkage(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get uiId673(): Locator {
    return this.page.locator('#ui-id-673').first();
  }

  get selectAccount2(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation50(): Locator {
    return this.page.locator('div').nth(50);
  }

  get amountCheckInput(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage2(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get uiId685(): Locator {
    return this.page.locator('#ui-id-685').first();
  }

  get selectAccount3(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck2(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation56(): Locator {
    return this.page.locator('div').nth(56);
  }

  get amountCheckInput2(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage3(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get uiId697(): Locator {
    return this.page.locator('#ui-id-697').first();
  }

  get selectAccount4(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck3(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation62(): Locator {
    return this.page.locator('div').nth(62);
  }

  get amountCheckInput3(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage4(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get uiId709(): Locator {
    return this.page.locator('#ui-id-709').first();
  }

  get selectAccount5(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck4(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation68(): Locator {
    return this.page.locator('div').nth(68);
  }

  get amountCheckInput4(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage5(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get presentation71(): Locator {
    return this.page.locator('div').nth(71);
  }

  get selectAccount6(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck5(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation74(): Locator {
    return this.page.locator('div').nth(74);
  }

  get amountCheckInput5(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage6(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get presentation77(): Locator {
    return this.page.locator('div').nth(77);
  }

  get selectAccount7(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck6(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation80(): Locator {
    return this.page.locator('div').nth(80);
  }

  get amountCheckInput6(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage7(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get presentation83(): Locator {
    return this.page.locator('div').nth(83);
  }

  get selectAccount8(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck7(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation86(): Locator {
    return this.page.locator('div').nth(86);
  }

  get amountCheckInput7(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage8(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get presentation89(): Locator {
    return this.page.locator('div').nth(89);
  }

  get selectAccount9(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck8(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation92(): Locator {
    return this.page.locator('div').nth(92);
  }

  get amountCheckInput8(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage9(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get presentation95(): Locator {
    return this.page.locator('div').nth(95);
  }

  get selectAccount10(): Locator {
    return this.page.getByRole('combobox', { name: /Select Account/i }).first();
  }

  get amountCheck9(): Locator {
    return this.page.locator('#amount-check').first();
  }

  get presentation98(): Locator {
    return this.page.locator('div').nth(98);
  }

  get amountCheckInput9(): Locator {
    return this.page.locator('#amount-check\|input').first();
  }

  get clickHereToDeleteDepositLinkage10(): Locator {
    return this.page.getByRole('link', { name: /Click here to delete Deposit Linkage/i }).first();
  }

  get status101(): Locator {
    return this.page.locator('div').nth(101);
  }

  get clickHereToAddDepositLinkageAccount(): Locator {
    return this.page.getByRole('link', { name: /Click here to Add Deposit Linkage Account/i }).first();
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

  get popUpOpenedPressF6ToNavigateBetweenThePopUpAndAssociatedControl(): Locator {
    return this.page.getByRole('log', { name: /Pop-up opened\. Press F6 to navigate between the pop-up and associated control\./i }).first();
  }

  async waitForScreen(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}

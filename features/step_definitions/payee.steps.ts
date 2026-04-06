import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/world';
import { testData } from '../../utils/testData';

Given(
  'the maker is logged in to the HBL application',
  { timeout: 60000 },
  async function (this: CustomWorld) {
    await this.loginPage.goto();
    await this.loginPage.loginAndWaitForDashboard(
      testData.validUser.username,
      testData.validUser.password
    );
  }
);

When('the maker creates an account payee with valid data', async function (this: CustomWorld) {
  await this.payeePage.createValidPayeeAndVerify(
    testData.payee.validAccountNumber,
    testData.payee.validNickname,
    testData.payee.validEmail
  );
});

Then('the payee request should be submitted successfully', async function (this: CustomWorld) {
  await this.payeePage.validateSuccessfulSubmission();
});

When('the maker enters payee details with invalid account number', async function (this: CustomWorld) {
  await this.payeePage.navigateToAddAccountPayee();
  await this.payeePage.enterPayeeDetails(
    testData.payee.invalidAccountNumber,
    testData.payee.validNickname,
    testData.payee.validEmail
  );
  await this.payeePage.clickSubmit();
});

When('the maker enters payee details with invalid email', async function (this: CustomWorld) {
  await this.payeePage.navigateToAddAccountPayee();
  await this.payeePage.enterPayeeDetails(
    testData.payee.validAccountNumber,
    testData.payee.validNickname,
    testData.payee.invalidEmail
  );
  await this.payeePage.clickSubmit();
});

When('the maker enters payee details with blank nickname', async function (this: CustomWorld) {
  await this.payeePage.navigateToAddAccountPayee();
  await this.payeePage.enterPayeeDetails(
    testData.payee.validAccountNumber,
    testData.payee.blankValue,
    testData.payee.validEmail
  );
  await this.payeePage.clickSubmit();
});

When('the maker enters payee details with blank account number', async function (this: CustomWorld) {
  await this.payeePage.navigateToAddAccountPayee();
  await this.payeePage.enterPayeeDetails(
    testData.payee.blankValue,
    testData.payee.validNickname,
    testData.payee.validEmail
  );
  await this.payeePage.clickSubmit();
});

Then('the payee submission should be blocked', async function (this: CustomWorld) {
  await this.payeePage.validateSubmissionBlocked();
});

import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/world';
import { testData } from '../../utils/testData';

Given('the user opens the HBL application', async function (this: CustomWorld) {
  await this.loginPage.goto();
});

When('the maker logs in with valid credentials', async function (this: CustomWorld) {
  await this.loginPage.loginAndWaitForDashboard(
    testData.validUser.username,
    testData.validUser.password
  );
});

Then('the dashboard should be visible', async function (this: CustomWorld) {
  await this.loginPage.waitForDashboard();
});

Then('the user logs out successfully', async function (this: CustomWorld) {
  await this.loginPage.logout();
});

When('the user logs in with invalid credentials', async function (this: CustomWorld) {
  await this.loginPage.login(
    testData.invalidUser.username,
    testData.invalidUser.password
  );
});

Then('a login error should be displayed', async function (this: CustomWorld) {
  await this.loginPage.expectLoginFailure();
});

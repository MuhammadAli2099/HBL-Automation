import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../../pages/LoginPage';
import { PayeePage } from '../../pages/PayeePage';

dotenv.config();

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  payeePage!: PayeePage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    const browserName = (process.env.BROWSER || 'chromium').toLowerCase();
    const headed = process.env.HEADED === 'true';

    if (browserName === 'firefox') {
      this.browser = await firefox.launch({ headless: !headed });
    } else if (browserName === 'webkit') {
      this.browser = await webkit.launch({ headless: !headed });
    } else {
      this.browser = await chromium.launch({ headless: !headed });
    }

    this.context = await this.browser.newContext({
      viewport: { width: 1440, height: 900 },
      ignoreHTTPSErrors: true,
    });

    this.page = await this.context.newPage();
    this.loginPage = new LoginPage(this.page);
    this.payeePage = new PayeePage(this.page);
  }

  async close() {
    if (this.page) {
      await this.page.close().catch(() => {});
    }
    if (this.context) {
      await this.context.close().catch(() => {});
    }
    if (this.browser) {
      await this.browser.close().catch(() => {});
    }
  }
}

setWorldConstructor(CustomWorld);

import { Before, After, Status } from '@cucumber/cucumber';
import type { CustomWorld } from './world';
import fs from 'fs';
import path from 'path';

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  try {
    if (scenario.result?.status === Status.FAILED && this.page) {
      const dir = path.join(process.cwd(), 'screenshots');
      fs.mkdirSync(dir, { recursive: true });

      const safeName = scenario.pickle.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
      const filePath = path.join(dir, `${safeName}.png`);

      await this.page.screenshot({ path: filePath, fullPage: true });
      const image = fs.readFileSync(filePath);
      await this.attach(image, 'image/png');
    }
  } finally {
    await this.close();
  }
});

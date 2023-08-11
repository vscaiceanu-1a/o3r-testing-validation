import { expect, test } from '@playwright/test';
import { BaseScenario } from '../utils';

export class MyScenario extends BaseScenario {
  protected myScenario() {
    test.describe.serial('Empty MyScenario tests', () => {
      test('Empty test', async ({ page }) => {
        await page.goto(this.targetUrl);
        await expect(page).toHaveTitle('TestApp');
      });
    });
  }

  public performFlow() {
    this.myScenario();
  }
}

new MyScenario().run();

import { expect, test } from '@playwright/test';

test.describe.serial('Empty MySanity test', () => {
  test('Empty test', ({ page }) => {
    expect(page).toBeDefined();
  });
});

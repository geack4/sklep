import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.locator('a').filter({ hasText: 'Sklep' });
  await page
    .getByRole('button')
    .filter({ hasText: /^shopping_cart$/ })
    .click();
  //   await page.getByRole('link', { name: 'Przejdź do płatności' }).click();
  //   await expect(page.getByRole('textbox', { name: 'Imię' })).toBeVisible();
  //   await page.getByRole('textbox', { name: 'Imię' }).click();
  //   await page.getByRole('main').click();
  await expect(page.locator('a').filter({ hasText: 'Sklep' }));
});

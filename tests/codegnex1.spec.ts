import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('button', { name: '✕' }).click();
    await page.getByRole('link', { name: 'Electronics' }).click();
    await expect(page.getByRole('link', { name: 'Mobiles' })).toBeVisible();
    await page.getByRole('link', { name: 'Mobiles' }).click();
    await expect(page.locator('#slot-list-container')).toContainText('iPhone');
    await page.getByRole('link', { name: 'iPhone' }).click();
    await expect(page.getByRole('link').nth(4)).toBeVisible();
    await page.getByRole('link').nth(4).click();
   
    await expect(page.getByRole('heading')).toContainText('iPhone 17 (Black, 512 GB)');
});
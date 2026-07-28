import { test, expect } from '@playwright/test';


test('Keyboard', async ({ page }) => {

    await page.goto('https://keycode.info');
    page.pause()

    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' })

    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArroLeft.png' });

});
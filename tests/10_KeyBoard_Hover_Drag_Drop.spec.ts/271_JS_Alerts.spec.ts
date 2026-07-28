import { test, expect } from '@playwright/test';

// Alert handling in Playwright means listening for browser dialogs
// such as alert, confirm, and prompt boxes and then responding to them.
// Use page.on('dialog') or page.once('dialog') before triggering the action.

test('Handle JavaScript alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('I am a JS Alert');
        await dialog.accept();
    });

    await page.click('button[onclick="jsAlert()"]');
    await expect(page.locator('#result')).toHaveText('You successfuly clicked an alert');
});

test('Handle JavaScript confirm dialog', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toContain('I am a JS Confirm');
        await dialog.dismiss();
    });

    await page.click('button[onclick="jsConfirm()"]');
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});

test('Handle JavaScript prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toContain('I am a JS prompt');
        await dialog.accept('Playwright');
    });

    await page.click('button[onclick="jsPrompt()"]');
    await expect(page.locator('#result')).toHaveText('You entered: Playwright');
});

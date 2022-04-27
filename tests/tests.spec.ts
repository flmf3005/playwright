import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://app.smarttbot.com/public/login');
});

test.describe('Login', () => {
  test('realizar login com sucesso', async ({ page }) => {
    
    await page.locator('id=login-username').fill('testeautomacao');
    await page.locator('id=login-password').fill('Smartt1');
    await page.locator('id=login-button').click();

    await expect(page.locator('id=RunningInstances-create_instance_btn')).toBeVisible();
    await expect(page.locator('id=sidebar-menu-item-scoreboard')).toBeVisible();
  });
});

test.describe('Robos', () => {
  test('verificar existencia de robo', async ({ page }) => {
    await page.locator('id=login-username').fill('testeautomacao');
    await page.locator('id=login-password').fill('Smartt1');
    await page.locator('id=login-button').click();

    await page.locator('id=sidebar-menu-item-scoreboard').click();

    await expect(page.locator('//span[contains(text(),"Heitor Villa-Lobos")]')).toBeVisible();
  });
});
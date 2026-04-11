import { test, expect } from '@playwright/test';

test.describe('theme switching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('default theme loads without errors', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  });

  test('theme switcher is visible and functional', async ({ page }) => {
    const switcher = page.locator('[data-theme-ui]');
    await expect(switcher).toBeVisible();

    // Open dropdown (click for mobile, hover handled by CSS for desktop)
    await switcher.locator('button').first().click();
    const dropdown = switcher.locator('.theme-dropdown');
    await expect(dropdown).toBeVisible();

    // Switch to sharks
    await dropdown.locator('button', { hasText: 'Sharks' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'sharks');
  });

  test('theme persists across navigation', async ({ page }) => {
    // Switch to Canada
    await page.locator('[data-theme-ui] button').first().click();
    await page.locator('.theme-dropdown button', { hasText: 'Canada' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'canada');

    // Navigate to another page
    await page.goto('/projects');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'canada');
  });
});

test.describe('sharks theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-theme-ui] button').first().click();
    await page.locator('.theme-dropdown button', { hasText: 'Sharks' }).click();
  });

  test('bouncing puck is visible', async ({ page }) => {
    const puck = page.locator('[data-sharks-fin]');
    await expect(puck).toBeVisible();
  });
});

test.describe('underwater theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-theme-ui] button').first().click();
    await page.locator('.theme-dropdown button', { hasText: 'Underwater' }).click();
  });

  test('ocean elements are visible', async ({ page }) => {
    await expect(page.locator('[data-underwater-bg]')).toBeVisible();
    await expect(page.locator('[data-underwater-waves]')).toBeVisible();
    await expect(page.locator('[data-underwater-seabed]')).toBeVisible();
  });
});

test.describe('canada theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-theme-ui] button').first().click();
    await page.locator('.theme-dropdown button', { hasText: 'Canada' }).click();
  });

  test('snow background is visible', async ({ page }) => {
    await expect(page.locator('[data-canada-bg]')).toBeVisible();
  });
});

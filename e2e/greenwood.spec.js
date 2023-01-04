// @ts-check
const { test, expect } = require('@playwright/test');

test('has home page', async ({ page }) => {
  await page.goto('https://www.greenwoodjs.io/');

  // technically the version and the rotating text would be variables
  await expect(page).toHaveTitle(/Greenwood/);
  await expect(page.locator('h3.app-banner')).toHaveText('Your full stack workbench for the web.  Ready to help you build your next. . . blog.');
  await expect(page.locator('footer')).toHaveText('Greenwood v0.27.2 ◈ This site is powered by Netlify');
});

test('has docs page', async ({ page }) => {
  await page.goto('https://www.greenwoodjs.io/');
  await page.locator('app-header a[href$="/docs/"]').nth(1).click();

  await expect(page).toHaveTitle(/Greenwood - Docs/);
});

test('has a blog page and blog posts', async ({ page }) => {
  const postTitle = 'State of Greenwood (2022)';

  await page.goto('https://www.greenwoodjs.io/');
  await page.locator('app-header a[href$="/blog/"]').nth(1).click();
  await expect(page).toHaveTitle(/Greenwood - Blog/);

  await page.getByText(postTitle).click()
  await expect(page.locator('h1')).toHaveText(postTitle);
});

// test('has static routing', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

const { test, expect } = require("./fixtures/pages");

test.beforeEach("setup", async ({ contactPage }) => {
  await contactPage.goto();
});

test("helo", async ({ contactPage }) => {
  await contactPage.addUsername("100000");
  await contactPage.addEmail("www.www.com");
  await contactPage.addRequest("123123");
  await contactPage.checkPrivacyPolicy();
});

test("Navi button presence", async ({ page }) => {
  await page.goto("https://rocketdev.com.pl/en/");
  await expect(page).toHaveTitle(/RocketDev/);
  await page.locator('role="combobox"');
});

const { test, expect } = require("./fixtures/pages");

test.beforeEach("setup", async ({ homePage }) => {
  await homePage.goto();
});

test("Home Page - Navigation bar", async ({ homePage, page }) => {
  await homePage.navigateHomePage();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en");
  await homePage.navigateAboutUs();
  console.log(page.url());
});

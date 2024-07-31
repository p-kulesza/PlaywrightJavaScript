const { test, expect } = require("./fixtures/pages");

test.beforeEach("setup", async ({ aboutUsPage }) => {
  await aboutUsPage.goto();
});

test("About Us Page - Contact Us Redirect", async ({ aboutUsPage, page }) => {
  await aboutUsPage.goToWriteToUs();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
  await aboutUsPage.goToContactUsFooter();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
});

test("About Us Page - Privacy Policy Redirect", async ({
  aboutUsPage,
  page,
}) => {
  await aboutUsPage.goToPrivacyPolicy();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/privacy-policy");
});

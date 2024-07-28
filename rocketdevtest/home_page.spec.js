const { test, expect } = require("./fixtures/pages");

test.beforeEach("setup", async ({ homePage }) => {
  await homePage.goto();
});

test("Home Page - Navigation bar", async ({ homePage, page }) => {
  await homePage.navigateHomePage();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en");
  await homePage.navigateAboutUs();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/about-us");
  await homePage.navigateOffer();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/offer");
  await homePage.navigateFAQ();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/faq-en");
  await homePage.navigateContact();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
  await homePage.navigateHomePage();
  await homePage.goToPrivacyPolicy();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/privacy-policy");
});

test("Home Page - Ready-made template", async ({ homePage, page }) => {
  const locator_ready =
    'div [class="rounded-lg p-1 border-2 border-accent-light"]';
  await expect(page.locator(locator_ready).nth(0)).toContainText(
    "Ready-made template"
  );
  await expect(page.locator(locator_ready).nth(0)).toContainText(
    "from 1500 PLN"
  );
  await homePage.checkReadyMadeTemplate();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/offer");
});

test("Home Page - Individual project", async ({ homePage, page }) => {
  const locator_individual =
    'div [class="rounded-lg p-1 animate-border bg-gradient-to-r from-yellow-400 via-orange-800 to-yellow-400 bg-[length:_400%_400%] [animation-duration:_6s]"]';
  await expect(page.locator(locator_individual)).toContainText(
    "Individual project"
  );
  await expect(page.locator(locator_individual)).toContainText("from 3500 PLN");
  await homePage.checkIndividualProject();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/offer");
});

test("Home Page - Graphically Customized Website", async ({
  homePage,
  page,
}) => {
  const locator_graphically =
    'div [class="rounded-lg p-1 border-2 border-accent-light"]';
  await expect(page.locator(locator_graphically).nth(1)).toContainText(
    "Graphically customized website"
  );
  await expect(page.locator(locator_graphically).nth(1)).toContainText(
    "from 2500 PLN"
  );
  await homePage.checkGraphicallyCustomizedWebsite();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/offer");
});

test("Home Page - Contact Us", async ({ homePage, page }) => {
  await homePage.goToContactUs();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
});

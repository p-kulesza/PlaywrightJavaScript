const { test, expect } = require("./fixtures/pages");
import { expectedAdditionalPaidServicesData } from "./data/offer_page_data";
test.beforeEach("setup", async ({ offerPage }) => {
  await offerPage.goto();
});

test("Offer Page - Additional Paid Services Table Data", async ({
  offerPage,
  page,
}) => {
  let table = await page.locator("tbody tr");
  let tableCount = await table.count();
  let actual = [];
  for (let i = 16; i < tableCount; i++) {
    const element = await table.nth(i);
    const inner = await element.innerText();
    actual.push(inner);
  }
  await expect(actual).toEqual(expectedAdditionalPaidServicesData);
});

test("Offer Page - Contact Us Redirect", async ({ offerPage, page }) => {
  await offerPage.goToContactUsHead();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
  await offerPage.goto();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/offer");
  await offerPage.goToContactUsBody();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
  await offerPage.goto();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/offer");
  await offerPage.goToContactUsFooter();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
});

test("Offer Page - FAQ Redirect", async ({ offerPage, page }) => {
  await offerPage.goToFAQ();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/faq-en");
});

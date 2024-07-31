const { test, expect } = require("./fixtures/pages");
import { expectedTechnicalQuestionsTableData } from "./data/faq_page_data";
import { expetedQuestionsAboutCooperationTableData } from "./data/faq_page_data";

test.beforeEach("setup", async ({ faqPage }) => {
  await faqPage.goto();
});

test("FAQ Page - Technical Questions Table Data", async ({ page }) => {
  let table = await page.locator('div [class="border-b border-accent-dark"]');
  let actual = [];

  for (let i = 0; i <= 3; i++) {
    const element = await table.nth(i);
    await element.click();
    const inner = await element.allTextContents();
    actual.push(inner);
  }
  await expect(actual).toEqual(expectedTechnicalQuestionsTableData);
});

test("FAQ Page - Questions About Cooperation Table Data", async ({ page }) => {
  let table = await page.locator('div [class="border-b border-accent-dark"]');
  let tableCount = await table.count();
  let actual = [];

  for (let i = 4; i < tableCount; i++) {
    const element = await table.nth(i);
    await element.click();
    const inner = await element.allTextContents();
    await actual.push(inner);
  }
  await expect(actual).toEqual(expetedQuestionsAboutCooperationTableData);
});

test("FAQ Page - Contact Us Redirect", async ({ faqPage, page }) => {
  await faqPage.goToContactUsHead();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
  await faqPage.goto();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/faq-en");
  await faqPage.goToContactUsFooter();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/contact");
});

test("FAQ Page - Privacy Policy Redirect", async ({ faqPage, page }) => {
  await faqPage.goToPrivacyPolicy();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/privacy-policy");
});

const { test, expect } = require("./fixtures/pages");
import { usernameData } from "./data/contact_page_data";
import { emailData } from "./data/contact_page_data";
import { requestData } from "./data/contact_page_data";

test.beforeEach("setup", async ({ contactPage }) => {
  await contactPage.goto();
});

//        Data Randomizer
function randomizer(input) {
  return input[Math.floor(Math.random() * input.length)];
}

test(
  "Contact Page - Happy path",
  { tag: "@smoke" },
  async ({ contactPage }) => {
    await contactPage.cloudFlareWorkAround();
    await contactPage.addUsername(randomizer(usernameData));
    await contactPage.addEmail(randomizer(emailData));
    await contactPage.addRequest(randomizer(requestData));
    await contactPage.checkDataProcessing();
    await contactPage.checkPrivacyPolicy();
    await contactPage.clickSend();
  }
);

test("Contact Page - Invalid name", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addEmail(randomizer(emailData));
  await contactPage.addRequest(randomizer(requestData));
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(0)
  ).toBeVisible();
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(0)
  ).toContainText("Your name must be at least 2 characters long");
});

test("Contact Page - Invalid email", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername(randomizer(usernameData));
  await contactPage.addRequest(randomizer(requestData));
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(
    page.page
      .locator('div [class="text-sm font-medium text-destructive"]')
      .nth(1)
  ).toBeVisible();
  await expect(
    page.page
      .locator('div [class="text-sm font-medium text-destructive"]')
      .nth(1)
  ).toContainText("Invalid email address");
});

test("Contact Page - Invalid description", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername(randomizer(usernameData));
  await contactPage.addEmail(randomizer(emailData));
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(
    page.locator(
      'div [class="text-sm font-medium text-destructive"]:nth-child(3)'
    )
  ).toBeVisible();
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(2)
  ).toContainText("Your message must be at least 3 characters long");
});

test("Contact Page - Invalid processing checkbox", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername(randomizer(usernameData));
  await contactPage.addEmail(randomizer(emailData));
  await contactPage.addRequest(randomizer(requestData));
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(
    page.locator(
      'div [class="text-sm font-medium text-destructive"]:nth-child(4)'
    )
  ).toBeVisible();
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(3)
  ).toContainText("This field is required");
});

test("Contact Page - Invalid privacy checkbox", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername(randomizer(usernameData));
  await contactPage.addEmail(randomizer(emailData));
  await contactPage.addRequest(randomizer(requestData));
  await contactPage.checkDataProcessing();
  await contactPage.clickSend();
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(4)
  ).toBeVisible();
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(4)
  ).toContainText("This field is required");
});

test("Contact Page - Redirection, clean form", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername(randomizer(usernameData));
  await contactPage.addEmail(randomizer(emailData));
  await contactPage.addRequest(randomizer(requestData));
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.goToContactUs();
  await expect(page.locator('input[name="username"]')).toContainText(" ");
  await expect(page.getByText("Your email address")).toContainText(" ");
  await expect(page.locator('textarea[name="description"]')).toContainText(" ");
  await expect(
    page.locator(
      'button[aria-label="Consent to the processing of personal data"]'
    )
  ).toBeEmpty();
  await expect(
    page.locator(
      'button[aria-label="Declaration of familiarization with the content of the privacy policy"]'
    )
  ).toBeEmpty();
});

test("Contact Page - Empty form", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.clickSend();
  await expect(
    page.getByText("Your name must be at least 2 characters long")
  ).toBeVisible();
  await expect(page.getByText("Invalid email address")).toBeVisible();
  await expect(
    page.getByText("Your message must be at least 3 characters long")
  ).toBeVisible();
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(3)
  ).toContainText("This field is required");
  await expect(
    page.locator('div [class="text-sm font-medium text-destructive"]').nth(4)
  ).toContainText("This field is required");
});

test("Contact Page - Privacy policy redirect", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.goToPrivacyPolicy();
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/privacy-policy");
});

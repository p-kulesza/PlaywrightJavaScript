const { test, expect } = require("./fixtures/pages");

test.beforeEach("setup", async ({ contactPage }) => {
  await contactPage.goto();
});

test("Contact Page - Happy path", async ({ contactPage }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername("John Doe");
  await contactPage.addEmail("www.exmaple@mail.com");
  await contactPage.addRequest("Random request");
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
});

test("Contact Page - Invalid name", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addEmail("www.exmaple@mail.com");
  await contactPage.addRequest("Random request");
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(page.getByText("Your name must be at least 2 characters long"))
    .toBeVisible;
});

test("Contact Page - Invalid email", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername("John Doe");
  await contactPage.addRequest("Random request");
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(page.getByText("Invalid email address")).toBeVisible;
});

test("Contact Page - Invalid description", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername("John Doe");
  await contactPage.addEmail("www.exmaple@mail.com");
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(
    page.getByText("Your message must be at least 3 characters long")
  ).toBeVisible;
});

test("Contact Page - Invalid processing checkbox", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername("John Doe");
  await contactPage.addEmail("www.exmaple@mail.com");
  await contactPage.addRequest("Random request");
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickSend();
  await expect(page.getByText("This field is required")).toBeVisible;
});

test("Contact Page - Invalid privacy checkbox", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername("John Doe");
  await contactPage.addEmail("www.exmaple@mail.com");
  await contactPage.addRequest("Random request");
  await contactPage.checkDataProcessing();
  await contactPage.clickSend();
  await expect(page.getByText("This field is required")).toBeVisible;
});

/// lokatory do expectow przpepisać
test("Contact Page - Redirection, clean form", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.addUsername("John Doe");
  await contactPage.addEmail("www.exmaple@mail.com");
  await contactPage.addRequest("Random request");
  await contactPage.checkDataProcessing();
  await contactPage.checkPrivacyPolicy();
  await contactPage.clickContactUs();
  await expect(page.getByText("What is your name?")).toBeEmpty;
  await expect(page.getByText("Your email address")).toBeEmpty;
  await expect(page.locator('textarea[name="description"]')).toBeEmpty;
  await expect(
    page.locator(
      'button[aria-label="Consent to the processing of personal data"]'
    )
  ).toBeEmpty;
  await expect(
    page.locator(
      'button[aria-label="Declaration of familiarization with the content of the privacy policy"]'
    )
  ).toBeEmpty;
});

//refactor checkboxow
test("Contact Page - Empty form", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.clickSend();
  await expect(page.getByText("Your name must be at least 2 characters long"))
    .toBeVisible;
  await expect(page.getByText("Invalid email address")).toBeVisible;
  await expect(
    page.getByText("Your message must be at least 3 characters long")
  ).toBeVisible;
  await expect(page.getByText("This field is required")).toBeVisible;
  await expect(page.getByText("This field is required")).toBeVisible;
});

//validation?
test("Contact Page - Get Phone and E-mail", async ({ contactPage, page }) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.getPhoneNumber();
  await contactPage.getEmailAdress();
});

//finish
test("Contact Page - Privacy policy redirection", async ({
  contactPage,
  page,
}) => {
  await contactPage.cloudFlareWorkAround();
  await contactPage.goToPrivacyPolicy();
  await console.log(page.url);
  await expect(page).toHaveURL("https://rocketdev.com.pl/en/privacy-policy");
});

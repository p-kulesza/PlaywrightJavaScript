import { randomInt } from "crypto";

const { ContactPageLocators } = require("../locators/contactpage_locators");
export class ContactPage {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.usernameInput = this.page.getByText("What is your name?");
    this.emailInput = this.page.getByText("Your email address");
    this.requestInput = this.page.locator('textarea[name="description"]');
    this.dataProcessingCheckbox = this.page.locator(
      'button[aria-label="Consent to the processing of personal data"]'
    );
    this.privacyPolicyCheckbox = this.page.locator(
      'button[aria-label="Declaration of familiarization with the content of the privacy policy"]'
    );
    this.sendButton = this.page.locator('button[type = "submit"]');
    this.contacUsButton = this.page.getByText("Contact Us");
    this.phoneNumberButton = this.page.getByText("+48 737 357 003");
    this.emailAdressButton = this.page.getByText("kontaktrocketdev@gmail.com");
    this.privacyPolicyButton = this.page.locator("div p a.text-accent").nth(1);
  }

  async goto() {
    await this.page.goto("https://rocketdev.com.pl/en/contact");
  }

  /**
   *  @param {string} text
   */

  async addUsername(text) {
    await this.usernameInput.isVisible();
    await this.usernameInput.fill(text);
  }

  async addEmail(text) {
    await this.emailInput.isVisible();
    await this.emailInput.fill(text);
  }

  async addRequest(text) {
    await this.requestInput.isVisible();
    await this.requestInput.fill(text);
  }

  async checkPrivacyPolicy() {
    await this.privacyPolicyCheckbox.isVisible();
    await this.privacyPolicyCheckbox.click();
  }

  async checkDataProcessing() {
    await this.dataProcessingCheckbox.isVisible();
    await this.dataProcessingCheckbox.click();
  }

  async clickSend() {
    await this.sendButton.isVisible();
    await this.sendButton.click();
  }

  async clickContactUs() {
    await this.contacUsButton.isVisible();
    await this.contacUsButton.click();
  }

  async cloudFlareWorkAround() {
    await this.page.waitForTimeout(randomInt(1, 3000));
    await this.page.keyboard.press("Space");
    await this.page.waitForTimeout(randomInt(1, 3000));
  }

  async getPhoneNumber() {
    await this.phoneNumberButton.isVisible();
    await this.phoneNumberButton.click();
  }

  async getEmailAdress() {
    await this.emailAdressButton.isVisible();
    await this.emailAdressButton.click();
  }

  async goToPrivacyPolicy() {
    await this.privacyPolicyButton.isVisible();
    await this.privacyPolicyButton.click();
  }
}

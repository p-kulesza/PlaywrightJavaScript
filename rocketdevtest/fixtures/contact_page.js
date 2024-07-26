export class ContactPage {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = this.page.getByText("What is your name?");
    this.emailInput = this.page.getByText("Your email address");
    this.requestInput = this.page.locator('name="description"');
    this.dataProcessingCheckbox = this.page.locator(
      "aria-label='Consent to the processing of personal data'"
    );
    this.privacyPolicyCheckbox = this.page.locator(
      'aria-label="Declaration of familiarization with the content of the privacy policy"'
    );
    this.sendButton = this.page.getByText("Send");
    this.contacUsButton = this.page.getByText("Contact Us");
  }

  async goto() {
    await this.page.goto("https://rocketdev.com.pl/en/contact");
  }

  /**
   *  @param {string} text
   */

  async addUsername(text) {
    await this.usernameInput.isVisible;
    await this.usernameInput.fill(text);
  }

  async addEmail(text) {
    await this.emailInput.isVisible;
    await this.emailInput.fill(text);
  }

  async addRequest(text) {
    await this.requestInput.isVisible;
    await this.requestInput.fill(text);
  }

  async checkPrivacyPolicy() {
    await this.privacyPolicyCheckbox.click;
  }

  async checkDataProcessing() {
    await this.dataProcessingCheckbox.click;
  }

  async clickSend() {
    await this.sendButton.click;
  }

  async clickContacUs() {
    await this.contacUsButton.click;
  }

  async cloudFlareWorkAround() {
    await this.page.waitForTimeout(3000);
    await this.page.keyboard.press("Space");
    await this.page.waitForTimeout(3000);
  }
}

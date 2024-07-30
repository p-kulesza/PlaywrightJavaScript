export class FAQPage {
  /**
   *
   * @param {import ('@playwright/test.Page')} page
   */
  constructor(page) {
    this.page = page;
    this.contactUsButtonHead = this.page.locator(
      '[href="/en/contact"]:nth-child(1)'
    );
    this.contactUsButtonFooter = this.page.locator(
      '[href="/en/contact"]:nth-child(2)'
    );
    this.privacyPolicyButton = this.page.locator(
      '[href="/en/privacy-policy"] a'
    );
  }

  async goto() {
    await this.page.goto("https://rocketdev.com.pl/en/faq-en");
  }

  async goToContactUsHead() {
    await this.contactUsButtonHead.isVisible();
    await this.contactUsButtonHead.click();
  }

  async goToContactUsFooter() {
    await this.contactUsButtonFooter.isVisible();
    await this.contactUsButtonFooter.click();
  }

  async goToPrivacyPolicy() {
    await this.privacyPolicyButton.isVisible();
    await this.privacyPolicyButton.click();
  }
}

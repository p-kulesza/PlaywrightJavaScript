export class AboutUsPage {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.writeToUsButton = this.page.locator(
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
    await this.page.goto("https://rocketdev.com.pl/en/about-us");
  }

  async goToWriteToUs() {
    await this.writeToUsButton.isVisible();
    await this.writeToUsButton.click();
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

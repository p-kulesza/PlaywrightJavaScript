export class OfferPage {
  /**
   *
   * @param {import('@playwright/test'.Page)} page
   */
  constructor(page) {
    this.page = page;
    this.contactUsButtonHead = this.page.locator(
      '[href="/en/contact"] button:nth-child(1)'
    );
    this.contactUsButtonBody = this.page.locator(
      '[href="/en/contact"] button:nth-child(2)'
    );
    this.contactUsButtonFooter = this.page.locator(
      '[href="/en/contact"] button:nth-child(3)'
    );
    this.goToFAQPageButton = this.page.locator('[href="/en/faq-en"] button');
    this.privacyPolicyButton = this.page.locator(
      '[href="/en/privacy-policy"] a'
    );
  }

  async goto() {
    await this.page.goto("https://rocketdev.com.pl/en/offer");
  }

  async goToContactUsHead() {
    await this.contactUsButtonHead.isVisible();
    await this.contactUsButtonHead.click();
  }

  async goToContactUsBody() {
    await this.contactUsButtonBody.isVisible();
    await this.contactUsButtonBody.click();
  }

  async goToContactUsFooter() {
    await this.contactUsButtonFooter.isVisible();
    await this.contactUsButtonFooter.click();
  }

  async goToFAQ() {
    await this.goToFAQPageButton.isVisible();
    await this.goToFAQPageButton.click();
  }

  async goToPrivacyPolicy() {
    await this.privacyPolicyButton.isVisible();
    await this.privacyPolicyButton.click();
  }
}

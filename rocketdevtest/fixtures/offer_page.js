export class OfferPage {
  /**
   *
   * @param {import('@playwright/test'.Page)} page
   */
  constructor(page) {
    this.page = page;
    this.contactUsButtonHead = this.page.locator(
      'button[class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-accent bg-transparent focus:bg-accent hover:bg-accent hover-text-primary h-11 text-lg px-8 border-2 py-6 md:py-8 xl:h-18 xl:py-9 xl:border-2 rounded-full xl:px-16 xl:text-xl"]'
    );
    this.contactUsButtonBody = this.page.locator(
      "body > main:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(1) > article:nth-child(1) > a:nth-child(3) > button:nth-child(1)"
    );
    this.contactUsButtonFooter = this.page.locator(
      'button[class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-accent bg-transparent focus:bg-accent hover:bg-accent hover-text-primary h-11 text-lg px-8 border-2 py-6 md:py-8 xl:h-18 xl:py-9 xl:border-2 xl:px-16 xl:text-xl rounded-3xl"]'
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

export class OfferPage {
  /**
   *
   * @param {import('@playwright/test'.Page)} page
   */
  constructor(page) {
    this.page = page;
    this.pricingTable = this.page.locator("div table").nth(0);
  }

  async goto() {
    await this.page.goto("https://rocketdev.com.pl/en/offer");
  }
}

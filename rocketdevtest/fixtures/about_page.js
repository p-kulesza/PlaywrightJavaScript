import { AboutUsLocators } from "../locators/aboutuspage_locators";
export class AboutUsPage {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.writeToUsButton = this.page.locator(
      "button[class='inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-accent bg-transparent focus:bg-accent hover:bg-accent hover-text-primary h-11 rounded-md px-8']"
    );
    this.contactUsButtonFooter = this.page.locator(
      "button[class='inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-accent bg-transparent focus:bg-accent hover:bg-accent hover-text-primary h-11 text-lg px-8 border-2 py-6 md:py-8 xl:h-18 xl:py-9 xl:border-2 xl:px-16 xl:text-xl rounded-3xl']"
    );
    this.privacyPolicyButton = this.page.locator("a[class='text-accent']");
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

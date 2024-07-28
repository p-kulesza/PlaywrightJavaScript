export class HomePage {
  /**
   *
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.homepageButton = this.page.getByText("Homepage");
    this.aboutUsButton = this.page.getByText("About Us");
    this.offerButton = this.page.getByText("Offer");
    this.faqButton = this.page.getByText("FAQ");
    this.contactButton = this.page.getByText("Contact");
    this.contactUsButton = this.page.getByText("Contact Us");
    this.checkOfferButton = this.page.getByText("Check out our offer!");
    this.checkDetailsButton = this.page.getByText("Check details");
    this.privacyPolicyButton = this.page.getByText("Privacy Policy");
  }

  async goto() {
    await this.page.goto("https://rocketdev.com.pl/en");
  }

  async navigateHomePage() {
    await this.homepageButton.isVisible();
    await this.homepageButton.click();
  }

  async navigateAboutUs() {
    await this.aboutUsButton.isVisible();
    await this.aboutUsButton.click();
  }

  async navigateOffer() {
    await this.offerButton.isVisible();
    await this.offerButton.click;
  }

  async naviagteFAQ() {
    await this.faqButton.isVisible();
    await this.faqButton.click();
  }

  async naviagetContact() {
    await this.contactButton.isVisible();
    await this.contactButton.click();
  }

  async checkReadyMadeTemplate() {
    const template_locator = this.page.locator(
      'div [class="rounded-lg p-1 border-2 border-accent-light"][0]'
    );
    await template_locator.getByText("Check details");
  }

  async checkIndividualProject() {
    const template_locator = this.page.locator(
      'div [class="rounded-lg p-1 animate-border bg-gradient-to-r from-yellow-400 via-orange-800 to-yellow-400 bg-[length:_400%_400%] [animation-duration:_6s]"]'
    );
    await template_locator.getByText("Check details");
  }

  async checkGraphicallyCustomizedWebsite() {
    const template_locator = this.page.locator(
      'div [class="rounded-lg p-1 border-2 border-accent-light"][1]'
    );
    await template_locator.getByText("Check details");
  }
}

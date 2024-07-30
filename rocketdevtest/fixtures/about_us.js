export class AboutUsPage {
  constructor(page) {
    this.page = page;
    this.writeToUsButton = this.page.locator();
    this.contactUsButtonFooter = this.page.locator('[href="/en/contact"]');
    this.privacyPolicyButton = this.page.locator(
      '[href="/en/privacy-policy"] a'
    );
  }

  async;
}

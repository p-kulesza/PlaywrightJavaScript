export class FAQPage {
  /**
   *
   * @param {import ('@playwright/test.Page')} page
   */
  constructor(page) {
    this.page = page;
    this.technicalQuestionsDropdowns = this.page.locator("#faq-tech");
    this.questionsAboutCooperationDropdowns = this.page.locator("#faq");
    this.contactUsButton = this.page.locator('[href="/en/contact"]');
    this.privacyPolicyButton = this.page.locator(
      '[href="/en/privacy-policy"] a'
    );
  }

  async goto() {
    await this.page.goto("https://rocketdev.com.pl/en/faq-en");
  }

  async getTechnicalQuestionsDropdown() {
    await this.technicalQuestionsDropdowns.isVisible();
    let element = await this.technicalQuestionsDropdowns;
    let innerText = await element.innerText();
    return innerText;
  }
}

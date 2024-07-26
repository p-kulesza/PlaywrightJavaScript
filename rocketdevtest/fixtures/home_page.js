export class HomePage {
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
}

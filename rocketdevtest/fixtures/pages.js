const test = require("@playwright/test");
const { ContactPage } = require("./contact_page");
const { HomePage } = require("./home_page");
const { OfferPage } = require("./offer_page");
const { FAQPage } = require("./faq_page");

exports.test = test.test.extend({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  offerPage: async ({ page }, use) => {
    const offerPage = new OfferPage(page);
    await use(offerPage);
  },
  faqPage: async ({ page }, use) => {
    const faqPage = new FAQPage(page);
    await use(faqPage);
  },
});
exports.expect = test.expect;

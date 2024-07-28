const test = require("@playwright/test");
const { ContactPage } = require("./contact_page");
const { HomePage } = require("./home_page");

exports.test = test.test.extend({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});
exports.expect = test.expect;

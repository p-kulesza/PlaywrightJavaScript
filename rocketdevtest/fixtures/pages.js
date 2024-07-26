const test = require("@playwright/test");
const { ContactPage } = require("./contact_page");

exports.test = test.test.extend({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
});
exports.expect = test.expect;

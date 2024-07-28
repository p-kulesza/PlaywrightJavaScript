const base = require("@playwright/test");
const { ContactPage } = require("./contact_page");

const test = base.test.extend({
  contactPage: async ({ page }, use, text) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
});

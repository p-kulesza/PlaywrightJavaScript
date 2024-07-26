const base = require("@playwright/test");
const { ContactPage } = require("./contact_page");

const test = base.test.extend({
  contactPage: async ({ page }, use, text) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.addUsername();
    await contactPage.addEmail();
    await contactPage.addRequest();
    await contactPage.checkPrivacyPolicy();
    await contactPage.clickSend();
    await contactPage.clickContacUs();
    await contactPage.cloudFlareWorkAround();
    await use(contactPage);
  },
});

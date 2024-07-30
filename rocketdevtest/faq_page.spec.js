const { test, expect } = require("./fixtures/pages");

test.beforeEach("setup", async ({ faqPage }) => {
  await faqPage.goto();
});

test("FAQ Page - Table Data", async ({ faqPage }) => {
  //await faqPage.goto();
});

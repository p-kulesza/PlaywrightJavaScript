const { test, expect } = require("./fixtures/pages");

test.beforeEach("setup", async ({ offerPage }) => {
  await offerPage.goto();
});

test("getTable", async ({ offerPage, page }) => {
  // Table iterations?
});

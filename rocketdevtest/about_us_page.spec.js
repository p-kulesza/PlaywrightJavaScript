const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(RocketDev);
});

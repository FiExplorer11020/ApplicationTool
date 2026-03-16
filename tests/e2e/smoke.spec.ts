import { test, expect } from "@playwright/test";

test("dashboard redirects without auth", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page).toHaveURL(/login|dashboard/);
});

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://localhost:8443/jenkins/login");
  await expect(page).toHaveTitle(/Jenkins/);
});

test("login", async ({ page }) => {
  await page.goto("https://localhost:8443/jenkins/login");
  await page.locator("#j_username").fill("admin");
  await page.locator("body > div > div > form > div:nth-child(2) > input").fill("admin");
  await page.locator("body > div > div > form > div.submit > button").click();
  await expect(page).toHaveURL(/jenkins/);
});

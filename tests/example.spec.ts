import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://localhost:8443/jenkins/login");
  await expect(page).toHaveTitle(/Jenkins/);
});

test("login", async ({ page }) => {
  await page.goto("https://localhost:8443/jenkins/login");
  await page.locator("#j_username").fill("admin");
  await page.locator("body > div > div > form > div:nth-child(2) > input").fill("admin");
  await page.screenshot({ path: "A.png" });
  await page.locator("body > div > div > form > div.submit > button").click();
  // URLのテスト。スクリーンショット取れないのかね
  await expect(page).toHaveURL(/jenkins/);
  await page.screenshot({ path: "B.png" });
  // テーブルを指定した状態でスクリーンショットしてみた。(idで指定してidの確認は気にしないでください…)
  await expect(page.locator("#projectstatus")).toHaveId("projectstatus");
  await page.screenshot({ path: "C.png" });
});

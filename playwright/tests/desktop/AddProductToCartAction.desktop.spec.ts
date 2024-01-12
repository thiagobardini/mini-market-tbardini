import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Mini Market/);
});

test.describe("Desktop | Add Product to Cart", () => {
  test("Add Products to Cart", async ({ page }) => {
    // Click on the "Start Shopping" button
    await page.getByRole("link", { name: "Start shopping" }).click();

    // Add product to cart
    await page.getByRole("button", { name: "$10" }).click();
    await expect(page.getByText("1", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "$10" }).click();
    await expect(page.getByText("2", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "$2.75" }).click();
    await expect(page.getByText("1", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: "$2.75" }).click();
    await page.getByText("2").nth(2).click();
    await page.getByRole("button", { name: "x" }).nth(1).click();
    await expect(page.getByRole("link", { name: "Cart (2)" })).toBeVisible();

    await page.getByRole("link", { name: "Cart (2)" }).click();
    await expect(page.getByRole("cell", { name: "2", exact: true })).toBeVisible();
    await page.getByRole("cell", { name: "$10" }).click();
    await page.getByRole("strong").click();
    await page.locator("th").filter({ hasText: "$" }).click();
  });
});

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

    await page.getByRole("button", { name: "$5" }).click();
    await page.getByRole("button", { name: "$5" }).click();
    await page.getByRole("button", { name: "$5" }).click();
    await expect(page.getByText("3", { exact: true })).toBeVisible();

    await page.getByRole("button", { name: "$3.25" }).click();
    await expect(page.getByText("1").nth(4)).toBeVisible();

    await expect(page.getByRole("link", { name: "Cart (7)" })).toBeVisible();
    await page.getByRole("link", { name: "Cart (7)" }).click();

    await page.getByText("Card number: 4242 4242 4242").click();
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("thiagobardini@icloud.com");
  });
});

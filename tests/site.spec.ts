import { test, expect } from "@playwright/test";
const slugs = ["max-childhood-meme", "lewis-hamilton-meme", "banana-leclerc"];
test("home, navigation, product routes and disabled checkout", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "RACING MEMES. REAL COLLECTIBLES.",
  );
  await expect(page.locator(".product-card")).toHaveCount(3);
  await expect(page.locator(".countries li")).toHaveCount(6);
  await page.getByRole("link", { name: "EXPLORE DROP 001" }).click();
  await expect(page).toHaveURL(/#\/collections\/drop-001$/);
  for (const slug of slugs) {
    await page.goto("./#/products/" + slug);
    await expect(
      page.getByRole("button", { name: "ADD TO CART" }),
    ).toBeDisabled();
    await expect(page.locator(".gallery img")).toBeVisible();
    expect(
      await page
        .locator(".gallery img")
        .evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0),
    ).toBe(true);
  }
  await page.goto("./#/cart");
  await expect(
    page.getByRole("button", { name: "CHECKOUT UNAVAILABLE" }),
  ).toBeDisabled();
  expect(errors).toEqual([]);
});
test("all information pages and 404 render without horizontal overflow", async ({
  page,
}) => {
  for (const route of [
    "",
    "collections/drop-001",
    ...slugs.map((s) => "products/" + s),
    "about",
    "shipping",
    "faq",
    "contact",
    "cart",
    "returns",
    "privacy",
    "terms",
    "not-a-page",
  ]) {
    await page.goto("./#/" + route);
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await expect(
    page.getByRole("heading", { name: "A little off track." }),
  ).toBeVisible();
});
test("responsive menu and FAQ are keyboard accessible", async ({ page }) => {
  await page.goto("./");
  const menu = page.locator(".menu-button");
  if (await menu.isVisible()) {
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "FAQ" })
      .click();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
  } else {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "FAQ" })
      .click();
  }
  const q = page.locator("summary").first();
  await q.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});

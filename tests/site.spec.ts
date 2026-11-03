import { test, expect, type Locator } from "@playwright/test";
const slugs = ["max-childhood-meme", "lewis-hamilton-meme", "banana-leclerc"];
test("static sharing metadata and responsive hero images", async ({
  page,
  request,
}) => {
  const response = await request.get("./");
  const html = await response.text();
  expect(html).toContain(
    "<title>PITBREAK — Racing memes. Real collectibles.</title>",
  );
  expect(html).toContain(
    "https://enshiken614-oss.github.io/PITBREAK/images/social.png",
  );
  const social = await request.get("./images/social.png");
  expect(social.ok()).toBe(true);
  expect(social.headers()["content-type"]).toContain("image/png");
  await page.goto("./");
  const image = page.locator(".hero-product img").first();
  await expectProductImage(image);
  expect(await image.evaluate((el: HTMLImageElement) => el.currentSrc)).toMatch(
    /-(320|640|1122)\.webp$/,
  );
  await expect(image).toHaveAttribute("fetchpriority", "high");
  await expect(page.locator(".product-card img").first()).toHaveAttribute(
    "loading",
    "lazy",
  );
});
async function expectProductImage(image: Locator) {
  await image.scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      image.evaluate(
        (el: HTMLImageElement) =>
          el.complete &&
          Number(
            el.currentSrc.match(/-(320|640|1122)\.webp$/)?.[1] ??
              el.naturalWidth,
          ) >= Math.min(el.clientWidth * window.devicePixelRatio, 1122) &&
          el.naturalHeight > el.naturalWidth,
      ),
    )
    .toBe(true);
}
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

  for (const image of await page
    .locator(".product-card .product-art img")
    .all()) {
    await expectProductImage(image);
  }

  await page.getByRole("link", { name: "EXPLORE DROP 001" }).click();
  await expect(page).toHaveURL(/#\/collections\/drop-001$/);
  for (const slug of slugs) {
    await page.goto("./#/products/" + slug);
    await expect(
      page.getByRole("button", { name: "ADD TO CART" }),
    ).toBeDisabled();
    const mainImage = page.locator(".gallery-main img");
    await expect(mainImage).toBeVisible();
    await expectProductImage(mainImage);
    const thumbs = page.locator(".gallery-thumbs button");
    await expect(thumbs).toHaveCount(2);
    await expect(thumbs.nth(0)).toContainText("FRONT");
    await expect(thumbs.nth(1)).toContainText("BACK");
    await thumbs.nth(1).click();
    await expect(page.locator(".gallery-view-label")).toHaveText("BACK");
    await expect(mainImage).toBeVisible();
    await expectProductImage(mainImage);
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

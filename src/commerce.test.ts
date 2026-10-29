import { describe, it, expect } from "vitest";
import { products, destinations, site } from "./data";
import {
  canPurchase,
  commerceEnabled,
  readiness,
  cartReducer,
  previewAdapter,
} from "./commerce";
describe("DROP 001 catalog", () => {
  it("has exactly the specified products in order with unique slugs", () => {
    expect(products.map((p) => p.title)).toEqual([
      "Max Childhood Meme",
      "Lewis Hamilton Meme",
      "Banana Leclerc",
    ]);
    expect(new Set(products.map((p) => p.slug)).size).toBe(3);
  });
  it("does not invent commercial details and uses approved photography", () => {
    for (const p of products) {
      expect(p.price).toBeNull();
      expect(p.currency).toBeNull();
      expect(p.dimensions).toBeNull();
      expect(p.weight).toBeNull();
      expect(p.stock).toBe("coming_soon");
      expect(p.gallery).toHaveLength(2);
      expect(p.gallery[0].src).toContain(`/products/${p.slug}/front.jpg`);
      expect(p.gallery[1].src).toContain(`/products/${p.slug}/back.jpg`);
      expect(p.gallery[0].alt.toLowerCase()).not.toContain("placeholder");
    }
    expect(site.contactEmail).toBeNull();
    expect(site.socialLinks).toEqual([]);
  });
  it("uses only the six planned markets", () =>
    expect(destinations).toEqual([
      "United States",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "Japan",
      "Mexico",
    ]));
});
describe("commerce safety", () => {
  it("blocks every preview product and refuses cart mutation", () => {
    expect(commerceEnabled()).toBe(false);
    for (const product of products) {
      expect(canPurchase(product)).toBe(false);
      expect(cartReducer([], { type: "add", product })).toEqual([]);
    }
  });
  it("requires every activation prerequisite and valid price/stock", () => {
    const ready = Object.fromEntries(
      Object.keys(readiness).map((k) => [k, true]),
    ) as typeof readiness;
    const product = {
      ...products[0],
      stock: "available" as const,
      price: 20,
      currency: "USD",
    };
    expect(canPurchase(product, ready)).toBe(true);
    for (const key of Object.keys(ready)) {
      expect(canPurchase(product, { ...ready, [key]: false })).toBe(false);
    }
    expect(canPurchase({ ...product, price: null }, ready)).toBe(false);
    expect(canPurchase({ ...product, stock: "sold_out" }, ready)).toBe(false);
  });
  it("never creates checkout in preview", async () => {
    await expect(previewAdapter.createCheckout([])).rejects.toThrow(
      "unavailable",
    );
  });
  it("supports removing and clearing future cart items", () => {
    const items = [{ productId: "test", quantity: 1 }];
    expect(cartReducer(items, { type: "remove", productId: "test" })).toEqual(
      [],
    );
    expect(cartReducer(items, { type: "clear" })).toEqual([]);
  });
});

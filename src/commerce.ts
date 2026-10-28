import type { Product } from "./data";
export type CartItem = { productId: string; quantity: number };
export type CommerceReadiness = {
  businessEntity: boolean;
  provider: boolean;
  prices: boolean;
  variants: boolean;
  inventory: boolean;
  shipping: boolean;
  taxes: boolean;
  policies: boolean;
  fulfillment: boolean;
  support: boolean;
  rights: boolean;
};
export const readiness: CommerceReadiness = {
  businessEntity: false,
  provider: false,
  prices: false,
  variants: false,
  inventory: false,
  shipping: false,
  taxes: false,
  policies: false,
  fulfillment: false,
  support: false,
  rights: false,
};
export const commerceEnabled = (checks: CommerceReadiness = readiness) =>
  Object.values(checks).every(Boolean);
export const canPurchase = (product: Product, checks = readiness) =>
  commerceEnabled(checks) &&
  product.stock === "available" &&
  product.price !== null &&
  Number.isFinite(product.price) &&
  product.price > 0 &&
  !!product.currency;
export interface CommerceAdapter {
  createCheckout(items: readonly CartItem[]): Promise<{ url: string }>;
}
export const previewAdapter: CommerceAdapter = {
  async createCheckout() {
    throw new Error("Checkout is unavailable in preview.");
  },
};
export type CartAction =
  | { type: "add"; product: Product }
  | { type: "remove"; productId: string }
  | { type: "clear" };
export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  if (action.type === "clear") return [];
  if (action.type === "remove")
    return state.filter((i) => i.productId !== action.productId);
  if (!canPurchase(action.product)) return state;
  const existing = state.find((i) => i.productId === action.product.id);
  return existing
    ? state.map((i) =>
        i.productId === action.product.id
          ? { ...i, quantity: i.quantity + 1 }
          : i,
      )
    : [...state, { productId: action.product.id, quantity: 1 }];
}

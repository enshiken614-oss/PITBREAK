import { createContext, type Dispatch } from "react";
import type { CartItem, CartAction } from "./commerce";
export const CartContext = createContext<{
  items: CartItem[];
  dispatch: Dispatch<CartAction>;
}>({ items: [], dispatch: () => {} });

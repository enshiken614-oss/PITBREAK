import { products } from "../data";
import { ProductCard } from "./ProductCard";
export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}

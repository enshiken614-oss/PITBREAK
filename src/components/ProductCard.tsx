import { Link } from "react-router-dom";
import type { Product } from "../data";
import { ProductImage } from "./ProductImage";
import { StatusLabel } from "./StatusLabel";
export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <article className="product-card">
      <Link
        className={"product-art tone-" + index}
        to={"/products/" + product.slug}
      >
        <span className="art-number">PB / 00{index + 1}</span>
        <ProductImage
          image={product.gallery[0]}
          sizes="(max-width: 480px) 90vw, (max-width: 800px) 45vw, 30vw"
        />
        <span className="art-bottom">
          DROP 001 <span>VIEW COLLECTIBLE ↗</span>
        </span>
      </Link>
      <div className="card-meta">
        <h3>
          <Link to={"/products/" + product.slug}>{product.title}</Link>
        </h3>
        <StatusLabel />
      </div>
      <p>{product.shortDescription}</p>
    </article>
  );
}

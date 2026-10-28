import { Link } from "react-router-dom";
import type { Product } from "../data";
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
        <img
          loading="lazy"
          src={import.meta.env.BASE_URL + product.gallery[0].src}
          alt={product.gallery[0].alt}
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

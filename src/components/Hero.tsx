import { Link } from "react-router-dom";
import { ProductImage } from "./ProductImage";
import { products } from "../data";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">SMALL SCALE. BIG INSIDE JOKE.</p>
        <h1>
          RACING MEMES. <br />
          <span>REAL COLLECTIBLES.</span>
        </h1>
        <p className="hero-description">
          From your feed to your shelf.
          <br />
          Motorsport’s unforgettable internet moments,
          <br />
          reimagined as little things to keep.
        </p>
        <Link className="button light" to="/collections/drop-001">
          EXPLORE DROP 001 <span>↗</span>
        </Link>
      </div>

      <div
        className="hero-products"
        aria-label="PITBREAK DROP 001 product photography"
      >
        <div className="hero-products-head">
          <span>DROP 001 / THE FIRST DROP</span>
          <span>03 COLLECTIBLES</span>
        </div>
        <div className="hero-product-stack">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className={`hero-product hero-product-${index + 1}`}
              aria-label={`View ${product.title}`}
            >
              <ProductImage
                image={product.gallery[0]}
                sizes="(max-width: 800px) 28vw, 14vw"
                loading="eager"
                priority={index === 0}
              />
              <span>{product.title}</span>
            </Link>
          ))}
        </div>
        <div className="hero-products-foot">
          <span>LIGHTS ON.</span>
          <span>MEMES MADE PHYSICAL.</span>
        </div>
      </div>
    </section>
  );
}

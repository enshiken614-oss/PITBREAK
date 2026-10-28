import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import { canPurchase } from "../commerce";
import { CartContext } from "../cart-context";
import { Meta } from "../components/Meta";
import { StatusLabel } from "../components/StatusLabel";
import { ProductGallery } from "../components/ProductGallery";
import { NotFound } from "./NotFound";
export function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { dispatch } = useContext(CartContext);
  if (!product) return <NotFound />;
  return (
    <section className="section">
      <Meta title={product.seoTitle} description={product.seoDescription} />
      <Link className="text-link" to="/collections/drop-001">
        ← Back to Drop 001
      </Link>
      <div className="product-detail">
        <ProductGallery key={product.id} product={product} />
        <div>
          <p className="eyebrow">DROP 001 / WORKING PRODUCT TITLE</p>
          <h1>{product.title}</h1>
          <StatusLabel />
          <p className="page-intro">{product.shortDescription}</p>
          <p>{product.description}</p>
          <p className="price">Price coming soon</p>
          <button
            className="button"
            disabled={!canPurchase(product)}
            aria-describedby="purchase-note"
            onClick={() => dispatch({ type: "add", product })}
          >
            ADD TO CART — COMING SOON
          </button>
          <p id="purchase-note" className="fine">
            Preview only. Checkout is inactive and no orders can be placed.
          </p>
          <dl className="specs">
            {[
              ["Dimensions", product.dimensions],
              ["Weight", product.weight],
              ["Materials", null],
              ["Packaging details", null],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value ?? "Details coming soon"}</dd>
              </div>
            ))}
          </dl>
          <h2 className="minor-title">Shipping</h2>
          <p>{product.shippingNotes}</p>
          <p className="fine">
            Independent fan project. Not affiliated with or endorsed by any
            driver, team or racing organization. Rights review is pending before
            sales.
          </p>
        </div>
      </div>
    </section>
  );
}

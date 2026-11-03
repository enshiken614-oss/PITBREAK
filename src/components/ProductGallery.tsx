import { useState } from "react";
import { ProductImage } from "./ProductImage";
import type { Product } from "../data";

export function ProductGallery({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const current = product.gallery[selected];
  const labels = ["FRONT", "BACK"];

  return (
    <div className="gallery">
      <div className="gallery-main">
        <ProductImage
          image={current}
          sizes="(max-width: 800px) 90vw, 50vw"
          loading="eager"
          priority
        />
        <span className="gallery-view-label">
          {labels[selected] ?? `VIEW ${selected + 1}`}
        </span>
      </div>
      {product.gallery.length > 1 && (
        <div className="gallery-thumbs" aria-label="Product gallery">
          {product.gallery.map((image, i) => (
            <button
              key={image.src}
              className={selected === i ? "is-active" : ""}
              aria-label={`View ${product.title} ${labels[i]?.toLowerCase() ?? `image ${i + 1}`}`}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <ProductImage image={{ ...image, alt: "" }} sizes="120px" />
              <span>{labels[i] ?? `VIEW ${i + 1}`}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

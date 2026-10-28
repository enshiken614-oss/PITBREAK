import { useState } from "react";
import type { Product } from "../data";
export function ProductGallery({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="gallery">
      <img
        src={import.meta.env.BASE_URL + product.gallery[selected].src}
        alt={product.gallery[selected].alt}
      />
      <p>PHOTO PLACEHOLDER · Authentic photography pending</p>
      {product.gallery.length > 1 && (
        <div aria-label="Gallery images">
          {product.gallery.map((image, i) => (
            <button
              key={image.src}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              Image {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

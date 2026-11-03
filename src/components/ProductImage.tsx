import type { Product } from "../data";

export function ProductImage({
  image,
  sizes,
  loading = "lazy",
  priority = false,
}: {
  image: Product["gallery"][number];
  sizes: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
}) {
  const base = import.meta.env.BASE_URL;
  const stem = image.src.replace(/\.jpg$/, "");
  return (
    <picture className="product-picture">
      <source
        type="image/webp"
        srcSet={[320, 640, 1122]
          .map((width) => `${base}${stem}-${width}.webp ${width}w`)
          .join(", ")}
        sizes={sizes}
      />
      <img
        src={base + image.src}
        alt={image.alt}
        width={1122}
        height={1402}
        loading={loading}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}

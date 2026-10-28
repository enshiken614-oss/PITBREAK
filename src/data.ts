export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  gallery: { src: string; alt: string }[];
  price: number | null;
  currency: string | null;
  stock: "coming_soon" | "available" | "sold_out";
  dimensions: string | null;
  weight: string | null;
  shippingNotes: string;
  seoTitle: string;
  seoDescription: string;
};
const entries = [
  [
    "max-childhood-meme",
    "Max Childhood Meme",
    "A childhood internet moment, made shelf-sized.",
    "A childhood toilet meme miniature, with red and black blister-style packaging and a warm-lit display. Final materials and product specifications are pending.",
  ],
  [
    "lewis-hamilton-meme",
    "Lewis Hamilton Meme",
    "A familiar meme. A whole new seat on your shelf.",
    "A seated, strapped-chair meme miniature, with blue, white and pink packaging and a warm-lit display. Final materials and product specifications are pending.",
  ],
  [
    "banana-leclerc",
    "Banana Leclerc",
    "A little yellow. A lot of personality.",
    "A banana-costume seated miniature, with yellow packaging and a warm-lit display. Final materials and product specifications are pending.",
  ],
];
export const products: Product[] = entries.map(
  ([slug, title, shortDescription, description]) => ({
    id: slug,
    slug,
    title,
    shortDescription,
    description,
    gallery: [
      {
        src: `images/products/${slug}.svg`,
        alt: `Clearly labeled placeholder for ${title}; authentic product photography pending`,
      },
    ],
    price: null,
    currency: null,
    stock: "coming_soon",
    dimensions: null,
    weight: null,
    shippingNotes:
      "Destinations, services, rates, duties and delivery times are to be confirmed. Checkout is not active.",
    seoTitle: `${title} | PITBREAK`,
    seoDescription: shortDescription,
  }),
);
export const destinations = [
  "United States",
  "United Kingdom",
  "Netherlands",
  "Italy",
  "Japan",
  "Mexico",
];
export const site: {
  contactEmail: string | null;
  socialLinks: { label: string; url: string }[];
  canonicalOrigin: string | null;
} = { contactEmail: null, socialLinks: [], canonicalOrigin: null };
export const faq = [
  [
    "Can I order yet?",
    "Not yet. This is the DROP 001 preview. Prices, inventory and checkout are still being confirmed.",
  ],
  [
    "Are these the final product photos?",
    "No. Every gallery is a clearly labeled placeholder. The creator is preparing authentic high-resolution product photography.",
  ],
  [
    "Where will you ship?",
    "Our planned test markets are the United States, United Kingdom, Netherlands, Italy, Japan and Mexico. These are not confirmed shipping destinations.",
  ],
  [
    "How can I follow the launch?",
    "Check back here for updates. Verified social links and support contact details will be added when confirmed.",
  ],
  [
    "Are returns available?",
    "The return and refund policy is not finalized. There are no live orders in this preview.",
  ],
];
export const policies = {
  returns: {
    title: "Returns & refunds",
    body: "Draft — return eligibility, refund terms, procedures and timelines have not been finalized. Checkout is inactive. Confirmed policies will be published before orders open.",
  },
  privacy: {
    title: "Privacy",
    body: "Draft — this preview has no newsletter form, customer accounts, payment collection or analytics integration. The final privacy policy, including any future providers, data handling and consent requirements, is pending review before commerce activation.",
  },
  terms: {
    title: "Terms",
    body: "Draft — commercial terms are pending review. This website is a preview and cannot accept orders. Product names are working titles and specifications are not final. No licensing or legal clearance is asserted.",
  },
};

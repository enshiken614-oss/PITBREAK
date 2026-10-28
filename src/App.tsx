import { useReducer } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { site, policies } from "./data";
import { cartReducer } from "./commerce";
import { CartContext } from "./cart-context";
import { Layout } from "./components/Layout";
import { Page } from "./components/Page";
import { CountryList } from "./components/CountryList";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { ProductDetail } from "./pages/ProductDetail";
import { FAQ } from "./pages/FAQ";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
export function App() {
  const [items, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ items, dispatch }}>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collections/drop-001" element={<Collection />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route
              path="about"
              element={
                <Page
                  title="For the inside joke."
                  description="PITBREAK is an independent motorsport-inspired collectibles project."
                >
                  <div className="prose">
                    <h2>Internet moments. Something to keep.</h2>
                    <p>
                      We’re here for the playful side of racing culture: the
                      shared references and tiny moments fans remember long
                      after a weekend ends. Our first drop brings three of those
                      moments into miniature.
                    </p>
                    <p>
                      We want to put independent creators and their work in
                      front of an international audience. For now, we’re
                      starting small: one brand, one drop, three collectibles.
                    </p>
                    <h2>Independent by design.</h2>
                    <p>
                      PITBREAK is not affiliated with or endorsed by Formula 1,
                      any racing team, driver or rights holder. Product names
                      are working titles. The maker’s resale permission does not
                      establish third-party IP licenses; merchandise rights
                      require review before sales.
                    </p>
                  </div>
                </Page>
              }
            />
            <Route
              path="shipping"
              element={
                <Page
                  title="A world of possibilities. A few details to confirm."
                  description="Planned destinations only — shipping is not yet available and checkout is inactive."
                >
                  <CountryList />
                  <dl className="specs">
                    {[
                      "Shipping rates",
                      "Shipping services",
                      "Delivery timelines",
                      "Duties & taxes",
                    ].map((x) => (
                      <div key={x}>
                        <dt>{x}</dt>
                        <dd>TBC</dd>
                      </div>
                    ))}
                  </dl>
                  <p>
                    These are proposed test markets, not shipping commitments.
                    Confirmed services and policies will be published before
                    checkout opens.
                  </p>
                </Page>
              }
            />
            <Route path="faq" element={<FAQ />} />
            <Route
              path="contact"
              element={
                <Page
                  title="Let’s stay in the loop."
                  description="Contact details coming soon."
                >
                  {site.contactEmail ? (
                    <a
                      className="text-link"
                      href={"mailto:" + site.contactEmail}
                    >
                      {site.contactEmail}
                    </a>
                  ) : (
                    <p>
                      Our customer support contact has not been confirmed.
                      Verified contact details will appear here before orders
                      open.
                    </p>
                  )}
                  {site.socialLinks.map((s) => (
                    <a key={s.url} href={s.url} rel="noopener noreferrer">
                      {s.label}
                    </a>
                  ))}
                </Page>
              }
            />
            <Route path="cart" element={<Cart />} />
            {Object.entries(policies).map(([path, policy]) => (
              <Route
                key={path}
                path={path}
                element={
                  <Page
                    title={policy.title}
                    eyebrow="DRAFT POLICY / NOT FINALIZED"
                    description="Pending review before commerce activation."
                  >
                    <div className="notice">{policy.body}</div>
                  </Page>
                }
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </CartContext.Provider>
  );
}

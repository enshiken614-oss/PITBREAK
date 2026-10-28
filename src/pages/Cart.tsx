import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart-context";
import { Page } from "../components/Page";
export function Cart() {
  const { items } = useContext(CartContext);
  return (
    <Page title="Your bag" description="A place for your future favorites.">
      <div className="empty-cart">
        <span className="bag-icon" aria-hidden="true">
          ↗
        </span>
        <h2>
          {items.length
            ? "Your preview bag"
            : "The starting grid is still getting ready."}
        </h2>
        <p>
          Cart and checkout are not active. No orders or payment details can be
          submitted.
        </p>
        <button className="button" disabled>
          CHECKOUT UNAVAILABLE
        </button>
        <Link className="text-link" to="/collections/drop-001">
          Explore Drop 001 ↗
        </Link>
      </div>
    </Page>
  );
}

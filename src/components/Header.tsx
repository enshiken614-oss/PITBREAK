import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div className="announcement">
        INDEPENDENT COLLECTIBLES · DROP 001 PREVIEW
      </div>
      <header>
        <Link className="wordmark" to="/" aria-label="PITBREAK home">
          PITBREAK
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="main-nav"
          className={open ? "open" : ""}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-button")
                ?.focus();
            }
          }}
        >
          <NavLink to="/collections/drop-001">Drop 001</NavLink>
          <NavLink to="/about">Our story</NavLink>
          <NavLink to="/shipping">Shipping</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </nav>
        <Link className="cart-link" to="/cart" aria-label="Cart, preview only">
          Bag <span>0</span>
        </Link>
      </header>
    </>
  );
}

import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link className="wordmark" to="/">
          PITBREAK
        </Link>
        <p>
          For the moments that live
          <br />
          rent-free in your head.
        </p>
      </div>
      <div className="footer-links">
        {[
          ["About", "about"],
          ["Shipping", "shipping"],
          ["FAQ", "faq"],
          ["Contact", "contact"],
          ["Returns", "returns"],
          ["Privacy", "privacy"],
          ["Terms", "terms"],
        ].map(([label, path]) => (
          <Link key={path} to={"/" + path}>
            {label}
          </Link>
        ))}
      </div>
      <p className="fine">
        Independent fan project. Not affiliated with or endorsed by Formula 1,
        any racing team, driver or rights holder. Merchandise rights require
        review before sales. Policy pages are drafts.
      </p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PITBREAK</span>
        <span>RACING MEMES. REAL COLLECTIBLES.</span>
      </div>
    </footer>
  );
}

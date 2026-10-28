import { Link } from "react-router-dom";
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">SMALL SCALE. BIG INSIDE JOKE.</p>
        <h1>
          RACING MEMES.
          <br />
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
        className="hero-art"
        aria-label="DROP 001 editorial graphic, not a product photograph"
      >
        <span className="hero-tag">THE FIRST DROP</span>
        <div className="drop-type">
          DROP
          <br />
          <span>001</span>
        </div>
        <div className="hero-art-footer">
          <span>
            THREE MEMES.
            <br />
            ONE STARTING GRID.
          </span>
          <span>
            PRODUCT PHOTOS
            <br />
            COMING SOON ↗
          </span>
        </div>
      </div>
    </section>
  );
}

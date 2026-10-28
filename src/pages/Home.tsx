import { Link } from "react-router-dom";
import { Meta } from "../components/Meta";
import { Hero } from "../components/Hero";
import { ProductGrid } from "../components/ProductGrid";
import { CountryList } from "../components/CountryList";
export function Home() {
  return (
    <>
      <Meta
        title="PITBREAK — Racing memes. Real collectibles."
        description="Meet DROP 001: three independent motorsport-inspired collectibles. Product photography and launch details coming soon."
      />
      <Hero />
      <div className="ticker" aria-hidden="true">
        OFF THE FEED. ON YOUR SHELF. <span>✳</span> MADE FOR THE INSIDE JOKE.{" "}
        <span>✳</span> OFF THE FEED. ON YOUR SHELF.
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MEET THE STARTING GRID</p>
            <h2>
              Drop 001<span className="small-count">(03)</span>
            </h2>
          </div>
          <Link className="text-link" to="/collections/drop-001">
            Explore the collection ↗
          </Link>
        </div>
        <ProductGrid />
      </section>
      <section className="story-band">
        <p className="eyebrow">THE CULTURE, IN MINIATURE</p>
        <h2>
          You had to
          <br />
          be there.
          <br />
          <span>Now it’s here.</span>
        </h2>
        <div>
          <p>
            Some moments outlive the race. The jokes, the reactions, the
            wonderfully weird bits. PITBREAK is an independent project turning
            that shared internet culture into collectibles with character.
          </p>
          <Link className="text-link" to="/about">
            A little more about us ↗
          </Link>
        </div>
      </section>
      <section className="section destinations">
        <div>
          <p className="eyebrow">WHERE NEXT?</p>
          <h2>
            A few places
            <br />
            on our radar.
          </h2>
          <p>
            Six planned test markets. Shipping is not yet available;
            destinations and launch details are still being confirmed.
          </p>
          <Link className="text-link" to="/shipping">
            Shipping updates ↗
          </Link>
        </div>
        <CountryList />
      </section>
      <section className="launch">
        <span className="eyebrow">NO LIGHTS OUT. YET.</span>
        <h2>Good things take a pit stop.</h2>
        <p>
          New product photos, launch details and verified social links are on
          the way. Check back here for updates.
        </p>
        <span className="status">LAUNCH DETAILS COMING SOON</span>
      </section>
    </>
  );
}

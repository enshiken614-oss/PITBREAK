import { Link } from "react-router-dom";
import { Page } from "../components/Page";
export function NotFound() {
  return (
    <Page
      title="A little off track."
      eyebrow="404 / WRONG TURN"
      description="We couldn’t find that page. Let’s get you back to the starting grid."
    >
      <Link className="button" to="/">
        BACK TO HOME ↗
      </Link>
    </Page>
  );
}

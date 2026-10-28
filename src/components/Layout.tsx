import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
export function Layout() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

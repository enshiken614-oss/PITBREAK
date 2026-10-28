import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export function Meta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
  }, [title, description, pathname]);
  return null;
}

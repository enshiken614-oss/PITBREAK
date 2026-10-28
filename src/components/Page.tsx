import type { ReactNode } from "react";
import { Meta } from "./Meta";
export function Page({
  title,
  eyebrow = "PITBREAK / FIELD NOTES",
  description,
  children,
}: {
  title: string;
  eyebrow?: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="section page">
      <Meta title={title + " | PITBREAK"} description={description} />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{description}</p>
      {children}
    </section>
  );
}

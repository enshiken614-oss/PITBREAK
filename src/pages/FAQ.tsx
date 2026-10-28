import { faq } from "../data";
import { Page } from "../components/Page";
export function FAQ() {
  return (
    <Page
      title="A few good questions."
      description="What we can tell you so far."
    >
      <div className="faqs">
        {faq.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </Page>
  );
}

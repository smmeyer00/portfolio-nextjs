import type { Metadata } from "next";
import { openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Software Engineer`,
  },
  description: siteConfig.shortDescription,
  openGraph: {
    ...openGraphBase,
    title: `${siteConfig.name} | Software Engineer`,
    description: siteConfig.shortDescription,
    type: "website",
    url: siteConfig.baseUrl,
  },
};

export default function HomePage() {
  return (
    <div className="site-frame page-content">
      <section className="essential" aria-labelledby="introduction-heading">
        <p className="overline reveal">Software engineer · {siteConfig.location}</p>
        <h1 id="introduction-heading" className="reveal reveal-1">
          I’m Steven Meyer. I build product systems at Amazon Music.
        </h1>
        <p className="summary reveal reveal-2">
          My work spans frontend and backend, with a current focus on marketing
          technology, server-driven interfaces, and AI-assisted tooling.
        </p>

        <dl className="facts reveal reveal-3">
          <div>
            <dt>Current</dt>
            <dd>Software Engineer, Amazon Music</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Product systems · Frontend + backend</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>B.S. Computer Science</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

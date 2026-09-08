import type { Metadata } from "next";
import ManShell from "@/components/ManShell";
import { openGraphBase, selectedWork, siteConfig } from "@/data/site";

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
    <ManShell name="STEVEN-MEYER(1)" footerName="STEVEN-MEYER(1)">
      <section>
        <h2>NAME</h2>
        <p><strong>steven-meyer</strong> — software engineer at Amazon Music</p>
      </section>

      <section>
        <h2>SYNOPSIS</h2>
        <p><strong>steven</strong> [--frontend] [--backend] [--product-systems] [--verbose]</p>
      </section>

      <section>
        <h2>DESCRIPTION</h2>
        <p>
          Builds marketing tech at Amazon Music: server-driven experiences,
          AI-assisted tooling.
        </p>
      </section>

      <section>
        <h2>OPTIONS</h2>
        <dl className="options">
          <div><dt>--frontend</dt><dd>User-facing product interfaces.</dd></div>
          <div><dt>--backend</dt><dd>The systems behind them.</dd></div>
          <div><dt>--product-systems</dt><dd>Structure and execution.</dd></div>
        </dl>
      </section>

      <section>
        <h2>SYSTEMS</h2>
        <dl className="options">
          {selectedWork.map((w) => (
            <div key={w.number}>
              <dt>--{w.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}</dt>
              <dd>{w.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>EXAMPLES</h2>
        <div className="examples">
          <p><span className="ex-prompt">$</span> steven --verbose</p>
          <p><span className="ex-prompt">$</span> curl man.smmeyer.dev</p>
        </div>
      </section>

      <div className="duo">
        <section>
          <h2>ENVIRONMENT</h2>
          <dl className="environment narrow">
            <div><dt>LOCATION</dt><dd>{siteConfig.location}</dd></div>
            <div><dt>EDUCATION</dt><dd>B.S. Computer Science</dd></div>
          </dl>
        </section>

        <section>
          <h2>CONTACT</h2>
          <p className="contact-line">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </section>
      </div>

      <div className="duo">
        <section>
          <h2>EXIT STATUS</h2>
          <dl className="deflist narrow">
            <div><dt>0</dt><dd>Available for interesting work.</dd></div>
            <div><dt>1</dt><dd>Heads-down — try mail(1).</dd></div>
          </dl>
        </section>

        <section>
          <h2>HISTORY</h2>
          <dl className="deflist narrow">
            <div><dt>2026</dt><dd>Amazon Music.</dd></div>
            <div><dt>2023</dt><dd>B.S. Computer Science, SIUE.</dd></div>
          </dl>
        </section>
      </div>

      <section>
        <h2>BUGS</h2>
        <p>Known bug: over-engineers side projects.</p>
      </section>

      <section>
        <h2>SEE ALSO</h2>
        <p className="see-also">
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">github(1)</a>,{" "}
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">linkedin(1)</a>,{" "}
          <a href={`mailto:${siteConfig.email}`}>mail(1)</a>
        </p>
      </section>
    </ManShell>
  );
}

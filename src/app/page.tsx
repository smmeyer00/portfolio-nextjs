import Image from "next/image";
import type { Metadata } from "next";
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
    <div className="site-frame page-content">
      <section className="intro" aria-labelledby="introduction-heading">
        <p className="section-index intro-reveal">01 / Introduction</p>
        <div className="intro-copy">
          <h1 id="introduction-heading" className="intro-title intro-reveal intro-reveal-delay-1">
            I’m Steven, a software engineer at Amazon Music.
          </h1>
          <p className="intro-summary intro-reveal intro-reveal-delay-2">
            I build product systems across frontend and backend, currently focused on
            marketing technology and AI-assisted tooling.
          </p>
          <p className="intro-meta intro-reveal intro-reveal-delay-3">
            {siteConfig.location} <span aria-hidden="true">·</span> B.S. Computer Science
          </p>
        </div>
      </section>

      <section id="work" className="work-section" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="section-index">02 / Selected work</p>
          <h2 id="work-heading">Across interface and infrastructure.</h2>
        </div>

        <div className="work-list">
          {selectedWork.map((item) => (
            <article className="work-row" key={item.number}>
              <p className="work-number" aria-hidden="true">{item.number}</p>
              <h3>{item.title}</h3>
              <div className="work-detail">
                <p className="work-description">{item.description}</p>
                <p className="work-focus">{item.focus}</p>
              </div>
              <p className="work-status">{item.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="field-note" aria-labelledby="field-note-heading">
        <div className="field-note-copy">
          <p className="section-index">03 / Elsewhere</p>
          <h2 id="field-note-heading">Away from work.</h2>
          <p>
            I’m usually reading philosophy or fiction, hiking somewhere in California,
            or building small experiments.
          </p>
        </div>

        <figure className="field-note-image">
          <Image
            src="/kings_canyon_film.jpg"
            alt="Looking out over a mountain valley in Kings Canyon, California"
            fill
            sizes="(max-width: 720px) 100vw, 62vw"
            className="field-note-photo"
          />
          <span className="image-texture" aria-hidden="true" />
          <figcaption>Kings Canyon, California · 35mm</figcaption>
        </figure>
      </section>
    </div>
  );
}

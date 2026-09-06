import type { Metadata } from "next";
import { openGraphBase, profileIndex, siteConfig } from "@/data/site";

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
      <section className="index-layout" aria-labelledby="profile-heading">
        <div className="masthead reveal">
          <p className="index-label">Steven Meyer / Software Engineer</p>
          <h1 id="profile-heading">Steven<br />Meyer</h1>
          <p className="masthead-note">
            Product systems across frontend and backend.
          </p>
        </div>

        <dl className="profile-index reveal reveal-delay">
          {profileIndex.map((item, index) => (
            <div key={item.label} className="index-row">
              <dt>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

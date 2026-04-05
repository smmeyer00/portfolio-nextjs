import type { Metadata } from "next";
import SectionIntro from "@/components/SectionIntro";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { aboutFacts, aboutTimeline, openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Steven Meyer, a software engineer at Amazon Music working across frontend and backend.",
  openGraph: {
    ...openGraphBase,
    title: `About | ${siteConfig.name}`,
    description:
      "Learn more about Steven Meyer, a software engineer at Amazon Music working across frontend and backend.",
    type: "website",
    url: `${siteConfig.baseUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="content-shell">
        <AnimatedSection>
          <SectionIntro
            eyebrow="About"
            title="A product-minded software engineer working across frontend and backend."
            description="I’m a software engineer at Amazon Music. I work across frontend and backend, and I care about building products that are useful, understandable, and worth maintaining."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection className="section-frame rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-300">
              Current context
            </p>
            <p className="mt-5 text-lg leading-8 text-background-300">
              I currently build marketing technology at {siteConfig.employer},
              working across user-facing interfaces and the systems behind them.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="section-frame rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-300">
              At a glance
            </p>
            <div className="mt-5 grid gap-3">
              {aboutFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.25rem] border border-white/8 bg-white/4 px-4 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-background-400">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-background-200">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-24">
          <SectionIntro
            eyebrow="Timeline"
            title="A short timeline."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-10 space-y-5" staggerDelay={0.08}>
          {aboutTimeline.map((item) => (
            <StaggerItem key={item.title}>
              <article className="section-frame rounded-[1.75rem] px-6 py-6 sm:px-8">
                <div className="grid gap-4 lg:grid-cols-[9rem_1fr]">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-300">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-background-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Button from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroImage } from "@/components/HeroImage";
import { openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
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
    <section className="page-shell">
      <div className="content-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection trigger="immediate" className="max-w-3xl">
            <span className="eyebrow">Product-minded software engineer</span>
            <h1 className="display-title mt-6 text-[3.6rem] text-foreground sm:text-[4.8rem] lg:text-[6.2rem]">
              I build software that stays understandable as it grows.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 muted-copy sm:text-xl">
              {siteConfig.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" size="lg">
                About me
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Start a conversation
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection trigger="immediate" direction="left" delay={0.12}>
            <HeroImage />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

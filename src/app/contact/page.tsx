import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionIntro from "@/components/SectionIntro";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { socialLinks } from "@/data/social";
import { openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Steven Meyer about product and engineering work.",
  openGraph: {
    ...openGraphBase,
    title: `Contact | ${siteConfig.name}`,
    description: "Get in touch with Steven Meyer about product and engineering work.",
    type: "website",
    url: `${siteConfig.baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section className="page-shell">
      <div className="content-shell">
        <AnimatedSection>
          <SectionIntro
            eyebrow="Contact"
            title="Get in touch."
            description="If you want to talk about a product or engineering problem, send a note. A little context goes a long way."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <AnimatedSection className="section-frame rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-300">
                What to include
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "What you're building",
                  "Where you're stuck",
                  "Any timeline or constraints",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.3rem] border border-white/8 bg-white/4 px-4 py-4 text-sm text-background-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid gap-4" staggerDelay={0.08}>
              {socialLinks.map((method) => (
                <StaggerItem key={method.name}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="section-frame flex items-center gap-4 rounded-[1.6rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/18"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-300">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-background-400">
                        {method.name}
                      </p>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <AnimatedSection delay={0.08} className="section-frame rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-300">
              Send a note
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-background-300">
              Email is easiest, but LinkedIn works too. A few sentences about
              what you&apos;re working on and what you need help with are enough.
            </p>

            <div className="fine-rule my-6" />
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

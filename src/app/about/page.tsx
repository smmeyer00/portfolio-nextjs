import type { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const baseUrl = "https://smmeyer.dev";

const sections = [
  {
    title: "Professional Journey",
    content:
      "From writing my first lines of code in high school to now building marketing technology at Amazon Music in San Francisco, I've cultivated a passion for crafting robust, scalable software solutions. I graduated cum laude with a B.S. in Computer Science and minor in Mathematics from Southern Illinois University Edwardsville in 2023, following a successful internship as a Software Development Engineer at Amazon.",
  },
  {
    title: "What I Do",
    content:
      "At Amazon Music, I work on marketing technology systems that power in-app messaging experiences. My role involves both frontend and backend development, from building intuitive interfaces for marketing teams to architecting the microservices that power them.",
  },
  {
    title: "Technical Interests",
    content:
      "Beyond my day-to-day work, I stay actively engaged with the latest developments in software engineering. I'm particularly interested in modern JavaScript frameworks, emerging startups, and the evolving landscape of AI/ML. I enjoy building side projects that let me explore new technologies and challenge my skills.",
  },
  {
    title: "Beyond the Code",
    content:
      "I maintain an active lifestyle and particularly enjoy hiking and exploring the natural beauty of California since moving to the Bay Area. Outside of technology, I've recently started pursuing my interest in travel, seeking new experiences and perspectives around the world.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Steven Meyer's journey as a Software Engineer at Amazon Music, technical interests, and background.",
  openGraph: {
    title: "About | Steven Meyer",
    description: "Learn about Steven Meyer's journey as a Software Engineer at Amazon Music, technical interests, and background.",
    url: `${baseUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-4xl mx-auto">
        <AnimatedSection className="mb-16">
          <span className="inline-block text-accent-500 font-medium text-sm uppercase tracking-wider mb-4">
            Get to know me
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            About Me
          </h1>
        </AnimatedSection>

        <StaggerContainer className="space-y-12" staggerDelay={0.15}>
          {sections.map((section) => (
            <StaggerItem key={section.title}>
              <section className="relative group">
                {/* Decorative line */}
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-500/0 via-accent-500/50 to-accent-500/0 group-hover:via-accent-500 transition-all duration-500" />

                <div className="pl-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-accent-500 mb-4 flex items-center">
                    <span className="absolute -left-[5px] w-2.5 h-2.5 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    {section.title}
                  </h2>
                  <p className="text-lg text-background-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </section>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

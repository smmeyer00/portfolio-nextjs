import Image from "next/image";
import Button from "@/components/Button";
import { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { HeroImage } from "@/components/HeroImage";

const baseUrl = "https://smmeyer.dev";

export const metadata: Metadata = {
  title: "Home",
  description: "I build.",
  openGraph: {
    title: "Steven Meyer | Software Engineer",
    description: "I build.",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/kings_canyon_film.jpg`,
        alt: "Steven Meyer - Software Engineer",
      },
    ],
  },
};

export default function Home() {
  return (
    <section className="min-h-screen bg-background-900 flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - Left Side */}
          <div className="flex-1 lg:pr-8">
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1]">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                    Steven
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-xl sm:text-2xl text-background-400 max-w-lg leading-relaxed">
                  I write code for a living. The challenge is doing it in a way that holds up over time.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button href="/projects">View My Work</Button>
                  <Button href="/contact">Get In Touch</Button>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-center gap-6 pt-6 text-sm text-background-400 border-t border-background-800 mt-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                    <span>3+ Years Experience</span>
                  </div>
                  <span className="text-background-700">•</span>
                  <span>Full Stack</span>
                  <span className="text-background-700">•</span>
                  <span>SF Bay Area</span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Image - Right Side */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <AnimatedSection delay={0.2} direction="left">
              <HeroImage />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
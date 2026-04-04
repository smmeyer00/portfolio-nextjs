import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const baseUrl = "https://smmeyer.dev";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Steven Meyer's portfolio of software engineering projects and side projects.",
  openGraph: {
    title: "Projects | Steven Meyer",
    description: "Explore Steven Meyer's portfolio of software engineering projects and side projects.",
    url: `${baseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-accent-500 font-medium text-sm uppercase tracking-wider mb-4">
            Selected Work
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            My Projects
          </h1>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-background-300">
              A collection of my recent work and side projects. Each project
              represents different challenges and learning experiences.
            </p>
            <p className="text-background-400">
              <i>
                <span className="font-semibold">
                  <u>Note</u>:
                </span>{" "}
                Page under progress. All content is placeholder.
              </i>
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

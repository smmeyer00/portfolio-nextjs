import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Steven Meyer's portfolio of software engineering projects and side projects.",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          My Projects
        </h1>
        <h2 className="text-2xl font-bold text-accent-500 mb-4 text-center"></h2>
        <div className="mb-12 space-y-4">
          <p className="text-background-300 text-center max-w-2xl mx-auto">
            A collection of my recent work and side projects. Each project
            represents different challenges and learning experiences.
          </p>
          <p className="text-background-300 text-center max-w-2xl mx-auto">
            <i>
              <span className="font-semibold">
                <u>Note</u>:
              </span>{" "}
              Page under progress. All content is placeholder.
            </i>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

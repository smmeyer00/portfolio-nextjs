import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <section className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-accent-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Project Not Found
        </h2>
        <p className="text-background-300 mb-8">
          The project you&apos;re looking for doesn&apos;t exist or hasn&apos;t
          been added yet. Check back later or browse the projects page.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-accent-500 text-foreground px-8 py-3 rounded-full hover:bg-accent-600 transition duration-300"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}

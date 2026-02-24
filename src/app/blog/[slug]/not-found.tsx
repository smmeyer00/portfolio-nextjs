import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <section className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-accent-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h2>
        <p className="text-background-400 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-accent-500 text-foreground font-semibold rounded-lg hover:bg-accent-600 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </section>
  );
}
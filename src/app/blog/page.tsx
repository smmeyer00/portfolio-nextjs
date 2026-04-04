import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const baseUrl = "https://smmeyer.dev";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights on software engineering and technology.",
  openGraph: {
    title: "Blog | Steven Meyer",
    description: "Thoughts, tutorials, and insights on software engineering and technology.",
    url: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="mb-12">
          <span className="inline-block text-accent-500 font-medium text-sm uppercase tracking-wider mb-4">
            Writing
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-background-300 max-w-2xl">
            Thoughts, tutorials, and insights on software engineering and technology.
          </p>
        </AnimatedSection>

        {posts.length === 0 ? (
          <AnimatedSection delay={0.2}>
            <div className="text-center py-12">
              <p className="text-background-400 text-lg">No posts yet. Check back soon!</p>
            </div>
          </AnimatedSection>
        ) : (
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <article className="group bg-background-800/50 rounded-xl p-6 md:p-8 border border-background-700 hover:border-accent-500/30 transition-all duration-300 hover:bg-background-800">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 group-hover:text-accent-400 transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>
                  <time className="text-background-400 text-sm block mb-3">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <p className="text-background-300 mb-4 text-lg">{post.description}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent-500/10 text-accent-400 text-sm rounded-full border border-accent-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}

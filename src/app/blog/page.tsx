import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

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
    <section className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-background-300 text-lg mb-12">
          Thoughts, tutorials, and insights on software engineering and technology.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-background-400 text-lg">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-background-800/50 rounded-lg p-6 border border-background-700 hover:border-accent-500/50 transition-colors"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-foreground mb-2 hover:text-accent-500 transition-colors">
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
                <p className="text-background-300 mb-4">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent-500/10 text-accent-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
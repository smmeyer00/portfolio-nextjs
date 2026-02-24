import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostHtml, getAllSlugs, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }
  
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getPostHtml(slug);
  
  if (!result) {
    notFound();
  }
  
  const { post, html } = result;

  return (
    <section className="min-h-screen pt-24 px-4">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-background-400">
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
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
          </div>
        </header>

        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-background-300 prose-p:leading-relaxed
            prose-a:text-accent-400 hover:prose-a:text-accent-300
            prose-strong:text-foreground
            prose-code:text-accent-300 prose-code:bg-background-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-transparent prose-pre:border-none prose-pre:p-0
            prose-blockquote:border-l-accent-500 prose-blockquote:bg-background-800/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:italic prose-blockquote:text-background-300 prose-blockquote:quotes-none
            prose-li:text-background-300 prose-li:marker:text-accent-500
            prose-img:rounded-lg prose-img:shadow-lg
            prose-hr:border-background-700"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </section>
  );
}
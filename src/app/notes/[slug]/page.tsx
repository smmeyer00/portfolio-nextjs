import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNoteSlugs, getNoteBySlug, getNoteHtml } from "@/lib/notes";
import { openGraphBase, siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return { title: "Note Not Found" };
  }

  return {
    title: note.title,
    description: note.description,
    openGraph: {
      ...openGraphBase,
      title: `${note.title} | ${siteConfig.name}`,
      description: note.description,
      url: `${siteConfig.baseUrl}/notes/${slug}`,
      type: "article",
      publishedTime: note.date,
      authors: [siteConfig.name],
    },
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getNoteHtml(slug);

  if (!result) {
    notFound();
  }

  const { note, html } = result;

  return (
    <section className="page-shell">
      <div className="content-shell">
        <Link
          href="/notes"
          className="text-sm font-medium text-background-300 transition duration-300 hover:text-foreground"
        >
          ← Back to notes
        </Link>

        <div className="mt-8 grid gap-10 xl:grid-cols-[minmax(0,1fr)_16rem]">
          <article className="min-w-0">
            <header className="section-frame rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-background-400">
                <time dateTime={note.date}>
                  {new Date(note.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{note.readingTime} min read</span>
              </div>

              <h1 className="display-title mt-6 text-5xl text-foreground sm:text-6xl">
                {note.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-background-300">
                {note.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span key={tag} className="pill-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div
              className="prose prose-lg mt-8 max-w-none rounded-[2rem] border border-white/8 bg-white/4 px-6 py-8 text-background-300 shadow-[0_24px_80px_rgba(0,0,0,0.2)] prose-headings:font-display prose-headings:text-foreground prose-p:leading-8 prose-a:text-accent-300 hover:prose-a:text-accent-200 prose-strong:text-foreground prose-code:text-accent-200 prose-code:bg-background-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-li:text-background-300 prose-li:marker:text-accent-300 prose-blockquote:border-l-accent-300 prose-blockquote:bg-white/4 prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:text-background-200 prose-img:rounded-[1.5rem] prose-hr:border-white/10 sm:px-8 sm:py-10"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

          {note.headings.length > 0 ? (
            <aside className="xl:sticky xl:top-28 xl:h-fit">
              <div className="section-frame rounded-[1.75rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-300">
                  On this page
                </p>
                <nav className="mt-5 grid gap-2">
                  {note.headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`text-sm leading-6 text-background-300 transition duration-300 hover:text-foreground ${
                        heading.level === 3 ? "pl-4" : ""
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}

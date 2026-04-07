import { Metadata } from "next";
import type { CSSProperties } from "react";
import SectionIntro from "@/components/SectionIntro";
import { AnimatedSection } from "@/components/AnimatedSection";
import { books, type Book } from "@/data/books";
import { openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Reading",
  description: "A small reading list of books that shape how Steven Meyer thinks about software, product decisions, and everything around them.",
  openGraph: {
    ...openGraphBase,
    title: `Reading | ${siteConfig.name}`,
    description:
      "A small reading list of books that shape how Steven Meyer thinks about software, product decisions, and everything around them.",
    type: "website",
    url: `${siteConfig.baseUrl}/reading`,
  },
};

function BookSwatch({ book, tall = false }: { book: Book; tall?: boolean }) {
  const style = {
    backgroundImage: `radial-gradient(circle at top left, ${book.color}cc, transparent 42%), linear-gradient(160deg, ${book.color}, rgba(9, 10, 8, 0.95))`,
  } satisfies CSSProperties;

  return (
    <div
      className={`rounded-[1.5rem] border border-white/8 ${
        tall ? "min-h-[18rem]" : "min-h-[7rem]"
      }`}
      style={style}
    />
  );
}

export default function ReadingListPage() {
  const currentReads = books.filter((book) => book.currentlyReading);
  const featuredBooks = books.filter((book) => book.featured && !book.currentlyReading);
  const libraryBooks = books.filter((book) => !book.currentlyReading && !book.featured);

  return (
    <section className="page-shell">
      <div className="content-shell">
        <AnimatedSection trigger="immediate">
          <SectionIntro
            eyebrow="Reading"
            title="A small reading list."
            description="Not a catalog. Just the books that have shaped how I think about software, product decisions, and everything around them."
          />
        </AnimatedSection>

        {currentReads.length > 0 ? (
          <AnimatedSection trigger="immediate" className="mt-12">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionIntro
                eyebrow="Currently reading"
                title="A few books I have open right now."
                description="Usually a mix of fiction and nonfiction. Right now I'm splitting time between these."
              />

              <div className="grid gap-4 md:grid-cols-2">
                {currentReads.map((book) => (
                  <article
                    key={book.id}
                    className="section-frame overflow-hidden rounded-[1.75rem]"
                  >
                    <div className="p-5">
                      <div
                        className="flex min-h-[16rem] flex-col justify-between rounded-[1.5rem] border border-white/8 p-5"
                        style={{
                          backgroundImage: `radial-gradient(circle at top left, ${book.color}cc, transparent 38%), linear-gradient(160deg, ${book.color}, rgba(9, 10, 8, 0.95))`,
                        }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                            Current read
                          </p>
                          <span className="rounded-full bg-white/14 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white">
                            {book.category}
                          </span>
                        </div>
                        <div>
                          <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                            {book.title}
                          </h2>
                          <p className="mt-3 text-sm text-white/72">{book.author}</p>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <p className="text-sm leading-7 text-background-300">{book.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ) : null}

        <AnimatedSection
          trigger={currentReads.length === 0 ? "immediate" : "in-view"}
          className="mt-20"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionIntro
              eyebrow="Standouts"
              title="A few favorites."
              description="Books that have stayed with me and keep showing up in how I think and work."
            />

            <div className="grid gap-4">
              {featuredBooks.map((book) => (
                <article
                  key={book.id}
                  className="section-frame rounded-[1.75rem] p-5 transition duration-300 hover:border-white/16"
                >
                  <div className="grid gap-4 sm:grid-cols-[7rem_1fr] sm:items-start">
                    <BookSwatch book={book} />
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-3xl font-semibold tracking-[-0.05em] text-foreground">
                          {book.title}
                        </h3>
                        <span className="pill-chip">{book.category}</span>
                      </div>
                      <p className="mt-2 text-sm text-background-400">{book.author}</p>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-background-300">
                        {book.note}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionIntro
              eyebrow="More from the shelf"
              title="Other books I have enjoyed."
              description="A broader mix across fiction, philosophy, history, and science."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {libraryBooks.map((book) => (
                <article
                  key={book.id}
                  className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4 transition duration-300 hover:border-white/14"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 h-12 w-3 shrink-0 rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(180deg, ${book.color}, rgba(9, 10, 8, 0.95))`,
                      }}
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">{book.title}</h3>
                        <span className="text-xs uppercase tracking-[0.16em] text-background-500">
                          {book.category}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-background-400">{book.author}</p>
                      <p className="mt-3 text-sm leading-6 text-background-300">
                        {book.note}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

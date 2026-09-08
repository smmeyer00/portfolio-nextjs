import { Metadata } from "next";
import Link from "next/link";
import SectionIntro from "@/components/SectionIntro";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { formatNoteDate, getAllNotes } from "@/lib/notes";
import { openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes on building software, making tradeoffs, and figuring things out.",
  openGraph: {
    ...openGraphBase,
    title: `Notes | ${siteConfig.name}`,
    description: "Notes on building software, making tradeoffs, and figuring things out.",
    type: "website",
    url: `${siteConfig.baseUrl}/notes`,
  },
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <section className="page-shell">
      <div className="content-shell">
        <AnimatedSection trigger="immediate">
          <SectionIntro
            eyebrow="Notes"
            title="Notes on building."
            description="Notes on building software, making tradeoffs, and figuring things out."
          />
        </AnimatedSection>

        {notes.length === 0 ? (
          <AnimatedSection
            trigger="immediate"
            className="mt-12 section-frame rounded-[2rem] p-8 text-center"
          >
            <p className="text-lg text-background-300">No notes yet. Check back soon.</p>
          </AnimatedSection>
        ) : (
          <StaggerContainer className="mt-12 space-y-5" staggerDelay={0.08}>
            {notes.map((note) => (
              <StaggerItem key={note.slug}>
                <article className="section-frame rounded-[2rem] p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-background-400">
                    <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
                    <span>·</span>
                    <span>{note.readingTime} min read</span>
                  </div>

                  <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground">
                    <Link href={`/notes/${note.slug}`} className="hover:text-accent-300">
                      {note.title}
                    </Link>
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-background-300">
                    {note.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span key={tag} className="pill-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}

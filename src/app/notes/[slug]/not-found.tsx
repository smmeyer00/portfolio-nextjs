import Button from "@/components/Button";

export default function NoteNotFound() {
  return (
    <section className="page-shell">
      <div className="content-shell">
        <div className="section-frame mx-auto max-w-2xl rounded-[2rem] px-6 py-14 text-center sm:px-8">
          <p className="eyebrow justify-center">Note missing</p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
            That note is not available.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-background-300">
            It may have been moved or removed while the archive was being
            reorganized.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/notes" size="lg">
              Back to notes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

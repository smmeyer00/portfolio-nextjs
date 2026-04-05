export default function Loading() {
  return (
    <section className="page-shell">
      <div className="content-shell">
        <div className="section-frame mx-auto flex max-w-xl flex-col items-center rounded-[2rem] px-6 py-16 text-center">
          <div className="h-12 w-12 rounded-full border-4 border-accent-300 border-t-transparent animate-spin" />
          <p className="mt-5 text-base text-background-300">
            Loading the next surface…
          </p>
        </div>
      </div>
    </section>
  );
}

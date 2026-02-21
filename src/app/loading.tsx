export default function Loading() {
  return (
    <section className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-accent-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-background-300 animate-pulse">Loading...</p>
      </div>
    </section>
  );
}

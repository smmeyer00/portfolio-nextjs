import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="page-shell">
      <div className="content-shell">
        <div className="section-frame mx-auto max-w-2xl rounded-[2rem] px-6 py-14 text-center sm:px-8">
          <p className="eyebrow justify-center">404</p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
            That page isn’t here.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-background-300">
            The link might be old, or the page may have moved. Either way, you
            can get back from here.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" size="lg">
              Back home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

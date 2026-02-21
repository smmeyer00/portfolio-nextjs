"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-accent-500 mb-4">Oops!</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Something went wrong
        </h2>
        <p className="text-background-300 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-accent-500 text-foreground px-8 py-3 rounded-full hover:bg-accent-600 transition duration-300"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}

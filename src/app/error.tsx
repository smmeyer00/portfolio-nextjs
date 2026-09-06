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
    <section className="site-frame minimal-page">
      <div className="minimal-page-inner">
        <p className="section-index">Error / Unexpected</p>
        <h1>Something broke.</h1>
        <p className="minimal-page-copy">Try the request once more.</p>
        <button type="button" onClick={reset} className="minimal-link">
          Try again
        </button>
      </div>
    </section>
  );
}

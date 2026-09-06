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
    <article className="man-page">
      <header className="man-header">
        <h1>STEVEN-MEYER(1)</h1>
        <p>General Commands Manual</p>
        <p>STEVEN-MEYER(1)</p>
      </header>
      <section>
        <h2>NAME</h2>
        <p><strong>error</strong> — something broke</p>
      </section>
      <section>
        <h2>DESCRIPTION</h2>
        <p>Try the request once more. If it persists, report to mail(1).</p>
      </section>
      <section>
        <h2>SEE ALSO</h2>
        <p className="see-also">
          <button type="button" onClick={reset} className="minimal-link">
            try-again(1)
          </button>
        </p>
      </section>
    </article>
  );
}

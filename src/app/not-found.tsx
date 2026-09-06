import type { Metadata } from "next";
import Link from "next/link";
import ManShell from "@/components/ManShell";

export const metadata: Metadata = {
  title: "man: no entry",
  description: "No manual entry for this page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <ManShell name="MAN(1)" footerName="MAN(1)">
      <section>
        <h2>NAME</h2>
        <p><strong>man</strong> — no manual entry</p>
      </section>
      <section>
        <h2>DESCRIPTION</h2>
        <p>No entry for this page. Try steven-meyer(1) instead.</p>
      </section>
      <section>
        <h2>SEE ALSO</h2>
        <p className="see-also">
          <Link href="/">steven-meyer(1)</Link>
        </p>
      </section>
    </ManShell>
  );
}

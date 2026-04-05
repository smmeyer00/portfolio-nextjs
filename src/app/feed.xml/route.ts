import { getAllNotes } from "@/lib/notes";
import { siteConfig } from "@/data/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const notes = getAllNotes();

  const items = notes
    .map(
      (note) => `
        <item>
          <title>${escapeXml(note.title)}</title>
          <link>${siteConfig.baseUrl}/notes/${note.slug}</link>
          <guid>${siteConfig.baseUrl}/notes/${note.slug}</guid>
          <pubDate>${new Date(note.date).toUTCString()}</pubDate>
          <description>${escapeXml(note.description)}</description>
        </item>
      `
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(`${siteConfig.name} | Notes`)}</title>
        <link>${siteConfig.baseUrl}/notes</link>
        <description>${escapeXml("Notes on building software, making tradeoffs, and figuring things out.")}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

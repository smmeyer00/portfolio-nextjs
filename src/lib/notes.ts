import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { codeToHtml } from "shiki";

const notesDirectory = path.join(process.cwd(), "content/notes");
const wordsPerMinute = 220;

export interface NoteHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface NoteMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}

export interface Note extends NoteMeta {
  content: string;
  headings: NoteHeading[];
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  return fs.readdirSync(notesDirectory).filter((file) => file.endsWith(".md"));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[`*_~()[\]{}<>]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripFencedCodeBlocks(content: string) {
  const lines = content.split("\n");
  const strippedLines: string[] = [];
  let activeFence: { marker: "`" | "~"; length: number } | null = null;

  for (const line of lines) {
    const trimmedLine = line.trimStart();
    const fenceMatch = trimmedLine.match(/^(`{3,}|~{3,})/);

    if (!activeFence && fenceMatch) {
      activeFence = {
        marker: fenceMatch[1][0] as "`" | "~",
        length: fenceMatch[1].length,
      };
      strippedLines.push("");
      continue;
    }

    if (
      activeFence &&
      fenceMatch &&
      fenceMatch[1][0] === activeFence.marker &&
      fenceMatch[1].length >= activeFence.length
    ) {
      activeFence = null;
      strippedLines.push("");
      continue;
    }

    strippedLines.push(activeFence ? "" : line);
  }

  return strippedLines.join("\n");
}

function stripMarkdown(content: string) {
  return stripFencedCodeBlocks(content)
    .replace(/`[^`]+`/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~|-]/g, " ")
    .replace(/\n+/g, " ");
}

function getReadingTime(content: string) {
  const words = stripMarkdown(content).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function extractHeadings(content: string): NoteHeading[] {
  const contentWithoutFencedCode = stripFencedCodeBlocks(content);

  return Array.from(contentWithoutFencedCode.matchAll(/^(##|###)\s+(.+)$/gm)).map((match) => {
    const marker = match[1];
    const text = match[2].trim();

    return {
      id: slugify(text),
      text,
      level: marker.length as 2 | 3,
    };
  });
}

function parseNoteMeta(filePath: string, slug: string): Note {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const headings = extractHeadings(content);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    description: data.description || "",
    tags: data.tags || [],
    content,
    headings,
    readingTime: getReadingTime(content),
  };
}

export function getAllNotes(): NoteMeta[] {
  const files = getMarkdownFiles();

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return parseNoteMeta(path.join(notesDirectory, file), slug);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((note) => ({
      slug: note.slug,
      title: note.title,
      date: note.date,
      description: note.description,
      tags: note.tags,
      readingTime: note.readingTime,
    }));
}

export function getRecentNotes(limit = 3) {
  return getAllNotes().slice(0, limit);
}

export function getNoteBySlug(slug: string): Note | null {
  const filePath = path.join(notesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parseNoteMeta(filePath, slug);
}

async function highlightCode(code: string, lang: string): Promise<string> {
  try {
    const highlighted = await codeToHtml(code, {
      lang,
      theme: "github-dark",
    });
    return highlighted.replace(/class="shiki/g, 'class="shiki code-block');
  } catch {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="shiki code-block bg-background-950 border border-white/10 rounded-[1rem] p-4 overflow-x-auto"><code>${escaped}</code></pre>`;
  }
}

function injectHeadingIds(htmlContent: string, headings: NoteHeading[]) {
  let headingIndex = 0;

  return htmlContent.replace(/<(h[23])>(.*?)<\/\1>/g, (fullMatch, tag, innerHtml) => {
    const heading = headings[headingIndex];

    if (!heading) {
      return fullMatch;
    }

    headingIndex += 1;
    return `<${tag} id="${heading.id}">${innerHtml}</${tag}>`;
  });
}

export async function getNoteHtml(
  slug: string
): Promise<{ note: Note; html: string } | null> {
  const note = getNoteBySlug(slug);

  if (!note) {
    return null;
  }

  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const blocks: { lang: string; code: string; fullMatch: string }[] = [];

  let match: RegExpExecArray | null;
  while ((match = codeBlockRegex.exec(note.content)) !== null) {
    blocks.push({
      lang: match[1] || "text",
      code: match[2],
      fullMatch: match[0],
    });
  }

  let contentWithPlaceholders = note.content;
  for (let index = 0; index < blocks.length; index += 1) {
    contentWithPlaceholders = contentWithPlaceholders.replace(
      blocks[index].fullMatch,
      `\n\n[[CODEBLOCK_${index}]]\n\n`
    );
  }

  const result = await remark().use(html).process(contentWithPlaceholders);
  let htmlContent = result.toString();

  for (let index = 0; index < blocks.length; index += 1) {
    const highlighted = await highlightCode(blocks[index].code, blocks[index].lang);
    htmlContent = htmlContent.replace(`<p>[[CODEBLOCK_${index}]]</p>`, highlighted);
    htmlContent = htmlContent.replace(`[[CODEBLOCK_${index}]]`, highlighted);
  }

  htmlContent = injectHeadingIds(htmlContent, note.headings);

  return { note, html: htmlContent };
}

export function getAllNoteSlugs(): string[] {
  return getMarkdownFiles().map((file) => file.replace(/\.md$/, ""));
}

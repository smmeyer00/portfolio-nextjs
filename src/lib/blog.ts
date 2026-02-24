import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { codeToHtml } from "shiki";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getMarkdownFiles();
  
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(blogDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    
    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      description: data.description || "",
      tags: data.tags || [],
    };
  });
  
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    description: data.description || "",
    tags: data.tags || [],
    content,
  };
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
    return `<pre class="shiki code-block bg-background-950 border border-background-700 rounded-lg p-4 overflow-x-auto"><code>${escaped}</code></pre>`;
  }
}

export async function getPostHtml(slug: string): Promise<{ post: BlogPost; html: string } | null> {
  const post = getPostBySlug(slug);
  
  if (!post) {
    return null;
  }
  
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const blocks: { lang: string; code: string; fullMatch: string }[] = [];
  
  let match;
  while ((match = codeBlockRegex.exec(post.content)) !== null) {
    blocks.push({
      lang: match[1] || "text",
      code: match[2],
      fullMatch: match[0],
    });
  }
  
  let contentWithPlaceholders = post.content;
  for (let i = 0; i < blocks.length; i++) {
    contentWithPlaceholders = contentWithPlaceholders.replace(
      blocks[i].fullMatch,
      `\n\n[[CODEBLOCK_${i}]]\n\n`
    );
  }
  
  const result = await remark().use(html).process(contentWithPlaceholders);
  let htmlContent = result.toString();
  
  for (let i = 0; i < blocks.length; i++) {
    const highlighted = await highlightCode(blocks[i].code, blocks[i].lang);
    htmlContent = htmlContent.replace(`<p>[[CODEBLOCK_${i}]]</p>`, highlighted);
    htmlContent = htmlContent.replace(`[[CODEBLOCK_${i}]]`, highlighted);
  }
  
  return { post, html: htmlContent };
}

export function getAllSlugs(): string[] {
  const files = getMarkdownFiles();
  return files.map((file) => file.replace(/\.md$/, ""));
}
import type { Metadata } from "next";
import { openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Software Engineer`,
  },
  description: siteConfig.shortDescription,
  openGraph: {
    ...openGraphBase,
    title: `${siteConfig.name} | Software Engineer`,
    description: siteConfig.shortDescription,
    type: "website",
    url: siteConfig.baseUrl,
  },
};

export default function HomePage() {
  return (
    <article className="response" aria-labelledby="response-title">
      <header className="response-head">
        <div>
          <p className="request" id="response-title"><span>GET</span> /v1/steven <span>HTTP/2</span></p>
          <p className="status"><strong>200 OK</strong> · application/json</p>
        </div>
        <dl className="headers">
          <div><dt>host:</dt><dd>smmeyer.dev</dd></div>
          <div><dt>content-language:</dt><dd>en</dd></div>
          <div><dt>x-portfolio-format:</dt><dd>terse</dd></div>
        </dl>
      </header>

      <code className="json" aria-label="Steven Meyer profile as JSON">
        <span className="line"><span className="punctuation">{"{"}</span></span>
        <span className="line indent"><span className="key">&quot;name&quot;</span><span className="punctuation">: </span><span className="string">&quot;Steven Meyer&quot;</span><span className="punctuation">,</span></span>
        <span className="line indent"><span className="key">&quot;role&quot;</span><span className="punctuation">: </span><span className="string">&quot;Software Engineer&quot;</span><span className="punctuation">,</span></span>
        <span className="line indent"><span className="key">&quot;company&quot;</span><span className="punctuation">: </span><span className="string">&quot;Amazon Music&quot;</span><span className="punctuation">,</span></span>
        <span className="line indent"><span className="key">&quot;location&quot;</span><span className="punctuation">: </span><span className="string">&quot;{siteConfig.location}&quot;</span><span className="punctuation">,</span></span>
        <span className="line indent"><span className="key">&quot;scope&quot;</span><span className="punctuation">: [</span><span className="string">&quot;frontend&quot;</span><span className="punctuation">, </span><span className="string">&quot;backend&quot;</span><span className="punctuation">, </span><span className="string">&quot;product systems&quot;</span><span className="punctuation">],</span></span>
        <span className="line indent"><span className="key">&quot;current&quot;</span><span className="punctuation">: [</span></span>
        <span className="line indent-2"><span className="string">&quot;marketing technology&quot;</span><span className="punctuation">,</span></span>
        <span className="line indent-2"><span className="string">&quot;server-driven UI&quot;</span><span className="punctuation">,</span></span>
        <span className="line indent-2"><span className="string">&quot;AI-assisted tooling&quot;</span></span>
        <span className="line indent"><span className="punctuation">],</span></span>
        <span className="line indent"><span className="key">&quot;education&quot;</span><span className="punctuation">: </span><span className="string">&quot;B.S. Computer Science&quot;</span><span className="punctuation">,</span></span>
        <span className="line indent"><span className="key">&quot;links&quot;</span><span className="punctuation">: {"{"}</span></span>
        <span className="line indent-2"><span className="key">&quot;github&quot;</span><span className="punctuation">: </span><a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">&quot;github.com/smmeyer00&quot;</a><span className="punctuation">,</span></span>
        <span className="line indent-2"><span className="key">&quot;linkedin&quot;</span><span className="punctuation">: </span><a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">&quot;linkedin.com/in/smmeyer00&quot;</a><span className="punctuation">,</span></span>
        <span className="line indent-2"><span className="key">&quot;email&quot;</span><span className="punctuation">: </span><a href={`mailto:${siteConfig.email}`}>&quot;{siteConfig.email}&quot;</a></span>
        <span className="line indent"><span className="punctuation">{"}"}</span></span>
        <span className="line"><span className="punctuation">{"}"}</span></span>
      </code>
    </article>
  );
}

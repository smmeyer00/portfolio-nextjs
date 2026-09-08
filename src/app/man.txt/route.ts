import { selectedWork, siteConfig } from "@/data/site";

const TEXT = `STEVEN-MEYER(1)          General Commands Manual          STEVEN-MEYER(1)

NAME
       steven-meyer — software engineer at Amazon Music

SYNOPSIS
       steven [--frontend] [--backend] [--product-systems] [--verbose]

DESCRIPTION
       Builds marketing tech at Amazon Music: server-driven experiences,
       AI-assisted tooling.

OPTIONS
       --frontend           User-facing product interfaces.
       --backend            The systems behind them.
       --product-systems    Structure and execution.

SYSTEMS
${selectedWork.map((w) => `       --${w.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}  ${w.description}`).join("\n")}

EXAMPLES
       $ steven --verbose
       $ curl -L man.smmeyer.dev

ENVIRONMENT
       LOCATION             ${siteConfig.location}
       EDUCATION            B.S. Computer Science

CONTACT
       ${siteConfig.email}

EXIT STATUS
       0                    Available for interesting work.
       1                    Heads-down — try mail(1).

HISTORY
       2026                 Amazon Music.
       2023                 B.S. Computer Science, SIUE.

BUGS
       Known bug: over-engineers side projects.

SEE ALSO
       github(1), linkedin(1), mail(1)

       github: ${siteConfig.social.github}
       linkedin: ${siteConfig.social.linkedin}
       mail: ${siteConfig.email}

man.smmeyer.dev                                    STEVEN-MEYER(1)
`;

export async function GET() {
  return new Response(TEXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/data/site";

const THEMES = ["dark", "green", "amber", "paper"] as const;
type Theme = (typeof THEMES)[number];

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
  try {
    localStorage.setItem("man-theme", theme);
  } catch {
    /* private mode — ignore */
  }
}

export default function ManPrompt() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearOutput = useCallback(() => {
    if (clearTimer.current) {
      clearTimeout(clearTimer.current);
      clearTimer.current = null;
    }
    setOutput(null);
  }, []);

  // Floating status output covers content — dismiss it after a few seconds.
  useEffect(() => {
    if (output === null) return;
    clearTimer.current = setTimeout(() => setOutput(null), 4500);
    return () => {
      if (clearTimer.current) clearTimeout(clearTimer.current);
    };
  }, [output]);

  useEffect(() => () => clearOutput(), [clearOutput]);

  // Restore saved theme on mount (layout inline script handles pre-hydration).
  useEffect(() => {
    try {
      const saved = localStorage.getItem("man-theme") as Theme | null;
      if (saved && THEMES.includes(saved)) applyTheme(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim().replace(/^[:$>]\s*/, "").toLowerCase();

      if (cmd === "") {
        setOutput(null);
        return;
      }

      const go = (href: string) => {
        clearOutput();
        router.push(href);
      };
      const say = (msg: string) => setOutput(msg);

      // quit jokes
      if (["q", ":q", "quit", "exit", ":wq", ":q!"].includes(cmd)) {
        say("you're already here — there's nowhere to quit to.");
        return;
      }
      // help
      if (["help", ":help", "--help", "steven --help", "man --help"].includes(cmd)) {
        say("try: work · contact · steven --verbose · theme amber · apropos steven");
        return;
      }
      // single page — everything lives on steven-meyer(1)
      if (["man work", "work", "steven --work", "steven work"].includes(cmd)) {
        say("All work is on this page — see SYSTEMS.");
        return;
      }
      if (
        ["man contact", "contact", "steven --contact", "mail", "email", "steven contact"].includes(
          cmd,
        )
      ) {
        say(`Write: ${siteConfig.email} — see CONTACT.`);
        return;
      }
      if (["man", "man steven", "man steven-meyer", "home", "steven", "cd ~"].includes(cmd)) {
        go("/");
        return;
      }
      // verbose / flags
      if (["steven --verbose", "--verbose", "-v"].includes(cmd)) {
        say(siteConfig.longDescription);
        return;
      }
      if (["steven --frontend", "--frontend"].includes(cmd)) {
        say("User-facing product interfaces. See SYSTEMS.");
        return;
      }
      if (["steven --backend", "--backend"].includes(cmd)) {
        say("The systems behind them. See SYSTEMS.");
        return;
      }
      if (["steven --product-systems", "--product-systems"].includes(cmd)) {
        say("Structure, tradeoffs, execution. See SYSTEMS.");
        return;
      }
      // listings
      if (["ls", "apropos steven", "man -k steven", "man -k"].includes(cmd)) {
        say("steven-meyer(1) — everything is on this page.");
        return;
      }
      if (["whoami"].includes(cmd)) {
        say("steven-meyer");
        return;
      }
      // themes
      if (cmd === "theme" || cmd.startsWith("theme ")) {
        const rawArg = cmd.replace(/^theme\s*/, "");
        if (rawArg === "") {
          say(`theme: ${THEMES.join(" · ")}`);
          return;
        }
        if ((THEMES as readonly string[]).includes(rawArg)) {
          const theme = rawArg as Theme;
          applyTheme(theme);
          say(`TERM=${theme} — phosphor recalibrated.`);
        } else {
          say(`unknown theme: ${rawArg} — try: ${THEMES.join(" ")}`);
        }
        return;
      }
      // easter eggs
      if (["sudo hire steven", "sudo hire-steven"].includes(cmd)) {
        say("permission granted. try mail(1).");
        return;
      }
      if (["steven --coffee", "--coffee"].includes(cmd)) {
        say("installing dependencies... done. try mail(1).");
        return;
      }
      if (["man man", "man woman"].includes(cmd)) {
        say("no entry — this joke is load-bearing.");
        return;
      }
      if (["curl man.smmeyer.dev", "curl man.smmeyer.dev/man.txt", "curl man.txt"].includes(cmd)) {
        say("already serving plain text to curl(1). try it.");
        return;
      }
      // externals
      if (["github", "open github", "gh"].includes(cmd)) {
        window.open(siteConfig.social.github, "_blank", "noopener");
        setOutput(null);
        return;
      }
      if (["linkedin", "open linkedin", "li"].includes(cmd)) {
        window.open(siteConfig.social.linkedin, "_blank", "noopener");
        setOutput(null);
        return;
      }
      if (cmd === "clear") {
        setOutput(null);
        return;
      }

      say(`command not found: ${raw.trim()} — try 'help'`);
    },
    [router, clearOutput],
  );

  // focus-only pager keys — the page never scrolls by design
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el instanceof HTMLElement && el.isContentEditable);
      if (typing) {
        if (e.key === "Escape") el.blur();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "/" || e.key === ":") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape") {
        clearOutput();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clearOutput]);

  return (
    <div className="prompt-wrap">
      {output ? (
        <p className="prompt-output" role="status" aria-live="polite">
          {output}
        </p>
      ) : null}
      <form
        className="prompt-form"
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
          setValue("");
        }}
      >
        <label className="prompt-label" htmlFor="man-prompt-input" aria-label="man pager command">
          <span aria-hidden="true">:</span>
          <input
            ref={inputRef}
            id="man-prompt-input"
            className="prompt-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder=""
            aria-label="Type help and press enter"
          />
        </label>
      </form>
    </div>
  );
}

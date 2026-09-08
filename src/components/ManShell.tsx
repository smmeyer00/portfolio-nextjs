import type { ReactNode } from "react";
import ManPrompt from "./ManPrompt";

type ManShellProps = {
  name: string;
  center?: string;
  footerName: string;
  children: ReactNode;
};

export default function ManShell({ name, center = "General Commands Manual", footerName, children }: ManShellProps) {
  return (
    <article className="man-page">
      <header className="man-header">
        <h1>{name}</h1>
        <p>{center}</p>
        <p>{name}</p>
      </header>
      {children}
      <footer className="man-footer">
        <p>man.smmeyer.dev</p>
        <ManPrompt />
        <p>{footerName}</p>
      </footer>
    </article>
  );
}

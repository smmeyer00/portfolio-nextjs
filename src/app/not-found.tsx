import Button from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 :(",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-accent-500 mb-4 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 bg-accent-500/20 blur-3xl -z-10"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>

        <p className="text-background-300 mb-8 max-w-md mx-auto">
          Looks like you&apos;ve ventured into uncharted territory. The page
          you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Button href="/">Return Home</Button>
      </div>
    </div>
  );
}

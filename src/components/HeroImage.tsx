import Image from "next/image";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute -right-6 top-8 h-36 w-36 rounded-full bg-accent-400/16 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#d4a15c]/12 blur-3xl" />

      <div className="section-frame relative overflow-hidden rounded-[2rem] p-3">
        <div className="group relative overflow-hidden rounded-[1.6rem]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-950/55 via-transparent to-transparent" />
          <div className="absolute inset-x-5 bottom-5 z-20 flex flex-wrap items-end gap-3">
            <span className="pill-chip border-accent-300/24 bg-background-950/62 text-foreground backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-accent-300" />
              {siteConfig.location}
            </span>
            <span className="pill-chip ml-auto border-white/14 bg-background-950/58 text-foreground-soft backdrop-blur-sm">
              Building at {siteConfig.employer}
            </span>
          </div>

          <div className="overflow-hidden rounded-[1.6rem]">
            <Image
              src="/kings_canyon_film.jpg"
              alt="Steven Meyer - Software Engineer"
              width={1565}
              height={1037}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              priority
            />
          </div>
        </div>

          <div className="grid gap-3 px-2 pb-2 pt-4 sm:grid-cols-2">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-background-400">
              What I&apos;m focused on
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground-soft">
              Building software that feels clear, useful, and worth
              maintaining.
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-background-400">
              How I like to work
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground-soft">
              Start with the problem, make the tradeoffs visible, and keep the
              solution simple.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

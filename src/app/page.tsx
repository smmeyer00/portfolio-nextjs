import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <section className="min-h-screen bg-background-900 flex items-center justify-center pt-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I&apos;m <span className="text-accent-500">Steven</span>
            <br />
            Software Engineer
          </h1>
          <p className="text-background-400 text-lg mb-8">
            Crafting digital experiences through clean and efficient code.
            Architecting scalable solutions across the full technology stack.
          </p>
          <Button href="/projects">View My Work</Button>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-accent-500 shadow-lg shadow-accent-500/50">
            <Image
              src="/kings_canyon_film.jpg"
              alt="Developer headshot"
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

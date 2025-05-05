import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  slug,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group bg-background-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 block"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={338}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-background-300 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-background-700 text-background-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

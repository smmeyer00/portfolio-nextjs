"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

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
    <MotionLink
      href={`/projects/${slug}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="group block bg-background-800 rounded-xl overflow-hidden border border-transparent hover:border-accent-500/30 transition-colors duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={338}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-accent-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-background-300 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-background-700/50 text-background-300 text-sm rounded-full border border-background-600/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionLink>
  );
}

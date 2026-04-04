"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function HeroImage() {
  return (
    <div className="relative">
      {/* Decorative blob behind image */}
      <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/20 to-accent-700/10 rounded-3xl blur-2xl" />

      {/* Gradient border container */}
      <div className="relative p-[2px] bg-gradient-to-br from-accent-400/50 via-accent-500/30 to-transparent rounded-2xl">
        <div className="relative overflow-hidden rounded-2xl bg-background-900">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <Image
              src="/kings_canyon_film.jpg"
              alt="Steven Meyer - Software Engineer"
              width={1565}
              height={1037}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Location badge */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-4 -left-4 lg:-left-8 bg-background-800/90 backdrop-blur-sm border border-accent-500/20 rounded-full px-4 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-accent-500" />
          <span className="text-sm font-medium text-foreground">Kings Canyon</span>
        </div>
      </motion.div>
    </div>
  );
}

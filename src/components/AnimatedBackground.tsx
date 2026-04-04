"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function AnimatedBackground() {
  const { normalizedX, normalizedY } = useMousePosition();

  const springConfig = { stiffness: 50, damping: 30 };

  const moveX1 = useSpring(useTransform(() => (normalizedX - 0.5) * 20), springConfig);
  const moveY1 = useSpring(useTransform(() => (normalizedY - 0.5) * 20), springConfig);
  const moveX2 = useSpring(useTransform(() => (normalizedX - 0.5) * -15), springConfig);
  const moveY2 = useSpring(useTransform(() => (normalizedY - 0.5) * -15), springConfig);
  const moveX3 = useSpring(useTransform(() => (normalizedX - 0.5) * 25), springConfig);
  const moveY3 = useSpring(useTransform(() => (normalizedY - 0.5) * 25), springConfig);
  const moveX4 = useSpring(useTransform(() => (normalizedX - 0.5) * -20), springConfig);
  const moveY4 = useSpring(useTransform(() => (normalizedY - 0.5) * -20), springConfig);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        style={{ x: moveX1, y: moveY1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 md:right-1/6 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"
        style={{ x: moveX2, y: moveY2 }}
      />
      <motion.div
        className="absolute top-0 left-0 md:left-1/6 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"
        style={{ x: moveX3, y: moveY3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        style={{ x: moveX4, y: moveY4 }}
      />

    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";
type Trigger = "in-view" | "immediate";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  trigger?: Trigger;
}

const viewportAmount = 0.2;
const transitionEase = [0.25, 0.1, 0.25, 1] as const;

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  trigger = "in-view",
}: AnimatedSectionProps) {
  const offset = directionOffsets[direction];
  const triggerProps =
    trigger === "immediate"
      ? { initial: false, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, amount: viewportAmount },
        };

  return (
    <motion.div
      {...triggerProps}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: transitionEase,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  trigger?: Trigger;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  trigger = "in-view",
}: StaggerContainerProps) {
  const triggerProps =
    trigger === "immediate"
      ? { initial: false, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, amount: viewportAmount },
        };

  return (
    <motion.div
      {...triggerProps}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: transitionEase,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

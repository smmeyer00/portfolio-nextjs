"use client";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type Direction = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

const viewportAmount = 0.2;
const transitionEase = [0.25, 0.1, 0.25, 1] as const;

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

function isElementInView(element: HTMLElement, amount: number) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (rect.width === 0 || rect.height === 0) {
    return false;
  }

  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0);

  return visibleHeight >= rect.height * amount && visibleWidth >= rect.width * amount;
}

function useDeferredInViewAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: viewportAmount });

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    // Keep SSR output readable and only hide sections that start offscreen.
    controls.set(isElementInView(element, viewportAmount) ? "visible" : "hidden");
  }, [controls]);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    void controls.start("visible");
  }, [controls, isInView]);

  return { controls, ref };
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
}: AnimatedSectionProps) {
  const offset = directionOffsets[direction];
  const { controls, ref } = useDeferredInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
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
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { controls, ref } = useDeferredInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
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

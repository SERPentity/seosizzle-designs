'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  fill?: string;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
  fill,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (!parentElement) return;
      const touch = event.touches[0];
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(touch.clientX - left);
      mouseY.set(touch.clientY - top);
      setIsHovered(true);
    },
    [mouseX, mouseY, parentElement]
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    if (isMobile) {
      parentElement.addEventListener('touchmove', handleTouchMove);
      parentElement.addEventListener('touchstart', () => setIsHovered(true));
      parentElement.addEventListener('touchend', () => setIsHovered(false));
    } else {
      parentElement.addEventListener('mousemove', handleMouseMove);
      parentElement.addEventListener('mouseenter', () => setIsHovered(true));
      parentElement.addEventListener('mouseleave', () => setIsHovered(false));
    }

    return () => {
      if (isMobile) {
        parentElement.removeEventListener('touchmove', handleTouchMove);
        parentElement.removeEventListener('touchstart', () => setIsHovered(true));
        parentElement.removeEventListener('touchend', () => setIsHovered(false));
      } else {
        parentElement.removeEventListener('mousemove', handleMouseMove);
        parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
        parentElement.removeEventListener('mouseleave', () => setIsHovered(false));
      }
    };
  }, [parentElement, handleMouseMove, handleTouchMove, isMobile]);

  const gradientColors = fill ? {
    from: `${fill}/50`,
    via: `${fill}/25`,
    to: `${fill}/5`
  } : {
    from: 'zinc-50',
    via: 'zinc-100',
    to: 'zinc-200'
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        `from-${gradientColors.from} via-${gradientColors.via} to-${gradientColors.to}`,
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}
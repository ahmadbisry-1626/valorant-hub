'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const MotionSection = motion.section;
export const MotionDiv = motion.div;
export const MotionNav = motion.nav;
export const MotionSpan = motion.span;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionLink = motion(Link);
export const MotionImage = motion(Image);
export const MotionButton = motion(Button);

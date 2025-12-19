"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = { children: ReactNode };

export default function AnimatedSection({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}


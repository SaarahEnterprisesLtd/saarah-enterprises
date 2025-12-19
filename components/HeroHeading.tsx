"use client";

import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="
        mx-auto text-center font-extrabold
        text-gray-900 dark:text-blue-400
        text-[28px] leading-[1.15]
        sm:text-4xl sm:leading-tight
        md:text-6xl
        tracking-wide
        wrap-break-word
        text-balance
      "
      style={{ overflowWrap: "anywhere" }}
    >
      <span className="block">WE BUILD YOUR</span>
      <span className="block">WEBSITE OR</span>
      <span className="mt-2 block">MOBILE APP</span>
      <span className="mt-4 block text-gray-700 dark:text-blue-300">
        QUICK AND EFFICIENT
      </span>
    </motion.h1>
  );
}

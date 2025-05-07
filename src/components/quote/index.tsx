"use client";
import { motion } from "framer-motion";

export function Quote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-yellow-400"
    >
      <h2>Quote section</h2>
    </motion.section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Card } from "./card";

export function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-slate-900 py-12 text-yellow-400 flex flex-col items-center gap-12 md:flex-row md:justify-around lg:py-20"
    >
      <Card
        image="/icon-stats-heart.png"
        imageAlt="Heart Icon"
        quantity="195"
        text="user countries"
      />
      <Card
        image="/icon-stats-diamond.png"
        imageAlt="Diamond Icon"
        quantity="1M"
        text="valued teachers"
      />
      <Card
        image="/icon-stats-hat.png"
        imageAlt="Hat Icon"
        quantity="17M"
        text="happy students"
      />
    </motion.section>
  );
}

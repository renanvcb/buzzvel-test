"use client";
import { motion } from "framer-motion";

export function Quote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-yellow-400 py-12"
    >
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="px-4 text-lg space-y-4">
          <p className="leading-loose">
            Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
            est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
            ultricies commodo. Neque suspendisse a habitasse commodo.
          </p>

          <p className="leading-tight">
            Marie Poirot,
            <br />
            <span className="font-medium">Bigapp</span>
          </p>
        </div>

        <div className="px-4 flex gap-2">
          <div className="w-8 h-2 bg-slate-950 rounded-full" />
          <div className="size-2 bg-white rounded-full" />
          <div className="size-2 bg-white rounded-full" />
          <div className="size-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </motion.section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Quote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-yellow-400 py-12 lg:grid lg:grid-cols-2 lg:gap-2 lg:px-20 lg:items-center"
    >
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="px-4 text-lg space-y-4 lg:text-2xl lg:px-0">
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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center"
      >
        <Image
          src="/quote-illustration.png"
          alt="A happy womam smiling"
          width={625}
          height={549}
          className="w-96 h-auto object-contain md:w-2xl lg:w-full lg:max-h-[544px]"
          priority
        />
      </motion.div>
    </motion.section>
  );
}

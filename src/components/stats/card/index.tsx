"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  image: string;
  imageAlt: string;
  quantity: string;
  text: string;
}

export function Card({ image, imageAlt, quantity, text }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center gap-2 lg:gap-4"
    >
      <Image src={image} alt={imageAlt} width={64} height={64} />
      <p className="font-extrabold text-5xl lg:text-7xl">{quantity}</p>
      <p className="lg:text-2xl">{text}</p>
    </motion.div>
  );
}

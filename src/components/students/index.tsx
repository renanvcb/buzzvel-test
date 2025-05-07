"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../button";
import { FaArrowRight } from "react-icons/fa6";

export function Students() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-11 lg:px-20 lg:items-center lg:space-y-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="px-4 space-y-6 lg:px-0 lg:order-2"
      >
        <h2 className="text-2xl font-bold xl:font-extrabold xl:text-[56px] relative">
          Meet internatio
          <span className="relative inline-block">
            <span
              className="absolute -top-4 w-full h-full max-w-12 bg-no-repeat bg-contain xl:-top-6 xl:left-1"
              style={{
                backgroundImage: "url('/plane-departure.svg')",
                zIndex: -1,
                transform: "scale(1.5)", // Adjust scale as needed
              }}
            />
            <span className="relative z-10">na</span>
          </span>
          l students & teachers
        </h2>
        <p className="xl:text-xl">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>

        <Button variant="link" size="m" className="xl:text-xl">
          <Button.Text>Explore teachers and students</Button.Text>
          <Button.IconRight>
            <FaArrowRight />
          </Button.IconRight>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center lg:order-1"
      >
        <Image
          src="/students-illustration.png"
          alt="A collection of photos of students worldwide"
          width={625}
          height={549}
          className="w-96 h-auto object-contain md:w-2xl lg:w-full lg:max-h-[544px]"
          priority
        />
      </motion.div>
    </motion.section>
  );
}

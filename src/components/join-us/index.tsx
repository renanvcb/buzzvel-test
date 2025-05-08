"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../button";

import { useWindowWidth } from "@/lib/hooks/useWindowWidth";

export function JoinUs() {
  const size = useWindowWidth();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="p-4 bg-yellow-400 -mt-14 flex flex-col items-center justify-between gap-8 md:flex-row md:p-0 md:py-4 md:gap-0 lg:py-8 xl:py-14"
    >
      <Image
        src="/join-illustration-first-mobile.png"
        alt="Photos and icons"
        width={361}
        height={168}
        className="md:hidden"
      />

      <Image
        src="/join-illustration-first.png"
        alt="Photos and icons"
        width={439}
        height={637}
        className="hidden md:block"
      />

      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-center xl:text-5xl">
          Join a world of learning
        </h2>
        <p className="text-center xl:text-xl xl:leading-loose">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br /> Risus elit et fringilla habitant ut facilisi.
        </p>
        <Button
          variant="filled"
          size={(size ?? 0) < 1280 ? "l" : "xl"}
          filledColor="bg-orange-600"
          filledHoverColor="hover:bg-orange-700"
        >
          <Button.Text>Sign Up Now</Button.Text>
        </Button>
      </div>
      <Image
        src="/join-illustration-second-mobile.png"
        alt="Photos and icons"
        width={353}
        height={196}
        className="md:hidden"
      />

      <Image
        src="/join-illustration-second.png"
        alt="Photos and icons"
        width={439}
        height={637}
        className="hidden md:block"
      />
    </motion.section>
  );
}

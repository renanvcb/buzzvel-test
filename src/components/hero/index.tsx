"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { MarkedText } from "../marked-text";
import { Button } from "../button";
import { LuCirclePlay } from "react-icons/lu";

import heroIlustration from "@/assets/images/hero-illustration.png";

import { useWindowWidth } from "@/lib/hooks/useWindowWidth";

export default function Hero() {
  const size = useWindowWidth();

  return (
    <section className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-14 xl:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6 xl:gap-8"
      >
        <h1 className="font-bold text-[40px] leading-tight xl:text-7xl xl:font-extrabold">
          <MarkedText>Teach</MarkedText> students worldwide
        </h1>

        <p className="text-justify md:text-2xl">
          Amet nunc diam orci duis ut sit diam arcu, nec. <br /> Eleifend proin
          massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
          turpis ultricies.
        </p>

        <div className="flex gap-10 md:gap-16 lg:gap-20">
          <Button
            size={(size ?? 0) < 1280 ? "m" : "xl"}
            filledColor="bg-orange-500"
            filledHoverColor="hover:bg-orange-600"
          >
            <Button.Text>Sign Up Now</Button.Text>
          </Button>

          <Button
            variant="link"
            className={(size ?? 0) < 1280 ? "!text-sm" : "!text-xl"}
            size={(size ?? 0) < 1280 ? "m" : "xl"}
          >
            <Button.IconLeft>
              <LuCirclePlay className="size-6" />
              <Button.Text>View Demo</Button.Text>
            </Button.IconLeft>
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-12 md:items-center lg:gap-4 xl:gap-12">
          <p className="text-slate-600 lg:max-w-36">
            Trusted by{(size ?? 0) < 1024 ? "" : <br />} leading companies
          </p>
          <div className="flex gap-6 md:gap-12 lg:gap-5 xl:gap-12">
            <Image
              width={32}
              height={32}
              src="/company-logo-1.svg"
              alt="Trusted company 1"
              className="h-8 w-auto"
            />
            <Image
              width={32}
              height={32}
              src="/company-logo-2.svg"
              alt="Trusted company 2"
              className="h-8 w-auto"
            />
            <Image
              width={32}
              height={32}
              src="/company-logo-3.svg"
              alt="Trusted company 3"
              className="h-8 w-auto"
            />
            <Image
              width={32}
              height={32}
              src="/company-logo-4.svg"
              alt="Trusted company 4"
              className="h-8 w-auto"
            />
            <Image
              width={32}
              height={32}
              src="/company-logo-5.svg"
              alt="Trusted company 5"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <Image
          src={heroIlustration}
          alt="Teacher illustration"
          width={400}
          height={400}
          className="w-96 h-auto object-contain md:w-2xl lg:w-full"
          priority
        />
      </motion.div>
    </section>
  );
}

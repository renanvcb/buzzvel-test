"use client";
import { Button } from "../button";
import { MarkedText } from "../marked-text";
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-[url(/app-bg.png)] bg-no-repeat flex flex-col gap-8"
    >
      {/* Top section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-8"
      >
        {/* Section Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight">
            An <MarkedText>all-in-one</MarkedText> app that makes it easier
          </h2>
          <p>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
        </div>

        {/* List */}
        <div>
          <div className="flex items-start gap-3">
            <FaCheck className="mt-1" />
            <p className="text-xl">
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaCheck className="mt-1" />
            <p className="text-xl">
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaCheck className="mt-1" />
            <p className="text-xl">
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>
        </div>

        <div>
          <Button variant="link" size="m">
            <Button.Text>Find more abou the app</Button.Text>
            <Button.IconRight>
              <FaArrowRight />
            </Button.IconRight>
          </Button>
        </div>
      </motion.div>

      {/* Bottom section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full"
      >
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            id="video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // <- Replace with real video link
            title="App Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

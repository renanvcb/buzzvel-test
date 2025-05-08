"use client";
import { motion } from "framer-motion";
import { Button } from "../button";

export function Form() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="px-4 py-12 -mt-14 bg-orange-600 text-white"
    >
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center font-bold text-3xl">
          Ready for your next project?
        </h2>
        <p className="text-center text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>

        <form className="flex flex-col gap-5 w-full">
          <label htmlFor="email" className="font-medium text-lg">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full p-4 bg-white text-gray-400 placeholder:text-gray-400 rounded-xl"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message" className="font-medium text-lg">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={3}
            className="w-full p-4 bg-white text-gray-400 placeholder:text-gray-400 rounded-xl resize-none"
            placeholder="What do you say?"
          />
        </form>
        <Button size="l" className="">
          <Button.Text>Request Demo</Button.Text>
        </Button>
      </div>
    </motion.section>
  );
}

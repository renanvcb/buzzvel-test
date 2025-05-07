"use client";
import { Button } from "../button";
import { MarkedText } from "../marked-text";
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ListItem } from "./list-item";

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
          <ListItem>
            Est et in pharetra magna adipiscing ornare aliquam.
          </ListItem>
          <ListItem>Tellus arcu sed consequat ac velit ut eu blandit.</ListItem>
          <ListItem>Ullamcorper ornare in et egestas dolor orci.</ListItem>
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
        <div className="relative mx-4 border-8 border-white bg-white rounded-xl shadow-xs shadow-black">
          {/* Iframe container */}
          <div className="py-2.5 flex gap-1.5">
            <div className="size-2.5 bg-rose-600 rounded-full" />
            <div className="size-2.5 bg-amber-400 rounded-full" />
            <div className="size-2.5 bg-green-500 rounded-full" />
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-b-xl">
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

          {/* Grid container positioned on top */}
          <div className="absolute top-[195px] -right-10 grid grid-cols-2 gap-4 p-4 md:grid-cols-3 bg-white shadow-lg rounded-lg">
            <div className="shadow-md/30 shadow-black p-4 space-y-2">
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-sm inline-block">
                Featured
              </div>
              <h3 className="font-medium">The map of mathematics</h3>

              <p className="text-xs text-slate-600">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>

              <div className="flex justify-center mt-4">
                <Button variant="outline" size="s">
                  <Button.Text>Take Lesson</Button.Text>
                </Button>
              </div>
            </div>

            <div className="shadow-md/30 shadow-black p-4 space-y-2">
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-sm inline-block">
                Popular
              </div>
              <h3 className="font-medium">Design for how people think</h3>

              <p className="text-xs text-slate-600">
                Aliquam ut euismod condimentum elementum ultricies volutpat sit
                non.
              </p>

              <div className="flex justify-center mt-4">
                <Button variant="outline" size="s">
                  <Button.Text>Take Lesson</Button.Text>
                </Button>
              </div>
            </div>

            <div className="hidden md:block shadow-md/30 shadow-black p-4 space-y-2">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-sm inline-block">
                New
              </div>
              <h3 className="font-medium">International & commercial law</h3>

              <p className="text-xs text-slate-600">
                Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.
              </p>

              <div className="flex justify-center mt-4">
                <Button variant="outline" size="s">
                  <Button.Text>Take Lesson</Button.Text>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { PiGlobeSimpleBold } from "react-icons/pi";
import { RxAccessibility } from "react-icons/rx";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="-mt-14 px-4 py-12 bg-slate-900 text-white space-y-10"
    >
      <Image src="/logo-white.svg" alt="Uteach logo" width={361} height={35} />

      <div className="space-y-6 py-3">
        <h3 className="font-medium">Product</h3>
        <p>Pricing</p>
        <p>Overview</p>
        <p>Browse</p>
        <div className="flex gap-2">
          <p>Accessibility</p>
          <p className="px-2 rounded-md bg-purple-100 text-purple-800">BETA</p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-medium">Solutions</h3>
        <p>Brainstorming</p>
        <p>Ideation</p>
        <p>Wireframing</p>
        <p>Research</p>
      </div>

      <div className="space-y-6">
        <h3 className="font-medium">Resources</h3>
        <p>Help Center</p>
        <p>Blog</p>
        <p>Tutorials</p>
        <p>FAQs</p>
      </div>

      <div className="space-y-6">
        <h3 className="font-medium">Support</h3>
        <p>Contact Us</p>
        <p>Developers</p>
        <p>Documentation</p>
        <p>Integrations</p>
      </div>

      <div className="space-y-6">
        <h3 className="font-medium">Company</h3>
        <p>About</p>
        <p>Press</p>
        <p>Events</p>
        <div className="flex items-center gap-2">
          <p>Request Demo</p>
          <FaArrowRight />
        </div>
      </div>

      <div className="border-t border-slate-700 space-y-6 pt-6">
        <p>uteach @ 2023. All rights reserved.</p>

        <div className="flex gap-10 items-center">
          <p>Terms</p>
          <p>Privacy</p>
          <div className="flex items-center gap-2">
            <PiGlobeSimpleBold />
            <p>EN</p>
          </div>
          <p>EUR</p>
          <RxAccessibility />
        </div>
      </div>
    </motion.footer>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center p-4 justify-between lg:py-6 lg:px-20"
      >
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo-colored.svg"
              alt="Logo"
              width={103}
              height={35}
              priority
            />
          </Link>
        </div>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </motion.div>
    </header>
  );
}

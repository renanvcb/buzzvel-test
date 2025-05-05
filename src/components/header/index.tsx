"use client";
import Image from "next/image";
import { useState } from "react";

import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white lg:py-6 lg:px-20">
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
    </header>
  );
}

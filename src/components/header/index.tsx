import Image from "next/image";

import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <Image src="/logo-colored.svg" alt="Logo" width={103} height={0} />
      </div>
      <Navbar />
      <Sidebar />
    </header>
  );
}

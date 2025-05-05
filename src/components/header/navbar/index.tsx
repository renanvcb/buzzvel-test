import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

interface NavbarProps {
  toggleSidebar: () => void;
}

export function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <nav>
      <div className="hidden lg:flex lg:space-x-4">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Contact</Link>
      </div>

      <button type="button" className="lg:hidden" onClick={toggleSidebar}>
        <IoMenuOutline className="size-6" />
      </button>
    </nav>
  );
}

import { Button } from "@/components/button";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

interface NavbarProps {
  toggleSidebar: () => void;
}

export function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <nav className="flex items-center">
      <div className="hidden items-center gap-36 lg:flex xl:gap-[512px]">
        <div className="gap-8 flex xl:gap-12 font-medim">
          <Link href="#">Products</Link>
          <Link href="#">Solutions</Link>
          <Link href="#">Pricing</Link>
          <Link href="#" className="flex items-center gap-2">
            Resources
            <FaChevronDown />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="/" className="font-medium text-nowrap">
            Log In
          </a>
          <Button
            variant="outline"
            className="!border-black !text-black"
            size="m"
          >
            <Button.Text>Sign Up Now</Button.Text>
          </Button>
        </div>
      </div>

      <button type="button" className="lg:hidden" onClick={toggleSidebar}>
        <IoMenuOutline className="size-6" />
      </button>
    </nav>
  );
}

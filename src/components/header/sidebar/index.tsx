import { Button } from "@/components/button";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
        onKeyUp={toggleSidebar}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="absolute right-4 top-4"
          onClick={toggleSidebar}
        >
          <IoCloseOutline className="size-6" />
        </button>

        <nav className="mt-10 space-y-12">
          <div className="flex flex-col gap-4">
            <Button
              variant="link"
              className="!text-black"
              onClick={toggleSidebar}
            >
              <Button.Text>Log In</Button.Text>
            </Button>
            <Button
              variant="outline"
              className="!border-black !text-black"
              size="s"
              onClick={toggleSidebar}
            >
              <Button.Text>Sign Up Now</Button.Text>
            </Button>
          </div>

          <ul className="space-y-2">
            <li>
              <Link href="#" className="block" onClick={toggleSidebar}>
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="block" onClick={toggleSidebar}>
                Solutions
              </Link>
            </li>
            <li>
              <Link href="#" className="block" onClick={toggleSidebar}>
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2"
                onClick={toggleSidebar}
              >
                Resources
                <FaChevronDown />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

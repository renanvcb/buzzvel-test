import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
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

        <nav className="mt-10">
          <ul className="space-y-2">
            <li>
              <Link href="#" className="block" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block" onClick={toggleSidebar}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#" className="block" onClick={toggleSidebar}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

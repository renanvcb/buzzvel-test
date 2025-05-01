import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div
      className="fixed w-full h-full overflow-hidden 
   justify-center bg-white grid pt-[120px] left-0 z-10"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`,
      }}
    >
      <button
        type="button"
        className="absolute right-0 p-5"
        onClick={toggleSidebar}
      >
        <IoCloseOutline className="size-6" />
      </button>

      <ul className="sidebar-nav text-center leading-relaxed text-xl">
        <li>
          <Link href="#" onClick={toggleSidebar}>
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="#" onClick={toggleSidebar}>
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="#" onClick={toggleSidebar}>
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

import { IoMenuOutline } from "react-icons/io5";

export function Sidebar() {
  return (
    <div className="md:hidden">
      <button type="button">
        <IoMenuOutline className="size-6" />
      </button>
    </div>
  );
}

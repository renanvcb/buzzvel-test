import { FaCheck } from "react-icons/fa6";

interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <div className="flex items-start gap-3">
      <FaCheck className="mt-1" />
      <p className="text-xl">{children}</p>
    </div>
  );
}

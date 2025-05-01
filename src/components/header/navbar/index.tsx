import Link from "next/link";

export function Navbar() {
  return (
    <nav className="hidden md:flex md:space-x-4">
      <Link href="#">Home</Link>
      <Link href="#">About</Link>
      <Link href="#">Services</Link>
      <Link href="#">Contact</Link>
    </nav>
  );
}

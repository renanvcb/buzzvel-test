import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Image src="/logo-colored.svg" alt="Logo" width={103} height={0} />
      <h1>HELLO WORLD</h1>
    </div>
  );
}

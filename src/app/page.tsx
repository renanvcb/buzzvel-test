import { Features } from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="py-12 px-4 lg:p-20 space-y-24">
      <Hero />
      <Features />
    </div>
  );
}

import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";

export default function Home() {
  return (
    <div className="py-12 space-y-24">
      <Hero />
      <Features />
      <Quote />
    </div>
  );
}

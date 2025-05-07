import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Stats } from "@/components/stats";
import { Students } from "@/components/students";

export default function Home() {
  return (
    <div className="py-12 space-y-20">
      <Hero />
      <Features />
      <Quote />
      <Students />
      <Stats />
    </div>
  );
}

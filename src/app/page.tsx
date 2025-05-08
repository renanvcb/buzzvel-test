import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Form } from "@/components/form";
import { Hero } from "@/components/hero";
import { JoinUs } from "@/components/join-us";
import { Quote } from "@/components/quote";
import { Stats } from "@/components/stats";
import { Students } from "@/components/students";

export default function Home() {
  return (
    <div className="py-12 space-y-14">
      <Hero />
      <Features />
      <Quote />
      <Students />
      <Stats />
      <JoinUs />
      <Form />
      <Footer />
    </div>
  );
}

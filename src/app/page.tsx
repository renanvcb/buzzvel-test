import { Button } from "@/components/button";
import Image from "next/image";
import { LuCirclePlay } from "react-icons/lu";

import companyLogo1 from "../assets/images/company-logo-1.svg";
import companyLogo2 from "../assets/images/company-logo-2.svg";
import companyLogo3 from "../assets/images/company-logo-3.svg";
import companyLogo4 from "../assets/images/company-logo-4.svg";
import companyLogo5 from "../assets/images/company-logo-5.svg";
import { MarkedText } from "@/components/marked-text";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="py-12 px-4 lg:p-20">
      <Hero />
    </div>
  );
}

import Button from "@/components/button";
import Image from "next/image";
import { LuCirclePlay } from "react-icons/lu";

import companyLogo1 from "../assets/company-logo-1.svg";
import companyLogo2 from "../assets/company-logo-2.svg";
import companyLogo3 from "../assets/company-logo-3.svg";
import companyLogo4 from "../assets/company-logo-4.svg";
import companyLogo5 from "../assets/company-logo-5.svg";
import { MarkedText } from "@/components/marked-text";

export default function Home() {
  return (
    <div className="py-12 px-4 md:p-20">
      <section className="flex flex-col gap-6">
        <h1 className="font-bold text-[40px] leading-tight">
          <MarkedText>Teach</MarkedText> students worldwide
        </h1>

        <p className="md:text-2xl">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>

        <div className="flex gap-8">
          <Button
            size="m"
            filledColor="bg-orange-500"
            filledHoverColor="hover:bg-orange-600"
          >
            <Button.Text>Sign Up Now</Button.Text>
          </Button>

          <Button variant="link" className="!text-sm" size="m">
            <Button.IconLeft>
              <LuCirclePlay className="size-6" />
              <Button.Text>View Demo</Button.Text>
            </Button.IconLeft>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-slate-600">Trusted by leading companies</p>
          <div className="flex gap-6">
            <Image
              src={companyLogo1}
              alt="Trusted company 1"
              className="w-auto h-auto"
            />
            <Image
              src={companyLogo2}
              alt="Trusted company 2"
              className="w-auto h-auto"
            />
            <Image
              src={companyLogo3}
              alt="Trusted company 3"
              className="w-auto h-auto"
            />
            <Image
              src={companyLogo4}
              alt="Trusted company 4"
              className="w-auto h-auto"
            />
            <Image
              src={companyLogo5}
              alt="Trusted company 5"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

import Button from "@/components/button";
import { FiPlayCircle } from "react-icons/fi";

export default function Home() {
  return (
    <div className="py-12 px-4 md:p-20">
      <section className="flex flex-col gap-6">
        <h1 className="font-bold text-[40px] leading-tight">
          <span
            className="relative inline-block bg-no-repeat bg-left-bottom bg-[length:100%_0.6em] pb-1"
            style={{ backgroundImage: "url('/orange-marker.svg')" }}
          >
            Teach
          </span>{" "}
          students worldwide
        </h1>

        <p className="md:text-2xl">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>

        <div className="flex gap-6">
          <Button
            size="m"
            filledColor="bg-orange-500"
            filledHoverColor="hover:bg-orange-600"
          >
            <Button.Text>Sign Up Now</Button.Text>
          </Button>

          <Button variant="link" className="gap-4 !text-sm" size="m">
            <Button.IconLeft>
              <FiPlayCircle className="size-6" />
              <Button.Text>View Demo</Button.Text>
            </Button.IconLeft>
          </Button>
        </div>
      </section>
    </div>
  );
}

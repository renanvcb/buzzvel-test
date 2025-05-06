import { Button } from "../button";
import { MarkedText } from "../marked-text";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

export function Features() {
  return (
    <section className="bg-[url(/app-bg.png)] bg-no-repeat">
      {/* Top section */}
      <div className="flex flex-col gap-8">
        {/* Section Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight">
            An <MarkedText>all-in-one</MarkedText> app that makes it easier
          </h2>
          <p>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
        </div>

        {/* List */}
        <div>
          <div className="flex items-start gap-3">
            <FaCheck className="mt-1" />
            <p className="text-xl">
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaCheck className="mt-1" />
            <p className="text-xl">
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaCheck className="mt-1" />
            <p className="text-xl">
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>
        </div>

        <div>
          <Button variant="link" size="m">
            <Button.Text>Find more abou the app</Button.Text>
            <Button.IconRight>
              <FaArrowRight />
            </Button.IconRight>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { PICPimage, RccgLogo } from "../../../../assets/images";
import TextReveal from "../../../elements/animations/TextReveal";
import Button from "../../../elements/buttons/Button";
import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";

const PICP = () => {
  return (
    <PageWrapper className="bg-picp-bg min-h-fit">
      <SectionWrapper className="grid grid-cols-1 sm:grid-cols-2 text-white py-8 gap-5">
        {/* Image */}
        <div className="flex flex-col w-full items-center justify-center gap-3">
          <TextReveal style="bg-green-600">
            <img
              src={PICPimage}
              alt="RCCG"
              className="size-fit aspect-square p-4 sm:p-0"
            />
          </TextReveal>
        </div>

        {/* Body */}
        <div className="flex flex-col w-full items-center justify-center gap-5">
          {/* Logo */}
          <TextReveal style="bg-green-600">
            <img src={RccgLogo} alt="RCCG" className="size-17 aspect-square" />
          </TextReveal>

          {/* Heading */}
          <div className="flex flex-col gap-1 justify-center items-center sm:items-start">
            <TextReveal style="bg-green-600">
              <h4 className="text-2xl font-semibold text-center">
                Meet Our Pastor
              </h4>
            </TextReveal>
            <TextReveal style="bg-green-600">
              <h6 className="text-sm font-medium text-center">
                Pst & Pst (Mrs) Adeniyi, PICP LP78
              </h6>
            </TextReveal>
          </div>

          {/* Content */}
          <TextReveal style="bg-green-600">
            <p className="text-sm text-center font-light text-gray-100">
              This is our Provincial Pastor and his wife, servants of God with
              hearts fully committed to the gospel. Through sound teaching,
              leadership, and prayer, they lead RCCP LP78 Breakthrough Cathedral
              into growth, faith, and impact.
            </p>
          </TextReveal>

          {/* CTA */}
          <div className="flex mx-auto [&_*]:border-white [&_*]:text-white!">
            <Button
              outlined
              label="See More"
              variant="neutral"
              iconName="right_line text-xs "
              className="flex-row-reverse"
              size="sm"
            />
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default PICP;

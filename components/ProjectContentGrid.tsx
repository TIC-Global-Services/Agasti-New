"use client";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";
import ContainerLayout from "@/layout/ContainerLayout";
import BlurText from "./BlurText";

export default function ProjectContentGrid() {
  // Blur effects for headings
  const { elementRef: sectionRef, blurClass: sectionBlur } = useBlurOnScroll<HTMLParagraphElement>();

  const handleAnimationComplete = () => {
    console.log('ProjectContentGrid title animation completed!');
  };

  return (
    <section className="bg-white">
      <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]" paddingY="py-[40px]">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 items-start">
          {/* Left Side - Section Header */}
          <div>
            <p 
              ref={sectionRef}
              className={`text-[#8D957E] font-gc-palioka text-[22px] sm:text-base md:text-[24px] mb-1 sm:mb-3 md:mb-4 font-regular transition-all duration-700 ${sectionBlur}`}
            >
              Upcoming Projects
            </p>
            <div className="mb-3 lg:mb-0">
              <BlurText
                text="Continuing the Agasti"
                delay={60}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="font-gc-palioka text-[20px] sm:text-3xl md:text-4xl lg:text-[32px] text-black leading-[1.1] tracking-[-0.03em]"
              />
              <BlurText
                text="legacy of crafted excellence."
                delay={60}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => {}}
                className="font-gc-palioka text-[20px] sm:text-3xl md:text-4xl lg:text-[32px] text-black leading-[1.1] tracking-[-0.03em]"
              />
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="lg:pt-12 lg:pl-10">
            <div className="bg-white p-0 sm:p-4 md:p-0 relative max-w-4xl">
              <div className="relative">
                <p className="text-[#717580] text-[16px] font-plus-jakarta-sans sm:text-base leading-tight text-left pr-8">
                  Our upcoming projects reflect Agasti’s vision of refined, nature-led luxury. Each new community is thoughtfully planned with elegant design and smart engineering to bring elevated living to new locations.
                </p>
                {/* Vertical line on the right side */}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mb-3 sm:mb-12 mt-8 sm:mt-10 md:mt-12" />
      </ContainerLayout>
    </section>
  );
}
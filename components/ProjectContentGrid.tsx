"use client";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";
import ContainerLayout from "@/layout/ContainerLayout";
import BlurText from "./BlurText";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProjectContentGrid() {
  // Blur effects for headings
  const { elementRef: sectionRef, blurClass: sectionBlur } =
    useBlurOnScroll<HTMLParagraphElement>();

  const imageSectionRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (imageSectionRef.current) {
      observer.observe(imageSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAnimationComplete = () => {
    console.log("ProjectContentGrid title animation completed!");
  };

  return (
    <section className="bg-white">
      <ContainerLayout
        paddingX="px-6 xl:px-[48px] lg:px-[48px]"
        paddingY="pb-[40px] sm:py-[40px]"
      >
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 items-start">
          {/* Left Side - Section Header */}
          <div>
            <p
              ref={sectionRef}
              className={`text-[#8D957E] font-gc-palioka text-[16px] sm:text-[16px] md:text-[24px] mb-1 sm:mb-2 md:mb-4 font-regular transition-all duration-700 ${sectionBlur}`}
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
          <div className="lg:pt-12 lg:pl-10 sm:pt-4">
            <div className="bg-white p-0 sm:p-2 md:p-0 relative max-w-4xl">
              <div className="relative">
                <p className="text-[#717580] text-[14px] font-plus-jakarta-sans sm:text-base leading-tight text-left pr-8">
                  Our upcoming projects reflect Agasti’s vision of refined,
                  nature-led luxury. Each new community is thoughtfully planned
                  with elegant design and smart engineering to bring elevated
                  living to new locations.
                </p>
                {/* Vertical line on the right side */}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mb-3 sm:mb-12 mt-8 sm:mt-10 md:mt-12" />

        <div
          ref={imageSectionRef}
          className="relative flex items-center justify-center py-12 w-full overflow-hidden"
        >
          {/* BIG TEXT LAYER (BEHIND IMAGE) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Arriving */}
            <span
              className={`absolute text-[40px]  md:text-7xl font-gc-palioka text-[#8D957E] transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                animate
                  ? "-translate-x-[25dvw] opacity-100"
                  : "translate-x-0 opacity-0"
              }`}
            >
              Arriving
            </span>

            {/* Shortly */}
            <span
              className={`absolute text-[40px]  md:text-7xl font-gc-palioka text-[#8D957E] transition-all duration-[1400ms] delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                animate
                  ? "translate-x-[25dvw] opacity-100"
                  : "translate-x-0 opacity-0"
              }`}
            >
              Shortly
            </span>
          </div>

          {/* CENTER IMAGE (ABOVE TEXT) */}
          <div className="relative w-[40%] h-[20dvh] z-10">
            <Image
              src="/projects-imgs/upcoming_proj.png"
              alt="Upcoming Project"
              fill
              className={`object-cover transition-all duration-1000 `}
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

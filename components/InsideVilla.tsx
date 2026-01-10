"use client";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

interface InsideVillaProps {
  showTitle?: boolean;
  showPadding?: boolean;
}

export default function InsideVilla({ showTitle = true, showPadding = true }: InsideVillaProps) {
  // Blur effect for heading
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);

  const content = (
    <>
      {/* Title */}
      {showTitle && (
        <h2 
          ref={titleRef}
          className={`font-gc-palioka text-3xl sm:text-4xl md:text-[34px] text-black mb-12 leading-tight transition-all duration-700 ease-out ${titleBlur}`}
        >
          Inside The Villa
        </h2>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Top Row - Large image spanning full width */}
        <div className="col-span-2">
          <div className="relative overflow-hidden" style={{ width: '100%', height: '400px' }}>
            <Image
              src="/projects-imgs/insidevilla1.png"
              alt="Villa Interior - Pool Area"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Middle Row - Two images side by side */}
        <div className="relative overflow-hidden" style={{ height: '412px' }}>
          <Image
            src="/projects-imgs/insidevilla2.png"
            alt="Villa Interior - Garden View"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        
        <div className="relative overflow-hidden" style={{ height: '412px' }}>
          <Image
            src="/projects-imgs/insidevilla3.png"
            alt="Villa Interior - Living Area"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Bottom Row - Large image spanning full width */}
        <div className="col-span-2">
          <div className="relative overflow-hidden" style={{ width: '100%', height: '400px' }}>
            <Image
              src="/projects-imgs/insidevilla5.jpg"
              alt="Villa Interior - Pool Deck"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );

  if (showPadding) {
    return (
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]">
          {content}
        </ContainerLayout>
      </section>
    );
  }

  return content;
}
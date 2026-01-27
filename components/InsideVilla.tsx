"use client";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useLetterReveal } from "@/hooks/useLetterReveal";

interface InsideVillaProps {
  showTitle?: boolean;
  showPadding?: boolean;
}

export default function InsideVilla({ showTitle = true, showPadding = true }: InsideVillaProps) {
  // Letter reveal effect for heading
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  const content = (
    <>
      {/* Title */}
      {showTitle && (
        <h2 
          ref={titleRef}
          className="font-gc-palioka text-[20px] sm:text-4xl md:text-[34px] text-black mb-12 leading-tight"
        >
          Inside The Villa
        </h2>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Top Row - Large image spanning full width */}
        <div className="col-span-2">
          <div className="relative overflow-hidden w-full h-64 sm:h-80 lg:h-96 xl:h-[400px]">
            <Image
              src="/projects-imgs/topvillainside.png"
              alt="Villa Interior - Pool Area"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Middle Row - Two images side by side */}
        <div className="relative overflow-hidden h-64 sm:h-80 lg:h-96 xl:h-[412px]">
          <Image
            src="/projects-imgs/insidevilla2.png"
            alt="Villa Interior - Garden View"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        
        <div className="relative overflow-hidden h-64 sm:h-80 lg:h-96 xl:h-[412px]">
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
          <div className="relative overflow-hidden w-full h-64 sm:h-80 lg:h-96 xl:h-[400px]">
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
      <section className="bg-white py-0 sm:py-16 md:py-20 lg:py-24">
        {/* Title with padding */}
        <div className="px-6 sm:px-[48px]">
          {showTitle && (
            <h2 
              ref={titleRef}
              className="font-gc-palioka text-[20px] sm:text-4xl md:text-[34px] text-black mb-12 leading-tight"
            >
              Inside The Villa
            </h2>
          )}
        </div>
        
        {/* Image Grid - Full width like parallax images */}
        <div className="grid grid-cols-2 gap-2">
          {/* Top Row - Large image spanning full width */}
          <div className="col-span-2">
            <div className="relative overflow-hidden w-full h-64 sm:h-80 lg:h-96 xl:h-[400px]">
              <Image
                src="/projects-imgs/topvillainside.png"
                alt="Villa Interior - Pool Area"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Row - Two images side by side */}
          <div className="relative overflow-hidden h-64 sm:h-80 lg:h-96 xl:h-[412px]">
            <Image
              src="/projects-imgs/insidevilla2.png"
              alt="Villa Interior - Garden View"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          
          <div className="relative overflow-hidden h-64 sm:h-80 lg:h-96 xl:h-[412px]">
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
            <div className="relative overflow-hidden w-full h-64 sm:h-80 lg:h-96 xl:h-[400px]">
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
      </section>
    );
  }

  return content;
}
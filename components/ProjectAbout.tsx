"use client";
import Image from "next/image";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function ProjectAbout() {
  // Letter reveal effects for headings
  const { elementRef: subtitleRef } = useLetterReveal<HTMLParagraphElement>(0.1);
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-[50vh] lg:h-auto">
          <Image
            src="aboutus.png"
            alt="Agasti Project Interior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-[#F5F3EE] flex items-center justify-center px-6 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <p 
              ref={subtitleRef}
              className="font-gc-palioka text-[#8D957E] text-[20px] sm:text-xl md:text-[24px] mb-[14px] tracking-wider font-bold"
            >
              Why Choose Agasti
            </p>
            
            <h2 
              ref={titleRef}
              className="font-gc-palioka text-[20px] sm:text-4xl md:text-5xl tracking-tight lg:text-[54px] text-black mb-3 leading-none"
            >
              A Commitment to <br />Quality and Timeless <br />Living
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-600 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base">
                Discover Agasti&apos;s exclusive collection of luxury villa communities—
                each crafted with precision, nature-driven design, and timeless 
                architectural elegance.
              </p>
            </div>

            <button className="text-black text-sm sm:text-base font-medium hover:opacity-70 transition-opacity group">
              <span className="relative inline-block">
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
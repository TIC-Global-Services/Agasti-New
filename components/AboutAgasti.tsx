"use client";
import Image from "next/image";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function AboutAgasti() {
  // Letter reveal effects for headings
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-[50vh] lg:h-auto">
          <Image
            src="/aboutus.png"
            alt="Agasti Interior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-[#F5F3EE] flex items-center justify-center px-6 sm:px-[48px] py-[40px]">
          <div className="max-w-xl">
            <p className="font-gc-palioka text-[#8D957E] text-lg sm:text-xl md:text-[25px] mb-4 tracking-wider font-bold">About AGASTI</p>
            
            <h2 
              ref={titleRef}
              className="font-gc-palioka text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight"
            >
              An Urban Sanctuary for the Elite
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-600 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base">
                Atara is more than a home — it&apos;s a living experience that celebrates 
                tranquility, space, and sophistication.
              <br></br>
                Every villa is enveloped in lush greenery, crafted with premium 
                finishes, and designed for modern, mindful living.
              </p>
            </div>

            <button className="text-black text-sm sm:text-base font-medium hover:opacity-70 transition-opacity group">
              <span className="relative inline-block">
                Know More
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

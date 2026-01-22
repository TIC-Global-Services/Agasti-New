"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function SmartFutureHomes() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Blur effects for headings
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / (rect.height + window.innerHeight));
        setOffsetY((scrollProgress - 0.3) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-[40px]">
      <ContainerLayout paddingX="px-6 sm:px-[48px]">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[#8D957E] text-sm sm:text-base md:text-lg mb-6 sm:mb-2">Smart, Future-Ready Engineering</p>
          
          {/* Responsive layout for heading and paragraph */}
          <div className="block xl:grid xl:grid-cols-5 xl:gap-6 xl:items-start">
            {/* Heading */}
            <div className="xl:col-span-3 mb-6 xl:mb-0">
              <h2 
                ref={titleRef}
                className={`font-gc-palioka text-[20px] sm:text-2xl md:text-3xl lg:text-[32px] text-black leading-tight transition-all duration-700 ${titleBlur}`}
              >
                Crafting Homes Designed for Intelligent Living,<br /> Lasting Strength, and a Future-Ready Lifestyle
              </h2>
            </div>
            
            {/* Paragraph */}
            <div className="xl:col-span-2 xl:-ml-12">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Agasti homes use advanced structures, planned MEP systems, quality waterproofing, and solar integration to ensure long-term durability, easy upkeep, and a modern living experience built for the future.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-400 mb-12" />

        {/* Parallax Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div
            style={{
              transform: `translateY(${Math.min(0, offsetY * 3)}px)`,
              transition: "transform 0.1s ease-out",
            }}
            className="relative w-full h-[160%] -translate-y-[30%]"
          >
            <Image
              src="mainvilla.jpg"
              alt="Smart Future Home"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

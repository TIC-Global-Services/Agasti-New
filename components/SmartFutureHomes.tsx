"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function SmartFutureHomes() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height + window.innerHeight);
        setOffsetY(scrollProgress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12 sm:py-16 md:py-20">
      <ContainerLayout>
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[#8D957E] text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Smart, Future-Ready Engineering</p>
          
          <h2 className="font-gc-palioka text-[20px] sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight mb-6 sm:mb-8">
            Crafting Homes Designed for Intelligent Living, Lasting Strength, and a Future-Ready Lifestyle
          </h2>
          
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl">
            Agasti homes use advanced structures, planned MEP systems, quality waterproofing, and solar integration to ensure long-term durability, easy upkeep, and a modern living experience built for the future.
          </p>
        </div>

        <hr className="border-gray-400 mb-12" />

        {/* Parallax Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div
            style={{
              transform: `translateY(${offsetY * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
            className="relative w-full h-[120%]"
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

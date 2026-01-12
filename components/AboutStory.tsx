"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import MenuOverlay from "./MenuOverlay";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function AboutStory() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Blur effects for headings
  const { elementRef: storyRef, blurClass: storyBlur } = useBlurOnScroll<HTMLParagraphElement>(0.1);
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);

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
    <>
      <section ref={sectionRef} className="relative min-h-screen bg-white">
        {/* Header with Navigation - Positioned absolutely over the content */}
        <div className="absolute top-0 left-0 right-0 z-20 px-4 py-6 sm:px-6 sm:py-8 xl:px-[145px] lg:px-[50px]">
          <div className="flex items-center justify-between">
            {/* Spacer for left side */}
            <div className="w-6 sm:w-8" />
            
            {/* Centered AGASTI Logo */}
            <div className="flex-1 flex justify-center">
              <div className="relative h-[36px] sm:h-[44px] w-auto aspect-[4/1]">
                <Image
                  src="/Agasti_Logo.png"
                  alt="Agasti Logo"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Hamburger Menu - Top Right */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="hover:opacity-80 transition-opacity flex flex-col gap-2"
              aria-label="Open menu"
            >
              <span className="w-6 sm:w-8 h-[2px] bg-black rounded-full" />
              <span className="w-6 sm:w-8 h-[2px] bg-black rounded-full" />
            </button>
          </div>
        </div>

        <ContainerLayout className="pt-20 sm:pt-24 md:pt-28" paddingX="px-6 xl:px-[48px] lg:px-[48px]">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Mobile Content - Above Image */}
            <div className="mb-6">
              <p 
                ref={storyRef}
                className={`text-[#8D957E] font-gc-palioka text-[16px] mb-2 font-normal transition-all duration-700 ease-out ${storyBlur}`}
              >
                Our story
              </p>
              <h1 
                ref={titleRef}
                className={`font-gc-palioka text-[20px] sm:text-[28px] md:text-[32px] text-black leading-[1.1] tracking-[-0.03em] mb-4 transition-all duration-700 ease-out ${titleBlur}`}
              >
                Crafting Luxury Villas
                <br />
                Since <span className="font-bold">2018</span>
              </h1>
              <p className="text-[#717580] text-[14px] leading-relaxed">
                From lush landscapes to world-class amenities, each home reflects precision, elegance, and timeless craftsmanship.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px]" style={{ width: '100%' }}>
              <div
                style={{
                  transform: `translateY(${Math.min(0, offsetY * 3)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative w-full h-[120%] -translate-y-[10%]"
              >
                <Image
                  src="/mainvilla.jpg"
                  alt="Agasti Villa Architecture"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Parallax Image - Centered */}
            <div className="flex justify-center mb-1 sm:mb-2 md:mb-1 lg:mb-3">
              <div className="relative overflow-hidden" style={{ width: '1344px', height: '500px', maxWidth: '100%' }}>
                <div
                  style={{
                    transform: `translateY(${Math.min(0, offsetY * 3)}px)`,
                    transition: "transform 0.1s ease-out",
                  }}
                  className="relative w-full h-[120%] -translate-y-[10%]"
                >
                  <Image
                    src="/mainvilla.jpg"
                    alt="Agasti Villa Architecture"
                    fill
                    sizes="1344px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content Grid - Properly aligned below image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start pb-12 sm:pb-16 md:pb-20">
              {/* Left Side - Story Header */}
              <div>
                <p 
                  ref={storyRef}
                  className={`text-[#8D957E] font-gc-palioka text-[22px] sm:text-base md:text-lg mb-2 sm:mb-4 font-bold transition-all duration-700 ease-out ${storyBlur}`}
                >
                  Our story
                </p>
                <h1 
                  ref={titleRef}
                  className={`font-gc-palioka text-[20px] sm:text-3xl md:text-4xl lg:text-[54px] text-black leading-[1.1] tracking-[-0.03em] transition-all duration-700 ease-out ${titleBlur}`}
                >
                  Crafting Luxury Villas
                  <br />
                  Since <span className="font-bold">2018</span>
                </h1>
              </div>

              {/* Right Side - Description */}
              <div className="lg:pt-10 lg:pl-4">
                <div className="bg-white p-7 sm:p-4 md:p-0 relative">
                  <div className="relative">
                    <p className="text-[#717580] text-[16px] sm:text-base leading-relaxed text-right pr-8">
                      From lush landscapes to world-class amenities, each <br />home reflects precision, elegance, and timeless<br /> craftsmanship.
                    </p>
                    {/* Vertical line on the right side */}
                    <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </section>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
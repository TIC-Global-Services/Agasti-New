"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "@/layout/ContainerLayout";
import MenuOverlay from "./MenuOverlay";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function ContactHero() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  // Letter reveal effects for headings
  const { elementRef: contactRef } = useLetterReveal<HTMLParagraphElement>(0.1);
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  useEffect(() => {
    const handleScroll = () => {
      // Use imageRef for mobile, imageContainerRef for desktop
      const targetRef = window.innerWidth >= 1024 ? imageContainerRef.current : imageRef.current;
      
      if (targetRef) {
        const rect = targetRef.getBoundingClientRect();
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
      <section className="relative min-h-screen bg-white">
        {/* Header with Navigation - Positioned absolutely over the content */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 py-6 sm:py-8 xl:px-[48px] lg:px-[48px]">
          <div className="flex items-center justify-between">
            {/* Spacer for left side */}
            <div className="w-6 sm:w-8" />
            
            {/* Centered AGASTI Logo */}
            <div className="flex-1 flex justify-center">
              <Link href="/" className="relative h-[36px] sm:h-[44px] w-auto aspect-[4/1] hover:opacity-80 transition-opacity">
                <Image
                  src="/Agasti_Logo.png"
                  alt="Agasti Logo"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain"
                />
              </Link>
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

        <div className="pt-20 sm:pt-24 md:pt-28 px-6 xl:px-[48px] lg:px-[48px]">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Mobile Image */}
            <div 
              ref={imageRef}
              className="overflow-hidden h-[600px] md:h-[500px] w-full mb-6"
            >
              <div
                style={{
                  transform: `translateY(${Math.min(0, offsetY * 2)}px) scale(1.1)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative w-full h-[130%] -translate-y-[15%]"
              >
                <Image
                  src="/contact-us/contactusbanner.jpg"
                  alt="Contact Agasti"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Mobile Content - Below Image */}
            <div className="mb-[10px]">
              <p 
                ref={contactRef}
                className="text-[#8D957E] font-gc-palioka text-[16px] mt-3 mb-2 font-normal"
              >
                Crafting Connections that last
              </p>
              <h1 
                ref={titleRef}
                className="font-gc-palioka text-[20px] sm:text-[28px] md:text-[32px] text-black leading-[1.1] tracking-[-0.03em] mb-4"
              >
                Let's Build Your Dream
                <br />
                Villa Together
              </h1>
              <p className="text-[#717580] text-[14px] mb-[20px] leading-tight">
                Reach out, our team is here to guide you every step of the way, turning your vision of luxury living into a beautiful reality.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Parallax Image Container - Isolated */}
            <div className="mb-0">
              <div className="overflow-hidden h-[500px] w-full">
                <div
                  ref={imageContainerRef}
                  style={{
                    transform: `translateY(${Math.min(0, offsetY * 2)}px) scale(1.1)`,
                    transition: "transform 0.1s ease-out",
                  }}
                  className="relative w-full h-[130%] -translate-y-[15%]"
                >
                  <Image
                    src="/contact-us/contactusbanner.jpg"
                    alt="Contact Agasti"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content Grid - Properly aligned below image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start pt-12 pb-12 sm:pb-16 md:pb-20">
              {/* Left Side - Contact Header */}
              <div>
                <p 
                  ref={contactRef}
                  className="text-[#8D957E] font-gc-palioka text-[22px] sm:text-base md:text-lg mb-2 sm:mb-4 font-bold"
                >
                  Crafting Connections that last
                </p>
                <h1 
                  ref={titleRef}
                  className="font-gc-palioka text-[20px] sm:text-3xl md:text-4xl lg:text-[54px] text-black leading-[1.1] tracking-[-0.03em]"
                >
                  Let's Build Your Dream
                  <br />
                  Villa Together
                </h1>
              </div>

              {/* Right Side - Description */}
              <div className="lg:pt-20 lg:pl-4">
                <div className="bg-white p-7 sm:p-4 md:p-0 relative">
                  <div className="relative">
                    <p className="text-[#717580] text-[16px] sm:text-base leading-tight text-right pr-4">
                      Reach out, our team is here to guide you every step of the way, turning <br />your vision of luxury living into a beautiful reality.
                    </p>
                    {/* Vertical line on the right side */}
                    <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
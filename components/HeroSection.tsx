"use client";
import { useState } from "react";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/mainvilla.jpg"
            alt="Agasti Villa"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Header with Text and Menu */}
          <div className="relative px-4 py-6 sm:px-6 sm:py-8 xl:px-[145px] lg:px-[50px]">
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
        </div>
      </section>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

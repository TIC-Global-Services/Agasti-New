"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header with Navigation - Static positioning */}
      <div className="relative z-20 bg-white px-6 py-6 sm:py-8 xl:px-[48px] lg:px-[48px]">
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

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
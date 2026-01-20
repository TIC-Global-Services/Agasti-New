"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Use a microtask to avoid synchronous setState in effect
      Promise.resolve().then(() => setIsAnimating(true));
    } else {
      // Use a microtask for consistency
      Promise.resolve().then(() => setIsAnimating(false));
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white transition-transform duration-300 ease-in-out ${
        isAnimating ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex h-full w-full">
        {/* Left Side - Image (Desktop only) */}
        <div className="hidden xl:block xl:w-1/2 relative">
          <Image
            src="/menu-image.jpg"
            alt="Interior"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Right Side - Menu Content */}
        <div className="w-full xl:w-1/2 flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-16 xl:px-24 relative min-h-screen">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gray-400 hover:text-black transition-colors z-10"
            aria-label="Close menu"
          >
            {/* Cross icon for mobile */}
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {/* Text for tablet/desktop */}
            <span className="hidden md:inline text-sm tracking-wider">CLOSE</span>
          </button>

          {/* Logo */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="relative h-[40px] sm:h-[50px] md:h-[60px] w-auto aspect-[4/1]">
              <Image
                src="/Agasti_Logo.png"
                alt="Agasti Logo"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="mb-auto">
            <ul className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-500 text-center">
              <li>
                <Link href="/" className="hover:text-black transition-colors text-sm sm:text-base md:text-lg font-medium tracking-wide" onClick={handleClose}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors text-sm sm:text-base md:text-lg font-medium tracking-wide" onClick={handleClose}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-black transition-colors text-sm sm:text-base md:text-lg font-medium tracking-wide" onClick={handleClose}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors text-sm sm:text-base md:text-lg font-medium tracking-wide" onClick={handleClose}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer Content */}
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 xl:left-24 xl:right-[72px] w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 md:mb-8">
              {/* Need Support */}
              <div className="text-left">
                <h3 className="font-semibold mb-1 sm:mb-2 text-gray-700 text-xs sm:text-sm">NEED SUPPORT?</h3>
                <p className="text-xs sm:text-sm">INFO@AGASTI.COM</p>
              </div>

              {/* Address */}
              <div className="text-left">
                <h3 className="font-semibold mb-1 sm:mb-2 text-gray-700 text-xs sm:text-sm">ADDRESS</h3>
                <p className="text-xs sm:text-sm">AGASTIESTATES, GACHIBOWLI,</p>
                <p className="text-xs sm:text-sm">HYDERABAD - 500032</p>
              </div>

              {/* Socials */}
              <div className="text-left">
                <h3 className="font-semibold mb-1 sm:mb-2 text-gray-700 text-xs sm:text-sm">SOCIALS</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-black transition-colors text-xs sm:text-sm">
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors text-xs sm:text-sm">
                      FACEBOOK
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors text-xs sm:text-sm">
                      TWITTER
                    </a>
                  </li>
                </ul>
              </div>

              {/* Customer Care */}
              <div className="text-left">
                <h3 className="font-semibold mb-1 sm:mb-2 text-gray-700 text-xs sm:text-sm">CUSTOMER CARE</h3>
                <p className="text-xs sm:text-sm">+1 234 567 8910</p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs text-gray-400">
              <a href="#" className="hover:text-black transition-colors">
                PRIVACY POLICY
              </a>
              <span>© 2025 AGASTI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

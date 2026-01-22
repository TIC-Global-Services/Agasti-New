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
      // Small delay to ensure the component is mounted before animating
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      // Use a timeout to avoid synchronous setState in effect
      const timer = setTimeout(() => setIsAnimating(false), 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 500); // Match the transition duration
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white transition-transform duration-500 ease-out ${
        isAnimating ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex h-full w-full">
        {/* Left Side - Image (Desktop only) */}
        <div className="hidden xl:block xl:w-1/2 relative">
          <Image
            src="/menubarimg.png"
            alt="Interior"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Right Side - Menu Content */}
        <div className="w-full xl:w-1/2 flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-24 relative min-h-screen">
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
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            <Link 
              href="/" 
              onClick={onClose}
              className="relative h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-auto aspect-[4/1] hover:opacity-80 transition-opacity inline-block"
            >
              <Image
                src="/Agasti_Logo.png"
                alt="Agasti Logo"
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="mb-auto">
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 text-gray-500 text-center">
              <li>
                <Link href="/" className="hover:text-black transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide" onClick={handleClose}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide" onClick={handleClose}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-black transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide" onClick={handleClose}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide" onClick={handleClose}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer Content */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-none mt-[10px] lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[190px] text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 md:mb-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Need Support */}
                <div className="text-left">
                  <h3 className="font-semibold mb-1 sm:mb-2 text-gray-700 text-xs sm:text-sm">NEED SUPPORT?</h3>
                  <a href="mailto:info@agasti.com" className="text-xs sm:text-sm hover:text-black transition-colors relative group inline-block">
                    INFO@AGASTI.COM
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
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
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Address */}
                <div className="text-left">
                  <h3 className="font-semibold mb-1 sm:mb-2 text-gray-700 text-xs sm:text-sm">ADDRESS</h3>
                  <p className="text-xs sm:text-sm">AGASTIESTATES, GACHIBOWLI,</p>
                  <p className="text-xs sm:text-sm">HYDERABAD - 500032</p>
                </div>

                {/* Customer Care */}
                <div className="text-left">
                  <h3 className="font-semibold mb-1 sm:mb-2 text-gray-700 text-xs sm:text-sm">CUSTOMER CARE</h3>
                  <a href="tel:+12345678910" className="text-xs sm:text-sm hover:text-black transition-colors relative group inline-block">
                    +1 234 567 8910
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[190px] items-center text-xs text-gray-400">
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

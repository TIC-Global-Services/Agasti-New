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
      className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
        isAnimating ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full">
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/menu-image.jpg"
            alt="Interior"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Right Side - Menu Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-16 lg:px-24 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            {/* Cross icon for mobile */}
            <svg
              className="w-6 h-6 sm:hidden"
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
            <span className="hidden sm:inline text-sm tracking-wider">CLOSE</span>
          </button>

          {/* Logo */}
          <div className="mb-12 sm:mb-16">
            <div className="relative h-[50px] sm:h-[60px] w-auto aspect-[4/1]">
              <Image
                src="/Agasti_Logo.png"
                alt="Agasti Logo"
                fill
                sizes="(max-width: 640px) 200px, 240px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="mb-auto">
            <ul className="space-y-4 sm:space-y-6 text-gray-500 text-center">
              <li>
                <Link href="/" className="hover:text-black transition-colors text-base sm:text-lg" onClick={handleClose}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors text-base sm:text-lg" onClick={handleClose}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-black transition-colors text-base sm:text-lg" onClick={handleClose}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors text-base sm:text-lg" onClick={handleClose}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer Content */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 right-6 sm:left-8 sm:right-8 md:left-16 md:right-16 lg:left-24 lg:right-24 w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
              {/* Need Support */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold mb-2 text-gray-700">NEED SUPPORT?</h3>
                <p>INFO@AGASTI.COM</p>
              </div>

              {/* Address */}
              <div className="text-center sm:text-right">
                <h3 className="font-semibold mb-2 text-gray-700">ADDRESS</h3>
                <p>AGASTIESTATES, GACHIBOWLI,</p>
                <p>HYDERABAD - 500032</p>
              </div>

              {/* Socials */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold mb-2 text-gray-700">SOCIALS</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      FACEBOOK
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      TWITTER
                    </a>
                  </li>
                </ul>
              </div>

              {/* Customer Care */}
              <div className="text-center sm:text-right">
                <h3 className="font-semibold mb-2 text-gray-700">CUSTOMER CARE</h3>
                <p>+1 234 567 8910</p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex justify-between items-center text-xs text-gray-400">
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

import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "@/layout/ContainerLayout";

export default function Footer() {
  return (
    <footer className="bg-[#F0EDE4] py-[40px]">
      <ContainerLayout paddingX="px-6 sm:px-[48px]">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          {/* Logo */}
          <div className="flex justify-center mb-8 mt-4">
            <div className="relative h-[80px] w-auto aspect-[4/1]">
              <Image
                src="/Agasti_Logo.png"
                alt="Agasti Logo"
                fill
                sizes="480px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors text-base">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors text-base">
              About Us
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-black transition-colors text-base">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors text-base">
              Contact us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-row justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">Need support?</p>
              <a 
                href="mailto:info@agasti.com" 
                className="text-gray-700 text-sm hover:text-black transition-colors underline"
              >
                info@agasti.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">Customer care</p>
              <a 
                href="tel:+12345678910" 
                className="text-gray-700 text-sm hover:text-black transition-colors"
              >
                +1 234 567 8910
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-400 mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
            <p className="text-center">© 2025 Atara by Agasti . All Rights Reserved.</p>
            <p className="text-center">
              Designed & Developed By<br />
              TIC Global Services
            </p>
          </div>
        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden sm:block">
          {/* Navigation */}
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 md:gap-6 mb-4 md:mb-6">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm md:text-[16px]">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors text-sm md:text-[16px]">
              About Us
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-black transition-colors text-sm md:text-[16px]">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors text-sm md:text-[16px]">
              Contact us
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-6 mt-6">
            <div className="relative h-[80px] w-auto aspect-[4/1]">
              <Image
                src="/Agasti_Logo.png"
                alt="Agasti Logo"
                fill
                sizes="480px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-row justify-center sm:justify-end gap-4 md:gap-6 mb-2 md:mb-3">
            <div className="text-right">
              <p className="text-gray-500 text-xs md:text-sm mb-1">Need support?</p>
              <a 
                href="mailto:info@agasti.com" 
                className="text-gray-700 text-xs md:text-sm hover:text-black transition-colors relative inline-block group"
              >
                info@agasti.com
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs md:text-sm mb-1">Customer care</p>
              <a 
                href="tel:+12345678910" 
                className="text-gray-700 text-xs md:text-sm hover:text-black transition-colors relative inline-block group"
              >
                +1 234 567 8910
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-400 mb-2 md:mb-3" />

          {/* Bottom Section */}
          <div className="flex flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-[14px] text-gray-600">
            <p>© 2025 Atara by Agasti . All Rights Reserved.</p>
            <p>Designed & Developed By TIC Global Services</p>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
}

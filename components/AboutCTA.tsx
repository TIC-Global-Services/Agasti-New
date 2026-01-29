"use client";
import Image from "next/image";
import Link from "next/link";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function AboutCTA() {
  // Blur effect for headings
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>();
  return (
    <section className="bg-white py-[40px]">
      <div className="px-6 sm:px-[48px]">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="relative overflow-hidden h-[520px] w-full">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Linear Gradient Overlay */}
            <div 
              className="absolute inset-0 z-5"
              style={{
                background: 'linear-gradient(86.34deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            ></div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-start items-start z-10 p-6 pt-4">
              <div className="text-left text-black w-full">
                <h2 
                  ref={titleRef}
                  className={`font-gc-palioka text-[20px] mt-3 mb-1 leading-tight transition-all duration-700 ${titleBlur}`}
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-black text-[12px] leading-tight mb-6 max-w-[280px]">
                  Step into a world where craftsmanship, nature, and refined design come together to create a truly elevated way of living. Explore our vision, discover our communities, and see how Agasti is shaping the future of luxury villas.
                </p>

                <Link href="/contact">
                  <button className="text-[10px] font-bold tracking-wider text-white bg-[#FFFFFF4D] px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-[#87CEEB]">
                    SCHEDULE A VISIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="relative overflow-hidden rounded-lg w-full h-[450px]">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Linear Gradient Overlay */}
            <div 
              className="absolute inset-0 z-5"
              style={{
                background: 'linear-gradient(86.34deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            ></div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 p-8">
              <div className="text-center text-black w-full max-w-2xl">
                <h2 
                  ref={titleRef}
                  className={`font-gc-palioka text-[28px] mb-6 leading-tight transition-all duration-700 ${titleBlur}`}
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-black text-[16px] leading-relaxed mb-8">
                  Step into a world where craftsmanship, nature, and refined design come together to create a truly elevated way of living. Explore our vision, discover our communities, and see how Agasti is shaping the future of luxury villas.
                </p>

                <Link href="/contact">
                  <button className="text-[12px] font-bold tracking-wider text-white bg-[#FFFFFF4D] px-6 py-3 rounded transition-colors duration-300 hover:bg-white hover:text-[#87CEEB]">
                    SCHEDULE A VISIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-lg w-full h-[340px]">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Linear Gradient Overlay */}
            <div 
              className="absolute inset-0 z-5"
              style={{
                background: 'linear-gradient(86.34deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            ></div>
            
            {/* Text Overlay */}
            <div className="absolute top-0 right-0 flex items-start justify-end z-10 p-10">
              <div className="text-right text-black w-full max-w-2xl">
                <h2 
                  ref={titleRef}
                  className={`font-gc-palioka text-[34px] mb-2 leading-tight font-regular transition-all duration-700 ${titleBlur}`}
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-white font-plus-jakarta-sans text-[16px] leading-tight mb-6">
                  Step into a world where craftsmanship, nature, and refined design come together to 
                  create a truly elevated way of living. Explore our vision, discover our communities, and 
                  <br />see how Agasti is shaping the future of luxury villas.
                </p>

                <Link href="/contact">
                  <button className="text-[12px] font-bold tracking-wider text-white bg-[#FFFFFF4D] px-8 py-3 rounded transition-colors duration-300 hover:bg-white hover:text-[#87CEEB] min-w-[197px] h-[50px]">
                    SCHEDULE A VISIT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
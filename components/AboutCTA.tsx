"use client";
import Image from "next/image";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function AboutCTA() {
  // Blur effects for headings
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="px-6 sm:px-[48px]">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="relative overflow-hidden rounded-lg h-[520px] w-full max-w-[335px] mx-auto">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="335px"
              className="object-cover"
            />
            
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-200 opacity-60 z-5"></div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-start items-start z-10 p-6 pt-12">
              <div className="text-left text-black max-w-full">
                <h2 
                  ref={titleRef}
                  className={`font-gc-palioka text-[20px] mb-4 leading-tight transition-all duration-700 ease-out ${titleBlur}`}
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-black text-[12px] leading-tight mb-2 max-w-[280px]">
                  Step into a world where craftsmanship, nature, and refined design come together to create a truly elevated way of living. Explore our vision, discover our communities, and see how Agasti is shaping the future of luxury villas.
                </p>

                <button className="text-[8px] font-bold tracking-wider text-white bg-[#FFFFFF4D]  w-[117px] h-[30px] rounded transition-colors duration-300">
                  SCHEDULE A VISIT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="relative overflow-hidden rounded-lg w-full h-[600px]">
            {/* Background Image */}
            <Image
              src="/about-us/contactimg.png"
              alt="Agasti Architecture"
              fill
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-200 opacity-60 z-5"></div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-start items-center z-10 p-8 pt-16">
              <div className="text-center text-black max-w-2xl mx-auto">
                <h2 
                  ref={titleRef}
                  className={`font-gc-palioka text-[32px] mb-6 leading-tight transition-all duration-700 ease-out ${titleBlur}`}
                >
                  Ready to Experience Agasti
                </h2>
                
                <p className="text-black text-[16px] leading-relaxed mb-8">
                  Step into a world where craftsmanship, nature, and refined design come together to create a truly elevated way of living. Explore our vision, discover our communities, and see how Agasti is shaping the future of luxury villas.
                </p>

                <button className="text-[14px] font-bold tracking-wider text-white bg-white bg-opacity-30 w-[200px] h-[50px] rounded transition-colors duration-300">
                  SCHEDULE A VISIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block px-6 sm:px-[48px]">
        <div className="relative overflow-hidden rounded-lg" style={{ width: '1344px', height: '340px' }}>
          {/* Background Image */}
          <Image
            src="/about-us/contactimg.png"
            alt="Agasti Architecture"
            fill
            sizes="1344px"
            className="object-cover"
          />
          
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-10 z-5"></div>
          
          {/* Text Overlay */}
          <div className="absolute top-0 right-0 flex items-start justify-end z-10 p-10">
            <div className="text-right text-black max-w-3xl">
              <h2 
                ref={titleRef}
                className={`font-gc-palioka text-3xl sm:text-4xl md:text-[34px] lg:text-[34px] mb-3 leading-tight font-regular transition-all duration-700 ease-out ${titleBlur}`}
              >
                Ready to Experience Agasti
              </h2>
              
              <p className="text-white font-plus-jakarta-sans text-[16px] sm:text-lg leading-tight mb-6 max-w-3xl">
                Step into a world where craftsmanship, nature, and refined design come together to <br />
                create a truly elevated way of living. Explore our vision, discover our communities, and <br />
                see how Agasti is shaping the future of luxury villas.
              </p>

              <button className="text-[12px] font-bold tracking-wider text-white transition-colors duration-300" style={{ backgroundColor: '#FFFFFF4D', width: '197px', height: '50px', borderRadius: '4px' }}>
                SCHEDULE A VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
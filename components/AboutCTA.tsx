"use client";
import Image from "next/image";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function AboutCTA() {
  // Blur effects for headings
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-[48px]">
      {/* Card with Background Image */}
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
          <div className="absolute top-0 right-0 flex items-start justify-end z-10 p-8">
            <div className="text-right text-black max-w-3xl">
              <h2 
                ref={titleRef}
                className={`font-gc-palioka text-3xl sm:text-4xl md:text-[32px] lg:text-[32px] mb-3 leading-tight transition-all duration-700 ease-out ${titleBlur}`}
              >
                Ready to Experience Agasti
              </h2>
              
              <p className="text-white text-[16px] sm:text-lg leading-relaxed mb-6 max-w-3xl">
                Step into a world where craftsmanship, nature, and refined design come together to <br />
                create a truly elevated way of living. Explore our vision, discover our communities, and <br />
                see how Agasti is shaping the future of luxury villas.
              </p>

              <button className="text-sm font-medium tracking-wider text-white transition-colors duration-300" style={{ backgroundColor: '#FFFFFF4D', width: '197px', height: '50px', borderRadius: '4px' }}>
                SCHEDULE A VISIT
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}
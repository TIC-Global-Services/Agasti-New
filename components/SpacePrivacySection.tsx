"use client";
import { useEffect, useRef, useState } from "react";

export default function SpacePrivacySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-white px-6 sm:px-[48px] h-screen w-full flex items-center justify-center min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Main Title with Animation */}
        <h2 
          className={`font-gc-palioka text-[24px] xs:text-[28px] sm:text-[32px] md:text-[50px] lg:text-[50px] xl:text-[50px] text-black mb-2 sm:mb-3 md:mb-4 leading-tight transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <span 
            className={`inline-block transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Space
          </span>
          <span className="mx-1 sm:mx-2">·</span>
          <span 
            className={`inline-block transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Privacy
          </span>
          <span className="mx-1 sm:mx-2">·</span>
          <span 
            className={`inline-block transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Nature
          </span>
          <span className="mx-1 sm:mx-2">·</span>
          <span 
            className={`inline-block transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Luxury
          </span>
          <span className="mx-1 sm:mx-2">·</span>
          <span 
            className={`inline-block transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Connectivity
          </span>
        </h2>

        {/* Subtitle with Animation */}
        <p 
          className={`text-[#262626] text-[14px] xs:text-[16px] sm:text-[18px] md:text-[30px] lg:text-[34px] xl:text-[34px] leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          A fusion of the best, most sought-out aspects of life.
        </p>
      </div>
    </section>
  );
}
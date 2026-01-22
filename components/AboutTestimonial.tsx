"use client";
import { useEffect, useRef, useState } from "react";
import ContainerLayout from "@/layout/ContainerLayout";

export default function AboutTestimonial() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start animation when section is 60% visible (delayed start), complete when section is 20% past top
        const startPoint = windowHeight * 0.8;
        const endPoint = -rect.height * 0.2;
        
        if (rect.top <= startPoint && rect.top >= endPoint) {
          const progress = (startPoint - rect.top) / (startPoint - endPoint);
          setScrollProgress(Math.max(0, Math.min(1, progress)));
        } else if (rect.top > startPoint) {
          setScrollProgress(0);
        } else {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Better line breaks that maintain natural flow
  const quoteText = "Kiron Cheerla Architecture Design creates context-driven architecture that integrates structure, materials, technology, and client needs. The firm designs buildings rooted in fundamental architectural principles that feel intrinsic to their surroundings while exploring innovative approaches to the built environment.";
  
  // Split into groups of 3 letters for more granular control
  const letterGroups = [];
  for (let i = 0; i < quoteText.length; i += 3) {
    letterGroups.push(quoteText.slice(i, i + 3));
  }
  
  // Calculate opacity for each letter group based on scroll progress
  const getLetterGroupOpacity = (groupIndex: number) => {
    const totalGroups = letterGroups.length;
    const groupProgress = (scrollProgress * totalGroups * 1.1) - groupIndex; // Multiply by 1.3 for faster progression
    return Math.max(0.15, Math.min(1, 0.15 + groupProgress * 0.85)); // From 15% to 100% opacity
  };

  return (
    <section ref={sectionRef} className="bg-[#F0EDE4] py-12 sm:py-16 md:py-20 lg:min-h-screen lg:flex lg:items-center">
      <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Quote - Letter Group by Letter Group */}
          <blockquote className="font-gc-palioka text-[20px] sm:text-[36px] lg:text-[54px] leading-[1.1] mb-8 sm:mb-12 lg:mb-16 text-center">
            {letterGroups.map((group, index) => (
              <span
                key={index}
                className="inline"
                style={{ 
                  color: `rgba(0, 0, 0, ${getLetterGroupOpacity(index)})`,
                  transition: 'color 0.2s ease-out'
                }}
              >
                {group}
              </span>
            ))}
          </blockquote>

          {/* Attribution */}
          <cite 
            className="text-sm sm:text-base lg:text-lg font-medium font-gc-palioka tracking-wider uppercase inline-block"
            style={{ 
              color: `rgba(0, 0, 0, ${getLetterGroupOpacity(letterGroups.length)})`,
              transition: 'color 0.2s ease-out'
            }}
          >
           - LUPIN (GENERAL MANAGER)
          </cite>
        </div>
      </ContainerLayout>
    </section>
  );
}
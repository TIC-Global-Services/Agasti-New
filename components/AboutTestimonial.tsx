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
        
        // Start animation when section is 80% visible, complete when section is 20% past top
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
  const quoteText = "\"At Agasti, we believe true innovation emerges where nature and design come together. By elevating sustainable practices and refined craftsmanship, we continue to push boundaries and inspire a higher standard of living—for our residents and within every space we create.\"";
  
  // Split into words for more granular control
  const words = quoteText.split(' ');
  
  // Calculate opacity for each word based on scroll progress
  const getWordOpacity = (wordIndex: number) => {
    const totalWords = words.length;
    const wordProgress = (scrollProgress * totalWords * 1.3) - wordIndex; // Multiply by 1.2 for faster progression
    return Math.max(0.15, Math.min(1, 0.15 + wordProgress * 0.85)); // From 15% to 100% opacity
  };

  return (
    <section ref={sectionRef} className="bg-[#F0EDE4] py-12 sm:py-16 md:py-20 min-h-screen flex items-center">
      <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Quote - Word by Word */}
          <blockquote className="font-gc-palioka text-[54px] leading-[1.1] mb-12 sm:mb-16 text-center">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block mr-3 sm:mr-4"
                style={{ 
                  color: `rgba(0, 0, 0, ${getWordOpacity(index)})`,
                  transition: 'color 0.2s ease-out'
                }}
              >
                {word}
              </span>
            ))}
          </blockquote>

          {/* Attribution */}
          <cite 
            className="text-base sm:text-lg font-medium font-gc-palioka tracking-wider uppercase inline-block"
            style={{ 
              color: `rgba(0, 0, 0, ${getWordOpacity(words.length)})`,
              transition: 'color 0.2s ease-out'
            }}
          >
          LUPIN (GENERAL MANAGER)
          </cite>
        </div>
      </ContainerLayout>
    </section>
  );
}
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function AboutCommitments() {
  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Blur effects for headings
  const { elementRef: commitmentsRef, blurClass: commitmentsBlur } = useBlurOnScroll<HTMLParagraphElement>(0.1);
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const commitments = [
    {
      title: "Thoughtful Design",
      description: "A design that tailors every home to its unique environment and way of living.",
      image: "/about-us/commitment1.jpg",
    },
    {
      title: "A smooth and transparent journey",
      description: "Clear pricing, clear timelines, and complete clarity at every step—no surprises, no overruns, no stress.",
      image: "/about-us/commitment2.jpg",
    },
    {
      title: "Quality Craftsmanship",
      description: "A meticulous focus on detail, ensuring exceptional true luxury to every corner.",
      image: "/about-us/commitment3.jpg",
    },
  ];

  // Infinite scroll animation for desktop only
  useEffect(() => {
    const cardWidth = 678; // 662px card + 16px gap
    const totalWidth = cardWidth * commitments.length;

    const animate = () => {
      setTranslateX(prev => {
        const newValue = prev - 1; // Move 1px per frame for smooth scroll
        // Reset when we've scrolled through one complete set
        return newValue <= -totalWidth ? 0 : newValue;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    // Only run animation on desktop
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    if (mediaQuery.matches) {
      animationRef.current = requestAnimationFrame(animate);
    }

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [commitments.length]);

  return (
    <section className="bg-white pt-[85px]">
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
      <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p 
            ref={commitmentsRef}
            className={`text-[#8D957E] text-[20px] sm:text-[24px] font-bold mb-4 transition-all duration-700 ease-out ${commitmentsBlur}`}
          >
            Our commitments
          </p>
          <h2 
            ref={titleRef}
            className={`font-gc-palioka text-[20px] sm:text-3xl md:text-[32px] lg:text-[32px] text-black leading-tight max-w-4xl transition-all duration-700 ease-out ${titleBlur}`}
          >
            With every Agasti Villa, we aim to deliver outcomes that prioritize quality, comfort, and long-term value.
          </h2>
        </div>
      </ContainerLayout>

      {/* Mobile Carousel */}
      <div className="block sm:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="flex" style={{ width: `${commitments.length * 100}vw` }}>
            {commitments.map((commitment, index) => (
              <div 
                key={index} 
                className="flex flex-col flex-shrink-0 snap-center snap-always px-6"
                style={{ 
                  width: '100vw',
                  scrollSnapAlign: 'center'
                }}
              >
                {/* Text Content */}
                <div className="mb-6">
                  <h3 className="font-gc-palioka text-[20px] sm:text-[22px] text-[#8D957E]">
                    {commitment.title}
                  </h3>
                  <p className="text-[#717580] text-sm leading-relaxed">
                    {commitment.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <Image
                    src={commitment.image}
                    alt={commitment.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="flex justify-center gap-2 mt-6">
          {commitments.map((_, index) => (
            <div 
              key={index} 
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#8D957E] w-12' : 'bg-gray-300 w-8'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Infinite Scroll Carousel - Hidden on mobile */}
      <div className="hidden sm:block relative overflow-hidden">
        <div 
          className="flex"
          style={{ 
            transform: `translateX(${translateX}px)`,
            width: 'fit-content'
          }}
        >
          {/* Repeat cards multiple times for seamless infinite scroll */}
          {[...commitments, ...commitments, ...commitments, ...commitments].map((commitment, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{ width: '678px', paddingRight: '16px' }}
            >
              <div className="group">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ width: '662px', height: '387px' }}>
                  <Image
                    src={commitment.image}
                    alt={commitment.title}
                    fill
                    sizes="662px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Text Content Below Card */}
                <div className="bg-white text-[#8D957E] text-center pt-[20px] px-6 pb-6 sm:px-8 sm:pb-8" style={{ width: '662px' }}>
                  <h3 className="font-gc-palioka text-[20px] sm:text-[22px] mb-1">
                    {commitment.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#717580]-600">
                    {commitment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
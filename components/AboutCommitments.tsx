"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import BlurText from "./BlurText";

export default function AboutCommitments() {
  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasExitedSection, setHasExitedSection] = useState(false);
  const [isInSection, setIsInSection] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Custom intersection observer for "Our commitments" text
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInSection(true);
        } else {
          setIsInSection(false);
          // Only set hasExitedSection to true when completely out of view
          if (entry.intersectionRatio === 0) {
            setHasExitedSection(true);
          }
        }
      },
      {
        threshold: [0, 0.1], // Track when completely out of view (0) and when entering (0.1)
        rootMargin: "0px"
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Determine blur class based on section state
  const getCommitmentsBlurClass = () => {
    if (typeof window === "undefined") return;
    
    const isMobileOrTablet = window.innerWidth < 1024;
    
    if (isMobileOrTablet) {
      return ''; // No blur on mobile/tablet
    }
    
    if (isInSection || !hasExitedSection) {
      return 'filter-none opacity-100'; // Clear when in section or hasn't exited yet
    } else {
      return 'filter blur-sm opacity-70'; // Blur only after completely exiting
    }
  };

  const handleAnimationComplete = () => {
    console.log('AboutCommitments title animation completed!');
  };

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
      if (!isPaused) {
        setTranslateX(prev => {
          const newValue = prev - 0.5; // Move 0.5px per frame for slower, smoother scroll
          // Reset when we've scrolled through one complete set
          return newValue <= -totalWidth ? 0 : newValue;
        });
      }
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
  }, [commitments.length, isPaused]);

  return (
    <section ref={sectionRef} className="bg-white pt-[65px]">
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
        <div className="mb-6 sm:mb-10">
          <p 
            className={`text-[#8D957E] text-[20px] sm:text-[24px] font-bold mb-4 transition-all duration-900 ${getCommitmentsBlurClass()}`}
          >
            Our commitments
          </p>
          <div className="max-w-4xl">
  <BlurText
    text="With every Agasti Villa, we aim to deliver outcomes"
    delay={0}
    animateBy="words"
    direction="top"
    className="font-gc-palioka text-[20px] sm:text-3xl md:text-[32px] lg:text-[32px] text-black leading-tight"
  />
  <BlurText
    text="that prioritize quality, comfort, and long-term value."
    delay={150}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="font-gc-palioka text-[20px] sm:text-3xl md:text-[32px] lg:text-[32px] text-black leading-tight"
  />
</div>
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
                {/* Image */}
                <div className="relative aspect-[9/16] w-full overflow-hidden mb-6">
                  <Image
                    src={commitment.image}
                    alt={commitment.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                {/* Text Content Below Image - Center Aligned */}
                <div className="text-center">
                  <h3 className="font-gc-palioka text-[20px] sm:text-[22px] text-[#8D957E] mb-2">
                    {commitment.title}
                  </h3>
                  <p className="text-[#717580] text-sm leading-relaxed">
                    {commitment.description}
                  </p>
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
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
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
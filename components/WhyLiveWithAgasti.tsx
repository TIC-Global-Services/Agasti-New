"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function WhyLiveWithAgasti() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Blur effects for headings
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>();

  const features = [
    {
      icon: "/innovation.png",
      label: "INNOVATION",
    },
    {
      icon: "/sustainable.png",
      label: "SUSTAINABLE",
    },
    {
      icon: "/highstrength.png",
      label: "HIGH-STRENGTH",
    },
    {
      icon: "/luxury.png",
      label: "LUXURY",
    },
    {
        icon:"/serenity.png",
        label: "SERENITY"
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Auto-advance carousel
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % features.length;
        
        // Scroll to next card
        const cardWidth = carousel.offsetWidth;
        carousel.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
        
        return nextIndex;
      });
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  // Handle manual scroll detection
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const cardWidth = carousel.offsetWidth;
      const scrollLeft = carousel.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  useEffect(() => {
    // Update progress bars
    const progressBars = document.querySelectorAll('[id^="progress-"]');
    progressBars.forEach((bar, index) => {
      if (index === activeIndex) {
        (bar as HTMLElement).style.backgroundColor = '#000000';
      } else {
        (bar as HTMLElement).style.backgroundColor = '#d1d5db';
      }
    });
  }, [activeIndex]);

  return (
    <section className="bg-white py-[40px]">
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
      <ContainerLayout paddingX="px-6 sm:px-[48px]">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[#8D957E] text-base sm:text-lg md:text-xl lg:text-[26px] mb-4 sm:mb-6 font-bold">Why Live With Agasti</p>
          
          <h2 
            ref={titleRef}
            className={`font-gc-palioka text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-black mb-6 sm:mb-8 leading-tight max-w-4xl transition-all duration-700 ${titleBlur}`}
          >
            Agasti brings together luxury, nature, and thoughtful design. With premium materials, open layouts, and serene green spaces, every villa is crafted with precision to elevate your everyday living.
          </h2>
          
          <p className="text-gray-500 text-[16px] sm:text-sm leading-relaxed max-w-3xl">
            Designed for those who value privacy, quality, and timeless elegance, Agasti offers a peaceful retreat 
            that stays connected to the city&apos;s best schools, hospitals, and business hubs—giving you the ideal 
            blend of exclusivity and convenience.
          </p>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="block md:hidden mt-12 -mx-6 sm:-mx-8 md:mx-0">
          <div 
            ref={carouselRef}
            className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar" 
            id="features-carousel"
          >
            <div className="flex">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center justify-center py-12 w-screen flex-shrink-0 snap-center">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Label */}
                  <p className="text-black text-sm font-semibold tracking-wide text-center">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex justify-center gap-2 mt-6 px-6 sm:px-8">
            {features.map((_, index) => (
              <div 
                key={index} 
                className="h-1 bg-gray-300 rounded-full transition-all duration-500"
                style={{ width: '40px' }}
                id={`progress-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop & Tablet Static Layout - Hidden on mobile */}
        <div className="hidden md:block mt-16">
          <div className="grid grid-cols-5 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-8">
                {/* Icon */}
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.label}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                
                {/* Label */}
                <p className="text-black text-xs lg:text-sm font-semibold tracking-wide text-center">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

const LineByLineBlur = ({ 
  text, 
  className = "",
  delay = 60,
  onAnimationComplete 
}: { 
  text: string;
  className?: string;
  delay?: number;
  onAnimationComplete?: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [animatedLines, setAnimatedLines] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  // Split text into lines based on actual rendering
  useEffect(() => {
    if (!containerRef.current) return;

    const measureLines = () => {
      const container = containerRef.current!;
      const words = text.split(' ');
      
      // Create a temporary element to measure line breaks
      const tempDiv = document.createElement('div');
      tempDiv.style.cssText = window.getComputedStyle(container).cssText;
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.height = 'auto';
      tempDiv.style.width = container.offsetWidth + 'px';
      tempDiv.style.whiteSpace = 'normal';
      document.body.appendChild(tempDiv);

      const measuredLines: string[] = [];
      let currentLine = '';

      words.forEach((word) => {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        tempDiv.innerHTML = testLine;
        
        // If adding this word makes it taller, start a new line
        if (tempDiv.scrollHeight > tempDiv.clientHeight && currentLine) {
          measuredLines.push(currentLine.trim());
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });

      if (currentLine) {
        measuredLines.push(currentLine.trim());
      }

      document.body.removeChild(tempDiv);
      
      // Fallback: if no lines detected, split by sentences
      if (measuredLines.length === 0) {
        const sentences = text.split('. ');
        setLines(sentences.map(s => s.endsWith('.') ? s : s + '.'));
      } else {
        setLines(measuredLines);
      }
    };

    // Initial measurement
    setTimeout(measureLines, 100);

    const handleResize = () => {
      setAnimatedLines(0);
      setTimeout(measureLines, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate lines sequentially when visible
  useEffect(() => {
    if (!isVisible || animatedLines >= lines.length) {
      if (animatedLines >= lines.length && onAnimationComplete) {
        onAnimationComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setAnimatedLines(prev => prev + 1);
    }, animatedLines === 0 ? delay : delay * 8);

    return () => clearTimeout(timer);
  }, [isVisible, animatedLines, lines.length, delay, onAnimationComplete]);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            index < animatedLines
              ? 'opacity-100 blur-0 translate-y-0'
              : 'opacity-0 blur-sm translate-y-4'
          }`}
          style={{
            transitionDelay: `${index * 150}ms`
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default function WhyLiveWithAgasti() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const features = [
    {
      icon: "/icons webm 3/innovation.webm",
      fallback: "/innovation.png",
      label: "INNOVATION",
    },
    {
      icon: "/icons webm 3/sustainable.webm",
      fallback: "/sustainable.png",
      label: "SUSTAINABLE",
    },
    {
      icon: "/icons webm 3/highstrength.webm",
      fallback: "/highstrength.png",
      label: "HIGH-STRENGTH",
    },
    {
      icon: "/icons webm 3/luxury.webm",
      fallback: "/luxury.png",
      label: "LUXURY",
    },
    {
        icon: "/icons webm 3/serenity.webm",
        fallback: "/serenity.png",
        label: "SERENITY"
    }
  ];

  // Intersection Observer for video playback
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video, index) => {
      if (video) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              video.play().catch(console.error);
              observer.unobserve(video); // Play only once
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const setVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[index] = ref;
  };

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
    <section className="bg-white ">
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
          <p className="text-[#8D957E] text-base sm:text-lg md:text-xl lg:text-[26px] mb-2 sm:mb-2 font-bold">
            Why Live With Agasti
          </p>
          
          <LineByLineBlur
            text="Agasti brings together luxury, nature, and thoughtful design. With premium materials, open layouts, and serene green spaces, every villa is crafted with precision to elevate your everyday living."
            onAnimationComplete={handleAnimationComplete}
            className="font-gc-palioka text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-black mb-[14px] leading-tight max-w-4xl"
            delay={60}
          />
          
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
                <div key={index} className="flex flex-col items-center justify-center py-12 w-screen shrink-0 snap-center">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                    {feature.icon.endsWith('.webm') ? (
                      <video
                        ref={setVideoRef(index)}
                        width={80}
                        height={80}
                        muted
                        playsInline
                        className="object-contain"
                        style={{ filter: 'brightness(0.7) contrast(1.3) saturate(1.2)' }}
                        onError={(e) => {
                          // Fallback to PNG if WebM fails
                          const target = e.target as HTMLVideoElement;
                          const parent = target.parentElement;
                          if (parent) {
                            const img = document.createElement('img');
                            img.src = feature.fallback;
                            img.alt = feature.label;
                            img.className = 'w-full h-full object-contain';
                            parent.innerHTML = '';
                            parent.appendChild(img);
                          }
                        }}
                      >
                        <source src={feature.icon} type="video/webm" />
                      </video>
                    ) : (
                      <Image
                        src={feature.icon}
                        alt={feature.label}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    )}
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
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-4 flex items-center justify-center">
                  {feature.icon.endsWith('.webm') ? (
                    <video
                      ref={setVideoRef(index + features.length)} // Offset for desktop videos
                      width={120}
                      height={120}
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                      style={{ filter: 'brightness(0.7) contrast(1.3) saturate(1.2)' }}
                      onError={(e) => {
                        // Fallback to PNG if WebM fails
                        const target = e.target as HTMLVideoElement;
                        const parent = target.parentElement;
                        if (parent) {
                          const img = document.createElement('img');
                          img.src = feature.fallback;
                          img.alt = feature.label;
                          img.className = 'w-full h-full object-contain';
                          parent.innerHTML = '';
                          parent.appendChild(img);
                        }
                      }}
                    >
                      <source src={feature.icon} type="video/webm" />
                    </video>
                  ) : (
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  )}
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

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
        if (entry.isIntersecting) {
          // Reset and start animation when entering
          setAnimatedLines(0);
          setIsVisible(true);
        } else {
          // Reset when leaving the section
          setIsVisible(false);
          setAnimatedLines(0);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const features = [
    {
      icon: "/icons%20webm%203/innovation.webm",
      fallback: "/innovation.png",
      label: "INNOVATION",
    },
    {
      icon: "/icons%20webm%203/sustainable.webm",
      fallback: "/sustainable.png",
      label: "SUSTAINABLE",
    },
    {
      icon: "/icons%20webm%203/highstrength.webm",
      fallback: "/highstrength.png",
      label: "HIGH-STRENGTH",
    },
    {
      icon: "/icons%20webm%203/luxury.webm",
      fallback: "/luxury.png",
      label: "LUXURY",
    },
    {
        icon: "/icons%20webm%203/serenity.webm",
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
              // Reset video to beginning and play
              video.currentTime = 0;
              video.play().catch(console.error);
            } else {
              // Pause video when out of view
              video.pause();
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

        {/* Mobile Grid Layout - Visible only on mobile */}
        <div className="block md:hidden mt-12">
          {/* First 4 icons in 2x2 grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-8">
                {/* Icon */}
                <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                  {feature.icon.endsWith('.webm') ? (
                    <video
                      ref={setVideoRef(index)}
                      width={80}
                      height={80}
                      muted
                      playsInline
                      preload="metadata"
                      className="object-contain"
                      style={{ filter: 'brightness(0.7) contrast(1.3) saturate(1.2)' }}
                      poster={feature.fallback}
                      onLoadStart={() => console.log(`Loading mobile video: ${feature.icon}`)}
                      onLoadedData={() => console.log(`Mobile video loaded successfully: ${feature.icon}`)}
                      onError={(e) => {
                        console.error(`Failed to load mobile video: ${feature.icon}`, e);
                        // Fallback to PNG if WebM fails
                        const target = e.target as HTMLVideoElement;
                        const parent = target.parentElement;
                        if (parent) {
                          const img = document.createElement('img');
                          img.src = feature.fallback;
                          img.alt = feature.label;
                          img.className = 'w-full h-full object-contain';
                          img.style.filter = 'brightness(0.7) contrast(1.3) saturate(1.2)';
                          parent.innerHTML = '';
                          parent.appendChild(img);
                        }
                      }}
                      onCanPlay={() => {
                        // Hide poster once video can play
                        const target = event?.target as HTMLVideoElement;
                        if (target) {
                          target.style.backgroundImage = 'none';
                        }
                      }}
                    >
                      <source src={feature.icon} type="video/webm" />
                      <source src={feature.fallback} type="image/png" />
                      <img src={feature.fallback} alt={feature.label} className="w-full h-full object-contain" />
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
                <p className="text-black text-xs font-semibold tracking-wide text-center">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          {/* 5th icon centered separately */}
          {features[4] && (
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center py-8">
                {/* Icon */}
                <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                  {features[4].icon.endsWith('.webm') ? (
                    <video
                      ref={setVideoRef(4)}
                      width={80}
                      height={80}
                      muted
                      playsInline
                      preload="metadata"
                      className="object-contain"
                      style={{ filter: 'brightness(0.7) contrast(1.3) saturate(1.2)' }}
                      poster={features[4].fallback}
                      onLoadStart={() => console.log(`Loading mobile video: ${features[4].icon}`)}
                      onLoadedData={() => console.log(`Mobile video loaded successfully: ${features[4].icon}`)}
                      onError={(e) => {
                        console.error(`Failed to load mobile video: ${features[4].icon}`, e);
                        // Fallback to PNG if WebM fails
                        const target = e.target as HTMLVideoElement;
                        const parent = target.parentElement;
                        if (parent) {
                          const img = document.createElement('img');
                          img.src = features[4].fallback;
                          img.alt = features[4].label;
                          img.className = 'w-full h-full object-contain';
                          img.style.filter = 'brightness(0.7) contrast(1.3) saturate(1.2)';
                          parent.innerHTML = '';
                          parent.appendChild(img);
                        }
                      }}
                      onCanPlay={() => {
                        // Hide poster once video can play
                        const target = event?.target as HTMLVideoElement;
                        if (target) {
                          target.style.backgroundImage = 'none';
                        }
                      }}
                    >
                      <source src={features[4].icon} type="video/webm" />
                      <source src={features[4].fallback} type="image/png" />
                      <img src={features[4].fallback} alt={features[4].label} className="w-full h-full object-contain" />
                    </video>
                  ) : (
                    <Image
                      src={features[4].icon}
                      alt={features[4].label}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  )}
                </div>
                
                {/* Label */}
                <p className="text-black text-xs font-semibold tracking-wide text-center">
                  {features[4].label}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Desktop & Tablet Static Layout - Hidden on mobile */}
        <div className="hidden md:block mt-16">
          <div className="grid grid-cols-5 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-8">
                {/* Icon */}
                <div className="relative w-16 h-16 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                  {feature.icon.endsWith('.webm') ? (
                    <video
                      ref={setVideoRef(index + features.length)} // Offset for desktop videos
                      width={200}
                      height={200}
                      muted
                      playsInline
                      preload="metadata"
                      className="object-cover w-full h-full"
                      style={{ filter: 'brightness(0.7) contrast(1.3) saturate(1.2)' }}
                      poster={feature.fallback}
                      onLoadStart={() => console.log(`Loading desktop video: ${feature.icon}`)}
                      onLoadedData={() => console.log(`Desktop video loaded successfully: ${feature.icon}`)}
                      onError={(e) => {
                        console.error(`Failed to load desktop video: ${feature.icon}`, e);
                        // Fallback to PNG if WebM fails
                        const target = e.target as HTMLVideoElement;
                        const parent = target.parentElement;
                        if (parent) {
                          const img = document.createElement('img');
                          img.src = feature.fallback;
                          img.alt = feature.label;
                          img.className = 'w-full h-full object-contain';
                          img.style.filter = 'brightness(0.7) contrast(1.3) saturate(1.2)';
                          parent.innerHTML = '';
                          parent.appendChild(img);
                        }
                      }}
                      onCanPlay={() => {
                        // Hide poster once video can play
                        const target = event?.target as HTMLVideoElement;
                        if (target) {
                          target.style.backgroundImage = 'none';
                        }
                      }}
                    >
                      <source src={feature.icon} type="video/webm" />
                      <source src={feature.fallback} type="image/png" />
                      <img src={feature.fallback} alt={feature.label} className="w-full h-full object-contain" />
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

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";
import BlurText from "./BlurText";

export default function AboutExcellence() {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ years: 0, villas: 0, satisfaction: 0 });
  
  const visionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Blur effects for headings
  const { elementRef: excellenceRef, blurClass: excellenceBlur } = useBlurOnScroll<HTMLHeadingElement>();
  const { elementRef: excellenceTitleRef, blurClass: excellenceTitleBlur } = useBlurOnScroll<HTMLHeadingElement>();
  const { elementRef: visionTitleRef, blurClass: visionTitleBlur } = useBlurOnScroll<HTMLHeadingElement>();
  const { elementRef: craftsmanshipRef, blurClass: craftsmanshipBlur } = useBlurOnScroll<HTMLHeadingElement>();
  const { elementRef: sustainabilityRef, blurClass: sustainabilityBlur } = useBlurOnScroll<HTMLHeadingElement>();

  // Animation completion handlers
  const handleExcellenceAnimationComplete = () => {
    console.log('Excellence animation completed!');
  };

  const handleExcellenceTitleAnimationComplete = () => {
    console.log('Excellence title animation completed!');
  };

  const handleVisionAnimationComplete = () => {
    console.log('Vision animation completed!');
  };

  const handleCraftsmanshipAnimationComplete = () => {
    console.log('Craftsmanship animation completed!');
  };

  const handleSustainabilityAnimationComplete = () => {
    console.log('Sustainability animation completed!');
  };

  // Animation for stats numbers
  useEffect(() => {
    if (isStatsVisible) {
      // Check if it's tablet (768px to 1023px)
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      if (isTablet) {
        // No animation on tablet - set final values immediately
        setAnimatedNumbers({ years: 7, villas: 18, satisfaction: 95 });
        return;
      }
      
      // Animation for mobile and desktop
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedNumbers({
          years: Math.floor(7 * progress),
          villas: Math.floor(18 * progress),
          satisfaction: Math.floor(95 * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedNumbers({ years: 7, villas: 18, satisfaction: 95 });
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isStatsVisible]);

  useEffect(() => {
    const currentVisionRef = visionRef.current;
    const currentStatsRef = statsRef.current;

    const visionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisionVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (currentVisionRef) {
      visionObserver.observe(currentVisionRef);
    }

    if (currentStatsRef) {
      statsObserver.observe(currentStatsRef);
    }

    return () => {
      if (currentVisionRef) {
        visionObserver.unobserve(currentVisionRef);
      }
      if (currentStatsRef) {
        statsObserver.unobserve(currentStatsRef);
      }
    };
  }, []);
  return (
    <section className="bg-white">
      <style jsx>{`
        .glass-card {
          height: 289px;
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(60px);
          -webkit-backdrop-filter: blur(60px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 0 0px 0px rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }
        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
                      transparent,
                      rgba(255, 255, 255, 0.8),
                      transparent);
        }
        .glass-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg,
                      rgba(255, 255, 255, 0.8),
                      transparent,
                      rgba(255, 255, 255, 0.3));
        }
        .glass-card-mobile {
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 0 10px 5px rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }
        .glass-card-mobile::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
                      transparent,
                      rgba(255, 255, 255, 0.8),
                      transparent);
        }
        .glass-card-mobile::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg,
                      rgba(255, 255, 255, 0.8),
                      transparent,
                      rgba(255, 255, 255, 0.3));
        }
        .glass-card-content {
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 0 10px 5px rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }
        .glass-card-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
                      transparent,
                      rgba(255, 255, 255, 0.8),
                      transparent);
        }
        .glass-card-content::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg,
                      rgba(255, 255, 255, 0.8),
                      transparent,
                      rgba(255, 255, 255, 0.3));
        }
        .glass-card-vision {
          background-color: white;
          background-clip: padding-box;
          backdrop-filter: blur(4px) saturate(100%) contrast(100%);
          -webkit-backdrop-filter: blur(4px);
          opacity: 60%;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 0 4px 1px rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }
        .glass-card-vision::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
                      transparent,
                      rgba(255, 255, 255, 0.8),
                      transparent);
        }
        .glass-card-vision::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg,
                      rgba(255, 255, 255, 0.8),
                      transparent,
                      rgba(255, 255, 255, 0.3));
        }
        .glass-card-craftsmanship {
          background: rgba(255, 255, 255, 0.24);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 0 4px 1px rgba(255, 255, 255, 0.01);
          position: relative;
          overflow: hidden;
        }
        .glass-card-craftsmanship::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
                      transparent,
                      rgba(255, 255, 255, 0.8),
                      transparent);
        }
        .glass-card-craftsmanship::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg,
                      rgba(255, 255, 255, 0.8),
                      transparent,
                      rgba(255, 255, 255, 0.3));
        }
        .glass-card-sustainability {
          background-color: white;
          background-clip: padding-box;
          backdrop-filter: blur(4px) saturate(100%) contrast(100%);
          -webkit-backdrop-filter: blur(4px);
          opacity: 80%;
          background-image: url('data:image/svg+xml;base64,CiAgICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmRldi9zdmdqcyIgdmlld0JveD0iMCAwIDcwMCA3MDAiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBvcGFjaXR5PSIwLjM0Ij4KICAgICAgICA8ZGVmcz4KICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgogICAgICAgICAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNzEiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICAgICAgICAgIDxmZVNwZWN1bGFyTGlnaHRpbmcgc3VyZmFjZVNjYWxlPSIwIiBzcGVjdWxhckNvbnN0YW50PSIwLjciIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzc5NTdBOCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgICAgICAgICAgICA8ZmVEaXN0YW50TGlnaHQgYXppbXV0aD0iMyIgZWxldmF0aW9uPSIxMDAiPjwvZmVEaXN0YW50TGlnaHQ+CiAgICAgICAgICAgIDwvZmVTcGVjdWxhckxpZ2h0aW5nPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJzcGVjdWxhckxpZ2h0aW5nIiByZXN1bHQ9ImNvbG9ybWF0cml4Ij48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8L2RlZnM+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9IiM3OTU3YTgiIGZpbHRlcj0idXJsKCNubm5vaXNlLWZpbHRlcikiPjwvcmVjdD4KICAgICAgPC9zdmc+CiAgICA=');
          background-blend-mode: overlay;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 0 10px 5px rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }
        .glass-card-sustainability::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
                      transparent,
                      rgba(255, 255, 255, 0.8),
                      transparent);
        }
        .glass-card-sustainability::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg,
                      rgba(255, 255, 255, 0.8),
                      transparent,
                      rgba(255, 255, 255, 0.3));
        }
      `}</style>
      {/* Top Section - Built on Excellence with Stats */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-us/aboutstats.png"
            alt="About Statistics Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        
        <ContainerLayout className="relative z-10 py-[86px] sm:py-[110px] md:py-[126px]" disablePaddingX={true}>
          {/* Mobile Layout */}
          <div className="block lg:hidden px-6">
            {/* Mobile Header */}
            <div className="mb-8">
              <BlurText
                text="Built on Excellence"
                delay={60}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleExcellenceAnimationComplete}
                className="text-white font-gc-palioka text-[20px] sm:text-[24px] md:text-[28px] font-normal mb-4"
              />
              <BlurText
                text="Where every property reflects uncompromised quality"
                delay={60}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleExcellenceTitleAnimationComplete}
                className="font-gc-palioka text-[#262B35] text-[20px] sm:text-[28px] md:text-[32px] leading-tight mb-4"
              />
              <p className="text-[#3C3C3C]/80 text-[14px] leading-relaxed">
                Building exclusive communities for individuals who seek refined elegance, elevated comfort, and a truly distinguished way of living.
              </p>
            </div>

            {/* Mobile Stats Cards - Stacked Vertically */}
            <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0" ref={statsRef}>
              {/* 7+ Years */}
              <div className="glass-card-mobile p-6 mx-auto max-w-sm md:max-w-none">
                <div className="text-center">
                  <div className="mb-3">
                    <div className="text-black text-[64px] font-bold leading-none mb-1">
                      {animatedNumbers.years}+
                    </div>
                    <div className="text-black text-[16px] font-medium">Years of Excellence</div>
                  </div>
                  <p className="text-black text-[12px] leading-relaxed">
                    delivering premium Villas since 2018
                  </p>
                </div>
              </div>

              {/* 18 Signature Villas */}
              <div className="glass-card-mobile p-6 mx-auto max-w-sm md:max-w-none">
                <div className="text-center">
                  <div className="mb-3">
                    <div className="text-black text-[64px] font-bold leading-none mb-1">
                      {animatedNumbers.villas}
                    </div>
                    <div className="text-black text-[16px] font-medium">Signature Villas</div>
                  </div>
                  <p className="text-black text-[12px] leading-relaxed">
                    crafted with precision and refined exclusivity
                  </p>
                </div>
              </div>

              {/* 95% Client Satisfaction */}
              <div className="glass-card-mobile p-6 mx-auto max-w-sm md:max-w-none">
                <div className="text-center">
                  <div className="mb-3">
                    <div className="text-black text-[64px] font-bold leading-none mb-1">
                      {animatedNumbers.satisfaction}%
                    </div>
                    <div className="text-black text-[16px] font-medium">Client Satisfaction</div>
                  </div>
                  <p className="text-black text-[12px] leading-relaxed">
                    reflecting our commitment to quality and trust
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="px-[48px]">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left Side - Built on Excellence */}
                <div className="flex-shrink-0 lg:w-[435px] flex flex-col gap-[10px]">
                  <BlurText
                    text="Built on Excellence"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleExcellenceAnimationComplete}
                    className="text-white font-gc-palioka-demo text-[20px] sm:text-[24px] font-bold"
                  />
                  <BlurText
                    text="Where every property reflects uncompromised quality"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleExcellenceTitleAnimationComplete}
                    className="font-gc-palioka text-[#262B35] text-[20px] sm:text-3xl md:text-[32px] leading-tight"
                  />
                  <p className="text-[#3C3C3C]/80 text-[16px] font-regular leading-tight font-plus-jakarta-sans">
                    Building exclusive communities for individuals who seek refined elegance, elevated comfort, and a truly distinguished way of living.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="flex-1 min-w-0" ref={statsRef}>
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full">
                    {/* 7+ Years */}
                    <div className="glass-card flex flex-col p-6 w-full">
                      <div className="flex-grow-0 mb-4">
                        <div className="text-black text-[74px] font-bold leading-none mb-1">
                          {animatedNumbers.years}+
                        </div>
                        <div className="text-black text-[18px] font-bold font-gc-palioka-demo">Years of Excellence</div>
                      </div>
                      <div className="mt-auto">
                        <p className="text-black text-[14px] font-regular font-plus-jakarta-sans leading-relaxed">
                          delivering premium Villas <br />since 2018
                        </p>
                      </div>
                    </div>

                    {/* 18 Signature Villas */}
                    <div className="glass-card flex flex-col p-6 w-full">
                      <div className="flex-grow-0 mb-4">
                        <div className="text-black text-[74px] font-urbanist font-bold leading-none mb-1">
                          {animatedNumbers.villas}
                        </div>
                        <div className="text-black text-[18px] font-bold font-gc-palioka-demo">Signature Villas</div>
                      </div>
                      <div className="mt-auto">
                        <p className="text-black text-[14px] font-regular font-plus-jakarta-sans leading-relaxed">
                          crafted with precision and refined exclusivity
                        </p>
                      </div>
                    </div>

                    {/* 95% Client Satisfaction */}
                    <div className="glass-card flex flex-col p-6 w-full">
                      <div className="flex-grow-0 mb-4">
                        <div className="text-black text-[74px] font-bold leading-none mb-1">
                          {animatedNumbers.satisfaction}%
                        </div>
                        <div className="text-black text-[18px] font-gc-palioka-demo font-bold">Client Satisfaction</div>
                      </div>
                      <div className="mt-auto">
                        <p className="text-black text-[14px] font-plus-jakarta-sans font-regular leading-relaxed">
                          reflecting our commitment to quality and trust
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>

      {/* Middle Section - Our Vision */}
      <div className="relative" ref={visionRef}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-us/aboutimg1.png"
            alt="Modern Architecture"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <ContainerLayout className="relative z-10 py-16 flex items-center justify-center min-h-[600px]" paddingX="px-6">
            <div 
              className={`glass-card-vision p-6 md:p-8 max-w-sm md:max-w-md w-full text-center transition-all duration-1000 ease-out ${
                isVisionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div>
                <BlurText
                  text="Our Vision"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleVisionAnimationComplete}
                  className="font-gc-palioka text-2xl md:text-3xl text-black leading-tight"
                />
                <BlurText
                  text="for Elevated Living"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="font-gc-palioka text-2xl md:text-3xl text-black leading-tight mb-4"
                />
              </div>
              <p className="text-black text-[14px] font-medium leading-relaxed">
                At Agasti, our vision is to redefine luxury living by creating communities that harmonize architecture, nature, and human experience. We aim to build spaces that feel timeless—crafted with enduring quality, thoughtful engineering, and an unwavering attention to detail.
              </p>
            </div>
          </ContainerLayout>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <ContainerLayout className="relative z-10 py-16 sm:py-20 md:py-24 h-[600px]" paddingX="px-6 xl:px-[48px] lg:px-[48px]">
            <div className="absolute bottom-8 right-8">
              <div 
                className={`max-w-xl glass-card-vision p-8 transition-all duration-1000 ease-out ${
                  isVisionVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0'
                }`}
              >
                <div>
                  <BlurText
                    text="Our Vision"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleVisionAnimationComplete}
                    className="font-gc-palioka text-2xl sm:text-3xl text-black leading-none tracking-[-0.02]"
                  />
                  <BlurText
                    text="for Elevated Living"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={() => {}}
                    className="font-gc-palioka text-2xl sm:text-3xl text-black leading-none tracking-[-0.02] mb-6"
                  />
                </div>
                <p className="text-black-600 text-[14px] font-medium leading-tight tracking-[-0.02em]">
                  At Agasti, our vision is to redefine luxury living by creating communities that harmonize architecture, nature, and human experience. We aim to build spaces that feel timeless—crafted with enduring quality, thoughtful engineering, and an unwavering attention to detail.
                </p>
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>

      {/* Bottom Section - Craftsmanship & Sustainability */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Craftsmanship & Quality */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/about-us/aboutimg2.png"
              alt="Craftsmanship"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          
          {/* Mobile Layout */}
          <div className="block sm:hidden relative z-10 py-16 flex items-start justify-center min-h-[600px] px-6 pt-20">
            <div className="glass-card-craftsmanship p-6 max-w-sm w-full text-center">
              <div>
                <BlurText
                  text="Craftsmanship"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleCraftsmanshipAnimationComplete}
                  className="font-gc-palioka text-2xl text-black leading-tight"
                />
                <BlurText
                  text="& Quality"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="font-gc-palioka text-2xl text-black leading-tight mb-4"
                />
              </div>
              <p className="text-black text-sm leading-relaxed">
                A section that highlights the details, premium materials, and artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:block lg:hidden relative z-10 py-16 flex items-start justify-center min-h-[700px] px-6 pt-20">
            <div className="glass-card-craftsmanship p-8 max-w-md w-full text-center mx-auto">
              <div>
                <BlurText
                  text="Craftsmanship"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleCraftsmanshipAnimationComplete}
                  className="font-gc-palioka text-3xl text-black leading-tight"
                />
                <BlurText
                  text="& Quality"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="font-gc-palioka text-3xl text-black leading-tight mb-4"
                />
              </div>
              <p className="text-black text-sm leading-relaxed">
                A section that highlights the details, premium materials, and artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative z-10 p-8 sm:p-12 md:p-16 min-h-[600px] flex items-start">
            <div className="glass-card-craftsmanship p-6 max-w-sm">
              <div>
                <BlurText
                  text="Craftsmanship"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleCraftsmanshipAnimationComplete}
                  className="font-gc-palioka text-2xl sm:text-3xl text-black leading-none"
                />
                <BlurText
                  text="& Quality"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="font-gc-palioka text-2xl sm:text-3xl text-black leading-none mb-4"
                />
              </div>
              <p className="text-black-600 text-sm leading-tight tracking-[-0.02em]">
                A section that highlights the details, premium materials, and artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability & Integrity */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/about-us/aboutimg3.png"
              alt="Sustainability"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          
          {/* Mobile Layout */}
          <div className="block sm:hidden relative z-10 py-16 flex items-center justify-center min-h-[600px] px-6">
            <div className="glass-card-sustainability p-6 max-w-sm w-full text-center">
              <div>
                <BlurText
                  text="Sustainability"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleSustainabilityAnimationComplete}
                  className="font-gc-palioka text-2xl text-black leading-tight"
                />
                <BlurText
                  text="& Integrity"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="font-gc-palioka text-2xl text-black leading-tight mb-4"
                />
              </div>
              <p className="text-black text-sm leading-relaxed">
                We build with honesty and responsibility, creating homes that uphold trust while preserving the environment for generations.
              </p>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:block lg:hidden relative z-10 py-16 flex items-center justify-center min-h-[700px] px-6">
            <div className="glass-card-sustainability p-8 max-w-md w-full text-center">
              <div>
                <BlurText
                  text="Sustainability"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleSustainabilityAnimationComplete}
                  className="font-gc-palioka text-3xl text-black leading-tight"
                />
                <BlurText
                  text="& Integrity"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="font-gc-palioka text-3xl text-black leading-tight mb-4"
                />
              </div>
              <p className="text-black text-sm leading-relaxed">
                We build with honesty and responsibility, creating homes that uphold trust while preserving the environment for generations.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative z-10 h-[600px]">
            <div className="absolute bottom-16 right-12">
              <div className="glass-card-sustainability p-8 max-w-[435px]">
                <div>
                  <BlurText
                    text="Sustainability"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleSustainabilityAnimationComplete}
                    className="font-gc-palioka text-2xl sm:text-3xl text-black leading-none"
                  />
                  <BlurText
                    text="& Integrity"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={() => {}}
                    className="font-gc-palioka text-2xl sm:text-3xl text-black leading-none mb-6"
                  />
                </div>
                <p className="text-black-600 text-sm leading-tight tracking-[-0.02em]">
                  We build with honesty and responsibility, creating homes that uphold trust while preserving the environment for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function AboutExcellence() {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ years: 0, villas: 0, satisfaction: 0 });
  
  const visionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Blur effects for headings
  const { elementRef: excellenceRef, blurClass: excellenceBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  const { elementRef: excellenceTitleRef, blurClass: excellenceTitleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  const { elementRef: visionTitleRef, blurClass: visionTitleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  const { elementRef: craftsmanshipRef, blurClass: craftsmanshipBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  const { elementRef: sustainabilityRef, blurClass: sustainabilityBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);

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
              <h2 className="text-white font-gc-palioka text-[20px] sm:text-[24px] md:text-[28px] font-normal mb-4">
                Built on Excellence
              </h2>
              <h3 className="font-gc-palioka text-[#262B35] text-[20px] sm:text-[28px] md:text-[32px] leading-tight mb-4">
                Where every property reflects uncompromised quality
              </h3>
              <p className="text-[#3C3C3C]/80 text-[14px] leading-relaxed">
                Building exclusive communities for individuals who seek refined elegance, elevated comfort, and a truly distinguished way of living.
              </p>
            </div>

            {/* Mobile Stats Cards - Stacked Vertically */}
            <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0" ref={statsRef}>
              {/* 7+ Years */}
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-[10px] p-6 mx-auto max-w-sm md:max-w-none">
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
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-[10px] p-6 mx-auto max-w-sm md:max-w-none">
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
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-[10px] p-6 mx-auto max-w-sm md:max-w-none">
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-4 items-start px-[48px]">
              {/* Left Side - Built on Excellence */}
              <div className="lg:col-span-1 flex flex-col gap-[10px]" style={{ width: '435.00439453125px', height: '220px' }}>
                <h2 
                  ref={excellenceRef}
                  className={`text-white font-gc-palioka-demo text-[20px] sm:text-[24px] font-bold transition-all duration-700 ease-out ${excellenceBlur}`}
                >
                  Built on Excellence
                </h2>
                <h3 
                  ref={excellenceTitleRef}
                  className={`font-gc-palioka text-[#262B35] text-[20px] sm:text-3xl md:text-[32px] leading-tight transition-all duration-700 ease-out ${excellenceTitleBlur}`}
                >
                  Where every property reflects uncompromised quality
                </h3>
                <p className="text-[#3C3C3C]/80 text-[16px] font-regular leading-tight font-plus-jakarta-sans">
                  Building exclusive communities for individuals who seek refined elegance, elevated comfort, and a truly distinguished way of living.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 items-start ml-24" ref={statsRef}>
                {/* 7+ Years */}
                <div className="bg-white/10 backdrop-blur-sm border-[5.29px] border-white/20 rounded-[10px] flex flex-col p-6 -mr-4" style={{ width: '275px', height: '289px' }}>
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
                <div className="bg-white/10 backdrop-blur-sm border-[5.29px] border-white/20 rounded-[10px] flex flex-col p-6 -mr-4" style={{ width: '275px', height: '289px' }}>
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
                <div className="bg-white/10 backdrop-blur-sm border-[5.29px] border-white/20 rounded-[10px] flex flex-col p-6" style={{ width: '275px', height: '289px' }}>
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
              className={`bg-white/40 p-6 md:p-8 rounded-lg border-2 border-white max-w-sm md:max-w-md w-full text-center transition-all duration-1000 ease-out ${
                isVisionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 
                ref={visionTitleRef}
                className={`font-gc-palioka text-2xl md:text-3xl text-black leading-tight mb-4 transition-all duration-700 ease-out ${visionTitleBlur}`}
              >
                Our Vision
                <br />
                for Elevated Living
              </h3>
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
                className={`max-w-xl bg-white/40 p-8 rounded-lg border-2 border-white transition-all duration-1000 ease-out ${
                  isVisionVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0'
                }`}
              >
                <h3 
                  ref={visionTitleRef}
                  className={`font-gc-palioka text-2xl sm:text-3xl text-black leading-none tracking-[-0.02] mb-6 transition-all duration-700 ease-out ${visionTitleBlur}`}
                >
                  Our Vision
                  <br />
                  for Elevated Living
                </h3>
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
            <div className="bg-white/40 p-6 rounded-lg max-w-sm w-full border-2 border-white text-center">
              <h3 
                ref={craftsmanshipRef}
                className={`font-gc-palioka text-2xl text-black leading-tight mb-4 transition-all duration-700 ease-out ${craftsmanshipBlur}`}
              >
                Craftsmanship
                <br />
                & Quality
              </h3>
              <p className="text-black text-sm leading-relaxed">
                A section that highlights the details, premium materials, and artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:block lg:hidden relative z-10 py-16 flex items-start justify-center min-h-[700px] px-6 pt-20">
            <div className="bg-white/40 p-8 rounded-lg max-w-md w-full border-2 border-white text-center mx-auto">
              <h3 
                ref={craftsmanshipRef}
                className={`font-gc-palioka text-3xl text-black leading-tight mb-4 transition-all duration-700 ease-out ${craftsmanshipBlur}`}
              >
                Craftsmanship
                <br />
                & Quality
              </h3>
              <p className="text-black text-sm leading-relaxed">
                A section that highlights the details, premium materials, and artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative z-10 p-8 sm:p-12 md:p-16 min-h-[600px] flex items-start">
            <div className="bg-white/40 p-6 rounded-lg max-w-sm border-2 border-white">
              <h3 
                ref={craftsmanshipRef}
                className={`font-gc-palioka text-2xl sm:text-3xl text-black leading-none mb-4 transition-all duration-700 ease-out ${craftsmanshipBlur}`}
              >
                Craftsmanship
                <br />
                & Quality
              </h3>
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
            <div className="bg-white/40 p-6 rounded-lg max-w-sm w-full border-2 border-white text-center">
              <h3 
                ref={sustainabilityRef}
                className={`font-gc-palioka text-2xl text-black leading-tight mb-4 transition-all duration-700 ease-out ${sustainabilityBlur}`}
              >
                Sustainability
                <br />
                & Integrity
              </h3>
              <p className="text-black text-sm leading-relaxed">
                We build with honesty and responsibility, creating homes that uphold trust while preserving the environment for generations.
              </p>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:block lg:hidden relative z-10 py-16 flex items-center justify-center min-h-[700px] px-6">
            <div className="bg-white/40 p-8 rounded-lg max-w-md w-full border-2 border-white text-center">
              <h3 
                ref={sustainabilityRef}
                className={`font-gc-palioka text-3xl text-black leading-tight mb-4 transition-all duration-700 ease-out ${sustainabilityBlur}`}
              >
                Sustainability
                <br />
                & Integrity
              </h3>
              <p className="text-black text-sm leading-relaxed">
                We build with honesty and responsibility, creating homes that uphold trust while preserving the environment for generations.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative z-10 h-[600px]">
            <div className="absolute bottom-16 right-12">
              <div className="bg-white/80 p-8 rounded-lg max-w-[435px] border-2 border-white">
                <h3 
                  ref={sustainabilityRef}
                  className={`font-gc-palioka text-2xl sm:text-3xl text-black leading-none mb-6 transition-all duration-700 ease-out ${sustainabilityBlur}`}
                >
                  Sustainability
                  <br />
                  & Integrity
                </h3>
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
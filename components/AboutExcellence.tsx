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
        threshold: 0.5,
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
        
        <ContainerLayout className="relative z-10 py-14 sm:py-20 md:py-24" disablePaddingX={true}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-4 items-start px-[48px]">
            {/* Left Side - Built on Excellence */}
            <div className="lg:col-span-1 flex flex-col gap-[10px]" style={{ width: '435.00439453125px', height: '220px' }}>
              <h2 
                ref={excellenceRef}
                className={`text-white font-gc-palioka-demo text-[24px] font-bold transition-all duration-700 ease-out ${excellenceBlur}`}
              >
                Built on Excellence
              </h2>
              <h3 
                ref={excellenceTitleRef}
                className={`font-gc-palioka text-[#262B35] text-[32px] sm:text-3xl md:text-[32px] leading-tight transition-all duration-700 ease-out ${excellenceTitleBlur}`}
              >
                Where every property reflects uncompromised quality
              </h3>
              <p className="text-[#3C3C3C]/80 text-sm leading-relaxed font-plus-jakarta-sans">
                Building exclusive communities for individuals who seek refined elegance, elevated comfort, and a truly distinguished way of living.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 items-start ml-24" ref={statsRef}>
              {/* 7+ Years */}
              <div className="bg-white/10 backdrop-blur-sm border-[5.29px] border-white/20 rounded-[10px] flex flex-col p-6 -mr-4" style={{ width: '275px', height: '289px' }}>
                <div className="flex-grow-0">
                  <div className="text-black text-[74px] font-bold mb-2">
                    {animatedNumbers.years}+
                  </div>
                  <div className="text-black text-sm font-medium mb-8">Years of Excellence</div>
                </div>
                <div className="mt-auto">
                  <p className="text-black text-xs leading-relaxed">
                    delivering premium Villas since 2018
                  </p>
                </div>
              </div>

              {/* 18 Signature Villas */}
              <div className="bg-white/10 backdrop-blur-sm border-[5.29px] border-white/20 rounded-[10px] flex flex-col p-6 -mr-4" style={{ width: '275px', height: '289px' }}>
                <div className="flex-grow-0">
                  <div className="text-black text-[74px] font-bold mb-2">
                    {animatedNumbers.villas}
                  </div>
                  <div className="text-black text-sm font-medium mb-8">Signature Villas</div>
                </div>
                <div className="mt-auto">
                  <p className="text-black text-xs leading-relaxed">
                    crafted with precision and refined exclusivity
                  </p>
                </div>
              </div>

              {/* 95% Client Satisfaction */}
              <div className="bg-white/10 backdrop-blur-sm border-[5.29px] border-white/20 rounded-[10px] flex flex-col p-6" style={{ width: '275px', height: '289px' }}>
                <div className="flex-grow-0">
                  <div className="text-black text-[74px] font-bold mb-2">
                    {animatedNumbers.satisfaction}%
                  </div>
                  <div className="text-black text-sm font-medium mb-8">Client Satisfaction</div>
                </div>
                <div className="mt-auto">
                  <p className="text-black text-xs leading-relaxed">
                    reflecting our commitment to quality and trust
                  </p>
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
              <p className="text-black-600 text-sm leading-tight tracking-[-0.02em]">
                At Agasti, our vision is to redefine luxury living by creating communities that harmonize architecture, nature, and human experience. We aim to build spaces that feel timeless—crafted with enduring quality, thoughtful engineering, and an unwavering attention to detail.
              </p>
            </div>
          </div>
        </ContainerLayout>
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
          
          <div className="relative z-10 p-8 sm:p-12 md:p-16 min-h-[600px] flex items-start">
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
          
          <div className="relative z-10 h-[600px]">
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
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";

export default function AboutCommitments() {
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Blur effects for headings
  const { elementRef: commitmentsRef, blurClass: commitmentsBlur } = useBlurOnScroll<HTMLParagraphElement>(0.1);
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);

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

  // Infinite scroll animation
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

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [commitments.length]);

  return (
    <section className="bg-white pt-[85px]">
      <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p 
            ref={commitmentsRef}
            className={`text-[#8D957E] text-[24px] font-bold mb-4 transition-all duration-700 ease-out ${commitmentsBlur}`}
          >
            Our commitments
          </p>
          <h2 
            ref={titleRef}
            className={`font-gc-palioka text-[32px] sm:text-3xl md:text-[32px] lg:text-[32px] text-black leading-tight max-w-4xl transition-all duration-700 ease-out ${titleBlur}`}
          >
            With every Agasti Villa, we aim to deliver outcomes that prioritize quality, comfort, and long-term value.
          </h2>
        </div>
      </ContainerLayout>

      {/* Infinite Scroll Carousel */}
      <div className="relative overflow-hidden">
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
                <div className="bg-white text-[#8D957E] text-center p-6 sm:p-8" style={{ width: '662px' }}>
                  <h3 className="font-gc-palioka text-[22px] mb-3">
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
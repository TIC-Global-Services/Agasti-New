"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import BlurText from "./BlurText";

export default function LifestyleGallery() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleAnimationComplete = () => {
    console.log('LifestyleGallery title animation completed!');
  };

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);
  const features = [
    {
      title: "Sculpted Spiral Staircase",
      description:
        "A sculpted spiral staircase adds architectural elegance while optimizing space and creating a striking visual centerpiece.",
      image: "/staircase.png",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "Tot Lot Garden",
      description:
        "A safe, joyful play space surrounded by greenery—designed for little ones to explore, play, and connect with nature.",
      image: "/totlotgarden.png",
      aspectRatio: "aspect-[3/5]",
    },
    {
      title: "Signature Clubhouse",
      description:
        "A refined retreat with more than 20,000 sq. ft. in built-up area, featuring premium lounges, curated amenities, and serene social spaces for effortless luxury living.",
      image: "/clubhouse.png",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "Wider Structural Beams",
      description:
        "Wider Structural Beams create open, seamless interiors with stronger support and cleaner ceiling lines.",
      image: "/menu-image.jpg",
      aspectRatio: "aspect-[3/5]",
    },
  ];

  return (
    <section className="bg-white py-[40px]">
      <ContainerLayout paddingX="px-6 sm:px-[48px]">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <BlurText
            text="Experience a Life of Convenience and Indulgence"
            delay={60}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-gc-palioka text-[20px] sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight"
          />
        </div>

        {/* Gallery - Horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-6 md:pb-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:items-start min-w-max md:min-w-0">
            {features.map((feature, index) => (
              <div 
                key={index} 
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group cursor-pointer flex-shrink-0 w-[75vw] sm:w-[65vw] md:w-auto transition-all duration-700 ease-out ${
                  visibleCards[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className={`relative aspect-[3/4] lg:${feature.aspectRatio} overflow-hidden mb-3 sm:mb-4`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="pr-4 md:pr-0">
                  <h3 className="text-[#8D957E] text-lg md:text-xl lg:text-[22px] font-gc-palioka mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

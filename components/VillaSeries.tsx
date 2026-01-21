"use client";
import { useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function VillaSeries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Letter reveal effects for headings
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  const villas = [
    {
      title: "North Facing Villas",
      description:
        "The Agasti Zenith brings in warm evening light, offering modern layouts and a naturally cozy atmosphere. It's designed for those who enjoy relaxed sunsets, comfortable spaces, and a stylish setting that feels inviting every day.",
      image: "/mainvilla.jpg",
    },
    {
      title: "East Facing Villas",
      description:
        "The Agasti Crest combines elegance with functionality, featuring spacious interiors and premium finishes. Perfect for families seeking a blend of luxury and comfort in their everyday living.",
      image: "/limitededitionvilla.jpg",
    },
    {
      title: "West Facing Villas",
      description:
        "The Agasti Horizon offers panoramic views and open-plan living spaces. Designed for those who appreciate modern architecture and seamless indoor-outdoor connectivity.",
      image: "/resort.jpg",
    },
  ];

  const toggleAccordion = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section className="bg-[#F5F3EE] py-[40px]">
      <ContainerLayout paddingX="px-6 sm:px-[48px]">
        {/* Header */}
        <div className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-gray-300">
          <p className="text-[#8D957E] text-sm sm:text-base md:text-lg mb-3 sm:mb-4">The Agasti Villa Series</p>
          <h2 
            ref={titleRef}
            className="font-gc-palioka text-[20px] sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight"
          >
            Villas Crafted for Every Lifestyle and Every Direction
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 relative">
          {/* Left Side - Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src={villas[activeIndex].image}
              alt={villas[activeIndex].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              key={activeIndex}
              priority
            />
          </div>

          {/* Vertical Line - Positioned to intersect with horizontal borders */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 -translate-x-1/2 z-10" />

          {/* Right Side - Accordion */}
          <div className="flex flex-col h-auto lg:h-[600px]">
            {villas.map((villa, index) => (
              <div key={index} className={`flex-1 flex flex-col ${index < villas.length - 1 ? 'border-b border-gray-300' : ''}`}>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-6 lg:py-8 text-left hover:opacity-70 transition-opacity"
                >
                  <h3 className="font-gc-palioka text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
                    {villa.title}
                  </h3>
                  {activeIndex !== index && (
                    <span className="text-2xl sm:text-3xl md:text-4xl text-gray-400 font-light">
                      +
                    </span>
                  )}
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 pb-8" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-8 sm:mt-10 md:mt-16 lg:mt-[200px]">
                    <span className="font-semibold text-gray-600">{villa.title}</span> {villa.description.replace(villa.title, '')}
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

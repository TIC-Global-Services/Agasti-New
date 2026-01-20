"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Letter reveal effects for headings
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };
  const services = [
    {
      title: "Lush Surroundings",
      description: "Fully grown trees, water bodies, and bridges that immerse you in a tropical oasis.",
      image: "/lushsurrounding.jpg",
    },
    {
      title: "Limited-Edition Villas",
      description: "Just 18 exclusive homes — ensuring privacy and a close-knit community.",
      image: "/limitededitionvilla.jpg",
    },
    {
      title: "Resort-Inspired Comforts",
      description: "Clubhouse, pool, yoga deck, and recreation spaces for holistic living.",
      image: "/resort.jpg",
    },
  ];

  return (
    <section className="bg-white py-[40px]">
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: #e5e7ebff;
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #9ca3af;
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
          }
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
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[#8D957E] text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Where Luxury Meets Nature</p>
          <h2 
            ref={titleRef}
            className="font-gc-palioka text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight"
          >
            Elegance curated with care, serenity framed in every vista.
          </h2>
        </div>

        <hr className="border-gray-300 mb-6 sm:mb-8" />

        {/* Mobile Carousel */}
        <div className="block sm:hidden -mx-6">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar"
          >
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col w-screen flex-shrink-0 snap-center px-6">
                  {/* Text Content */}
                  <div className="mb-6">
                    <h3 className="text-[20px] font-semibold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[9/16] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <div 
                key={index} 
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#8D957E] w-12' : 'bg-gray-300 w-8'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              {/* Text Content */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden group mt-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}

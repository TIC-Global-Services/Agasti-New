"use client";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function Services() {
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
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: #e5e7eb;
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #9ca3af;
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
          }
        `
      }} />
      <ContainerLayout>
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-[#8D957E] text-base sm:text-lg md:text-xl lg:text-[24px] mb-4 font-bold">Where Luxury Meets Nature</p>
          <h2 className="font-gc-palioka text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight">
            Elegance curated with care, <br></br>serenity framed in every vista.
          </h2>
        </div>

        <hr className="border-gray-500 mb-12 sm:mb-16" />

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="block sm:hidden overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 -mx-4 sm:mx-0">
          <div className="flex gap-4 px-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col w-[calc(100vw-2rem)] flex-shrink-0 snap-center">
                {/* Text Content */}
                <div className="mb-4 h-[100px]">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="calc(100vw - 2rem)"
                    className="object-cover"
                  />
                </div>
              </div>
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

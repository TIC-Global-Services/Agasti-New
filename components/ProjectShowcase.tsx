"use client";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function ProjectShowcase() {
  // Letter reveal effects for headings
  const { elementRef: titleRef1 } = useLetterReveal<HTMLHeadingElement>(0.1);
  const { elementRef: titleRef2 } = useLetterReveal<HTMLHeadingElement>(0.1);

  return (
    <section className="bg-white">
      <ContainerLayout paddingX="px-5 xl:px-[48px] lg:px-[40px]" paddingY="py-0">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          {/* First Villa - Agasti Verve */}
          <div className="mb-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-gc-palioka text-[20px] text-black mb-2 leading-tight">
                  Agasti Verve
                </h2>
                <div className="flex items-center">
                  <div className="relative mr-2" style={{ width: '20px', height: '20px' }}>
                    <Image
                      src="/projects-imgs/locationicon.png"
                      alt="Location"
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-500 text-[12px]">
                    Kokapet, Hyderabad
                  </p>
                </div>
              </div>
              
              <button className="bg-[#8D957E] text-white text-[8px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px] w-[113px] h-[30px]">
                STAY UPDATED
              </button>
            </div>

            <div className="relative overflow-hidden mb-6 h-[400px]">
              <Image
                src="/projects-imgs/agastiverve.png"
                alt="Agasti Verve Villa"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <p className="text-gray-600 text-[14px] leading-relaxed mb-8">
              Luxury residences inspired by contemporary minimalism, combining open spaces, modern design, and community living.
            </p>

            <hr className="border-gray-300 mb-8" />
          </div>

          {/* Second Villa - Agasti Arbor */}
          <div className="mb-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-gc-palioka text-[20px] text-black mb-2 leading-tight">
                  Agasti Arbor
                </h2>
                <div className="flex items-center">
                  <div className="relative mr-2" style={{ width: '20px', height: '20px' }}>
                    <Image
                      src="/projects-imgs/locationicon.png"
                      alt="Location"
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-500 text-[12px]">
                    Nanakramguda, Hyderabad
                  </p>
                </div>
              </div>
              
              <button className="bg-[#8D957E] text-white text-[8px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px] w-[113px] h-[30px]">
                STAY UPDATED
              </button>
            </div>

            <div className="relative overflow-hidden mb-6 h-[400px]">
              <Image
                src="/projects-imgs/agastiarbor.png"
                alt="Agasti Arbor Villa"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <p className="text-gray-600 text-[14px] leading-relaxed">
              A boutique villa enclave surrounded by lush landscapes, designed for serene, sustainable living.
            </p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          {/* First Villa - Agasti Verve */}
          <div className="mb-16">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-gc-palioka text-[32px] text-black mb-3 leading-tight">
                  Agasti Verve
                </h2>
                <div className="flex items-center">
                  <div className="relative mr-3" style={{ width: '24px', height: '24px' }}>
                    <Image
                      src="/projects-imgs/locationicon.png"
                      alt="Location"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-500 text-[16px]">
                    Kokapet, Hyderabad
                  </p>
                </div>
              </div>
              
              <button className="bg-[#8D957E] text-white text-[10px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px] w-[140px] h-[36px]">
                STAY UPDATED
              </button>
            </div>

            <div className="relative overflow-hidden mb-8 h-[500px]">
              <Image
                src="/projects-imgs/agastiverve.png"
                alt="Agasti Verve Villa"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <p className="text-gray-600 text-[16px] leading-relaxed mb-10">
              Luxury residences inspired by contemporary minimalism, combining open spaces, modern design, and community living.
            </p>

            <hr className="border-gray-300 mb-10" />
          </div>

          {/* Second Villa - Agasti Arbor */}
          <div className="mb-16">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-gc-palioka text-[32px] text-black mb-3 leading-tight">
                  Agasti Arbor
                </h2>
                <div className="flex items-center">
                  <div className="relative mr-3" style={{ width: '24px', height: '24px' }}>
                    <Image
                      src="/projects-imgs/locationicon.png"
                      alt="Location"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-500 text-[16px]">
                    Nanakramguda, Hyderabad
                  </p>
                </div>
              </div>
              
              <button className="bg-[#8D957E] text-white text-[10px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px] w-[140px] h-[36px]">
                STAY UPDATED
              </button>
            </div>

            <div className="relative overflow-hidden mb-8 h-[500px]">
              <Image
                src="/projects-imgs/agastiarbor.png"
                alt="Agasti Arbor Villa"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <p className="text-gray-600 text-[16px] leading-relaxed">
              A boutique villa enclave surrounded by lush landscapes, designed for serene, sustainable living.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* First Villa - Agasti Verve */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 md:mb-24">
            {/* Left Side - Title and Location */}
            <div className="lg:col-span-1">
              <h2 
                ref={titleRef1}
                className="font-gc-palioka text-3xl sm:text-4xl md:text-[45px] text-black mb-4 leading-none"
              >
                Agasti Verve
              </h2>
              <div className="flex items-center">
                <div className="relative mr-2" style={{ width: '23.5px', height: '24px' }}>
                  <Image
                    src="/projects-imgs/locationicon.png"
                    alt="Location"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm sm:text-[20px]">
                  Kokapet, Hyderabad
                </p>
              </div>
            </div>

            {/* Middle - Image */}
            <div className="lg:col-span-1 -ml-22 -mr-4">
              <div className="relative overflow-hidden" style={{ width: '548px', height: '140px' }}>
                <Image
                  src="/projects-imgs/agastiverve.png"
                  alt="Agasti Verve Villa"
                  fill
                  sizes="700px"
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Right Side - Description and Button */}
            <div className="lg:col-span-1 ml-8">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8D957E]"></div>
                <p className="text-[#717580] text-[16px] sm:text-base leading-tight mb-6 pl-4">
                  Luxury residences inspired by contemporary minimalism, combining open spaces, modern design, and community living.
                </p>
              </div>
              <button className="bg-[#8D957E] text-white text-[12px] font-medium tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px]" style={{ width: '197px', height: '50px' }}>
                STAY UPDATED
              </button>
            </div>
          </div>

          {/* Second Villa - Agasti Arbor */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Side - Title and Location */}
            <div className="lg:col-span-1">
              <h2 
                ref={titleRef2}
                className="font-gc-palioka text-3xl sm:text-4xl md:text-[44px] text-black mb-4 leading-none"
              >
                Agasti Arbor
              </h2>
              <div className="flex items-center">
                <div className="relative mr-2" style={{ width: '23.5px', height: '24px' }}>
                  <Image
                    src="/projects-imgs/locationicon.png"
                    alt="Location"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm sm:text-[18px]">
                  Nanakramguda, Hyderabad
                </p>
              </div>
            </div>

            {/* Middle - Image */}
            <div className="lg:col-span-1 -ml-22 -mr-4">
              <div className="relative overflow-hidden" style={{ width: '548px', height: '140px' }}>
                <Image
                  src="/projects-imgs/agastiarbor.png"
                  alt="Agasti Arbor Villa"
                  fill
                  sizes="700px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Description and Button */}
            <div className="lg:col-span-1 ml-7" style={{ minWidth: '300px' }}>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8D957E]"></div>
                <p className="text-[#717580] text-[16px] text-left sm:text-base leading-tight mb-6 pl-4">
                  A boutique villa enclave surrounded by lush landscapes, designed for serene, sustainable living.
                </p>
              </div>
              <button className="bg-[#8D957E] text-white text-[12px] font-medium tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px]" style={{ width: '197px', height: '50px' }}>
                STAY UPDATED
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}
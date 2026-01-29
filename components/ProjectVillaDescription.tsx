"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlurText from "./BlurText";

export default function ProjectVillaDescription() {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetY2, setOffsetY2] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / (rect.height + window.innerHeight));
        setOffsetY((scrollProgress - 0.3) * 100);
      }
      if (secondImageRef.current) {
        const rect = secondImageRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / (rect.height + window.innerHeight));
        setOffsetY2((scrollProgress - 0.3) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white w-full overflow-x-hidden">
      {/* Mobile Layout */}
      <div className="block sm:hidden px-4 py-8">
        {/* Villa 1 - Zenith */}
        <div className="mb-12">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <BlurText
                text="The Agasti West Facing Villa"
                className="font-gc-palioka text-xl text-black leading-tight flex-1 mr-4"
              />
              <Link href="/projects/zenith">
                <button className="bg-[#8D957E] text-white text-[8px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded px-4 py-2 whitespace-nowrap">
                  EXPLORE VILLA
                  <div className="relative w-3 h-3 ml-2">
                    <Image
                      src="/projects-imgs/arrowicon.png"
                      alt="Arrow"
                      fill
                      sizes="12px"
                      className="object-contain"
                    />
                  </div>
                </button>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative w-5 h-5 mr-2">
                <Image
                  src="/projects-imgs/locationicon.png"
                  alt="Location"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm">West facing villa</p>
            </div>
          </div>

          {/* Villa Image */}
          <div className="relative overflow-hidden mb-6 h-80">
            <Image
              src="/mainvilla.jpg"
              alt="The Agasti Zenith Villa"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-black text-sm font-bold">Property size: </span>
              <span className="text-[#8D957E] text-sm">653 <span className="font-bold">sq yds</span></span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Property type: </span>
              <span className="text-[#8D957E] text-sm font-bold">Villa</span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Year of build: </span>
              <span className="text-[#8D957E] text-sm">2024</span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Property status: </span>
              <span className="text-[#8D957E] text-sm font-bold">Ongoing</span>
            </div>
          </div>

          <hr className="border-gray-300" />
        </div>

        {/* Villa 2 - Crest */}
        <div className="mb-12">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <BlurText
                text="The Agasti East Facing Villa"
                className="font-gc-palioka text-xl text-black leading-tight flex-1 mr-4"
              />
              <Link href="/projects/crest">
                <button className="bg-[#8D957E] text-white text-[8px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded px-4 py-2 whitespace-nowrap">
                  EXPLORE VILLA
                  <div className="relative w-3 h-3 ml-2">
                    <Image
                      src="/projects-imgs/arrowicon.png"
                      alt="Arrow"
                      fill
                      sizes="12px"
                      className="object-contain"
                    />
                  </div>
                </button>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative w-5 h-5 mr-2">
                <Image
                  src="/projects-imgs/locationicon.png"
                  alt="Location"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm">East facing villa</p>
            </div>
          </div>

          <div className="relative overflow-hidden mb-6 h-80">
            <Image
              src="/projects-imgs/AgastiCrest.jpg"
              alt="The Agasti Crest Villa"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-black text-sm font-bold">Property size: </span>
              <span className="text-[#8D957E] text-sm">915 <span className="font-bold">sq yds</span></span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Property type: </span>
              <span className="text-[#8D957E] text-sm font-bold">Villa</span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Year of build: </span>
              <span className="text-[#8D957E] text-sm">2024</span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Property status: </span>
              <span className="text-[#8D957E] text-sm font-bold">Ongoing</span>
            </div>
          </div>

          <hr className="border-gray-300" />
        </div>

        {/* Villa 3 - Horizon */}
        <div className="mb-8">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <BlurText
                text="The Agasti North Facing Villa"
                className="font-gc-palioka text-xl text-black leading-tight flex-1 mr-4"
              />
              <Link href="/projects/horizon">
                <button className="bg-[#8D957E] text-white text-[8px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded px-4 py-2 whitespace-nowrap">
                  EXPLORE VILLA
                  <div className="relative w-3 h-3 ml-2">
                    <Image
                      src="/projects-imgs/arrowicon.png"
                      alt="Arrow"
                      fill
                      sizes="12px"
                      className="object-contain"
                    />
                  </div>
                </button>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative w-5 h-5 mr-2">
                <Image
                  src="/projects-imgs/locationicon.png"
                  alt="Location"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm">North facing villa</p>
            </div>
          </div>

          <div className="relative overflow-hidden mb-6 h-80">
            <Image
              src="/projects-imgs/agastihorizon.jpg"
              alt="The Agasti Horizon Villa"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-black text-sm font-bold">Property size: </span>
              <span className="text-[#8D957E] text-sm">915 <span className="font-bold">sq yds</span></span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Property type: </span>
              <span className="text-[#8D957E] text-sm font-bold">Villa</span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Year of build: </span>
              <span className="text-[#8D957E] text-sm">2024</span>
            </div>
            <div>
              <span className="text-black text-sm font-bold">Property status: </span>
              <span className="text-[#8D957E] text-sm font-bold">Ongoing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block px-6 lg:px-12 xl:px-16 py-12">
        {/* Villa 1 - Zenith */}
        <div className="mb-16">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="mb-6 lg:mb-0">
              <BlurText
                text="The Agasti West Facing Villa"
                className="font-gc-palioka text-3xl lg:text-4xl xl:text-5xl text-black mb-4 leading-tight"
              />
              <div className="flex items-center">
                <div className="relative w-6 h-6 mr-3">
                  <Image
                    src="/projects-imgs/locationicon.png"
                    alt="Location"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-lg lg:text-xl">West facing villa</p>
              </div>
            </div>
            
            <Link href="/projects/zenith">
              <button className="bg-[#8D957E] text-white text-sm font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded px-8 py-3">
                EXPLORE VILLA
                <div className="relative w-4 h-4 ml-3">
                  <Image
                    src="/projects-imgs/arrowicon.png"
                    alt="Arrow"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
              </button>
            </Link>
          </div>

          {/* Parallax Image */}
          <div className="overflow-hidden mb-8 w-full h-64 sm:h-80 lg:h-96 xl:h-112">
            <div
              style={{
                transform: `translateY(${Math.min(0, offsetY * 2)}px) scale(1.1)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-full h-[130%] -translate-y-[15%]"
            >
              <Image
                src="/mainvilla.jpg"
                alt="The Agasti Zenith Villa"
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Property Details - Simplified Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property size:</span>
              <span className="text-[#8D957E] text-sm lg:text-base">653 <span className="font-bold">sq yds</span></span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Year of build:</span>
              <span className="text-[#8D957E] text-sm lg:text-base">2024</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property status:</span>
              <span className="text-[#8D957E] text-sm lg:text-base font-bold">Ongoing</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property type:</span>
              <span className="text-[#8D957E] text-sm lg:text-base font-bold">Villa</span>
            </div>
          </div>
          
          <hr className="border-gray-300" />
        </div>

        {/* Villa 2 - Crest */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="mb-6 lg:mb-0">
              <BlurText
                text="The Agasti East Facing Villa"
                className="font-gc-palioka text-3xl lg:text-4xl xl:text-5xl text-black mb-4 leading-tight"
              />
              <div className="flex items-center">
                <div className="relative w-6 h-6 mr-3">
                  <Image
                    src="/projects-imgs/locationicon.png"
                    alt="Location"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-lg lg:text-xl">East facing villa</p>
              </div>
            </div>
            
            <Link href="/projects/crest">
              <button className="bg-[#8D957E] text-white text-sm font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded px-8 py-3">
                EXPLORE VILLA
                <div className="relative w-4 h-4 ml-3">
                  <Image
                    src="/projects-imgs/arrowicon.png"
                    alt="Arrow"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
              </button>
            </Link>
          </div>

          <div className="overflow-hidden mb-8 w-full h-64 sm:h-80 lg:h-96 xl:h-112">
            <div
              style={{
                transform: `translateY(${Math.min(0, offsetY * 2)}px) scale(1.1)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-full h-[130%] -translate-y-[15%]"
            >
              <Image
                src="/projects-imgs/AgastiCrest.jpg"
                alt="The Agasti Crest Villa"
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property size:</span>
              <span className="text-[#8D957E] text-sm lg:text-base">915 <span className="font-bold">sq yds</span></span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Year of build:</span>
              <span className="text-[#8D957E] text-sm lg:text-base">2024</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property status:</span>
              <span className="text-[#8D957E] text-sm lg:text-base font-bold">Ongoing</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property type:</span>
              <span className="text-[#8D957E] text-sm lg:text-base font-bold">Villa</span>
            </div>
          </div>
          
          <hr className="border-gray-300" />
        </div>

        {/* Villa 3 - Horizon */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="mb-6 lg:mb-0">
              <BlurText
                text="The Agasti North Facing Villa"
                className="font-gc-palioka text-3xl lg:text-4xl xl:text-5xl text-black mb-4 leading-tight"
              />
              <div className="flex items-center">
                <div className="relative w-6 h-6 mr-3">
                  <Image
                    src="/projects-imgs/locationicon.png"
                    alt="Location"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-lg lg:text-xl">North facing villa</p>
              </div>
            </div>
            
            <Link href="/projects/horizon">
              <button className="bg-[#8D957E] text-white text-sm font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded px-8 py-3">
                EXPLORE VILLA
                <div className="relative w-4 h-4 ml-3">
                  <Image
                    src="/projects-imgs/arrowicon.png"
                    alt="Arrow"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
              </button>
            </Link>
          </div>

          <div ref={secondImageRef} className="overflow-hidden mb-8 w-full h-64 sm:h-80 lg:h-96 xl:h-112">
            <div
              style={{
                transform: `translateY(${Math.min(0, offsetY2 * 2)}px) scale(1.1)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-full h-[130%] -translate-y-[15%]"
            >
              <Image
                src="/projects-imgs/agastihorizon.jpg"
                alt="The Agasti Horizon Villa"
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property size:</span>
              <span className="text-[#8D957E] text-sm lg:text-base">915 <span className="font-bold">sq yds</span></span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Year of build:</span>
              <span className="text-[#8D957E] text-sm lg:text-base">2024</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property status:</span>
              <span className="text-[#8D957E] text-sm lg:text-base font-bold">Ongoing</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-black text-sm lg:text-base font-bold block mb-2">Property type:</span>
              <span className="text-[#8D957E] text-sm lg:text-base font-bold">Villa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
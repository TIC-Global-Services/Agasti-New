"use client";
import Image from "next/image";
import Link from "next/link";
import { useLetterReveal } from "@/hooks/useLetterReveal";

interface ExploreMoreVillasProps {
  currentVilla: 'zenith' | 'crest' | 'horizon';
}

export default function ExploreMoreVillas({ currentVilla }: ExploreMoreVillasProps) {
  // Letter reveal effect for heading
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  const getOtherVillas = () => {
    switch (currentVilla) {
      case 'zenith':
        return [
          {
            name: 'The Agasti Crest',
            description: 'East facing villa',
            image: '/projects-imgs/AgastiCrest.jpg',
            slug: 'crest'
          },
          {
            name: 'The Agasti Horizon',
            description: 'North facing villa',
            image: '/projects-imgs/agastihorizon.jpg',
            slug: 'horizon'
          }
        ];
      case 'crest':
        return [
          {
            name: 'The Agasti Zenith',
            description: 'West facing villa',
            image: '/mainvilla.jpg',
            slug: 'zenith'
          },
          {
            name: 'The Agasti Horizon',
            description: 'North facing villa',
            image: '/projects-imgs/agastihorizon.jpg',
            slug: 'horizon'
          }
        ];
      case 'horizon':
        return [
          {
            name: 'The Agasti Zenith',
            description: 'West facing villa',
            image: '/mainvilla.jpg',
            slug: 'zenith'
          },
          {
            name: 'The Agasti Crest',
            description: 'East facing villa',
            image: '/projects-imgs/AgastiCrest.jpg',
            slug: 'crest'
          }
        ];
      default:
        return [];
    }
  };

  const otherVillas = getOtherVillas();

  return (
    <section className="bg-white py-12">
      <div className="">
        <h4 
          ref={titleRef}
          className="font-gc-palioka text-[20px] sm:text-[34px] md:text-[28px] lg:text-[34px] text-black mb-6 sm:mb-8"
        >
          Explore More Villas of This Kind
        </h4>
        
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="space-y-8 mb-4">
            {otherVillas.map((villa, index) => (
              <div key={index} className="group">
                {/* Villa title above image */}
                {/* <div className="mb-4">
                  <h5 className="font-gc-palioka text-[20px] text-black mb-1">{villa.name}</h5>
                </div> */}
                
                <div className="relative overflow-hidden mb-4 w-full h-[400px]">
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Gray line below villa title and button */}
                <div className="w-full h-px bg-gray-300 mt-4 mb-4"></div>
                {/* Villa title below image */}
                <div className="mb-2">
                  <h5 className="font-gc-palioka text-[20px] text-black mb-1">{villa.name}</h5>
                  <p className="text-gray-600 text-[14px] mb-4">{villa.description}</p>
                  <Link href={`/projects/${villa.slug}`}>
                    <button className="bg-[#8D957E] text-white text-[10px] font-bold tracking-wider rounded hover:bg-[#7A8470] transition-colors px-3 py-2 min-w-[100px] h-[36px] shrink-0">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
                
                
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="space-y-12 w-full max-w-2xl mx-auto">
            {otherVillas.map((villa, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-4 w-full h-64 sm:h-80 md:h-[400px]">
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Horizontal line below image */}
                <div className="w-full h-px bg-gray-300 mb-4"></div>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-gc-palioka text-[24px] text-black mb-1">{villa.name}</h5>
                    <p className="text-gray-600 text-[16px]">{villa.description}</p>
                  </div>
                  <Link href={`/projects/${villa.slug}`}>
                    <button className="bg-[#8D957E] text-white text-[12px] font-bold tracking-wider rounded hover:bg-[#7A8470] transition-colors px-4 py-2 min-w-[130px] h-[40px] shrink-0">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {otherVillas.map((villa, index) => (
              <div key={index} className="group w-full">
                <div className="relative overflow-hidden mb-4 w-full h-64 lg:h-80 xl:h-[321px]">
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Horizontal line below image */}
                <div className="w-full h-px bg-gray-300 mb-4"></div>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-gc-palioka text-[24px] text-black mb-[6px]">{villa.name}</h5>
                    <p className="text-gray-600 font-gc-palioka text-[16px]">{villa.description}</p>
                  </div>
                  <Link href={`/projects/${villa.slug}`}>
                    <button className="bg-[#8D957E] text-white text-[11px] font-urbanist px-4 py-2 rounded hover:bg-[#7A8470] transition-colors w-[115px] h-[41px] shrink-0">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
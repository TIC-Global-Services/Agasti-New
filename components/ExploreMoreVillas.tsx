"use client";
import Image from "next/image";

interface ExploreMoreVillasProps {
  currentVilla: 'zenith' | 'crest' | 'horizon';
}

export default function ExploreMoreVillas({ currentVilla }: ExploreMoreVillasProps) {
  const getOtherVillas = () => {
    switch (currentVilla) {
      case 'zenith':
        return [
          {
            name: 'The Agasti Crest',
            description: 'East facing villa',
            image: '/projects-imgs/AgastiCrest.jpg'
          },
          {
            name: 'The Agasti Horizon',
            description: 'North facing villa',
            image: '/projects-imgs/agastihorizon.jpg'
          }
        ];
      case 'crest':
        return [
          {
            name: 'The Agasti Zenith',
            description: 'West facing villa',
            image: '/mainvilla.jpg'
          },
          {
            name: 'The Agasti Horizon',
            description: 'North facing villa',
            image: '/projects-imgs/agastihorizon.jpg'
          }
        ];
      case 'horizon':
        return [
          {
            name: 'The Agasti Zenith',
            description: 'West facing villa',
            image: '/mainvilla.jpg'
          },
          {
            name: 'The Agasti Crest',
            description: 'East facing villa',
            image: '/projects-imgs/AgastiCrest.jpg'
          }
        ];
      default:
        return [];
    }
  };

  const otherVillas = getOtherVillas();

  return (
    <section className="bg-white py-12">
      <div className="px-5">
        <h4 className="font-gc-palioka text-[20px] sm:text-[34px] md:text-[28px] lg:text-[34px] text-black mb-6 sm:mb-8">Explore More Villas of This Kind</h4>
        
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="space-y-8">
            {otherVillas.map((villa, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-4 rounded-lg aspect-[16/10] w-full">
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
                    <h5 className="font-gc-palioka text-[20px] text-black mb-1">{villa.name}</h5>
                    <p className="text-gray-600 text-[14px]">{villa.description}</p>
                  </div>
                  <button className="bg-[#8D957E] text-white text-[10px] font-bold tracking-wider rounded hover:bg-[#7A8470] transition-colors" style={{ width: '100px', height: '36px' }}>
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="space-y-12 max-w-2xl mx-auto">
            {otherVillas.map((villa, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-4 rounded-lg w-full h-[400px]">
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
                  <button className="bg-[#8D957E] text-white text-[12px] font-bold tracking-wider rounded hover:bg-[#7A8470] transition-colors w-[130px] h-[40px]">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px]">
            {otherVillas.map((villa, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-4" style={{ width: '662px', height: '321px' }}>
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    sizes="662px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Horizontal line below image */}
                <div className="w-full h-px bg-gray-300 mb-4" style={{ width: '662px' }}></div>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-gc-palioka text-[24px] text-black mb-[6px]">{villa.name}</h5>
                    <p className="text-gray-600 font-gc-palioka text-[16px]">{villa.description}</p>
                  </div>
                  <button className="bg-[#8D957E] text-white text-[11px] font-urbanist px-4 py-2 rounded hover:bg-[#7A8470] transition-colors" style={{ width: '115px', height: '41px' }}>
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
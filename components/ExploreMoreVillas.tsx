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
        <h4 className="font-gc-palioka text-[34px] text-black mb-8">Explore More Villas of This Kind</h4>
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
                  <h5 className="font-gc-palioka text-xl text-black mb-1">{villa.name}</h5>
                  <p className="text-gray-600 text-sm">{villa.description}</p>
                </div>
                <button className="bg-[#8D957E] text-white text-xs px-4 py-2 rounded hover:bg-[#7A8470] transition-colors" style={{ width: '115px', height: '41px' }}>
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import { useBlurOnScroll } from "@/hooks/useBlurOnScroll";
import InsideVilla from "./InsideVilla";
import ExploreMoreVillas from "./ExploreMoreVillas";

// Amenity Cards Component - moved outside to prevent recreation on render
const AmenityCards = () => (
  <div className="flex flex-wrap justify-end gap-4 ml-10">
    <div className="text-center p-6 border-r border-gray-300" style={{ backgroundColor: '#F0EDE4', width: '208px', height: '120px', marginRight: '10px' }}>
      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
        <Image
          src="/projects-imgs/club.png"
          alt="Clubhouse"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-700">Clubhouse</p>
    </div>
    
    <div className="text-center p-6 border-r border-gray-300" style={{ backgroundColor: '#F0EDE4', width: '208px', height: '120px' }}>
      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
        <Image
          src="/projects-imgs/badminton.png"
          alt="Badminton Court"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-700">Badminton Court</p>
    </div>
    
    <div className="text-center p-6 border-r border-gray-300" style={{ backgroundColor: '#F0EDE4', width: '208px', height: '120px', marginRight: '10px' }}>
      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
        <Image
          src="/projects-imgs/basketball.png"
          alt="Mini Basketball Court"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-700">Mini Basketball Court</p>
    </div>
    
    <div className="text-center p-6 border-r border-gray-300" style={{ backgroundColor: '#F0EDE4', width: '208px', height: '120px' }}>
      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
        <Image
          src="/projects-imgs/playarea.png"
          alt="Kids Play Area"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-700">Kids Play Area</p>
    </div>
  </div>
);

export default function ProjectVillaDescription() {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetY2, setOffsetY2] = useState(0);
  const [expandedVilla, setExpandedVilla] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);
  
  // Blur effects for headings
  const { elementRef: titleRef, blurClass: titleBlur } = useBlurOnScroll<HTMLHeadingElement>(0.1);
  const { elementRef: subtitleRef, blurClass: subtitleBlur } = useBlurOnScroll<HTMLParagraphElement>(0.1);

  const toggleVillaDetails = (villaName: string) => {
    setExpandedVilla(expandedVilla === villaName ? null : villaName);
  };

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
    <section ref={sectionRef} className="relative bg-white pt-16 sm:pt-20 md:pt-24">
      <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-0">
            <h2 
              ref={titleRef}
              className={`font-gc-palioka text-3xl sm:text-4xl md:text-[44px] lg:text-[44px] text-black mb-2 leading-tight transition-all duration-700 ease-out ${titleBlur}`}
            >
              The Agasti Zenith
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
              <p 
                ref={subtitleRef}
                className={`text-gray-600 text-sm sm:text-[20px] transition-all duration-700 ease-out ${subtitleBlur}`}
              >
                West facing villa
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => toggleVillaDetails('zenith')}
            className="bg-[#8D957E] text-white text-[12px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px]" 
            style={{ width: '197px', height: '50px' }}
          >
            EXPLORE VILLA
            <div className="relative w-4 h-4 ml-2">
              <Image
                src="/projects-imgs/arrowicon.png"
                alt="Arrow"
                fill
                sizes="16px"
                className="object-contain"
              />
            </div>
          </button>
        </div>

        {/* Parallax Image */}
        {!expandedVilla && (
          <div className="relative overflow-hidden mb-8 sm:mb-12 rounded-lg" style={{ width: '1344px', height: '444px', maxWidth: '100%' }}>
            <div
              style={{
                transform: `translateY(${Math.min(0, offsetY * 3)}px)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-full h-[120%] -translate-y-[10%]"
            >
              <Image
                src="/mainvilla.jpg"
                alt="The Agasti Zenith Villa"
                fill
                sizes="1344px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        )}

        {/* Property Details */}
        {!expandedVilla && (
          <div className="flex justify-center px-[48px]">
            <div className="flex items-center gap-10 max-w-7xl">
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property size:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">653 sq yds</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Year of build:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">2024</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property status:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">Ongoing</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property type:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">Villa</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Dropdown for Agasti Zenith */}
        {expandedVilla === 'zenith' && (
          <>
            {/* Zenith Villa Image when expanded */}
            <div className="relative overflow-hidden mb-8 sm:mb-12 rounded-lg" style={{ width: '1344px', height: '444px', maxWidth: '100%' }}>
              <div
                style={{
                  transform: `translateY(${Math.min(0, offsetY * 3)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative w-full h-[120%] -translate-y-[10%]"
              >
                <Image
                  src="/mainvilla.jpg"
                  alt="The Agasti Zenith Villa"
                  fill
                  sizes="1344px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Zenith Property Details when expanded */}
            <div className="flex justify-center px-[48px] mb-8">
              <div className="flex items-center gap-10 max-w-7xl">
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property size:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">653 sq yds</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Year of build:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">2024</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property status:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">Ongoing</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property type:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">Villa</span>
                </div>
              </div>
            </div>

            <div className="bg-white-50 p-8 rounded-lg mb-8 mt-8 transition-all duration-300 ease-in-out">
              <div className="flex justify-start px-[48px] ml-8">
                <div className="w-full max-w-[1400px]">
                  {/* Top Section - Property Description and Amenities */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-8">
                    {/* Left Side - Property Description */}
                    <div className="max-w-5xl">
                      <h3 className="text-2xl font-bold text-black mb-4">Property description</h3>
                      <p className="text-gray-600 text-base leading-[1.3] mb-6">
                        The Agasti Zenith is a thoughtfully crafted villa community that blends refined architecture with modern comfort. Designed for elevated living, each villa showcases seamless planning, natural ventilation, and premium detailing. With serene surroundings, curated amenities, and a focus on privacy, The Agasti Zenith offers a lifestyle where elegance and functionality come together effortlessly.
                      </p>
                      <button className="text-black text-sm font-medium hover:opacity-70 transition-opacity group">
                        <span className="relative inline-block">
                          SCHEDULE A VISIT →
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                    </div>
                    
                    {/* Right Side - Amenities */}
                    <div>
                      <AmenityCards />
                    </div>
                  </div>
                  
                  {/* Inside The Villa Component */}
                  <div>
                    <h4 className="font-gc-palioka text-[34px] text-black mb-4">Inside The Villa</h4>
                    <InsideVilla showTitle={false} showPadding={false} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Explore More Villas Component - Displayed below dropdown */}
        {expandedVilla === 'zenith' && <ExploreMoreVillas currentVilla="zenith" />}
        
        {!expandedVilla && <hr className="border-gray-300 mb-10 sm:mb-12 mt-8 sm:mt-10 md:mt-12" />}

        {/* Second Villa - The Agasti Crest */}
        {!expandedVilla && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-0">
              <h2 className="font-gc-palioka text-[44px] sm:text-4xl md:text-[44px] lg:text-[44px] text-black mb-2 leading-tight transition-all duration-700 ease-out">
                The Agasti Crest
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
                <p className="text-gray-600 text-sm sm:text-[20px] transition-all duration-700 ease-out">
                  East facing villa
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => toggleVillaDetails('crest')}
              className="bg-[#8D957E] text-white text-[12px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px] mt-2" 
              style={{ width: '197px', height: '50px' }}
            >
              EXPLORE VILLA
              <div className="relative w-4 h-4 ml-2">
                <Image
                  src="/projects-imgs/arrowicon.png"
                  alt="Arrow"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        )}

        {/* Second Villa Parallax Image */}
        {!expandedVilla && (
          <div className="relative overflow-hidden mb-8 sm:mb-12 rounded-lg" style={{ width: '1344px', height: '444px', maxWidth: '100%' }}>
            <div
              style={{
                transform: `translateY(${Math.min(0, offsetY * 3)}px)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-full h-[120%] -translate-y-[10%]"
            >
              <Image
                src="projects-imgs/AgastiCrest.jpg"
                alt="The Agasti Crest Villa"
                fill
                sizes="1344px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        )}

        {/* Second Villa Property Details */}
        {!expandedVilla && (
          <div className="flex justify-center px-[48px]">
            <div className="flex items-center gap-8 max-w-7xl">
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property size:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">915 sq yds</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Year of build:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">2024</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property status:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">Ongoing</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property type:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">Villa</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Dropdown for Agasti Crest */}
        {expandedVilla === 'crest' && (
          <>
            {/* Crest Villa Image when expanded */}
            <div className="relative overflow-hidden mb-8 sm:mb-12 rounded-lg" style={{ width: '1344px', height: '444px', maxWidth: '100%' }}>
              <div
                style={{
                  transform: `translateY(${Math.min(0, offsetY * 3)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative w-full h-[120%] -translate-y-[10%]"
              >
                <Image
                  src="/projects-imgs/AgastiCrest.jpg"
                  alt="The Agasti Crest Villa"
                  fill
                  sizes="1344px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Crest Property Details when expanded */}
            <div className="flex justify-center px-[48px] mb-8">
              <div className="flex items-center gap-8 max-w-7xl">
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property size:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">915 sq yds</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Year of build:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">2024</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property status:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">Ongoing</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property type:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">Villa</span>
                </div>
              </div>
            </div>

            <div className="bg-white-50 p-8 rounded-lg mb-8 mt-8 transition-all duration-300 ease-in-out">
              <div className="flex justify-start px-[48px] ml-8">
                <div className="w-full max-w-[1400px]">
                  {/* Top Section - Property Description and Amenities */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-8">
                    {/* Left Side - Property Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Property description</h3>
                      <p className="text-gray-600 text-base leading-[1.3] mb-6">
                        The Agasti Crest represents the pinnacle of luxury living with its sophisticated design and premium amenities. Each villa is meticulously planned to offer spacious interiors, modern conveniences, and stunning architectural details that create an atmosphere of refined elegance.
                      </p>
                      <button className="text-black text-sm font-medium hover:opacity-70 transition-opacity group">
                        <span className="relative inline-block">
                          SCHEDULE A VISIT →
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                    </div>
                    
                    {/* Right Side - Amenities */}
                    <div>
                      <AmenityCards />
                    </div>
                  </div>
                  
                  {/* Inside The Villa Component */}
                  <div>
                    <h4 className="font-gc-palioka text-[34px] text-black mb-4">Inside The Villa</h4>
                    <InsideVilla showTitle={false} showPadding={false} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Explore More Villas Component - Displayed below dropdown */}
        {expandedVilla === 'crest' && <ExploreMoreVillas currentVilla="crest" />}
        
        {!expandedVilla && <hr className="border-gray-300 mb-10 sm:mb-12 mt-8 sm:mt-10 md:mt-12" />}

        {/* Third Villa - The Agasti Horizon */}
        {!expandedVilla && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-0">
              <h2 className="font-gc-palioka text-[44px] sm:text-4xl md:text-[44px] lg:text-[44px] text-black mb-2 leading-tight transition-all duration-700 ease-out">
                The Agasti Horizon
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
                <p className="text-gray-600 text-sm sm:text-[20px] transition-all duration-700 ease-out">
                  North facing villa
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => toggleVillaDetails('horizon')}
              className="bg-[#8D957E] text-white text-[12px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded-[4px]" 
              style={{ width: '197px', height: '50px' }}
            >
              EXPLORE VILLA
              <div className="relative w-4 h-4 ml-2">
                <Image
                  src="/projects-imgs/arrowicon.png"
                  alt="Arrow"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        )}

        {/* Third Villa Parallax Image */}
        {!expandedVilla && (
          <div ref={secondImageRef} className="relative overflow-hidden mb-8 sm:mb-12 rounded-lg" style={{ width: '1344px', height: '444px', maxWidth: '100%' }}>
            <div
              style={{
                transform: `translateY(${Math.min(0, offsetY2 * 3)}px)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-full h-[120%] -translate-y-[10%]"
            >
              <Image
                src="/projects-imgs/agastihorizon.jpg"
                alt="The Agasti Horizon Villa"
                fill
                sizes="1344px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        )}

        {/* Third Villa Property Details */}
        {!expandedVilla && (
          <div className="flex justify-center px-[48px]">
            <div className="flex items-center gap-8 max-w-7xl">
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property size:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">915 sq yds</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Year of build:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">2024</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property status:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">Ongoing</span>
              </div>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <div className="flex items-center justify-center">
                <span className="text-black-500 text-[18px] font-bold mr-2">Property type:</span>
                <span className="font-medium text-[#8D957E] text-base sm:text-lg">Villa</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Dropdown for Agasti Horizon */}
        {expandedVilla === 'horizon' && (
          <>
            {/* Horizon Villa Image when expanded */}
            <div ref={secondImageRef} className="relative overflow-hidden mb-8 sm:mb-12 rounded-lg" style={{ width: '1344px', height: '444px', maxWidth: '100%' }}>
              <div
                style={{
                  transform: `translateY(${Math.min(0, offsetY2 * 3)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative w-full h-[120%] -translate-y-[10%]"
              >
                <Image
                  src="/projects-imgs/agastihorizon.jpg"
                  alt="The Agasti Horizon Villa"
                  fill
                  sizes="1344px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Horizon Property Details when expanded */}
            <div className="flex justify-center px-[48px] mb-8">
              <div className="flex items-center gap-8 max-w-7xl">
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property size:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">915 sq yds</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Year of build:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">2024</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property status:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">Ongoing</span>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div className="flex items-center justify-center">
                  <span className="text-black-500 text-[18px] font-bold mr-2">Property type:</span>
                  <span className="font-medium text-[#8D957E] text-base sm:text-lg">Villa</span>
                </div>
              </div>
            </div>

            <div className="bg-white-50 p-8 rounded-lg mb-8 mt-8 transition-all duration-300 ease-in-out">
              <div className="flex justify-start px-[48px] ml-8">
                <div className="w-full max-w-[1400px]">
                  {/* Top Section - Property Description and Amenities */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-8">
                    {/* Left Side - Property Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Property description</h3>
                      <p className="text-gray-600 text-base leading-[1.3] mb-6">
                        The Agasti Horizon offers expansive living spaces with panoramic views and contemporary design elements. These villas are designed to maximize natural light and ventilation while providing the ultimate in comfort and luxury for modern families.
                      </p>
                      <button className="text-black text-sm font-medium hover:opacity-70 transition-opacity group">
                        <span className="relative inline-block">
                          SCHEDULE A VISIT →
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                    </div>
                    
                    {/* Right Side - Amenities */}
                    <div>
                      <AmenityCards />
                    </div>
                  </div>
                  
                  {/* Inside The Villa Component */}
                  <div>
                    <h4 className="font-gc-palioka text-[34px] text-black mb-4">Inside The Villa</h4>
                    <InsideVilla showTitle={false} showPadding={false} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Explore More Villas Component - Displayed below dropdown */}
        {expandedVilla === 'horizon' && <ExploreMoreVillas currentVilla="horizon" />}
        
        {!expandedVilla && <hr className="border-gray-300 mb-10 sm:mb-12 mt-8 sm:mt-10 md:mt-12" />}

      </ContainerLayout>
    </section>
  );
}
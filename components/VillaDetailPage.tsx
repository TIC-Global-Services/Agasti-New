"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "@/layout/ContainerLayout";
import { useLetterReveal } from "@/hooks/useLetterReveal";
import HorizonInsideVilla from "./Project/Horizon/HorizonInsideVilla";
import ZenithInsideVilla from "./Project/Zenith/ZenithInsideVilla";
import CrestInsideVilla from "./Project/Crest/CrestInsideVilla";
import ExploreMoreVillas from "./ExploreMoreVillas";

// Amenity Cards Component
const AmenityCards = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Intersection Observer for video playback
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video, index) => {
      if (video) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              video.play().catch(console.error);
              observer.unobserve(video); // Play only once
            }
          },
          { threshold: 0.5 },
        );
        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const setVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
      <div
        className="text-center p-8 lg:p-10"
        style={{ backgroundColor: "#F0EDE4" }}
      >
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
          <video
            ref={setVideoRef(0)}
            width={180}
            height={180}
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.7) contrast(1.3) saturate(1.2)" }}
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              const parent = target.parentElement;
              if (parent) {
                const img = document.createElement("img");
                img.src = "/clubhouse.png";
                img.alt = "Clubhouse";
                img.className = "w-full h-full object-contain";
                parent.innerHTML = "";
                parent.appendChild(img);
              }
            }}
          >
            <source src="/icons webm 3/clubhouse.webm" type="video/webm" />
          </video>
        </div>
        <p className="text-lg font-medium text-gray-700">Clubhouse</p>
      </div>

      <div
        className="text-center p-8 lg:p-10"
        style={{ backgroundColor: "#F0EDE4" }}
      >
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
          <video
            ref={setVideoRef(1)}
            width={180}
            height={180}
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.7) contrast(1.3) saturate(1.2)" }}
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              const parent = target.parentElement;
              if (parent) {
                const img = document.createElement("img");
                img.src = "/projects-imgs/badminton.png";
                img.alt = "Badminton Court";
                img.className = "w-full h-full object-contain";
                parent.innerHTML = "";
                parent.appendChild(img);
              }
            }}
          >
            <source src="/icons webm 3/badminton.webm" type="video/webm" />
          </video>
        </div>
        <p className="text-lg font-medium text-gray-700">Badminton Court</p>
      </div>

      <div
        className="text-center p-8 lg:p-10"
        style={{ backgroundColor: "#F0EDE4" }}
      >
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
          <video
            ref={setVideoRef(2)}
            width={180}
            height={180}
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.7) contrast(1.3) saturate(1.2)" }}
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              const parent = target.parentElement;
              if (parent) {
                const img = document.createElement("img");
                img.src = "/projects-imgs/basketball.png";
                img.alt = "Mini Basketball Court";
                img.className = "w-full h-full object-contain";
                parent.innerHTML = "";
                parent.appendChild(img);
              }
            }}
          >
            <source src="/icons webm 3/basketball.webm" type="video/webm" />
          </video>
        </div>
        <p className="text-lg font-medium text-gray-700">
          Mini Basketball Court
        </p>
      </div>

      <div
        className="text-center p-8 lg:p-10"
        style={{ backgroundColor: "#F0EDE4" }}
      >
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
          <video
            ref={setVideoRef(3)}
            width={250}
            height={180}
            muted
            playsInline
            className="object-contain w-full h-full"
            style={{ filter: "brightness(0.7) contrast(1.3) saturate(1.2)" }}
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              const parent = target.parentElement;
              if (parent) {
                const img = document.createElement("img");
                img.src = "/projects-imgs/playarea.png";
                img.alt = "Kids Play Area";
                img.className = "w-full h-full object-contain";
                parent.innerHTML = "";
                parent.appendChild(img);
              }
            }}
          >
            <source src="/icons webm 3/playground.webm" type="video/webm" />
          </video>
        </div>
        <p className="text-lg font-medium text-gray-700">Kids Play Area</p>
      </div>
    </div>
  );
};

interface VillaDetailPageProps {
  villaType: "zenith" | "crest" | "horizon";
}

export default function VillaDetailPage({ villaType }: VillaDetailPageProps) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Letter reveal effects for headings
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);
  const { elementRef: subtitleRef } =
    useLetterReveal<HTMLParagraphElement>(0.1);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          -rect.top / (rect.height + window.innerHeight),
        );
        setOffsetY((scrollProgress - 0.3) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Villa data configuration
  const getVillaData = () => {
    switch (villaType) {
      case "zenith":
        return {
          title: "The Agasti West",
          subtitle: "West facing villa",
          image: "/mainvilla.jpg",
          propertySize: "653 sq yds",
          description:
            "The Agasti Zenith is a thoughtfully crafted villa community that blends refined architecture with modern comfort. Designed for elevated living, each villa showcases seamless planning, natural ventilation, and premium detailing. With serene surroundings, curated amenities, and a focus on privacy, The Agasti Zenith offers a lifestyle where elegance and functionality come together effortlessly.",
        };
      case "crest":
        return {
          title: "The Agasti East",
          subtitle: "East facing villa",
          image: "/projects-imgs/AgastiCrest.jpg",
          propertySize: "915 sq yds",
          description:
            "The Agasti Crest represents the pinnacle of luxury living with its sophisticated design and premium amenities. Each villa is meticulously planned to offer spacious interiors, modern conveniences, and stunning architectural details that create an atmosphere of refined elegance.",
        };
      case "horizon":
        return {
          title: "The Agasti North",
          subtitle: "North facing villa",
          image: "/projects-imgs/agastihorizon.jpg",
          propertySize: "915 sq yds",
          description:
            "The Agasti Horizon offers expansive living spaces with panoramic views and contemporary design elements. These villas are designed to maximize natural light and ventilation while providing the ultimate in comfort and luxury for modern families.",
        };
      default:
        return {
          title: "The Agasti Villa",
          subtitle: "Premium villa",
          image: "/mainvilla.jpg",
          propertySize: "653 sq yds",
          description:
            "A premium villa offering luxury living with modern amenities.",
        };
    }
  };

  const villaData = getVillaData();

  return (
    <section ref={sectionRef} className="relative bg-white">
      <ContainerLayout paddingX="px-6 xl:px-[48px] lg:px-[48px]">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
              <div className="mb-4 w-full">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-gc-palioka text-[20px] sm:text-[28px] md:text-[32px] text-black leading-tight">
                    {villaData.title}
                  </h2>
                </div>
                <div className="flex items-center mb-4">
                  <div
                    className="relative mr-2"
                    style={{ width: "20px", height: "20px" }}
                  >
                    <Image
                      src="/projects-imgs/locationicon.png"
                      alt="Location"
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-500 text-[12px] sm:text-[16px]">
                    {villaData.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Villa Image */}
            <div className="relative overflow-hidden mb-6 h-[400px] md:h-[500px]">
              <Image
                src={villaData.image}
                alt={villaData.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <span className="text-black font-gc-palioka text-[14px] font-bold">
                  Property size:{" "}
                </span>
                <span className="text-[#8D957E] text-[14px] font-bold">
                  {villaData.propertySize}
                </span>
              </div>
              <div>
                <span className="text-black font-gc-palioka text-[14px] font-bold">
                  Property type:{" "}
                </span>
                <span className="text-[#8D957E] text-[14px] font-bold">
                  Villa
                </span>
              </div>
              <div>
                <span className="text-black font-gc-palioka text-[14px] font-bold">
                  Year of build:{" "}
                </span>
                <span className="text-[#8D957E] text-[14px] font-bold">
                  2024
                </span>
              </div>
              <div>
                <span className="text-black font-gc-palioka text-[14px] font-bold">
                  Property status:{" "}
                </span>
                <span className="text-[#8D957E] text-[14px] font-bold">
                  Ongoing
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-300 mt-2 mb-4"></div>

            <div className="bg-white rounded-lg mb-8">
              <div className="mt-8">
                <h4 className="font-gc-palioka text-[16px] sm:text-[24px] text-black mb-8 sm:mb-4">
                  Inside The Villa
                </h4>

                {villaType === "zenith" && (
                  <ZenithInsideVilla showTitle={false} showPadding={false} />
                )}
                {villaType === "horizon" && (
                  <HorizonInsideVilla showTitle={false} showPadding={false} />
                )}
                {villaType === "crest" && (
                  <CrestInsideVilla showTitle={false} showPadding={false} />
                )}
              </div>
            </div>

            <ExploreMoreVillas currentVilla={villaType} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
            <div className="mb-4 sm:mb-0">
              <h2
                ref={titleRef}
                className="font-gc-palioka text-[20px] sm:text-4xl md:text-[44px] lg:text-[44px] text-black mb-2 leading-tight"
              >
                {villaData.title}
              </h2>
              <div className="flex items-center">
                <div
                  className="relative mr-2"
                  style={{ width: "23.5px", height: "24px" }}
                >
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
                  className="text-gray-600 text-sm sm:text-[20px]"
                >
                  {villaData.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Parallax Image */}
          <div className="overflow-hidden mb-4 sm:mb-6 w-full h-64 sm:h-80 lg:h-96 xl:h-112">
            <div
              style={{
                transform: `translateY(${Math.min(0, offsetY * 2)}px) scale(1.1)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-full h-[130%] -translate-y-[15%]"
            >
              <Image
                src={villaData.image}
                alt={villaData.title}
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Property Details */}
          <div className="flex justify-center px-4 sm:px-6 lg:px-12 xl:px-12 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 xl:gap-10 w-full max-w-6xl">
              <div className="flex items-center justify-center min-w-0">
                <span className="text-black-500 font-gc-palioka-demo text-base lg:text-lg font-bold mr-2 whitespace-nowrap">
                  Property size:
                </span>
                <span className="text-[#8D957E] text-base font-bold lg:text-lg">
                  {villaData.propertySize}
                </span>
              </div>

              <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center justify-center min-w-0">
                <span className="text-black-500 text-base lg:text-lg font-bold mr-2 whitespace-nowrap">
                  Year of build:
                </span>
                <span className="text-[#8D957E] text-base font-bold lg:text-lg">
                  2024
                </span>
              </div>

              <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center justify-center min-w-0">
                <span className="text-black-500 text-base lg:text-lg font-bold mr-2 whitespace-nowrap">
                  Property status:
                </span>
                <span className="text-[#8D957E] text-base lg:text-lg font-bold">
                  Ongoing
                </span>
              </div>

              <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center justify-center min-w-0">
                <span className="text-black-500 text-base lg:text-lg font-bold mr-2 whitespace-nowrap">
                  Property type:
                </span>
                <span className="text-[#8D957E] text-base lg:text-lg font-bold">
                  Villa
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white-50 rounded-lg mb-8 mt-8 transition-all duration-300 ease-in-out">
            <div className="flex justify-start">
              <div className="w-full">
                {/* Grey line above the section */}
                <div className="w-full h-px bg-gray-300 mb-12"></div>

                {/* Top Section - Property Description and Amenities */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 mb-8">
                 
                  <div className="w-full">
                    <h3 className="text-[34px] font-bold text-black mb-4">Property description</h3>
                    <p className="text-gray-600 text-base leading-[1.3] mb-6">
                      {villaData.description}
                    </p>
                    <Link href="/contact">
                      <button className="text-black text-sm font-medium hover:opacity-70 transition-opacity group">
                        <span className="relative inline-block font-bold">
                          SCHEDULE A VISIT →
                          <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                    </Link>
                  </div>
                  
                  <div className="w-full flex justify-end">
                    <AmenityCards />
                  </div>
                </div> */}

                {/* Inside The Villa Component */}
                <div>
                  <h4 className="font-gc-palioka text-[34px] text-black mb-8 sm:mb-4">
                    Inside The Villa
                  </h4>

                  {villaType === "zenith" && (
                    <ZenithInsideVilla showTitle={false} showPadding={false} />
                  )}
                  {villaType === "horizon" && (
                    <HorizonInsideVilla showTitle={false} showPadding={false} />
                  )}
                  {villaType === "crest" && (
                    <CrestInsideVilla showTitle={false} showPadding={false} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <ExploreMoreVillas currentVilla={villaType} />
        </div>
      </ContainerLayout>
    </section>
  );
}

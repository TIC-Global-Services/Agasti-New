"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "@/layout/ContainerLayout";
import MenuOverlay from "./MenuOverlay";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function AboutStory() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { elementRef: storyRef } = useLetterReveal<HTMLParagraphElement>(0.1);
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  /* ----------------------------
     Desktop hover video control
  -----------------------------*/
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.75; // speed
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // pause only
    }
  };

  /* ----------------------------
     Scroll Parallax
  -----------------------------*/

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const targetRef =
        window.innerWidth >= 1024
          ? imageContainerRef.current
          : imageRef.current;

      if (targetRef) {
        const rect = targetRef.getBoundingClientRect();
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

  return (
    <>
      <section className="relative min-h-screen bg-white">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 py-6 sm:py-8 xl:px-[48px] lg:px-[48px]">
          <div className="flex items-center justify-between">
            <div className="w-6 sm:w-8" />

            <div className="flex-1 flex justify-center">
              <Link
                href="/"
                className="relative h-[36px] sm:h-[44px] w-auto aspect-[4/1] hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/Agasti_Logo.png"
                  alt="Agasti Logo"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain"
                />
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="hover:opacity-80 transition-opacity flex flex-col gap-2"
            >
              <span className="w-6 sm:w-8 h-[2px] bg-black rounded-full" />
              <span className="w-6 sm:w-8 h-[2px] bg-black rounded-full" />
            </button>
          </div>
        </div>

        <div className="pt-20 sm:pt-24 md:pt-28 px-6 xl:px-[48px] lg:px-[48px]">
          {/* ----------------------------
              MOBILE
          ----------------------------- */}

          <div className="block lg:hidden">
            <div
              ref={imageRef}
              className="overflow-hidden h-[80dvh] w-full mb-6"
            >
              <div
                style={{
                  transform: `translateY(${Math.min(0, offsetY * 2)}px) scale(1.1)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative w-full h-[130%] -translate-y-[15%]"
              >
                <video
                  ref={videoRef}
                  src="https://ik.imagekit.io/99y1fc9mh/Agasti/Room.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Mobile Content */}

            <div className="mb-[10px]">
              <p
                ref={storyRef}
                className="text-[#8D957E] font-gc-palioka text-[16px] mb-2 font-normal"
              >
                Our story
              </p>

              <h1
                ref={titleRef}
                className="font-gc-palioka text-[20px] sm:text-[28px] md:text-[32px] text-black leading-[1.1] tracking-[-0.03em] mb-4"
              >
                Crafting Luxury Villas
                <br />
                Since <span className="font-bold">2018</span>
              </h1>

              <p className="text-[#717580] text-[14px] leading-tight mb-[40px]">
                From lush landscapes to world-class amenities, each home
                reflects precision, elegance, and timeless craftsmanship.
              </p>
            </div>
          </div>

          {/* ----------------------------
              DESKTOP
          ----------------------------- */}

          <div className="hidden lg:block">
            <div className="mb-0">
              <div className="overflow-hidden h-[70dvh] w-full">
                <div
                  ref={imageContainerRef}
                  onMouseEnter={playVideo}
                  onMouseLeave={pauseVideo}
                  style={{
                    transform: `translateY(${Math.min(0, offsetY * 2)}px) scale(1.1)`,
                    transition: "transform 0.1s ease-out",
                  }}
                  className="relative w-full h-[130%] -translate-y-[15%]"
                >
                  <video
                    ref={videoRef}
                    src="https://ik.imagekit.io/99y1fc9mh/Agasti/Room.mp4"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Content Grid */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start pt-6 pb-12 sm:pb-16 md:pb-20">
              <div>
                <p
                  ref={storyRef}
                  className="text-[#8D957E] font-gc-palioka text-[22px] font-bold"
                >
                  Our story
                </p>

                <h1
                  ref={titleRef}
                  className="font-gc-palioka text-[54px] text-black leading-[1.1] tracking-[-0.03em]"
                >
                  Crafting Luxury Villas
                  <br />
                  Since <span className="font-bold">2018</span>
                </h1>
              </div>

              <div className="lg:pt-10 lg:pl-4">
                <div className="bg-white p-7 md:p-0 relative">
                  <div className="relative">
                    <p className="text-[#717580] text-[16px] leading-tight text-right pr-8">
                      From lush landscapes to world-class amenities, each <br />
                      home reflects precision, elegance, and timeless
                      <br /> craftsmanship.
                    </p>

                    <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

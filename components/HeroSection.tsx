"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef({ frame: 1 });

  // Total number of frames
  const totalFrames = 80;

  useEffect(() => {
    if (!sectionRef.current || !canvasRef.current) return;

    // Immediately hide scrollbars when component mounts
    const hideScrollbarsStyle = document.createElement('style');
    hideScrollbarsStyle.id = 'hero-hide-scrollbars';
    hideScrollbarsStyle.textContent = `
      html {
        overflow: hidden !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      body {
        overflow: hidden !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      html::-webkit-scrollbar,
      body::-webkit-scrollbar,
      *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      * {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
    `;
    document.head.appendChild(hideScrollbarsStyle);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Preload all images
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    const loadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = document.createElement('img') as HTMLImageElement;
        const paddedNum = i.toString().padStart(4, '0');
        img.src = `/Agasti Frames/${paddedNum}.png`;
        
        img.onload = () => {
          loadedImages++;
          if (loadedImages === totalFrames) {
            // All images loaded, start animation
            startScrollAnimation();
          }
        };
        
        img.onerror = () => {
          console.error(`Failed to load frame ${i}`);
          loadedImages++;
          if (loadedImages === totalFrames) {
            startScrollAnimation();
          }
        };
        
        images.push(img);
      }
      imagesRef.current = images;
    };

    const drawFrame = (frameNumber: number) => {
      const img = images[frameNumber - 1];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate aspect ratio to cover the canvas
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (canvasAspect > imgAspect) {
          // Canvas is wider than image
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          // Canvas is taller than image
          drawWidth = canvas.height * imgAspect;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const startScrollAnimation = () => {
      // Create a timeline for the frame sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalFrames * 100}`, // 100px per frame
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const frameNumber = Math.floor(progress * (totalFrames - 1)) + 1;
            const clampedFrame = Math.min(totalFrames, Math.max(1, frameNumber));
            
            if (frameIndexRef.current.frame !== clampedFrame) {
              frameIndexRef.current.frame = clampedFrame;
              setCurrentFrame(clampedFrame);
              drawFrame(clampedFrame);
            }
          },
          onComplete: () => {
            // Restore scrollbars when animation completes
            const hideScrollbarsStyle = document.getElementById('hero-hide-scrollbars');
            if (hideScrollbarsStyle) {
              hideScrollbarsStyle.remove();
            }
          }
        }
      });

      // Animate the frame index
      tl.to(frameIndexRef.current, {
        frame: totalFrames,
        duration: 1,
        ease: "none"
      });

      // Draw initial frame
      drawFrame(1);
    };

    loadImages();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Restore scrollbars on cleanup
      const hideScrollbarsStyle = document.getElementById('hero-hide-scrollbars');
      if (hideScrollbarsStyle) {
        hideScrollbarsStyle.remove();
      }
    };
  }, [totalFrames]);

  // Format frame number with leading zeros
  const getFramePath = (frameNum: number) => {
    const paddedNum = frameNum.toString().padStart(4, '0');
    return `/Agasti Frames/${paddedNum}.png`;
  };

  return (
    <>
      <section ref={sectionRef} className="relative h-screen w-full min-h-[600px]">
        {/* Canvas for frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Header with Text and Menu */}
          <div className="relative px-6 sm:px-[48px] py-6 sm:py-8">
            <div className="flex items-center justify-between">
              {/* Spacer for left side */}
              <div className="w-6 sm:w-8" />
              
              {/* Centered AGASTI Logo */}
              <div className="flex-1 flex justify-center">
                <Link href="/" className="relative h-[36px] sm:h-[44px] w-auto aspect-[4/1] hover:opacity-80 transition-opacity">
                  <Image
                    src="/Agasti_Logo.png"
                    alt="Agasti Logo"
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-contain"
                  />
                </Link>
              </div>
              
              {/* Hamburger Menu - Top Right */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="hover:opacity-80 transition-opacity flex flex-col gap-2"
                aria-label="Open menu"
              >
                <span className="w-6 sm:w-8 h-[2px] bg-black rounded-full" />
                <span className="w-6 sm:w-8 h-[2px] bg-black rounded-full" />
              </button>
            </div>
          </div>

          {/* Keep scrolling indicator */}
          {currentFrame < totalFrames && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-white text-sm font-medium">Keep Scrolling</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

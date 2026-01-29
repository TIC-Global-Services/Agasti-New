"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";
import Loader from "./Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 80;

  const handleLoadingComplete = () => {
    setShowLoader(false);
    // Start preloading images for the animation after loader is hidden
    loadImages();
  };

  // Preload all images
  const loadImages = async () => {
    const imagePromises: Promise<HTMLImageElement>[] = [];
    
    for (let i = 1; i <= totalFrames; i++) {
      const promise = new Promise<HTMLImageElement>((resolve) => {
        const img = document.createElement('img');
        const paddedNum = i.toString().padStart(4, '0');
        img.src = `/Agasti Frames/${paddedNum}.webp`;
        img.onload = () => resolve(img);
        img.onerror = () => {
          console.warn(`Failed to load frame ${paddedNum}`);
          // Create a fallback transparent image
          const canvas = document.createElement('canvas');
          canvas.width = 1920;
          canvas.height = 1080;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = 'transparent';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          const fallbackImg = document.createElement('img');
          fallbackImg.src = canvas.toDataURL();
          fallbackImg.onload = () => resolve(fallbackImg);
        };
      });
      imagePromises.push(promise);
    }

    try {
      const loadedImages = await Promise.all(imagePromises);
      imagesRef.current = loadedImages;
      setImagesLoaded(true);
      console.log('All frames loaded successfully');
    } catch (error) {
      console.error('Error loading images:', error);
      setImagesLoaded(true); // Still proceed with available images
    }
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const initializeAnimation = () => {
      if (!sectionRef.current || !canvasRef.current) return;

      // Kill existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Draw initial frame
      drawFrame(1);

      // Create scroll-triggered frame animation
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalFrames * 50}`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const frameNumber = Math.floor(progress * (totalFrames - 1)) + 1;
            const clampedFrame = Math.min(totalFrames, Math.max(1, frameNumber));
            setCurrentFrame(clampedFrame);
            drawFrame(clampedFrame);
          }
        }
      });
    };

    const timer = setTimeout(() => {
      initializeAnimation();
    }, 100);

    return () => clearTimeout(timer);
  }, [imagesLoaded]);

  const drawFrame = (frameNum: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !imagesRef.current[frameNum - 1]) return;

    const img = imagesRef.current[frameNum - 1];
    
    // Set canvas size to match viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Calculate aspect ratio and positioning
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, drawX, drawY;
    
    if (imgAspect > canvasAspect) {
      // Image is wider than canvas
      drawHeight = canvas.height;
      drawWidth = drawHeight * imgAspect;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    } else {
      // Image is taller than canvas
      drawWidth = canvas.width;
      drawHeight = drawWidth / imgAspect;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    }
    
    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (imagesLoaded) {
        drawFrame(currentFrame);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrame, imagesLoaded]);

  return (
    <>
      {/* Loader Screen */}
      {showLoader && <Loader onLoadingComplete={handleLoadingComplete} />}
      
      <section ref={sectionRef} className="relative h-screen w-full min-h-[600px]">
        {/* Canvas for frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          // style={{ display: imagesLoaded ? 'block' : 'none' }}
        />

        {/* Loading state */}
        {/* {!imagesLoaded && !showLoader && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-gray-600">Loading...</div>
          </div>
        )} */}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Header with Text and Menu */}
          <div className="relative px-6 sm:px-[48px] py-6 sm:py-8">
            <div className="flex items-center justify-between">
              {/* Spacer for left side */}
              <div className="w-6 sm:w-8" />
              
              {/* Centered AGASTI Logo */}
              <div className="flex-1 flex justify-center">
                <Link href="/" className="relative h-[36px] sm:h-[44px] w-auto aspect-4/1 hover:opacity-80 transition-opacity">
                  <Image
                    src="/Agasti_Logo.png"
                    alt="Agasti Logo"
                    width={176}
                    height={44}
                    className="h-full w-auto object-contain"
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
          {imagesLoaded && currentFrame < totalFrames && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-transparent backdrop-transparent rounded-full px-6 py-3 flex items-center gap-3">
                {/* Pulsing Circle */}
                <div className="relative">
                  <div 
                    className="w-3 h-3 bg-white rounded-full"
                    style={{
                      animation: 'pulse-circle 2s ease-in-out infinite'
                    }}
                  />
                </div>
                <span className="text-white text-sm font-medium">Keep Scrolling</span>
              </div>
            </div>
          )}

          {/* CSS Animation for pulsing circle */}
          <style jsx>{`
            @keyframes pulse-circle {
              0%, 100% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(0.6);
                opacity: 0.7;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
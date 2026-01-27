"use client";
import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const totalFrames = 80;

  useEffect(() => {
    const loadFrames = async () => {
      let loadedCount = 0;

      const loadPromises = Array.from({ length: totalFrames }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const paddedNum = (i + 1).toString().padStart(4, '0');
          img.src = `/Agasti Frames/${paddedNum}.png`;
          
          const handleLoad = () => {
            loadedCount++;
            const currentProgress = Math.round((loadedCount / totalFrames) * 100);
            setProgress(currentProgress);
            resolve();
          };

          img.onload = handleLoad;
          img.onerror = handleLoad; // Count failed loads as completed to prevent hanging
        });
      });

      await Promise.all(loadPromises);
      
      // Small delay to show 100% before hiding
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Wait for fade out animation
      }, 300);
    };

    loadFrames();
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Logo */}
      <div className="mb-12">
        <div className="relative h-12 w-auto aspect-4/1">
          <img
            src="/Agasti_Logo.png"
            alt="Agasti Logo"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-80 max-w-[90vw]">
        {/* Progress Bar */}
        <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="absolute left-0 top-0 h-full bg-[#8D957E] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Loading frames...</span>
          <span className="font-mono font-medium">{progress}%</span>
        </div>
      </div>

      {/* Loading Animation Dots */}
      <div className="flex space-x-1 mt-8">
        <div className="w-2 h-2 bg-[#8D957E] rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-[#8D957E] rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-[#8D957E] rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}
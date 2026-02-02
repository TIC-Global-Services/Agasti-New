"use client";
import { useLetterReveal } from "@/hooks/useLetterReveal";

export default function AboutAgasti() {
  // Letter reveal effects for headings
  const { elementRef: titleRef } = useLetterReveal<HTMLHeadingElement>(0.1);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Right Side - Content (appears first on mobile) */}
        <div className="bg-white flex items-center justify-center px-6 sm:px-[48px] py-[40px] order-1 lg:order-2">
          <div className="max-w-xl">
            <p className="font-gc-palioka text-[#8D957E] text-lg sm:text-xl md:text-[25px] mb-4 tracking-wider font-bold">About AGASTI</p>
            
            <h2 
              ref={titleRef}
              className="font-gc-palioka text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight"
            >
              An Urban Sanctuary for the Elite
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-600 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base">
                Atara is more than a home — it&apos;s a living experience that celebrates 
                tranquility, space, and sophistication.
              <br></br>
                Every villa is enveloped in lush greenery, crafted with premium 
                finishes, and designed for modern, mindful living.
              </p>
            </div>

            <button className="text-black text-sm sm:text-base font-medium hover:opacity-70 transition-opacity group">
              <span className="relative inline-block">
                Know More
                <span className="absolute left-0 bottom-0 w-full lg:w-4 h-px bg-black transition-all duration-300 lg:group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Left Side - Video (appears second on mobile) */}
        <div className="relative h-[70vh] lg:h-auto order-2 lg:order-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              // Fallback to image if video fails to load
              const target = e.target as HTMLVideoElement;
              const parent = target.parentElement;
              if (parent) {
                const img = document.createElement('img');
                img.src = '/aboutus.png';
                img.alt = 'Agasti Interior';
                img.className = 'absolute inset-0 w-full h-full object-cover';
                parent.innerHTML = '';
                parent.appendChild(img);
              }
            }}
          >
            <source src="/livingroom_1.webm" type="video/webm" />
            {/* Fallback image for browsers that don't support video */}
            <img
              src="/aboutus.png"
              alt="Agasti Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        </div>
      </div>
    </section>
  );
}

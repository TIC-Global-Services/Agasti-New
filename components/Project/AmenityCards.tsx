"use client";
import { useEffect, useRef } from "react";

const AmenityCards = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video) => {
      if (video) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
              observer.unobserve(video);
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const setVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[index] = ref;
  };

  const amenities = [
    {
      title: "Clubhouse",
      video: "/icons webm 3/clubhouse.webm",
      fallback: "/clubhouse.png",
    },
    {
      title: "Badminton Court",
      video: "/icons webm 3/badminton.webm",
      fallback: "/projects-imgs/badminton.png",
    },
    {
      title: "Mini Basketball Court",
      video: "/icons webm 3/basketball.webm",
      fallback: "/projects-imgs/basketball.png",
    },
    {
      title: "Kids Play Area",
      video: "/icons webm 3/playground.webm",
      fallback: "/projects-imgs/playarea.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
      {amenities.map((item, index) => (
        <div
          key={index}
          className="text-center p-6 sm:p-8 lg:p-10 bg-[#F0EDE4] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
            <video
              ref={setVideoRef(index)}
              muted
              playsInline
              className="object-contain w-full h-full"
              style={{
                filter: "brightness(0.7) contrast(1.3) saturate(1.2)",
              }}
              onError={(e) => {
                const target = e.target as HTMLVideoElement;
                const parent = target.parentElement;
                if (parent) {
                  const img = document.createElement("img");
                  img.src = item.fallback;
                  img.alt = item.title;
                  img.className = "w-full h-full object-contain";
                  parent.innerHTML = "";
                  parent.appendChild(img);
                }
              }}
            >
              <source src={item.video} type="video/webm" />
            </video>
          </div>

          <p className="text-base sm:text-lg font-medium text-gray-700">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AmenityCards;
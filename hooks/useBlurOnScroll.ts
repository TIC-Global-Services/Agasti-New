import { useEffect, useRef, useState } from "react";

export const useBlurOnScroll = <T extends HTMLElement = HTMLElement>(threshold: number = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // Detect mobile or tablet device (up to 1024px)
    const checkMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    
    checkMobileOrTablet();
    window.addEventListener('resize', checkMobileOrTablet);
    
    return () => window.removeEventListener('resize', checkMobileOrTablet);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "50px 0px 50px 0px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  // No blur effect on mobile and tablet, blur effect on desktop only
  const blurClass = isMobileOrTablet 
    ? '' // No animation classes on mobile and tablet
    : (isVisible 
        ? 'filter-none opacity-100' 
        : 'filter blur-sm opacity-70');

  return { elementRef, blurClass, isVisible };
};
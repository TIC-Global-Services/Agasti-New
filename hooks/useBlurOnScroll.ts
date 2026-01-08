import { useEffect, useRef, useState } from "react";

export const useBlurOnScroll = <T extends HTMLElement = HTMLElement>(threshold: number = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px 0px 0px"
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

  const blurClass = isVisible 
    ? 'filter-none opacity-100' 
    : 'filter blur-sm opacity-70';

  return { elementRef, blurClass, isVisible };
};
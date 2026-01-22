"use client";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
  threshold?: number;
}

export default function BlurText({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
  threshold = 0.1,
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Split text based on animateBy prop
  const items = animateBy === "words" ? text.split(" ") : text.split("");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect immediately after first trigger
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, threshold]);

  useEffect(() => {
    if (!isVisible) return;

    // Initialize all items as not animated
    setAnimatedItems(new Array(items.length).fill(false));

    // Animate items with delay
    items.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          
          // Check if this is the last item
          if (index === items.length - 1) {
            setTimeout(() => {
              setAnimationComplete(true);
              if (onAnimationComplete) {
                onAnimationComplete();
              }
            }, 700); // Wait for transition to complete
          }
          
          return newState;
        });
      }, index * delay);
    });
  }, [isVisible, delay, items.length, onAnimationComplete]);

  const getTransformStyle = (isAnimated: boolean) => {
    if (isAnimated || animationComplete) return "translateY(0px)";
    
    switch (direction) {
      case "top":
        return "translateY(-20px)";
      case "bottom":
        return "translateY(20px)";
      case "left":
        return "translateX(-20px)";
      case "right":
        return "translateX(20px)";
      default:
        return "translateY(-20px)";
    }
  };

  return (
    <div ref={elementRef} className={className}>
      {items.map((item, index) => (
        <span
          key={index}
          className={animationComplete ? "inline-block" : "inline-block transition-all duration-700 ease-out"}
          style={{
            filter: (animatedItems[index] || animationComplete) ? "blur(0px)" : "blur(8px)",
            opacity: (animatedItems[index] || animationComplete) ? 1 : 0.3,
            transform: getTransformStyle(animatedItems[index]),
          }}
        >
          {item}
          {animateBy === "words" && index < items.length - 1 && (
            <span className="inline-block w-[0.25em]">&nbsp;</span>
          )}
        </span>
      ))}
    </div>
  );
}
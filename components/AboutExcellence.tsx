"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";
import BlurText from "./BlurText";

export default function AboutExcellence() {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const [animatedNumbers, setAnimatedNumbers] = useState({
    acres: 0,
    villas: 0,
    squareft: 0,
  });

  const visionRef = useRef<HTMLDivElement>(null);
  const mobileStatsRef = useRef<HTMLDivElement>(null);
  const desktopStatsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      key: "acres",
      suffix: "+ Acres",
      title: "Premium Gated Community",
      desc: "delivering premium Villas since 2018",
    },
    {
      key: "villas",
      suffix: "",
      title: "Luxurious Independent Homes",
      desc: "rafted with architectural elegance and privacy",
    },
    {
      key: "squareft",
      suffix: "k+ Sqft",
      title: "Luxury Clubhouse",
      desc: "designed for leisure, wellness, and community living",
    },
  ];

  /* ---------------- STATS ANIMATION ---------------- */

  useEffect(() => {
    if (!isStatsVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;

    const timer = setInterval(() => {
      step++;

      const progress = step / steps;

      setAnimatedNumbers({
        acres: Math.floor(4 * progress),
        villas: Math.floor(18 * progress),
        squareft: Math.floor(22.5 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);

        setAnimatedNumbers({
          acres: 4,
          villas: 18,
          squareft: 22.5,
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isStatsVisible]);

  /* ---------------- INTERSECTION OBSERVER ---------------- */

  useEffect(() => {
    const visionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisionVisible(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true);
            statsObserver.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (visionRef.current) visionObserver.observe(visionRef.current);

    if (mobileStatsRef.current) statsObserver.observe(mobileStatsRef.current);
    if (desktopStatsRef.current) statsObserver.observe(desktopStatsRef.current);

    return () => {
      visionObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-white overflow-x-hidden">

      {/* ================= STATS SECTION ================= */}

      <div className="relative">
        <Image
          src="/about-us/aboutstats.png"
          alt="About Statistics Background"
          fill
          className="object-cover"
        />

        <ContainerLayout
          className="relative z-10 py-[50px] sm:py-[110px] md:py-[126px]"
          disablePaddingX
        >

          {/* MOBILE */}

          <div className="block lg:hidden px-6">
            <div className="mb-8">
              <BlurText
                text="Built on Excellence"
                delay={60}
                animateBy="words"
                direction="top"
                className="text-white font-gc-palioka text-[20px] sm:text-[24px] md:text-[28px]"
              />

              <BlurText
                text="Where every property reflects uncompromised quality"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-[#262B35] text-[20px] sm:text-[28px] md:text-[32px] leading-tight mb-4"
              />

              <p className="text-[#3C3C3C]/80 text-[14px] leading-tight">
                Building exclusive communities for individuals who seek refined
                elegance, elevated comfort, and a truly distinguished way of
                living.
              </p>
            </div>

            <div
              ref={mobileStatsRef}
              className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card-mobile p-6 mx-auto max-w-sm md:max-w-none"
                >
                  <div className="text-center">
                    <div className="mb-3">
                      <div className="text-black text-3xl font-bold leading-none mb-1">
                        {
                          animatedNumbers[
                            stat.key as keyof typeof animatedNumbers
                          ]
                        }
                        {stat.suffix}
                      </div>

                      <div className="text-black text-[16px] font-bold">
                        {stat.title}
                      </div>
                    </div>

                    <p className="text-black text-[12px] leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP */}

          <div className="hidden lg:block">
            <div className="px-[48px]">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                <div className="shrink-0 lg:w-[435px] flex flex-col gap-[10px]">
                  <BlurText
                    text="Built on Excellence"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    className="text-white font-gc-palioka-demo text-[20px]"
                  />

                  <BlurText
                    text="Where every property reflects uncompromised quality"
                    delay={60}
                    animateBy="words"
                    direction="top"
                    className="font-gc-palioka text-[#262B35] text-[32px] leading-tight"
                  />

                  <p className="text-[#3C3C3C]/80 text-[16px] font-plus-jakarta-sans">
                    Building exclusive communities for individuals who seek
                    refined elegance, elevated comfort, and a truly
                    distinguished way of living.
                  </p>
                </div>

                <div
                  ref={desktopStatsRef}
                  className="flex-1 grid xl:grid-cols-3 gap-4"
                >
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="glass-card flex flex-col p-6 w-full h-[289px]"
                    >
                      <div className="mb-4">
                        <div className="text-black text-4xl font-bold leading-none mb-1">
                          {
                            animatedNumbers[
                              stat.key as keyof typeof animatedNumbers
                            ]
                          }
                          {stat.suffix}
                        </div>

                        <div className="text-black text-[18px] font-bold font-gc-palioka-demo">
                          {stat.title}
                        </div>
                      </div>

                      <p className="text-black text-[14px] font-plus-jakarta-sans mt-auto">
                        {stat.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </ContainerLayout>
      </div>

      {/* ================= VISION SECTION ================= */}

      <div className="relative" ref={visionRef}>
        <Image
          src="/about-us/aboutimg1.png"
          alt="Modern Architecture"
          fill
          className="object-cover"
        />

        {/* Mobile + Desktop sections remain same */}
      </div>

    </section>
  );
}
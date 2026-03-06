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
  const statsRef = useRef<HTMLDivElement>(null);

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
        squareft: Math.floor(225 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);

        setAnimatedNumbers({
          acres: 4,
          villas: 18,
          squareft: 225,
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isStatsVisible]);

  /* ---------------- INTERSECTION OBSERVER ---------------- */

  useEffect(() => {
    const visionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisionVisible(true);
      },
      { threshold: 0.3 },
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsStatsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (visionRef.current) visionObserver.observe(visionRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      if (visionRef.current) visionObserver.unobserve(visionRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
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
              ref={statsRef}
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
                  ref={statsRef}
                  className="flex-1 grid xl:grid-cols-3 gap-4"
                >
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="glass-card flex flex-col p-6 w-full h-[289px]"
                    >
                      <div className="mb-4">
                        <div className="text-black text-5xl font-bold leading-none mb-1">
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

      {/* ================= VISION SECTION ================= */}

      <div className="relative" ref={visionRef}>
        <Image
          src="/about-us/aboutimg1.png"
          alt="Modern Architecture"
          fill
          className="object-cover"
        />

        {/* MOBILE */}

        <div className="block lg:hidden">
          <ContainerLayout className="relative z-10 py-16 min-h-[600px] px-6">
            <div className="absolute bottom-8 left-6 right-6">
              <div
                className={`glass-card-vision p-6 transition-all duration-1000 ${
                  isVisionVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <BlurText
                  text="Our Vision"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="font-gc-palioka text-2xl text-black"
                />

                <BlurText
                  text="for Elevated Living"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="font-gc-palioka text-2xl text-black mb-4"
                />

                <p className="text-black text-[14px] font-medium leading-tight">
                  At Agasti, our vision is to redefine luxury living by creating
                  communities that harmonize architecture, nature, and human
                  experience. We aim to build spaces that feel timeless.
                </p>
              </div>
            </div>
          </ContainerLayout>
        </div>

        {/* DESKTOP */}

        <div className="hidden lg:block">
          <ContainerLayout className="relative z-10 py-24 h-[600px]">
            <div className="absolute bottom-8 right-8 max-w-xl">
              <div
                className={`glass-card-vision p-8 transition-all duration-1000 ${
                  isVisionVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <BlurText
                  text="Our Vision"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="font-gc-palioka text-3xl text-black"
                />

                <BlurText
                  text="for Elevated Living"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="font-gc-palioka text-3xl text-black mb-6"
                />

                <p className="text-black text-[14px] font-medium leading-tight">
                  At Agasti, our vision is to redefine luxury living by creating
                  communities that harmonize architecture, nature, and human
                  experience. We aim to build spaces that feel timeless.
                </p>
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* ================= CRAFTSMANSHIP ================= */}

        <div className="relative">
          <Image
            src="/about-us/aboutimg2.png"
            alt="Craftsmanship"
            fill
            sizes="50vw"
            className="object-cover"
          />

          {/* MOBILE */}

          <div className="block sm:hidden relative z-10 py-16 flex items-start justify-center min-h-[600px] px-6 pt-20">
            <div className="glass-card-craftsmanship p-6 max-w-sm w-full text-left">
              <BlurText
                text="Craftsmanship"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-2xl text-black"
              />

              <BlurText
                text="& Quality"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-2xl text-black mb-4"
              />

              <p className="text-black text-sm leading-relaxed">
                A section that highlights the details, premium materials, and
                artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>

          {/* TABLET */}

          <div className="hidden sm:block lg:hidden relative z-10 py-16 flex items-start justify-center min-h-[700px] px-6 pt-20">
            <div className="glass-card-craftsmanship p-8 max-w-md w-full text-left">
              <BlurText
                text="Craftsmanship"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-3xl text-black"
              />

              <BlurText
                text="& Quality"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-3xl text-black mb-4"
              />

              <p className="text-black text-sm leading-relaxed">
                A section that highlights the details, premium materials, and
                artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>

          {/* DESKTOP */}

          <div className="hidden lg:block relative z-10 p-16 min-h-[600px] flex items-start">
            <div className="glass-card-craftsmanship p-8 max-w-[435px]">
              <BlurText
                text="Craftsmanship"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-3xl text-black"
              />

              <BlurText
                text="& Quality"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-3xl text-black mb-6"
              />

              <p className="text-black text-sm leading-tight">
                A section that highlights the details, premium materials, and
                artisanal finishes that beautifully define every Agasti villa.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SUSTAINABILITY ================= */}

        <div className="relative">
          <Image
            src="/about-us/aboutimg3.png"
            alt="Sustainability"
            fill
            sizes="50vw"
            className="object-cover"
          />

          {/* MOBILE */}

          <div className="block sm:hidden relative z-10 py-16 flex items-end justify-center min-h-[600px] px-6 pb-20">
            <div className="glass-card-sustainability p-6 max-w-sm w-full text-left">
              <BlurText
                text="Sustainability"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-2xl text-black"
              />

              <BlurText
                text="& Integrity"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-2xl text-black mb-4"
              />

              <p className="text-black text-sm leading-relaxed">
                We build with honesty and responsibility, creating homes that
                uphold trust while preserving the environment for generations.
              </p>
            </div>
          </div>

          {/* TABLET */}

          <div className="hidden sm:block lg:hidden relative z-10 py-16 flex items-center justify-center min-h-[700px] px-6">
            <div className="glass-card-sustainability p-8 max-w-md w-full text-left">
              <BlurText
                text="Sustainability"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-3xl text-black"
              />

              <BlurText
                text="& Integrity"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-gc-palioka text-3xl text-black mb-4"
              />

              <p className="text-black text-sm leading-relaxed">
                We build with honesty and responsibility, creating homes that
                uphold trust while preserving the environment for generations.
              </p>
            </div>
          </div>

          {/* DESKTOP */}

          <div className="hidden lg:block relative z-10 h-[600px]">
            <div className="absolute bottom-16 right-12 max-w-[435px]">
              <div className="glass-card-sustainability p-8">
                <BlurText
                  text="Sustainability"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="font-gc-palioka text-3xl text-black"
                />

                <BlurText
                  text="& Integrity"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="font-gc-palioka text-3xl text-black mb-6"
                />

                <p className="text-black text-sm leading-tight">
                  We build with honesty and responsibility, creating homes that
                  uphold trust while preserving the environment for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
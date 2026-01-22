"use client";
import BlurText from "./BlurText";

export default function SpacePrivacySection() {
  return (
    <section className="bg-white px-6 sm:px-[48px] h-screen w-full flex items-center justify-center min-h-[600px]">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Main Title with BlurText Animation */}
        <BlurText
          text="Space · Privacy · Nature · Luxury · Connectivity"
          delay={60}
          animateBy="words"
          direction="top"
          threshold={0.6}
          className="font-gc-palioka text-[24px] xs:text-[28px] sm:text-[32px] md:text-[50px] lg:text-[50px] xl:text-[50px] text-black mb-2 sm:mb-3 md:mb-4 leading-tight"
        />

        {/* Subtitle with BlurText Animation */}
        <BlurText
          text="A fusion of the best, most sought-out aspects of life."
          delay={80}
          animateBy="words"
          direction="top"
          threshold={0.6}
          className="text-[#262626] text-[14px] xs:text-[16px] sm:text-[18px] md:text-[30px] lg:text-[34px] xl:text-[34px] leading-relaxed max-w-4xl mx-auto"
        />
      </div>
    </section>
  );
}
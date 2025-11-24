import Image from "next/image";
import ContainerLayout from "@/layout/ContainerLayout";

export default function LifestyleGallery() {
  const features = [
    {
      title: "Sleek, Sculpted Rooflines",
      description:
        "Sleek, sculpted rooflines bring refined architectural elegance while enhancing natural light and ventilation.",
      image: "/roofline.jpg",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "Organic Kitchen Garden",
      description:
        "Organic Kitchen Garden offers a personal space to grow fresh, natural produce right at home.",
      image: "/organic-kitchen.jpg",
      aspectRatio: "aspect-[3/5]",
    },
    {
      title: "Outdoor Culinary Space",
      description:
        "Outdoor Culinary Space provides a stylish open-air setting for cooking, entertaining, and enjoying relaxed gatherings.",
      image: "/outdoor-culinary.jpg",
      aspectRatio: "aspect-[3/4]",
    },
    {
      title: "Wider Structural Beams",
      description:
        "Wider Structural Beams create open, seamless interiors with stronger support and cleaner ceiling lines.",
      image: "/menu-image.jpg",
      aspectRatio: "aspect-[3/5]",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <ContainerLayout>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-gc-palioka text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-black leading-tight">
            Experience a Life of Convenience
            <br />
            and Indulgence
          </h2>
        </div>

        {/* Gallery - Horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-6 md:pb-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:items-start min-w-max md:min-w-0">
            {features.map((feature, index) => (
              <div key={index} className="group cursor-pointer flex-shrink-0 w-[75vw] sm:w-[65vw] md:w-auto">
                {/* Image */}
                <div className={`relative ${feature.aspectRatio} overflow-hidden mb-3 sm:mb-4`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="pr-4 md:pr-0">
                  <h3 className="text-[#8D957E] text-lg md:text-xl lg:text-[22px] font-gc-palioka mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

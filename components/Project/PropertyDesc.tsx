import Image from "next/image";
import Link from "next/link";
import AmenityCards from "./AmenityCards";

const PropertyDesc = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/projects-imgs/project_desc_banner.png"
          alt="Property Description"
          fill
          priority
          className="object-cover object-[20%_80%]"
        />
        {/* Soft overlay for better readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="  px-6 sm:px-10 lg:px-20 py-16">
        <div className="max-w-2xl">

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-gc-palioka text-black mb-4">
            Property Description
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Agasti Atara Ventures is a thoughtfully crafted villa community that blends refined
            architecture with modern comfort. Designed for elevated living, each villa showcases
            seamless planning, natural ventilation, and premium detailing. With serene surroundings,
            curated amenities, and a focus on privacy, Agasti offers a lifestyle where elegance and
            functionality come together effortlessly.
          </p>

          <Link href="/contact">
            <button className="text-black text-sm sm:text-base font-semibold hover:opacity-70 transition-opacity underline">
              SCHEDULE A VISIT →
            </button>
          </Link>

          <div className="mt-10">
            <AmenityCards />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyDesc;
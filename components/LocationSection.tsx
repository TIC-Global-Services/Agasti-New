"use client";
import ContainerLayout from "@/layout/ContainerLayout";

export default function LocationSection() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 mt-8 sm:mt-48 px-[48px]">
      <ContainerLayout disablePaddingX={true}>
        <div className="bg-[#E8E6E1] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="flex items-center px-6 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-20">
              <div className="max-w-lg">
                <h2 className="font-gc-palioka text-[44px] sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6 leading-tight">
                  Your Gateway
                  to Comfort, Connection,
                  and Ease
                </h2>
                
                <p className="text-gray-600 plus-jakarta-sans text-[16px] sm:text-base leading-relaxed">
                  Atara by Agasti is strategically placed to offer peaceful living without 
                  compromising accessibility. From top schools and hospitals to 
                  business hubs, entertainment, and the airport—everything you need is 
                  just minutes away.
                </p>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[400px] p-4 sm:p-6 lg:p-8">
              <div className="relative w-full h-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.87257665632!2d78.1792147!3d17.465811899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbee5d7d3a293d%3A0x84b36b8b9bc70b0d!2sBhanur%2C%20Telangana%20502305!5e0!3m2!1sen!2sin!4v1765877925651!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agasti Estates Location"
                  className="absolute inset-0"
                />
                
                {/* Expand Icon */}
                <button 
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Agasti+Estates+Gachibowli+Hyderabad', '_blank')}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white p-1.5 sm:p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors z-10"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black"
                  >
                    <path
                      d="M15 3H21V9M9 21H3V15M21 3L14 10M3 21L10 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="relative bg-white">
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        {/* Background Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/contact-us/contactformbg.png"
            alt="Contact Form Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          
          {/* Contact Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-gc-palioka text-[20px] sm:text-[48px] text-white font-bold tracking-wider">
              contact
            </h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="font-gc-palioka text-[20px] sm:text-[20px] text-black mt-[8px] mb-2 leading-none">
              We&apos;ll get in touch with you soon
            </h2>
          </div>

          <form className="space-y-6">
            {/* Your name field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name *"
                className="w-full px-4 py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
              />
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/contact-us/Vector.png"
                  alt="Name"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address *"
                className="w-full px-4 py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
              />
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/contact-us/mail.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Phone field */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone"
                className="w-full px-4 py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
              />
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
            </div>

            {/* Message field */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message"
                className="w-full px-4 py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575] resize-none"
              ></textarea>
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300"></div>
              <div className="absolute right-3 top-3">
                <Image
                  src="/contact-us/message.png"
                  alt="Message"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                className="bg-[#8D957E] text-white text-[12px] font-bold tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded"
                style={{ width: '140px', height: '44px' }}
              >
                SEND INQUIRY
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        {/* Contact Information */}
{/* Contact Information */}
<div className="bg-white px-6 py-12">
  <div className="grid grid-cols-2 gap-6">
    {/* Left Column */}
    <div>
      <h3 className="font-gc-palioka text-[28px] sm:text-[24px] text-black mb-2 leading-tight">
        Hyderabad
      </h3>
      <p className="text-black text-[16px] font-bold mb-4">
        Agasti - INDIA
      </p>
      <p className="text-black text-[14px] leading-relaxed">
        9-4-76/A/2 Nizam Colony,
        HYDERABAD, Telangana,<br />
        India - 500008
      </p>
    </div>

    {/* Right Column */}
    <div className="flex-justify-end">
      <h4 className="text-black text-[20px] font-bold mb-2">
        Get in touch
      </h4>
      <div className="space-y-1">
        <p className="text-gray-600 text-[14px]">
          +1 234 567 8910
        </p>
        <p className="text-gray-600 text-[14px] underline">
          info@agasti.com
        </p>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:block lg:hidden">
        <div className="relative w-full">
          {/* Background Image Container */}
          <div className="relative w-full h-[400px] sm:h-[500px]">
            <Image
              src="/contact-us/contactformbg.png"
              alt="Contact Form Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          
          {/* Form Overlay - responsive positioning */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[90%] max-w-[580px]">
            <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="font-gc-palioka text-[32px] sm:text-[40px] md:text-[45px] text-black mb-2 leading-none">
                  We&apos;ll get in touch with
                  <br />
                  you soon
                </h2>
              </div>

              <form className="space-y-4 sm:space-y-6">
                {/* Your name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name *"
                    className="w-full px-4 sm:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
                  />
                  <div className="absolute bottom-0 left-4 sm:left-[66px] right-4 sm:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 sm:right-[50px] top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/contact-us/Vector.png"
                      alt="Name"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address *"
                    className="w-full px-4 sm:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
                  />
                  <div className="absolute bottom-0 left-4 sm:left-[66px] right-4 sm:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 sm:right-[50px] top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/contact-us/mail.png"
                      alt="Email"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    className="w-full px-4 sm:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
                  />
                  <div className="absolute bottom-0 left-4 sm:left-[66px] right-4 sm:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 sm:right-[50px] top-1/2 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full px-4 sm:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575] resize-none"
                  ></textarea>
                  <div className="absolute bottom-0 left-4 sm:left-[66px] right-4 sm:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 sm:right-[50px] top-3">
                    <Image
                      src="/contact-us/message.png"
                      alt="Message"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#8D957E] text-white text-sm font-medium tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded"
                    style={{ width: '197px', height: '50px' }}
                  >
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Contact Information centered below form */}
        <div className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            {/* Location Header */}
            <div className="text-center mb-8">
              <h3 className="font-gc-palioka text-[28px] md:text-[32px] text-black mb-4 leading-tight pt-6">
                Hyderabad
              </h3>
              <p className="text-black text-lg font-bold mb-6">
                Agasti - INDIA
              </p>
              <h4 className="text-black text-lg font-bold mb-8">
                Get in touch
              </h4>
            </div>

            {/* Address and Contact Info in single column for better visibility */}
            <div className="max-w-xl mx-auto space-y-8">
              {/* Address */}
              <div className="text-center">
                <h5 className="text-black font-bold mb-2">Address</h5>
                <p className="text-black text-base leading-relaxed">
                  9-4-76/A/2 Nizam Colony,<br />
                  HYDERABAD, Telangana,<br />
                  India - 500008
                </p>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                <h5 className="text-black font-bold mb-2">Contact</h5>
                <div className="space-y-2">
                  <p className="text-[#717580] text-base">
                    +1234 567 8910
                  </p>
                  <p className="text-[#262B35] text-base underline">
                    info@agasti.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile and tablet */}
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* Background Image Container */}
          <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[500px]">
            <Image
              src="/contact-us/contactformbg.png"
              alt="Contact Form Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          
          {/* Form Overlay - responsive positioning */}
          <div className="absolute top-full right-4 lg:right-8 xl:right-40 transform -translate-y-1/4 w-[90%] max-w-[580px] lg:w-[45%] xl:w-[580px]">
            <div className="bg-white shadow-lg p-6 lg:p-8 rounded-lg">
              <div className="text-center mb-6 lg:mb-8">
                <h2 className="font-gc-palioka text-[36px] lg:text-[40px] xl:text-[45px] text-black mb-2 leading-none">
                  We&apos;ll get in touch with
                  <br />
                  you soon
                </h2>
              </div>

              <form className="space-y-4 lg:space-y-6">
                {/* Your name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name *"
                    className="w-full px-4 lg:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
                  />
                  <div className="absolute bottom-0 left-4 lg:left-[66px] right-4 lg:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 lg:right-[50px] top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/contact-us/Vector.png"
                      alt="Name"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address *"
                    className="w-full px-4 lg:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
                  />
                  <div className="absolute bottom-0 left-4 lg:left-[66px] right-4 lg:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 lg:right-[50px] top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/contact-us/mail.png"
                      alt="Email"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    className="w-full px-4 lg:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575]"
                  />
                  <div className="absolute bottom-0 left-4 lg:left-[66px] right-4 lg:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 lg:right-[50px] top-1/2 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full px-4 lg:px-[66px] py-3 border-0 bg-transparent focus:outline-none transition-colors placeholder-[#757575] resize-none"
                  ></textarea>
                  <div className="absolute bottom-0 left-4 lg:left-[66px] right-4 lg:right-[66px] h-[2px] bg-gray-300 transition-colors group-focus-within:bg-[#8D957E]"></div>
                  <div className="absolute right-3 lg:right-[50px] top-3">
                    <Image
                      src="/contact-us/message.png"
                      alt="Message"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#8D957E] text-white text-sm font-medium tracking-wider hover:bg-[#7A8470] transition-colors duration-300 flex items-center justify-center rounded"
                    style={{ width: '197px', height: '50px' }}
                  >
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Contact Information in white space below image */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 xl:px-[48px] lg:px-[48px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side Contact Information */}
              <div className="space-y-6">
                {/* Location Header */}
                <div>
                  <h3 className="font-gc-palioka text-[20px] sm:text-[28px] md:text-[32px] text-black mb-4 leading-tight pt-8">
                    Hyderabad
                  </h3>
                  
                  {/* Agasti-INDIA and Get in touch aligned */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-baseline mb-6">
                    <p className="text-black text-lg font-bold">
                      Agasti - INDIA
                    </p>
                    <h4 className="text-black text-lg font-bold">
                      Get in touch
                    </h4>
                  </div>
                </div>

                {/* Address and Contact Info Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Address */}
                  <div className="text-black">
                    <p className="text-base leading-relaxed">
                      9-4-76/A/2 Nizam Colony ,<br />
                      HYDERABAD, Telangana,<br />
                      India - 500008
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <p className="text-[#717580]-600 text-base">
                      +1234 567 8910
                    </p>
                    <p className="text-[#262B35]-600 text-base underline">
                      info@agasti.com
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side can be used for additional content if needed */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
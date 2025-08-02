import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <section className="bg-[#FAF8F6] px-4 sm:px-6 md:px-8 py-20 md:py-40 lg:py-77">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT: Name & Intro Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937]">
              Your First Name
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mt-2">
              Your Last Name
            </h2>
            <p className="text-base sm:text-lg text-gray-800 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br className="hidden sm:block" />
              It has survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </div>

          {/* RIGHT: Portrait Images (responsive, clean) */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <div className="relative w-full max-w-[960px] aspect-[12/6.5]">
              {/* Left Image */}
              <div className="absolute w-[32%] h-full left-0 top-0">
                <Image
                  src="/images/portrait1.jpg"
                  alt="Portrait 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* Center Image (offset down slightly) */}
              <div className="absolute w-[32%] h-full left-[33%] top-[10%]">
                <Image
                  src="/images/portrait2.jpg"
                  alt="Portrait 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* Right Image */}
              <div className="absolute w-[32%] h-full left-[66%] top-0">
                <Image
                  src="/images/portrait3.jpg"
                  alt="Portrait 3"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[600px] bg-[#fdfaf8] flex items-center justify-center px-6 py-10">
        {/* Background Image Box with Limited Width */}
        <div className="relative w-full max-w-7xl h-full rounded-xl overflow-hidden">
          {/* Transparent Background Image */}
          <Image
            src="/images/abb.jpg"
            alt="Who We Are Background"
            fill
            className="object-cover opacity-60 rounded-xl"
            priority
          />

          {/* Overlay Text - Left Side */}
          <div className="absolute inset-0 z-10 flex items-center justify-start px-6 md:px-16">
            <h1 className="text-6xl md:text-8xl font-extrabold text-[#1F2937] leading-tight">
              WHO <br /> WE <br /> ARE<span className="text-[#DB9478]">?</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F6] px-6 py-24">
        {/* OUR STORY CONTENT */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE – TEXT */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We started with a simple dream: to create something meaningful and
              lasting. Over time, that dream turned into a passionate journey of
              hard work, learning, and connection.
            </p>
            <p className="text-lg text-gray-700">
              Today, we stand stronger with a clear purpose and a community that
              continues to inspire us. This is just the beginning of our story,
              and we're excited to write it together with you.
            </p>
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="flex-1">
            <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/ourstory.jpg"
                alt="Our Story"
                width={800}
                height={600}
                className="object-cover w-full h-full opacity-90"
              />
            </div>
          </div>
        </div>

        {/* COMPANY LOGOS SECTION */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-center">
            {/* Logo 1   h-[100px] w-[100px] rounded-2xl overflow-hidden shadow-lg*/}
            <div className=" flex justify-center ">
              <Image
                src="/images/logo1.png"
                alt="Company 1"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Logo 2 */}
            <div className=" flex justify-center">
              <Image
                src="/images/logo2.png"
                alt="Company 2"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Logo 3 */}
            <div className=" flex justify-center">
              <Image
                src="/images/logo3.png"
                alt="Company 3"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Logo 4   flex justify-center*/}
            <div className=" flex justify-center ">
              <Image
                src="/images/logo4.png"
                alt="Company 4"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Third Section for Location */}

      <section className="bg-[#FAF8F6] px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE – DESCRIPTION */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">
              Our Location
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-[#DB9478]">Visit Us:</span>{" "}
              Our office is located in the heart of the city, easily accessible
              by public transport and close to popular landmarks.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-[#DB9478]">Address:</span> 123
              Main Street, Colombo 07, Sri Lanka.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#DB9478]">
                Working Hours:
              </span>{" "}
              Monday to Friday, 9:00 AM – 6:00 PM.
            </p>
          </div>

          {/* RIGHT SIDE – EMBEDDED MAP */}
          <div className="flex-1">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63318.81351711765!2d79.8380056!3d6.9270783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595a82dc5aef%3A0x25e3f7c7bbab5468!2sColombo!5e0!3m2!1sen!2slk!4v1614036676541!5m2!1sen!2slk"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-2xl border-none"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

{/* Footer */}

      <footer className="bg-[#1F2937] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* COMPANY INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4">YourCompany</h3>
            <p className="text-sm text-gray-300">
              Creating meaningful experiences through design and innovation.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-sm text-gray-300">
              123 Main Street,
              <br />
              Colombo 07, Sri Lanka
            </p>
            <p className="text-sm text-gray-300 mt-2">Phone: +94 71 234 5678</p>
            <p className="text-sm text-gray-300">
              Email: hello@yourcompany.com
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-2xl text-gray-300">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DB9478]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DB9478]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DB9478]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DB9478]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Aditha Wickramasingha. All rights reserved.
        </div>
      </footer>


    </div>
  );
};

export default AboutPage;

/*    

<section>
      <div className='p-10 content-center'>
        <h1 className='text-2xl font-mono text-center'>Yo this is for testing <span className='text-5xl font-bold uppercase leading-1.5 text-amber-700'>fr fr...</span></h1>
        </div>
</section>
    
    
*/

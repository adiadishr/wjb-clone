import Image from "next/image";
import { Button } from "./ui/button";

export default function ContactForm() {
  return (
    <div className="bg-white overflow-hidden">
      <div
        className="container mx-auto w-[80%] py-20 flex md:flex-row flex-col gap-20"
      >
        {/* Text & Form */}
        <div
          className="w-full order-2 md:order-1"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-offset="-200"
        >
          <div
            className="subheading mb-5"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-offset="-200"
          >
            Get in touch!
          </div>
          <div
            className="leading-tight text-4xl md:text-5xl font-semibold tracking-tight mb-8"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-offset="-200"
          >
            Have upcoming Projects? Let&apos;s Talk!
          </div>
          <form
            action="#"
            method="POST"
            className="max-w-xl w-full"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="-200"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              <div>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="full-name"
                  placeholder="Your Name"
                  className="block w-full rounded-sm tracking-tight bg-white px-4 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                />
              </div>
              <div>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company"
                  className="block w-full rounded-sm tracking-tight bg-white px-4 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                />
              </div>
              <div>
                <input
                  id="number"
                  name="number"
                  type="number"
                  autoComplete="phone-number"
                  placeholder="Phone Number"
                  className="block w-full rounded-sm tracking-tight bg-white px-4 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="block w-full rounded-sm tracking-tight bg-white px-4 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="block w-full rounded-sm tracking-tight bg-white px-4 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                  defaultValue={''}
                />
              </div>
              <Button
                className="!px-4 !py-6"
                data-aos="fade-up"
                data-aos-offset="-200"
              >
                Submit Message
              </Button>
            </div>
          </form>
        </div>

        {/* Image */}
        <div
          className="relative md:h-auto h-[32rem] md:order-2 order-1 md:w-[80%] justify-end"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-offset="-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d49.01487505325154!2d-0.3386760299544168!3d51.500506931420475!2m2!1f187.28096838078844!2f6.13469231285037!3m2!1i1024!2i768!4f59.99659545210261!3m3!1m2!1s0x48760d71a43f4b1b%3A0x36dc15523bd3e854!2sHayes%20Gate%20Plant%20Hire%20Ltd!5e1!3m2!1sen!2snp!4v1749987088607!5m2!1sen!"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

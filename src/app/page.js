import { Button } from "@/components/ui/button";
import { ArrowRight, Binoculars, PhoneCall } from "lucide-react";
import { Testimonials } from "@/components/magicui/marquee";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import Consultation from "@/components/consultation";
import Services from "@/components/services";
import { TimelineDemo } from "@/components/timeline";
import Blogs from "@/components/blogs";
import Projects from "@/components/projects";
import Link from "next/link";
import { VelocityScroll } from "@/components/magicui/velocity-based-scroll";

export default function Page() {
  return (<>
    {/* Hero Video */}
    <div className="relative flex items-center justify-center h-[calc(100dvh)]">
      <video
        className="absolute inset-0 w-full h-full object-cover object-[0%_100%] brightness-90 -z-10"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-35" />
      <div className="z-10 flex flex-col items-center justify-center text-white translate-y-[65%] md:translate-y-[75%]">
        <div className="absolute -translate-y-[90%]">
          <div className="relative size-48">
            <Image src="/logo.png" fill className="object-cover brightness-2000 saturate-0" alt="Construction Company" />
          </div>
        </div>
        <div className="mb-8 headline text-center">Build, <br /> with <span className="gradient-text">Brilliance</span></div>
      </div>
      <div className="absolute flex items-center gap-2 text-xs text-white rotate-90 md:text-sm -right-8 md:right-0 top-1/2">Scroll to see more<ArrowRight size={16} /></div>
    </div>
    <Services />
    <Consultation />
    <Testimonials />
    <div className="text-white bg-neutral py-20">
      <section className="w-[90%] container md:w-[85%] gap-y-10 mx-auto items-center justify-between grid md:grid-cols-16">
        <div className="col-span-1 md:col-span-7">
          <h5 className="relative mb-10 md:text-xl font-light uppercase w-max">Our Culture</h5>
          <div className="mb-10 heading">Excellence, Integrity, Innovation and Humility</div>
          <div className="pr-10 mb-10 md:text-lg font-light">The firm&apos;s achievements are only possible because of our most valuable asset: our people, knit together by a shared mission to be the best at what we do.</div>
        </div>
        <div className="col-span-1 md:col-span-9 md:pl-20">
          <div className="w-full divide-y p-10 md:p-15 h-max bg-gray-950">
            <div className="flex items-center justify-between pb-5 md:pb-10 cursor-pointer group">
              <div className="text-lg md:text-2xl font-extralight group">
                <div className="relative capitalize inline-block">
                  Have a proposition?
                  <span className="absolute bottom-0 left-0 w-0 h-px duration-300 bg-white group-hover:w-full"></span>
                </div>
                <br />
                <div className="relative  capitalize inline-block">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-px duration-300 delay-150 bg-white group-hover:w-full"></span>
                </div>
              </div>
              <div className="p-2.5 border border-white rounded-full group-hover:text-black group-hover:bg-white duration-300 group-hover:scale-125">
                <ArrowRight className="transition-transform duration-300 delay-100 group-hover:-rotate-45" size={20} />
              </div>
            </div>
            <div className="flex items-center justify-between pt-5 md:pt-10 cursor-pointer group">
              <div className="text-lg md:text-2xl font-extralight group">
                <div className="relative capitalize inline-block">
                  Want to join us?
                  <span className="absolute bottom-0 left-0 w-0 h-px duration-300 bg-white group-hover:w-full"></span>
                </div>
                <br />
                <div className="relative capitalize inline-block">
                  View open positions
                  <span className="absolute bottom-0 left-0 w-0 h-px duration-300 delay-150 bg-white group-hover:w-full"></span>
                </div>
              </div>
              <div className="p-2.5 border border-white rounded-full group-hover:text-black group-hover:bg-white duration-300 group-hover:scale-125">
                <ArrowRight className="transition-transform duration-300 delay-100 group-hover:-rotate-45" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Projects />
    <div className="bg-primary text-white py-20">
      <VelocityScroll numRows={1} defaultVelocity={2.5} className="text-5xl font-normal">
        Hayes Plant Hire
      </VelocityScroll>
    </div>
    <TimelineDemo />
    <Blogs />
    <ContactForm />
  </>)
}
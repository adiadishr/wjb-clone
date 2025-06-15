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
    {/* Hero */}
    {/* <div className="relative overflow-hidden">
      <div className="container mx-auto w-[90%] md:w-[85%] px-4 mt-[60px] md:mt-[100px] min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-100px)] flex flex-col justify-center relative">
        <Image data-aos="fade-right" fill className="-translate-x-[20%] -z-10 object-cover object-[0%_0%]" src="/hero-shape.webp" alt="Construction Company" />
        <div data-aos="fade-up" className="md:text-left leading-tight text-center font-semibold text-4xl md:text-5xl tracking-tight mb-4">
          From blueprint, <br />to Brilliance.
        </div>
        <div data-aos="fade-up" data-aos-delay="150" className="text-muted-foreground md:text-left text-center max-w-lg text-lg/7 mb-8">
          We help deliver solutions in site preparation, excavation, foundations, drainage and civil engineering.
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4 md:justify-start justify-center">
          <Link href="/about"><Button size={'lg'}><Binoculars size={16} />Discover More</Button></Link>
          <Link href="/contact"><Button size={'lg'} variant={'outline'}><PhoneCall size={16} />Book a Call</Button></Link>
        </div>
        <div data-aos="fade-left" className="w-0 hidden h-[calc(100dvh-100px)] md:block absolute right-0 grow md:w-5/12">
        </div>
      </div>
      <div data-aos='fade-left' data-aos-duration='2000' className="absolute right-0 top-0 h-full w-1/2 md:block hidden">
        <Image fill className="object-cover object-[50%_50%] absolute right-0 top-0" src="/hero.jpeg" alt="Construction Company" />
      </div>
    </div> */}
    <div className="text-foreground bg-white">
      <div className="w-[90%] container md:w-[85%] mx-auto pt-40 pb-20">
        <div className="grid grid-cols-1 pb-20 md:grid-cols-2">
          <h1 className="md:ml-10 mb-10 font-semibold text-5xl/16 md:text-7xl/21 capitalize text-center md:mb-0 md:text-start">
            From  <span className="font-bold">blueprint </span>
            <br />
            <span className="md:ml-10">to Brilliance</span>
          </h1>
          <h5 className="self-end text-xl text-center md:text-start md:pl-20">We help deliver solutions in site preparation, excavation, foundations, drainage and civil engineering.</h5>
        </div>
        <div className="h-125 w-full relative">
          <Image
            className="object-cover"
            fill
            src="/hero.jpeg"
            alt="Hero"
          />
        </div>
      </div>
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
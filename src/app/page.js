import { Button } from "@/components/ui/button";
import { Binoculars, PhoneCall } from "lucide-react";
import { Testimonials } from "@/components/magicui/marquee";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import Consultation from "@/components/consultation";
import Services from "@/components/services";
import { TimelineDemo } from "@/components/timeline";
import Blogs from "@/components/blogs";
import Projects from "@/components/projects";

export default function Page() {
  return (<>
    <div className="relative overflow-hidden">
      <div className="container mx-auto w-[80%] px-4 mt-[60px] md:mt-[100px] min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-100px)] flex flex-col justify-center relative">
        <Image data-aos="fade-right" fill className="-translate-x-[20%] -z-10 object-cover object-[0%_0%]" src="/hero-shape.webp" alt="Construction Company" />
        <div data-aos="fade-up" className="md:text-left leading-tight text-center font-semibold text-4xl md:text-5xl tracking-tight mb-4">
          From blueprint, <br />to Brilliance.
        </div>
        <div data-aos="fade-up" data-aos-delay="150" className="text-muted-foreground md:text-left text-center max-w-lg text-lg/7 mb-8">
          We help deliver solutions in site preparation, excavation, foundations, drainage and civil engineering.
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4 md:justify-start justify-center">
          <Button size={'lg'}><Binoculars size={16} />Discover More</Button>
          <Button size={'lg'} variant={'outline'}><PhoneCall size={16} />Book a Call</Button>
        </div>
        <div data-aos="fade-left" className="w-0 hidden h-[calc(100dvh-100px)] md:block absolute right-0 grow md:w-5/12">
        </div>
      </div>
      <div data-aos='fade-left' data-aos-duration='2000' className="absolute right-0 top-0 h-full w-1/2">
        <Image fill className="object-cover object-[50%_50%] absolute right-0 top-0" src="/hero.jpeg" alt="Construction Company" />
      </div>
    </div>
    <Services />
    <Consultation />
    <Projects />
    <Testimonials />
    {/* <div className="relative bg-neutral -z-20">
      <div className="w-1/2 bg-primary h-full py-18 md:py-36 z-10 pl-[10%] md:pl-[12.5%] text-white font-semibold text-4xl cta">
        Explain The Project Case Study
      </div>
      <Image fill src="/shape.webp" alt="decorative" className="object-cover -z-10 absolute inset-0" />
    </div> */}
    <TimelineDemo />
    <Blogs />
    <ContactForm />
  </>)
}
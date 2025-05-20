import { Button } from "@/components/ui/button";
import { Binoculars, PhoneCall } from "lucide-react";
import { Testimonials } from "@/components/magicui/marquee";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import Consultation from "@/components/consultation";
import Services from "@/components/services";
import { TimelineDemo } from "@/components/timeline";
import Blogs from "@/components/blogs";

export default function Page() {
  return (<>
    <div className="relative overflow-hidden">
      <div className="container mx-auto w-[90%] px-4 mt-[60px] md:mt-[100px] min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-100px)] flex flex-col justify-center relative">
        <Image data-aos="fade-right" fill className="-translate-x-[10%] -z-10 object-cover object-[0%_0%]" src="/hero-shape.webp" alt="Construction Company" />
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
    {/* <div className="container w-[90%] px-4 mx-auto py-24 md:pt-36 md:pb-28 flex md:flex-row flex-col relative gap-x-16">
      <div data-aos="fade-up" className="flex md:w-[40%] w-full md:sticky md:top-34 h-[32rem] relative">
        <div className="absolute z-10 rotate-[270deg] top-0 right-0 w-0 h-0 border-l-[200px] border-b-[200px] border-l-transparent border-b-primary">
          <div className="rotate-[135deg] text-center z-20 absolute translate-y-[150%] -translate-x-[120%] text-white font-semibold">10k+ Customer&apos;s Satisfied!</div>
        </div>
        <Image fill className="object-cover scale-x-[-1] object-[50%_15%]" src="/machine.jpeg" alt="Construction Company" />
      </div>
      <div data-aos="fade-up" className="flex flex-col flex-grow flex-1 md:mt-0 mt-24">
        <div className="font-medium text-primary leading-none mb-4">About our company</div>
        <div className="leading-tight text-4xl md:text-5xl font-semibold tracking-tight mb-8">
          Trusted Groundwork Solutions for <span className="italic mr-2">any</span> Project
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
          The Joke Tax
        </h3>
        <div>
          <p className="leading-7 text-paragraph mb-6">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
          </p>
          <p className="leading-7 text-paragraph mb-8">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability. Here, we are proud to offer environmentally conscious groundworks services in NW2 London, delivering smart, reliable, and future-ready solutions tailored to each site&apos;s unique needs.
          </p>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
          The Joke Tax
        </h3>
        <p className="leading-7 text-paragraph mb-6">
          Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
        </p>
        <div className="leading-7 mb-8 flex flex-wrap gap-x-4 gap-y-4">
          <div>
            <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={32} /> 260+ Projects Completed
          </div>
          <div>
            <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={32} /> 260+ Projects Completed
          </div>
          <div>
            <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={32} /> 260+ Projects Completed
          </div>
        </div>
        <Button className='w-max'>Learn More<ChevronRight size={16} /></Button>
      </div>
    </div> */}
    <Services />
    <Consultation />
    <Testimonials />
    <TimelineDemo />
    <Blogs />
    <ContactForm />
  </>)
}
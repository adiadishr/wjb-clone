import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Binoculars, ChevronRight, PhoneCall } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Testimonials } from "@/components/magicui/marquee";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import Consultation from "@/components/consultation";

export default function Page() {
  return (<>
    <div className="max-w-7xl mx-auto px-4 mt-[60px] md:mt-[100px] min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-100px)] flex flex-col justify-center relative">
      <Image data-aos="fade-right" fill className="-translate-x-4 -z-10 object-cover object-[0%_100%]" src="/hero-shape.webp" alt="Construction Company" />
      <div data-aos="fade-up" className="md:text-left leading-tight text-center text-4xl md:text-5xl font-pt-serif tracking-tight mb-4">
        From blueprint, <br />to <span className="italic">Brilliance.</span>
      </div>
      <div data-aos="fade-up" data-aos-delay="150" className="text-muted-foreground md:text-left text-center max-w-lg text-lg md:text-xl mb-8">
        We help deliver solutions in site preparation, excavation, foundations, drainage and civil engineering.
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4 md:justify-start justify-center">
        <Button size={'lg'}><Binoculars size={16} />Discover More</Button>
        <Button size={'lg'} variant={'outline'}><PhoneCall size={16} />Book a Call</Button>
      </div>
      <div data-aos="fade-left" className="w-0 hidden h-[calc(100dvh-100px)] md:block absolute right-0 grow md:w-5/12">
        <Image fill className="object-cover scale-x-[-1] object-[0%_15%]" src="/hero-1.jpg" alt="Construction Company" />
      </div>
    </div>
    <div className="container px-4 mx-auto py-24 md:pt-36 md:pb-28 flex md:flex-row flex-col relative gap-x-16">
      <div data-aos="fade-up" data-aos-once='true' className="flex md:w-[40%] w-full md:sticky md:top-34 h-[32rem] relative">
        <div className="absolute z-10 rotate-[270deg] top-0 right-0 w-0 h-0 border-l-[200px] border-b-[200px] border-l-transparent border-b-primary">
          <div className="rotate-[135deg] text-center z-20 absolute translate-y-[150%] -translate-x-[120%] text-white font-semibold">10k+ Customer's Satisfied!</div>
        </div>
        <Image fill className="object-cover scale-x-[-1] object-[0%_15%]" src="/hero-1.jpg" alt="Construction Company" />
      </div>
      <div data-aos="fade-up" className="flex flex-col flex-grow flex-1 md:mt-0 mt-24">
        <div className="text-sm font-medium text-muted-foreground leading-none mb-4">About our company</div>
        <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8">
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
    </div>
    <div className="relative">
      <Image fill className="object-cover -z-10 opacity-[7.5%]" alt="background" src="/bg.png" />
      <div className="container mx-auto px-4 py-24 md:py-36">
        <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Our Services</div>
        <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8 text-center">
          Discover Our <span className="italic">Exceptional</span><br /> Engineering Solutions
        </div>
        <div className="w-full flex justify-center mb-24"><Button size={'lg'} className='w-max'>Learn More<ChevronRight size={16} /></Button></div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-white z-10 p-8 col-span-1 relative cursor-pointer group overflow-hidden h-96 md:h-72">
              <Image fill className="object-cover group-hover:saturate-[75%] saturate-0 duration-[600ms] ease-quart group-hover:scale-110 -z-10 pointer-events-none selection:bg-transparent group-hover:blur-[2px]" alt="background" src="/grounds.webp" />
              <div className="z-10 flex flex-col justify-end h-full">
                <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight mb-4 text-background group-hover:text-white">
                  The Joke Tax
                </h3>
                <p className="leading-7 mb-[-9rem] md:mb-[-7rem] duration-500 ease-quart group-hover:mb-0 text-white">
                  Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions
                </p>
                <ArrowRight className="absolute top-8 right-8 text-background group-hover:text-white duration-300 group-hover:rotate-[-45deg]" size={24} strokeWidth={4} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Consultation />
    <Testimonials />
    <ContactForm />
    <div className="container mx-auto px-4 py-24 md:py-36">
      <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Latest Blogs</div>
      <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-16 text-center">
        Our latest <br /><span className="italic mr-2">blogs </span> and<span className="italic"> articles</span>
      </div>
      <div className="w-full flex justify-center">
        <Carousel className="w-[90%]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className='sm:basis-1/2 md:basis-1/3 justify-center flex' key={index}>
                <div className="bg-white text-muted-foreground border-muted-foreground/50 p-8 w-[90%] border md:w-full rounded-sm relative selection:bg-transparent cursor-default">
                  <div className="h-px w-full bg-neutral/50 my-8"></div>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 text-foreground">
                    The Joke Tax
                  </h3>
                  <p className="leading-7 text-paragraph mb-6">
                    Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions
                  </p>
                  <div className="absolute top-6 right-8 flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer text-sm md:text-base">Read More <span><ChevronRight size={16} /></span></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" className='-left-7 md:-left-20 rounded-sm md:p-6' />
          <CarouselNext variant="default" className='-right-7 md:-right-20 rounded-sm md:p-6' />
        </Carousel>
      </div>
      <div className="w-full flex justify-center"><Button size={'lg'} className='w-max py-6'>View More<ChevronRight size={16} /></Button></div>
    </div>
  </>)
}
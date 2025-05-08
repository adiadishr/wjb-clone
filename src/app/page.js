"use client"

import { Button } from "@/components/ui/button";
import { BadgeCheck, Binoculars, ChevronRight, PhoneCall } from "lucide-react";
import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Testimonials } from "@/components/magicui/marquee";
import Image from "next/image";

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

  }, [])
  return (<>
    <div className="container mx-auto px-[5%] mt-[60px] md:mt-[100px] min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-100px)] flex flex-col justify-center">
      <div className="md:text-left leading-tight text-center text-4xl md:text-5xl font-pt-serif tracking-tight mb-4">
        From blueprint, <br />to <span className="italic">Brilliance.</span>
      </div>
      <div className="text-muted-foreground md:text-left text-center max-w-lg text-lg md:text-xl mb-8">
        We help deliver solutions in site preparation, excavation, foundations, drainage and civil engineering.
      </div>
      <div className="flex gap-4 md:justify-start justify-center">
        <Button size={'lg'}><Binoculars size={16} />Discover More</Button>
        <Button size={'lg'} variant={'outline'}><PhoneCall size={16} />Book a Call</Button>
      </div>
      <div className="w-0 hidden h-[calc(100dvh-100px)] md:block absolute right-0 grow md:w-5/12">
        <Image fill className="object-cover scale-x-[-1] object-[0%_15%]" src="/hero-1.jpg" alt="Construction Company" />
      </div>
    </div>
    <div className="bg-neutral text-neutral-foreground">
      <div className="container px-[5%] mx-auto py-24 md:pt-36 md:pb-28 flex md:flex-row flex-col relative gap-x-16">
        <div className="flex md:w-[40%] w-full sticky top-34 h-[32rem]">
          <Image fill className="object-cover scale-x-[-1] object-[0%_15%]" src="/hero-1.jpg" alt="Construction Company" />
        </div>
        <div className="flex flex-col flex-grow flex-1">
          <div className="text-sm font-medium leading-none mb-4">About our company</div>
          <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8">
            Trusted Groundwork Solutions for <span className="italic mr-2">any</span> Project
          </div>
          <div className="h-px w-full bg-neutral-foreground mb-8"></div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            The Joke Tax
          </h3>
          <p className="leading-7 mb-6">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
          </p>
          <p className="leading-7 mb-8">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability. Here, we are proud to offer environmentally conscious groundworks services in NW2 London, delivering smart, reliable, and future-ready solutions tailored to each site's unique needs.
          </p>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            The Joke Tax
          </h3>
          <p className="leading-7 mb-6">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
          </p>
          <p className="leading-7 mb-6">
            We have:
          </p>
          <div className="leading-7 mb-8 flex flex-wrap gap-x-4 gap-y-4">
            <div>
              <BadgeCheck className="inline-block mr-2" size={24} /> 260+ Projects Completed
            </div>
            <div>
              <BadgeCheck className="inline-block mr-2" size={24} /> 260+ Projects Completed
            </div>
            <div>
              <BadgeCheck className="inline-block mr-2" size={24} /> 260+ Projects Completed
            </div>
          </div>
          <Button variant={'outline'} size={'lg'} className='bg-transparent text-neutral-foreground w-max border-neutral-foreground'>Learn More<ChevronRight size={16} /></Button>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-[5%] py-24 md:pt-36 md:pb-28">
      <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Our Services</div>
      <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8 text-center">
        Discover Our <span className="italic">Exceptional</span><br /> Engineering Solutions
      </div>
      <div className="w-full flex justify-center mb-24"><Button size={'lg'} className='w-max'>Learn More<ChevronRight size={16} /></Button></div>
      <div className="w-full flex justify-center">
        <Carousel className="w-[90%]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className=' md:basis-1/3 justify-center flex' key={index}>
                <div className="bg-white text-muted-foreground border-muted-foreground/50 p-8 border w-[90%] md:w-full rounded-sm relative selection:bg-transparent cursor-default">
                  <div className="h-px w-full bg-neutral/50 my-8"></div>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 text-foreground">
                    The Joke Tax
                  </h3>
                  <p className="leading-7 mb-6">
                    Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions
                  </p>
                  <div className="absolute top-6 right-8 flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer text-sm md:text-base">Read More <span><ChevronRight size={16} /></span></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" className='-left-9 md:-left-20 rounded-sm p-6' />
          <CarouselNext variant="default" className='-right-9 md:-right-20 rounded-sm p-6' />
        </Carousel>
      </div>
    </div>
    <div className="bg-neutral px-[5%] text-neutral-foreground shape">
      <div className="container mx-auto pb-32 pt-16 md:pt-36 md:pb-48 flex md:flex-row flex-col">
        <div className="md:w-1/3 w-full">

        </div>
        <div className="md:w-2/3 w-full">
          <div className="text-sm font-medium leading-none mb-4">Get Consultation</div>
          <div className="leading-tight text-3xl sm:text-4xl md:text-5xl font-pt-serif tracking-tight max-w-max mb-8 w-max">
            Schedule a <span className="italic">free</span> Consultation!
            <div className="h-px w-full bg-neutral-foreground mt-4"></div>
          </div>
          <Button className={'flex items-center'} size={'lg'}><PhoneCall size={16} />Contact Us</Button>
        </div>

      </div>
    </div>
    <div className="container mx-auto px-[5%] py-8 md:py-16 max-w-[90%] bg-primary text-primary-foreground translate-y-[-35%] md:translate-y-[-50%] flex md:flex-row flex-wrap items-center rounded-sm justify-between gap-y-8 md:gap-y-16">
      <div>
        <div className="font-bold text-lg md:text-5xl">800+</div>
        <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
      </div>
      <div>
        <div className="font-bold text-lg md:text-5xl">800+</div>
        <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
      </div>
      <div>
        <div className="font-bold text-lg md:text-5xl">800+</div>
        <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
      </div>
      <div>
        <div className="font-bold text-lg md:text-5xl">800+</div>
        <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
      </div>
    </div>
    <div className="container mx-auto px-[5%] pb-12 md:pb-28 pt-20">
      <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Testimonials</div>
      <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-24 text-center">
        What do our <span className="italic">clients</span> say?
      </div>
      <Testimonials />
    </div>
    <div className="bg-white">
      <div className="container mx-auto px-[5%] py-24 md:pt-36 md:pb-28">
        <div className="text-sm font-medium leading-none mb-4 text-primary">Get in touch!</div>
        <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8">
          Have upcoming <span className="italic">Projects?</span><br /> Let's Talk!
        </div>
        <div className="flex md:flex-row flex-col gap-8">
          <form action="#" method="POST" className=" max-w-xl w-full">
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
              <Button className='!px-4 !py-6'>
                Submit Message
              </Button>
            </div>
          </form>
          <div className="w-full h-64 bg-black">

          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-[5%] py-24 md:pt-36 md:pb-28">
      <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Latest Blogs</div>
      <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-16 text-center">
        Our latest <br /><span className="italic mr-2">blogs </span> and<span className="italic"> articles</span>
      </div>
      <div className="w-full flex justify-center mb-24">
        <Carousel className="w-[90%]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className=' md:basis-1/3 justify-center flex' key={index}>
                <div className="bg-white text-muted-foreground p-8 w-[90%] md:w-full rounded-sm relative selection:bg-transparent cursor-default">
                  <div className="bg-gray-500 w-full h-64"></div>
                  <div className="h-px w-full bg-neutral/50 my-8"></div>
                  <div className="md:text-sm text-xs text-muted-foreground mb-1">
                    21st February, 2024
                  </div>
                  <h3 className="scroll-m-20 mb-4 text-2xl font-semibold tracking-tight text-foreground">
                    The Joke Tax
                  </h3>
                  <p className="leading-7 mb-6 line-clamp-4">
                    Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions
                  </p>
                  <div className="absolute bottom-4 left-8 flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer text-sm text-primary md:text-base">Read More <span><ChevronRight size={16} /></span></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" className='-left-9 md:-left-20 rounded-sm p-6' />
          <CarouselNext variant="default" className='-right-9 md:-right-20 rounded-sm p-6' />
        </Carousel>
      </div>
      <div className="w-full flex justify-center"><Button size={'lg'} className='w-max py-6'>View More<ChevronRight size={16} /></Button></div>
    </div>
  </>)
}
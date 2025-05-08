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

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

  }, [])
  return (<>
    <div className="container mx-auto px-4 py-16 md:py-24 mt-[60px] md:mt-[100px] min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-100px)] flex justify-center flex-col">
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
    </div>
    <div className="bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-4 pb-12 pt-16 md:pt-36 md:pb-28 flex md:flex-row flex-col items-center relative">
        <div className="flex md:w-1/2 w-full sticky h-64 md:order-1 order-2"></div>
        <div className="flex flex-col md:w-1/2 w-full md:order-2 order-1">
          <div className="text-sm font-medium leading-none mb-4">About our company</div>
          <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8">
            Trusted Groundwork Solutions <br className="md:block hidden" /> for <span className="italic mr-2">any</span> Project
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
    <div className="container mx-auto px-4 pb-12 pt-16 md:pt-36 md:pb-28 min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-100px)]">
      <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Our Services</div>
      <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8 text-center">
        Discover Our <span className="italic">Exceptional</span><br /> Engineering Solutions
      </div>
      <div className="w-full flex justify-center mb-24"><Button size={'lg'} className='w-max'>Learn More<ChevronRight size={16} /></Button></div>
      <div className="w-full flex justify-center">
        <Carousel className="w-[90%]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className='md:basis-1/2' key={index}>
                <div className="bg-white text-muted-foreground border-muted-foreground/50 p-8 border w-full rounded-sm relative">
                  <div className="h-px w-full bg-neutral/50 my-8"></div>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 text-foreground">
                    The Joke Tax
                  </h3>
                  <p className="leading-7 mb-6">
                    Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions
                  </p>
                  <div className="absolute top-6 right-8 flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer">Read More <span><ChevronRight size={16} /></span></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </>)
}
'use client'

import AuxHero from "@/components/aux-hero";
import HistoryCard from "@/components/history-card";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BadgeCheck, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (<>
    <AuxHero title={'About Us'} />
    <div className="bg-white">
      <div className="container w-[90%] md:w-[85%] mx-auto py-24 md:pt-36 md:pb-28 flex md:flex-row flex-col relative gap-x-16">
        <div data-aos="fade-up" className="flex md:w-[40%] w-full md:sticky md:top-34 h-[40rem] relative">
          <div className="absolute z-10 rotate-[270deg] top-0 right-0 w-0 h-0 border-l-[200px] border-b-[200px] border-l-transparent border-b-primary">
            <div className="rotate-[135deg] text-center z-20 absolute translate-y-[150%] -translate-x-[120%] text-white font-semibold">10k+ Customer&apos;s Satisfied!</div>
          </div>
          <Image fill className="object-cover scale-x-[-1] object-[0%_15%]" src="/machine.jpeg" alt="Construction Company" />
        </div>
        <div className="flex flex-col flex-grow flex-1 md:mt-0 mt-24">
          <div data-aos="fade-up">
            <div className="text-sm font-medium text-primary leading-none mb-4">About our company</div>
            <div className="leading-tight text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Trusted Groundwork Solutions for <span className="italic mr-2">any</span> Project
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay='150'>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
              The Joke Tax
            </h3>
            <p className="leading-7 text-paragraph mb-6">
              Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
            </p>
            <p className="leading-7 text-paragraph mb-8">
              Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability. Here, we are proud to offer environmentally conscious groundworks services in NW2 London, delivering smart, reliable, and future-ready solutions tailored to each site&apos;s unique needs.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay='250'>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
              The Joke Tax
            </h3>
            <p className="leading-7 text-paragraph mb-6">
              Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
            </p>
          </div>
          <div className="leading-7 flex flex-wrap gap-x-4 gap-y-4">
            <div data-aos="fade-up" data-aos-delay='250'>
              <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={32} /> 260+ Projects Completed
            </div>
            <div data-aos="fade-up" data-aos-delay='300'>
              <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={32} /> 260+ Projects Completed
            </div>
            <div data-aos="fade-up" data-aos-delay='350'>
              <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={32} /> 260+ Projects Completed
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white pb-20 md:pb-40">
      <div className="container mx-auto w-[90%] flex">
        <div data-aos='flip-up' className="md:p-12 p-8 w-full bg-primary text-primary-foreground flex-wrap flex items-center rounded-sm justify-between gap-y-4 md:gap-y-16">
          <div data-aos='fade-up' data-aos-delay='150'>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={1200} startValue={1000} />+</div>
            <div className="font-medium text-sm lg:text-base leading-7 italic">Infrastructure Projects Completed</div>
          </div>
          <div data-aos='fade-up' data-aos-delay='250'>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
            <div className="font-medium text-sm lg:text-base leading-7 italic">Projects Completed</div>
          </div>
          <div data-aos='fade-up' data-aos-delay='350'>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={95} startValue={89} />%</div>
            <div className="font-medium text-sm md:text-base leading-7 italic">Client Satisfaction Rate Across the UK</div>
          </div>
          <div data-aos='fade-up' data-aos-delay='450'>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
            <div className="font-medium text-sm md:text-base leading-7 italic">Public Sector Contracts Delivered</div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-20 text-white bg-neutral">
      <div className="w-[90%] md:w-[85%] mx-auto grid md:grid-cols-4">
        <div className="relative col-span-1 h-100">
          <Image
            fill
            alt="Person"
            className="object-cover object-[25%_0%]"
            src="/engineer.jpg"
          />
        </div>
        <div className="col-span-1 md:col-span-3 mt-10 md:mt-0 md:pl-40 grow">
          <div className="mb-20 text-3xl font-light">“We are constantly looking for situations where we are able to add value in a way that our competitors don&apos;t.”</div>
          <div className="flex flex-col justify-self-end w-max">
            <div className="mb-2.5 text-xl font-medium">Joseph Baratta</div>
            <div className="font-light">Global Head of Private Equity Strategies</div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto w-[90%] md:w-[85%] py-24 md:py-36 flex relative">
      <Image data-aos='fade-up' className="object-cover translate-x-[-10%] absolute -z-50 lg:block hidden" src="/man_side.webp" alt="Construction Worker" fill />
      <div className="lg:w-1/2 hidden lg:block"></div>
      <div className="lg:w-1/2 w-full">
        <div data-aos='fade-up' className="text-sm font-medium leading-none mb-4 text-primary">Company History</div>
        <div data-aos='fade-up' className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-16">
          Building <span className="italic mr-1">Strength</span> for a Lasting Future
        </div>
        <div className="flex flex-col gap-y-12">
          <HistoryCard delay='150' title={'Trusted Groundwork'} subtitle={'Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods.'} />
          <HistoryCard delay='200' title={'Trusted Groundwork'} subtitle={'Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods.'} />
          <HistoryCard delay='250' title={'Trusted Groundwork'} subtitle={'Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods.'} />
        </div>
      </div>
    </div>
  </>)
}
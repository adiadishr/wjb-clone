'use client'

import AuxHero from "@/components/aux-hero";
import HistoryCard from "@/components/history-card";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BadgeCheck, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (<>
    <AuxHero title={'About Us'} />
    <div className="bg-white pb-20">
      <div className="container mx-auto w-[90%] md:w-[85%] flex">
        <div data-aos='flip-up' className="md:p-12 p-8 w-full bg-primary text-primary-foreground flex-wrap flex items-center justify-between gap-y-4 md:gap-y-16">
          <div data-aos='fade-up' data-aos-delay='150'>
            <div className="heading"><NumberTicker value={1200} startValue={1000} />+</div>
            <div className="text-sm lg:text-base font-light">Infrastructure Projects Completed</div>
          </div>
          <div data-aos='fade-up' data-aos-delay='250'>
            <div className="heading"><NumberTicker value={800} startValue={550} />+</div>
            <div className="text-sm lg:text-base font-light">Projects Completed</div>
          </div>
          <div data-aos='fade-up' data-aos-delay='350'>
            <div className="heading"><NumberTicker value={95} startValue={89} />%</div>
            <div className="text-sm md:text-base font-light">Client Satisfaction Rate Across the UK</div>
          </div>
          <div data-aos='fade-up' data-aos-delay='450'>
            <div className="heading"><NumberTicker value={800} startValue={550} />+</div>
            <div className="text-sm md:text-base font-light">Public Sector Contracts Delivered</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="w-[90%] container md:w-[85%] mx-auto pb-30">
        <div className="subheading mb-5">Who we are</div>
        <div className="heading mb-10">At Blackstone, we deliver for investors by building businesses that power tomorrow&apos;s economy.</div>
        <div className="grid md:grid-cols-2 gap-y-10">
          <div className="md:pr-15 col-span-1">
            <div className="relative h-100 md:h-150">
              <Image fill src="/machine.jpeg" alt="Image" className="object-cover" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="subheading mb-5">Build financial security</div>
            <p className="mb-10">Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.</p>
            <div className="subheading mb-5">Build your career</div>
            <p className="mb-10">Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.</p>
            <div className="subheading mb-5">Build strong businesses</div>
            <p className="">Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.</p>
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
        <div data-aos='fade-up' className="gradient-text subheading mb-5">Company History</div>
        <div data-aos='fade-up' className="leading-tight heading mb-15">
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
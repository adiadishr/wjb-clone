'use client'

import AuxHero from "@/components/aux-hero";
import Consultation from "@/components/consultation";
import ContactForm from "@/components/contact-form";
import HistoryCard from "@/components/history-card";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BadgeCheck, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (<>
    <AuxHero title={'About Us'} />
    <div className="bg-white">
      <div className="container px-4 mx-auto py-24 md:py-36 flex md:flex-row flex-col relative gap-x-16">
        <div className="flex md:w-[40%] w-full md:sticky md:top-34 h-[32rem] relative">
          <Image fill className="object-cover scale-x-[-1] object-[0%_15%]" src="/hero-1.jpg" alt="Construction Company" />
        </div>
        <div className="flex flex-col flex-grow flex-1 md:mt-0 mt-24">
          <div className="text-sm font-medium text-muted-foreground leading-none mb-4">About our company</div>
          <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-8">
            Trusted Groundwork Solutions for <span className="italic mr-2">any</span> Project
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            The Joke Tax
          </h3>
          <p className="leading-7 mb-6 text-paragraph">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
          </p>
          <p className="leading-7 mb-8 text-paragraph">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability. Here, we are proud to offer environmentally conscious groundworks services in NW2 London, delivering smart, reliable, and future-ready solutions tailored to each site&apos;s unique needs.
          </p>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            The Joke Tax
          </h3>
          <p className="leading-7 mb-6 text-paragraph">
            Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions, and advanced soil stabilization techniques to minimize environmental impact and ensure long-term land durability.
          </p>
          <p className="leading-7 mb-6 text-paragraph">
            We have:
          </p>
          <div className="leading-7 mb-8 flex flex-wrap gap-x-4 gap-y-4 text-paragraph">
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
        </div>
      </div>
    </div>
    <div className="bg-white pb-24 md:pb-36">
      <div className="container mx-auto px-4 flex">
        <div className="md:p-12 p-8 w-full bg-primary text-primary-foreground flex-wrap flex items-center rounded-sm justify-between gap-y-4 md:gap-y-16">
          <div>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
            <div className="font-medium text-sm lg:text-base leading-7 italic">Projects Completed</div>
          </div>
          <div>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
            <div className="font-medium text-sm lg:text-base leading-7 italic">Projects Completed</div>
          </div>
          <div>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
            <div className="font-medium text-sm lg:text-base leading-7 italic">Projects Completed</div>
          </div>
          <div>
            <div className="font-semibold md:font-bold text-lg lg:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
            <div className="font-medium text-sm lg:text-base leading-7 italic">Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-4 py-24 md:py-36">
        <div className="text-sm font-medium leading-none mb-4 text-neutral-foreground/80 mx-auto max-w-xl">Who are we?</div>
        <div className="leading-tight text-3xl sm:text-4xl md:text-5xl font-pt-serif tracking-tight mb-8 mx-auto max-w-xl">
          A message from <span className="italic mr-1">the CEO</span>
        </div>
        <p className="leading-7 max-w-xl mx-auto mb-6"> The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
        </p>
        <p className="leading-7 max-w-xl mx-auto mb-8"> The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
        </p>
        <p className="leading-7 max-w-xl mx-auto">
          Signed, <br />
          <span className="font-semibold">John Doe</span><br />
        </p>
      </div>
    </div>
    <div className="container mx-auto px-4 py-24 md:py-36 flex">
      <div className="lg:w-1/2 hidden lg:block"></div>
      <div className="lg:w-1/2 w-full">
        <div className="text-sm font-medium leading-none mb-4 text-primary">Company History</div>
        <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-12">
          Building <span className="italic mr-1">Strength</span> for a Lasting Future
        </div>
        <div className="flex flex-col gap-y-8 md:gap-y-12">
          <HistoryCard title={'Trusted Groundwork'} subtitle={'Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods.'} />
          <HistoryCard title={'Trusted Groundwork'} subtitle={'Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods.'} />
          <HistoryCard title={'Trusted Groundwork'} subtitle={'Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods.'} />
        </div>
      </div>
    </div>
    <ContactForm />
  </>)
}
import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";

export default function Consultation() {
  return (<>
    <div data-aos='fade-up' className="bg-neutral text-neutral-foreground">
      <div className="container w-[90%] mx-auto py-20 md:pt-36 md:pb-48 flex md:flex-row flex-col relative">
        <div className="relative">
          <div data-aos='flip-right' className="hidden md:block absolute w-150 h-100">
            <Image className="absolute -translate-x-15 -translate-y-25" src="/engineer.png" alt="Construction Worker Smiling" fill />
          </div>
        </div>
        <div className="md:w-2/3 ml-auto z-20 w-full">
          <div data-aos='fade-up' className="text-sm font-medium leading-none mb-4">Get Consultation</div>
          <div data-aos='fade-up' className="leading-tight text-3xl sm:text-4xl font-semibold md:text-5xl tracking-tight max-w-max mb-8 w-max">
            Schedule a free Consultation!
          </div>
          <Button data-aos='fade-up' className={'flex items-center'} size={'lg'}><PhoneCall size={16} />Contact Us</Button>
        </div>
      </div>
    </div>
    <div className="container mx-auto w-[90%] z-30 hidden md:flex">
      <div data-aos='flip-up' data-aos-offset="-100" className="p-12 w-full bg-primary z-30 text-primary-foreground hidden md:flex items-center rounded-sm justify-between gap-y-16 translate-y-[-50%]">
        <div data-aos='fade-up' data-aos-delay='100' data-aos-offset="-100"
        >
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={1200} startValue={1000} />+</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Infrastructure Projects Completed</div>
        </div>
        <div data-aos='fade-up' data-aos-delay='150' data-aos-offset="-100"
        >
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={25} startValue={10} />+</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Years of Engineering Excellence</div>
        </div>
        <div data-aos='fade-up' data-aos-delay='200' data-aos-offset="-100"
        >
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={95} startValue={89} />%</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Client Satisfaction Rate Across the UK</div>
        </div>
        <div data-aos='fade-up' data-aos-delay='250' data-aos-offset="-100"
        >
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Public Sector Contracts Delivered</div>
        </div>
      </div>
    </div>
  </>)
}
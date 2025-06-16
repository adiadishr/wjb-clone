import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";
import Link from "next/link";

export default function Consultation() {
  return (<>
    <div data-aos='fade-up' className="bg-neutral text-neutral-foreground">
      <div className="container w-[90%] mx-auto py-20 lg:pt-36 lg:pb-48 flex lg:flex-row flex-col relative">
        <div className="relative">
          <div data-aos='flip-right' className="hidden lg:block absolute w-150 h-100">
            <Image className="absolute -translate-x-15 -translate-y-25" src="/engineer.png" alt="Construction Worker Smiling" fill />
          </div>
        </div>
        <div className="lg:w-2/3 ml-auto z-20 w-full">
          <div data-aos='fade-up' className="text-sm font-medium leading-none mb-4">Get Consultation</div>
          <div data-aos='fade-up' className="leading-tight text-3xl sm:text-4xl font-semibold lg:text-5xl tracking-tight max-w-max mb-8 w-max">
            Schedule a free Consultation!
          </div>
          <Link href="/contact" className="btn w-max gap-2" size={'lg'}><PhoneCall fill="white" size={16} />Contact Us</Link>
        </div>
      </div>
    </div>
    <div className="container -translate-y-1/2 mx-auto w-[90%] md:w-[85%] flex">
      <div data-aos='flip-up' data-aos-offset='-150' className="md:p-12 p-8 w-full bg-primary text-primary-foreground flex-wrap flex items-center justify-between gap-y-4 md:gap-y-16">
        <div data-aos='fade-up' ata-aos-offset='-150' data-aos-delay='150'>
          <div className="heading"><NumberTicker value={1200} startValue={1000} />+</div>
          <div className="text-sm lg:text-base font-light">Infrastructure Projects Completed</div>
        </div>
        <div data-aos='fade-up' ata-aos-offset='-150' data-aos-delay='250'>
          <div className="heading"><NumberTicker value={800} startValue={550} />+</div>
          <div className="text-sm lg:text-base font-light">Projects Completed</div>
        </div>
        <div data-aos='fade-up' ata-aos-offset='-150' data-aos-delay='350'>
          <div className="heading"><NumberTicker value={95} startValue={89} />%</div>
          <div className="text-sm md:text-base font-light">Client Satisfaction Rate Across the UK</div>
        </div>
        <div data-aos='fade-up' ata-aos-offset='-150' data-aos-delay='450'>
          <div className="heading"><NumberTicker value={800} startValue={550} />+</div>
          <div className="text-sm md:text-base font-light">Public Sector Contracts Delivered</div>
        </div>
      </div>
    </div>
  </>)
}
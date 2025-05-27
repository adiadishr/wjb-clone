import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { services } from "@/constants/services";
import Link from "next/link";

export default function Services({ page }) {
  return (<>
    <div className="relative bg-white">
      <div className="container w-[90%] md:w-[85%] mx-auto py-24 md:py-36">
        <div data-aos='fade-up' className="text-sm font-medium leading-none mb-4 text-primary text-center">Our Services</div>
        <div data-aos='fade-up' data-aos-delay='100' className={`leading-tight text-4xl md:text-5xl font-semibold tracking-tight text-center ${page ? 'mb-24' : 'mb-8'}`}>
          Discover Our <span className="italic">Exceptional</span><br /> Engineering Solutions
        </div>
        {!page &&
          <div data-aos='fade-up' data-aos-delay='150' className="w-full flex justify-center mb-24">
            <Button size={'lg'} className='w-max'>Learn More<ChevronRight size={16} /></Button>
          </div>
        }
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} data-aos='fade-up' data-aos-delay={`${100 + (index * 50)}`} key={index} className="bg-white z-10 p-8 col-span-1 relative cursor-pointer group overflow-hidden h-96 md:h-72">
              <Image fill className="object-cover group-hover:saturate-100 transition-all saturate-100 md:saturate-0 duration-[600ms] ease-quart group-hover:scale-110 -z-20 pointer-events-none selection:bg-transparent" alt="background" src={service.src} />
              <div className="inset-0 bg-black/35 absolute -z-10"></div>
              <div className="z-20 static flex flex-col justify-end h-full">
                <h3 className="scroll-m-20 text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-background group-hover:text-white">
                  {service.title}
                </h3>
                <p className="leading-5 md:leading-7 text-sm md:text-base line-clamp-2 md:mb-[-5rem] duration-500 ease-quart group-hover:mb-0 text-white">
                  {service.description}
                </p>
                <ArrowRight className="absolute top-8 right-8 text-background group-hover:text-white duration-300 group-hover:rotate-[-45deg]" size={24} strokeWidth={4} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>)
}
import AuxHero from "@/components/aux-hero";
import ContactForm from "@/components/contact-form";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (<>
    <AuxHero title={'Services'} />
    <div className="container mx-auto px-4 py-24 md:py-36">
      <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Our Services</div>
      <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-24 text-center">
        Discover Our <span className="italic">Exceptional</span><br /> Engineering Solutions
      </div>
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
              <ArrowRight className="absolute top-8 right-8 text-background group-hover:text-white duration-300 group-hover:rotate-[-45deg]" size={24} strokeWidth={2} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <ContactForm />

  </>
  )
}
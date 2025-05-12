import AuxHero from "@/components/aux-hero";
import ContactForm from "@/components/contact-form";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (<>
    <AuxHero title={'Blogs'} />
    <div className="container mx-auto px-4 py-24 md:py-36">
      <div className="text-sm font-medium leading-none mb-4 text-primary text-center">Our Services</div>
      <div className="leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight mb-24 text-center">
        Discover Our <span className="italic">Exceptional</span><br /> Engineering Solutions
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="bg-white text-muted-foreground border-muted-foreground/50 p-8 col-span-1 border md:w-full rounded-sm relative selection:bg-transparent cursor-default">
            <div className="h-px w-full bg-neutral/50 my-8"></div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 text-foreground">
              The Joke Tax
            </h3>
            <p className="leading-7 mb-6">
              Many modern groundworks companies prioritize sustainable site preparation by utilizing eco-friendly excavation methods, efficient drainage solutions
            </p>
            <div className="absolute top-6 right-8 flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer text-sm md:text-base">Read More <span><ChevronRight size={16} /></span></div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}
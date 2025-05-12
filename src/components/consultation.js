import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";

export default function Consultation() {
  return (<>
    <div className="bg-neutral px-4 text-neutral-foreground">
      <div className="container mx-auto pb-32 pt-16 md:pt-36 md:pb-48 flex md:flex-row flex-col relative">
        <Image className="z-10 translate-x-[-1rem]" src="/shape.webp" alt="Man" fill />
        <div className="w-1/3 hidden md:block relative">
          <Image className="absolute -bottom-32 right-1/2 translate-x-1/2" src="/woman.webp" alt="Construction Worker Smiling" height={0} width={280} />
        </div>
        <div className="md:w-2/3 z-20 w-full">
          <div className="text-sm font-medium leading-none mb-4">Get Consultation</div>
          <div className="leading-tight text-3xl sm:text-4xl font-semibold md:text-5xl tracking-tight max-w-max mb-8 w-max">
            Schedule a free Consultation!
          </div>
          <Button className={'flex items-center'} size={'lg'}><PhoneCall size={16} />Contact Us</Button>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 z-30 hidden md:flex">
      <div className="p-12 w-full bg-primary z-30 text-primary-foreground hidden md:flex items-center rounded-sm justify-between gap-y-16 translate-y-[-50%]">
        <div>
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
        </div>
        <div>
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
        </div>
        <div>
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
        </div>
        <div>
          <div className="font-bold text-lg md:text-5xl"><NumberTicker value={800} startValue={550} />+</div>
          <div className="font-medium text-sm md:text-base leading-7 italic">Projects Completed</div>
        </div>
      </div>
    </div>
  </>)
}
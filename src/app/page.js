import Nav from "@/components/navigation";
import { ArrowRight, Box, CircleUserRound, LucideHome, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (<>
    <Nav />
    {/* Hero */}
    <div className="p-4">
      <div className="relative flex flex-col justify-center w-full h-[calc(85dvh-2rem)] p-4 md:h-[calc(100dvh-2rem)] px-8 overflow-hidden text-white rounded-4xl">
        <Image className="object-cover -z-10 scale-x-[1] object-[50%_75%] md:object-[0%_75%]" src="/hero-5.jpg" fill alt="Background" />
        <div className="absolute inset-0 w-full h-full bg-black/50 -z-10"></div>
        <div className="relative size-24 mx-auto">
          <Image
            fill
            alt="logo"
            className="object-contain"
            src="/logo-top.png"
          />
        </div>
        <div className="text-center headline">
          Matching Talent,<br />With Opportunity
        </div>
        <div className="flex items-center justify-between w-full py-8 absolute bottom-0 pr-12">
          <div>A Forbes Best Recruitment Company <br /> & Trusted Partner <span className="font-bold ">In Your Success</span></div>
          <div className="relative flex items-center justify-center p-4 overflow-hidden text-black bg-white rounded-full hover:animate-spin">
            <ArrowRight size={16} />
          </div>
        </div>
      </div >
    </div >
    {/* About */}
    <div className="container w-[90%] py-20 mx-auto lg:py-40">
      <div className="relative flex flex-col w-full h-full lg:flex-row gap-x-12 gap-y-12">
        {/* 1st Sibling */}
        <div className="basis-full lg:basis-1/2 lg:order-1 order-2">
          <div className="relative h-96 lg:h-full w-full overflow-hidden rounded-2xl lg:rounded-4xl">
            <Image className="object-cover" src="/hero-4.jpg" fill alt="Background" />
          </div>
        </div>
        {/* 2nd Sibling */}
        <div className="flex flex-col order-1 lg:basis-1/2 basis-full lg:order-2">
          <div className="px-3 font-normal tracking-tighter py-0.5 border rounded-full border-black/20 w-max mb-6">About Us</div>
          <div className="mb-8 headline">Empowering Global Workforce with <span className="text-orange-400">Skilled Nepalese</span> Talent</div>
          <div className="mb-3 text-base/7">
            Asia Recruitment Nepal is a truly independant human resource consultancy which supplies Nepalese skilled, semiskilled, technical and professional human resources abroad.
          </div>
          <div className="text-base/7">
            Asia Recruitment Nepal is a truly independant human resource consultancy which supplies Nepalese skilled, semiskilled, technical and professional human resources abroad.
          </div>
        </div>
      </div>
    </div>
    {/* Why Nepalese */}
    < div className="container w-[90%] py-20 mx-auto md:py-40 bg-neutral-50" >
      <div className="mb-4 text-center headline">So, why hire from Nepal?</div>
      <div className="max-w-3xl mx-auto mb-8 text-center md:mb-16 md:text-lg/7">Over the past one and a half decade, an increasing number of employers from different countries are showing their keen interest in hiring Professionals from Nepal.</div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero-1.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">01</div>
            <div className="">Nepali workers are eminent for their hard work, high sense of responsibility and discipline.</div>
          </div>
        </div>
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">02</div>
            <div className="">Nepali professionals are known for their strong work ethic and devotion to their duties.</div>
          </div>
        </div>
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero-3.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">03</div>
            <div className="">Procedures and formalities for recruiting Nepali employees are simple.</div>
          </div>
        </div>
      </div>
    </div >
    {/*  */}
  </>)
}
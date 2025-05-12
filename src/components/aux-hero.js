import Image from "next/image";

export default function AuxHero({ title, breadcrumbs }) {
  return (
    <div className="relative">
      <Image data-aos='fade-left' fill className="object-cover scale-x-[-1] object-[0%_50%] brightness-50 -z-10" src="/hero-1.jpg" alt="Construction Company" />
      <div className="container mx-auto px-4 mt-[60px] md:mt-[100px] min-h-[calc(100dvh-150px)] md:min-h-[calc(100dvh-200px)] flex flex-col justify-center">
        <div data-aos='fade-up' data-aos-delay='150' className="md:text-left text-background leading-tight text-center text-4xl md:text-5xl font-pt-serif tracking-tight mb-4">
          {title}
        </div>
        <div data-aos='fade-up' data-aos-delay='200' className="text-neutral-foreground md:text-left text-center w-full mb-8">
          Home / About Us
        </div>
      </div>
    </div>
  )
}
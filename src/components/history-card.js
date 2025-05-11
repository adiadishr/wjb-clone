import Image from "next/image";

export default function HistoryCard({date, title, subtitle}) {
  return (
    <div className="flex w-full gap-4 lg:gap-8">
      <div className="px-12 bg-primary text-primary-foreground flex items-center justify-center text-center scroll-m-20 text-lg font-semibold tracking-tight">22nd July<br /> 2014</div>
      <div className="bg-white flex">
        <div className="relative w-1/3">
          <Image fill className="object-cover" src="/hero-1.jpg" alt="Construction Company" />
        </div>
        <div className="p-8 w-2/3">
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mb-4">
            {title}
          </h3>
          <p className="text-sm text-paragraph">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
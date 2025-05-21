import AuxHero from "@/components/aux-hero";
import { services } from "@/constants/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { slug } = await params;
    const service = services.find(item => item.slug === slug)
    if (!service) {
        notFound()
    }
    return (<>
        <AuxHero title={service.title} />
        <div className="bg-white">
            <div className="container mx-auto w-[90%] py-24 md:py-40">
                <div className="flex w-full md:flex-row flex-col gap-12 lg:gap-24 relative">
                    <div className="md:w-2/3">
                        <div className="relative w-full h-[36rem] mb-8">
                            <Image className="object-cover" fill alt={service.title} src={service.src} />
                        </div>
                        <div className="text-2xl font-semibold tracking-tight mb-4">{service.title}</div>
                        <div className="text-base/7">{service.description}</div>
                    </div>
                    <div className="md:w-1/3 md:sticky md:top-[calc(100px)] h-full">
                        <div className="bg-neutral-100 h-full p-[10%]">
                            <div className="text-xl lg:text-2xl font-semibold tracking-tight mb-4">All Services</div>
                            <div className="flex mb-8">
                                <div className="h-1 w-2/12 bg-primary"></div>
                                <div className="h-1 w-8/12 bg-neutral-300"></div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                {services.map((service, idx) => (
                                    <Link key={idx} href={`/services/${service.slug}`} className="bg-white p-4 lg:text-lg text-muted-foreground cursor-pointer hover:bg-transparent hover:text-white duration-700 ease-quart shadow relative z-10 group justify-between items-center flex">
                                        <div className="inset-0 absolute bg-primary/80 w-0 group-hover:w-full duration-700 -z-10" />
                                        {service.title}
                                        <ArrowRight className="text-white" size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
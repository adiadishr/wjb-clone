import AuxHero from "@/components/aux-hero";
import { services } from "@/constants/services";
import { ArrowRight, BadgeCheck } from "lucide-react";
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
            <div className="container mx-auto w-[90%] pb-30 ">
                <div className="grid grid-cols-3 relative gap-10">
                    <div className="md:col-span-2 order-2 flex flex-col gap-y-6">
                        <div className="relative w-full h-[36rem] mb-8">
                            <Image className="object-cover" fill alt={service.title} src={service.src} />
                        </div>
                        <div className="text-2xl font-semibold tracking-tight">{service.title}</div>
                        <div className="text-base/7 text-paragraph">{service.description}</div>
                        <div className="text-base/7 text-paragraph">Groundworks are the foundation of any successful construction project, and experienced construction companies in London recognize their critical importance. This phase includes excavation, land clearing, drainage setup, and soil stabilization to prepare the site for safe structural development. Whether you&apos;re working with an RC frame construction company in London or planning infrastructure upgrades, proper groundwork ensures stability, prevents subsidence, and supports heavy structural loads. From trenching to foundation laying, every step must meet safety and environmental standards. Using advanced machinery and skilled labor, contractors deliver efficient, high-quality results. Projects involving retaining wall construction services in also benefit from expert groundwork, as retaining walls rely heavily on proper soil analysis and load-bearing preparation.</div>
                        <div className="text-2xl font-semibold tracking-tight">What are the benefits?</div>
                        <div className="text-base/7 text-paragraph mb-6">{service.description}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-6">
                            <div className="leading-7 flex flex-col gap-6 sm:col-span-1 border-l h-max border-primary pl-6">
                                <div data-aos="fade-up">
                                    <BadgeCheck className="inline-block mr-2" stroke="white" fill="var(--primary)" size={24} /> 260+ Projects Completed
                                </div>
                                <div data-aos="fade-up" data-aos-delay='50'>
                                    <BadgeCheck className="inline-block mr-2" stroke="white" fill="var(--primary)" size={24} /> 260+ Projects Completed
                                </div>
                                <div data-aos="fade-up" data-aos-delay='100'>
                                    <BadgeCheck className="inline-block mr-2" stroke="white" fill="var(--primary)" size={24} /> 260+ Projects Completed
                                </div>
                            </div>
                            <div className="relative h-72 sm:col-span-2">
                                <Image src={service.src} fill alt={service.slug} className="object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 order-1 md:sticky md:top-[calc(100px)] h-max">
                        <div className="bg-neutral-100 h-full p-[7.5%]">
                            <div className="text-lg lg:text-xl font-semibold tracking-tight mb-4">All Services</div>
                            <div className="flex mb-8">
                                <div className="h-1 w-2/12 bg-primary"></div>
                                <div className="h-1 w-10/12 bg-neutral-300"></div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                {services.map((service, idx) => (
                                    <Link key={idx} href={`/services/${service.slug}`} className="bg-white p-4 cursor-pointer hover:bg-transparent hover:text-white duration-700 ease-quart shadow relative z-10 group justify-between items-center flex">
                                        <div className="inset-0 absolute bg-primary w-0 group-hover:w-full duration-700 -z-10" />
                                        {service.title}
                                        <ArrowRight className="text-white left-0 absolute group-hover:left-[90%] duration-700" size={20} />
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
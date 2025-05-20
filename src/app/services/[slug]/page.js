import AuxHero from "@/components/aux-hero";
import { services } from "@/constants/services";
import Image from "next/image";
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
                <div className="flex w-full md:flex-row flex-col gap-24 relative">
                    <div className="w-2/3">
                        <div className="relative w-full h-[36rem]">
                            <Image className="object-cover" fill alt={service.title} src={service.src} />
                        </div>
                    </div>
                    <div className="w-1/3 md:sticky md:top-[calc(100px+2rem)] h-max">
                        <div className="bg-neutral-100 h-96">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
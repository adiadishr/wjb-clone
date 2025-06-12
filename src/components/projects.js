import { projects } from "@/constants/projects";
import { FocusCards } from "./ui/focus-cards";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Projects({ page }) {
    return (<>
        <div className="w-[90%] md:w-[85%] mx-auto pb-20">
            <h5 data-aos='fade-up' className="relative mb-2.5 md:text-xl text-center uppercase text-primary">Projects</h5>
            <div data-aos='fade-up' data-aos-delay='150' className="leading-tight text-4xl md:text-5xl tracking-tight mb-15 font-semibold text-center">
                Let&apos;s see out <span className="italic">latest</span> projects
            </div>
            {!page &&
                <div data-aos='fade-up' data-aos-delay='150' className="w-full flex justify-center mb-15">
                    <Button asChild size={'lg'} className='w-max'><Link href="/projects">Learn More<ChevronRight size={16} /></Link></Button>
                </div>
            }
            <FocusCards cards={projects} />
        </div>
    </>)
}
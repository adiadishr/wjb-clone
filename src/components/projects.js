import { projects } from "@/constants/projects";
import { FocusCards } from "./ui/focus-cards";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Projects({ page }) {
    return (<>
        <div className="w-[90%] md:w-[85%] mx-auto md:py-36 py-24">
            <div data-aos='fade-up' className="text-sm font-medium leading-none mb-4 text-primary text-center">Latest Projects</div>
            <div data-aos='fade-up' data-aos-delay='100' className={`leading-tight text-4xl md:text-5xl font-semibold tracking-tight text-center ${page ? 'mb-24' : 'mb-8'}`}>
                Let’s See Our <span className="italic">Latest</span> Projects
            </div>
            {!page &&
                <div data-aos='fade-up' data-aos-delay='150' className="w-full flex justify-center mb-24">
                    <Button asChild size={'lg'} className='w-max'><Link href="/projects">Learn More<ChevronRight size={16} /></Link></Button>
                </div>
            }
            <FocusCards cards={projects} />
        </div>
    </>)
}
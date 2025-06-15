import { projects } from "@/constants/projects";
import { FocusCards } from "./ui/focus-cards";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Projects({ page }) {
    return (<>
        <div className="bg-white">
            <div className="w-[90%] md:w-[85%] mx-auto py-20">
                <h5 data-aos='fade-up' className="relative mb-2.5 md:text-xl text-center uppercase text-primary">Projects</h5>
                <div data-aos='fade-up' data-aos-delay='150' className="heading mb-10 font-medium text-center">
                    Let&apos;s see our <span className="italic">latest</span> projects
                </div>
                {!page &&
                    <div data-aos='fade-up' data-aos-delay='150' className="w-full flex justify-center mb-15">
                        <Link href="/projects" className='btn'>Learn More<ChevronRight size={16} /></Link>
                    </div>
                }
                <FocusCards cards={projects} />
            </div>
        </div>
    </>)
}
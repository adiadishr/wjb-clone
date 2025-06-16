import AuxHero from "@/components/aux-hero";
import { projects } from "@/constants/projects";
import { ArrowRight, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug)
  if (!project) {
    notFound()
  }
  return (<>
    <AuxHero title="Project Details" src="/hero-1.jpeg" objPosition="object-[0%_25%]" shape={Box} />
    <div className="bg-white">
      <div className="container mx-auto md:w-[85%] w-[90%] pt-0 pb-20">
        <div className="relative w-full h-[30rem]">
          <Image fill src={project.src} alt={project.title} className="object-cover" />
        </div>
        <div className="bg-neutral-100 my-10 border-t-2 border-primary py-10">
          <div className="w-[90%] mx-auto flex flex-wrap gap-x-8 gap-y-4 justify-around items-center">
            <div>
              <div className="font-bold text-foreground">Project Category:</div>
              <div className="text-paragraph">Ground Works</div>
            </div>
            <div>
              <div className="font-bold text-foreground">Clients:</div>
              <div className="text-paragraph">Caper Monar</div>
            </div>
            <div>
              <div className="font-bold text-foreground">Project Date:</div>
              <div className="text-paragraph">13 June, 2024</div>
            </div>
            <div>
              <div className="font-bold text-foreground">Avenue End Date:</div>
              <div className="text-paragraph">22 July, 2024</div>
            </div>
            <div>
              <div className="font-bold text-foreground">Locations:</div>
              <div className="text-paragraph">Caper Monar college SE12 ACS</div>
            </div>
            <div>
              <div className="font-bold text-foreground">Contract Value:</div>
              <div className="text-paragraph">£1.218 Million</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-20 gap-y-10">
          <div className="relative flex flex-col gap-y-6 col-span-12 lg:col-span-7">
            <div className="heading gradient-text tracking-tight">{project.title}</div>
            <div className="text-base/6 text-paragraph">Groundworks construction services in London are essential for ensuring the stability and durability of any building project. Groundworks companies within of provide critical services such as excavation, land grading, and foundation laying. These companies play a significant role in preparing the site for construction, addressing key tasks like drainage solutions, soil compaction, and vegetation clearance. By choosing groundworks companies near me London, you can ensure that your project benefits from the expertise of skilled contractors who are familiar with the local area and regulations. Whether you&apos;re seeking ground works contractors in London or a reliable civil engineering company near within , the foundation of your building is in capable hands.
            </div>
            <div className="text-base/6 text-paragraph">The importance of quality groundwork in construction cannot be overstated. It lays the groundwork (literally!) for a strong, stable structure by preparing the land and ensuring proper drainage, preventing future structural problems. From site preparation to foundation work, groundworks involve advanced tools and engineering precision. By utilizing groundworks services near , you ensure that your project is built on a solid foundation, capable of withstanding the the test of time.</div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative w-full h-72 flex items-center justify-center">
              <div className="z-10 inset-0 bg-black/80 absolute" />
              <Image fill src="/silhouette.jpeg" alt="Silhouette" className="object-cover z-0" />
              <div className="z-20 flex flex-col gap-y-6">
                <div className="text-primary font-semibold text-center text-2xl">Contact for Inquiry</div>
                <div className="text-white font-semibold text-center text-2xl">We are here to assist you!</div>
                <Link href="/contact" className="bg-primary w-max mx-auto px-6 hover:pr-12 py-3 text-white cursor-pointer hover:bg-transparent hover:text-black duration-700 shadow relative z-10 group justify-between items-center flex uppercase">
                  <div className="inset-0 absolute bg-white w-0 group-hover:w-full duration-700 -z-10 h-1/2" />
                  <div className="right-0 absolute bg-white w-0 group-hover:w-full duration-700 -z-10 h-1/2 top-1/2 scale-x-[-1]" />
                  Get a Quote
                  <ArrowRight className="text-white group-hover:text-black left-0 opacity-0 group-hover:opacity-100 absolute group-hover:left-[80%] duration-700" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
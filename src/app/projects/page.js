import AuxHero from "@/components/aux-hero";
import Projects from "@/components/projects";
import { Box } from "lucide-react";

export default function Page() {
  return (<>
    <AuxHero title={'Portfolio'} src="/hero-1.jpeg" objPosition="object-[0%_25%]" shape={Box}/>
    <Projects page />
  </>
  )
}
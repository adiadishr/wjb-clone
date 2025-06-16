import AuxHero from "@/components/aux-hero";
import Services from "@/components/services";
import { Server } from "lucide-react";

export default function Page() {
  return (<>
    <AuxHero title={'Services'} src="/1.jpeg" shape={Server} shapeColor="bg-gradient-to-br from-primary to-yellow-300" />
    <Services page />
  </>
  )
}
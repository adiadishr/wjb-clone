import AuxHero from "@/components/aux-hero";
import ContactForm from "@/components/contact-form";
import Services from "@/components/services";
import { TimelineDemo } from "@/components/timeline";

export default function Page() {
  return (<>
    <AuxHero title={'Services'} />
    <Services page />
  </>
  )
}
import AuxHero from "@/components/aux-hero";
import Blogs from "@/components/blogs";
import { Book } from "lucide-react";

export default function Page() {
  return (<>
    <AuxHero title={'Blogs'} objPosition="object-[0%_25%]" src="/before.jpg" shape={Book} shapeColor="bg-gradient-to-br from-primary to-yellow-300" />
    <Blogs page />
  </>
  )
}
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AuxHero({ title, src }) {
  return (<>
    <div className="bg-white text-black">
      <div className="w-[90%] container md:w-[85%] mx-auto pt-35 pb-20">
        <div className="grid grid-cols-1 pb-20 md:grid-cols-2">
          <h1 className="mt-10 mb-10 text-5xl text-center md:mb-0 md:text-start">
            {title}
          </h1>
          <h5 className="self-end text-xl text-center md:text-start md:pl-20">
            We extend our heartfelt thanks to our associates, partners, clients, and customers, whose support has been instrumental in our success.
          </h5>
        </div>
        <div className="relative w-full h-125">
          <Image
            className="object-cover"
            fill
            src={src ? src : "/silhouette.jpeg"}
            alt="Image"
          />
        </div>
      </div>
    </div>
  </>)
}
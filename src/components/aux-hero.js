import { cn } from "@/lib/utils";
import { House } from "lucide-react";
import Image from "next/image";

export default function AuxHero({ title, src }) {
  return (<>
    <div className="bg-white text-black">
      <div className="relative w-full h-80">
        <div className="bg-red-500 p-7.5 rounded-full absolute translate-x-1/2 right-1/2 -bottom-1/2 -translate-y-[85%] z-10 flex items-center justify-center text-white">
          <House size={60} />
        </div>
        <Image
          className="object-cover absolute inset-0 brightness-50"
          fill
          src={src ? src : "/silhouette.jpeg"}
          alt="Image"
        />
      </div>
      <div className="w-[90%] container md:w-[85%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h1 className="mt-10 mb-10 heading text-center font-medium gradient-text md:mb-0 md:text-start">
            {title}
          </h1>
          <h5 className="self-end text-xl text-center md:text-start md:pl-20">
            We extend our heartfelt thanks to our associates, partners, clients, and customers, whose support has been instrumental in our success.
          </h5>
        </div>
      </div>
    </div>
  </>)
}
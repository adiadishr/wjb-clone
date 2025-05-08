'use client';

import { cn } from "@/lib/utils";
import { Mail, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { Button } from "./ui/button";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="h-[40px] hidden md:block bg-neutral text-neutral-foreground">
        <div className="container mx-auto px-[5%] items-center flex h-full">
          <div className="flex items-center divide-x">
            <div className="flex items-center gap-2 pr-2 hover:underline cursor-pointer text-sm font-medium leading-none">
              <PhoneCall size={16} />
              020 3754 1809
            </div>
            <div className="flex items-center gap-2 pl-2 hover:underline cursor-pointer text-sm font-medium leading-none">
              <Mail size={16} />
              info@wjbgroundworks.com
            </div>
          </div>
        </div>
      </div>
      <nav className="h-[60px] bg-white">
        <div className="container mx-auto px-[5%] flex items-center h-full justify-between w-full">
          <div className="relative">
            <Image className="object-cover" src="/logo.webp" height={0} width={100} alt="Logo" />
          </div>
          <div className="lg:flex items-center gap-4 text-gray-900 font-medium tracking-tight hidden">
            <a href="/services" className={cn(pathname === '/' && 'text-primary')}>Home</a>
            <a href="/about" className={cn(pathname === '/about' && 'text-primary')}>About Us</a>
            <a href="/contact" className={cn(pathname === '/services' && 'text-primary')}>Services</a>
            <a href="/contact" className={cn(pathname === '/services' && 'text-primary')}>Portfolio</a>
            <a href="/contact" className={cn(pathname === '/services' && 'text-primary')}>Privacy Policy</a>
            <a href="/contact" className={cn(pathname === '/services' && 'text-primary')}>Blogs</a>
          </div>
          <Button size={'lg'}>Discover More</Button>
        </div>
      </nav>
    </div>
  )
}
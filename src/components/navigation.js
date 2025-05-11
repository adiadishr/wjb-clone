'use client';

import { cn } from "@/lib/utils";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { Button } from "./ui/button";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="h-[40px] hidden md:block bg-neutral text-neutral-foreground">
        <div className="container mx-auto px-4 items-center justify-between flex h-full">
          <div className="flex items-center divide-x divide-background">
            <div className="flex items-center gap-2 pr-2 hover:underline cursor-pointer text-sm font-medium leading-none">
              <PhoneCall size={16} />
              020 3754 1809
            </div>
            <div className="flex items-center gap-2 px-2 hover:underline cursor-pointer text-sm font-medium leading-none">
              <Mail size={16} />
              info@wjbgroundworks.com
            </div>
            <div className="flex items-center gap-2 pl-2 hover:underline cursor-pointer text-sm font-medium leading-none">
              <MapPin size={16} />
              info@wjbgroundworks.com
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Facebook className="hover:text-white cursor-pointer" size={18.5} />
            <Instagram className="hover:text-white cursor-pointer" size={18.5} />
            <Linkedin className="hover:text-white cursor-pointer" size={18.5} />
          </div>
        </div>
      </div>
      <nav className="h-[60px] bg-white">
        <div className="container mx-auto px-4 flex items-center h-full justify-between w-full">
          <div className="relative">
            <Image className="object-cover" src="/logo.webp" height={0} width={100} alt="Logo" />
          </div>
          <div className="lg:flex items-center gap-4 text-gray-900 text-sm font-semibold uppercase hidden">
            <Link href="/" className={cn('duration-300', pathname === '/' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Home</Link>
            <Link href="/about" className={cn('duration-300', pathname === '/about' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>About Us</Link>
            <Link href="/services" className={cn('duration-300', pathname === '/services' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Services</Link>
            <Link href="/portfolio" className={cn('duration-300', pathname === '/portfolio' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Portfolio</Link>
            <Link href="/privacy-policy" className={cn('duration-300', pathname === '/privacy-policy' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Privacy Policy</Link>
            <Link href="/blogs" className={cn('duration-300', pathname === '/blogs' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Blogs</Link>
          </div>
          <Button className="flex duration-500 !pl-10 hover:!pl-3 hover:!pr-10 overflow-hidden items-center group relative"><ArrowRight className="absolute duration-300 -translate-x-16 group-hover:translate-x-16 group-hover:left-auto" size={16} />Get a Quote</Button>
        </div>
      </nav>
    </div>
  )
}
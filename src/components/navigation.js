'use client';

import { cn } from "@/lib/utils";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, PhoneCall, Plus } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import FlyoutLink from "./flyout-dropdown";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="max-h-[100px] h-[100px] bg-white">
        <div className="container mx-auto flex items-center h-full justify-between w-[90%]">
          <div className="flex gap-24">
            <div className="relative">
              <Image className="object-cover" src="/logo.png" height={0} width={120} alt="Logo" />
            </div>
            <div className="lg:flex items-center gap-4 text-gray-900 uppercase hidden">
              <Link href="/" className={cn('duration-300', pathname === '/' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Home</Link>
              <Link href="/about" className={cn('duration-300', pathname === '/about' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>About Us</Link>
              <FlyoutLink pathname={pathname} href="/services" />
              <Link href="/portfolio" className={cn('duration-300', pathname === '/portfolio' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Portfolio</Link>
              <Link href="/blogs" className={cn('duration-300', pathname === '/blogs' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Blogs</Link>
              <Link href="/privacy-policy" className={cn('duration-300', pathname === '/privacy-policy' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Privacy Policy</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact"><Button className="flex duration-500 !pl-10 hover:!pl-3 hover:!pr-10 overflow-hidden items-center group relative"><ArrowRight className="absolute duration-300 -translate-x-16 group-hover:translate-x-16 group-hover:left-auto" size={16} />Get a Quote</Button></Link>
            <div className="lg:hidden rounded-full p-2 border-primary border bg-primary cursor-pointer duration-300 hover:bg-primary/90 text-white">
              <Sheet>
                <SheetTrigger asChild>
                  <Menu size={16} />
                </SheetTrigger>
                <SheetContent className="border-none">
                  <SheetHeader className="hidden">
                    <SheetTitle>Edit profile</SheetTitle>
                  </SheetHeader>
                  <div className="p-4 flex flex-col mt-12 text-2xl font-medium gap-y-2 text-paragraph/90">
                    <SheetClose asChild>
                      <Link href="/" className={cn('duration-300', pathname === '/' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Home</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/about" className={cn('duration-300', pathname === '/about' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>About Us</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services" className={cn('duration-300', pathname === '/services' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Services</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/portfolio" className={cn('duration-300', pathname === '/about' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Portfolio</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/blogs" className={cn('duration-300', pathname === '/blogs' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Blogs</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/privacy-policy" className={cn('duration-300', pathname === '/privacy-policy' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Privacy Policy</Link>
                    </SheetClose>
                  </div>
                  <SheetFooter>
                    <div className="flex items-center gap-x-4 justify-between">
                      <SheetClose asChild>
                        <Link href="/contact">
                          <Button className="flex duration-500 !pl-10 hover:!pl-3 hover:!pr-10 overflow-hidden items-center group relative">
                            <ArrowRight className="absolute duration-300 -translate-x-16 group-hover:translate-x-16 group-hover:left-auto" size={16} />
                            Get a Quote
                          </Button>
                        </Link>
                      </SheetClose>
                      <div className="flex items-center gap-4">
                        <Facebook className="cursor-pointer" size={18.5} />
                        <Instagram className="cursor-pointer" size={18.5} />
                        <Linkedin className="cursor-pointer" size={18.5} />
                      </div>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
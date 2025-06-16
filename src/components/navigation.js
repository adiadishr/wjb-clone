'use client';

import { cn } from "@/lib/utils";
import { ArrowRight, Book, Box, Facebook, Home, Info, Instagram, Linkedin, Lock, Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import FlyoutLink from "./flyout-dropdown";
import { useEffect, useState } from "react";

export default function Nav() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.25)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full z-50">
      <nav
        className={cn(
          "max-h-[80px] h-[80px] duration-300",
          scrolled
            ? "bg-white text-black"
            : "bg-transparent  text-white"
        )}
      >
        <div className="container mx-auto flex items-center h-full justify-between w-[90%] md:w-[85%]">
          <div className="flex h-full gap-20 relative">
            <div className="absolute left-0 md:-left-4 -top-3.5">
              <div className="relative size-28">
                <Image className={cn("object-cover", !scrolled && "brightness-1000 saturate-0")} src="/logo.png" fill alt="Logo" />
              </div>
            </div>
            <div className="lg:flex items-center gap-5 text-sm font-medium uppercase hidden md:ml-40">
              <Link href="/" className={cn('duration-150 flex items-center gap-2.5', pathname === '/' && 'text-primary hover:!text-primary/80 brightness-125', 'hover:text-primary')}>
                <Home size={18} strokeWidth={1.25} />
                Home
              </Link>
              <Link href="/about" className={cn('duration-150 flex items-center gap-2', pathname === '/about' && 'text-primary hover:!text-primary/80 brightness-125', 'hover:text-primary')}>
                <Info size={18} strokeWidth={1.25} />
                About Us
              </Link>
              <FlyoutLink pathname={pathname} href="/services" />
              <Link href="/projects" className={cn('duration-150 flex items-center gap-2', pathname.includes('/projects') && 'text-primary hover:!text-primary/80 brightness-125', 'hover:text-primary')}>
                <Box size={18} strokeWidth={1.25} />
                Projects
              </Link>
              <Link href="/blogs" className={cn('duration-150 flex items-center gap-2', pathname.includes('/blogs') && 'text-primary hover:!text-primary/80 brightness-125', 'hover:text-primary')}>
                <Book size={18} strokeWidth={1.25} />
                Blogs
              </Link>
              <Link href="/privacy-policy" className={cn('duration-150 flex items-center gap-2', pathname === '/privacy-policy' && 'text-primary hover:!text-primary/80 brightness-125', 'hover:text-primary')}>
                <Lock size={18} strokeWidth={1.25} />
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="bg-primary px-6 hover:pr-12 py-2 md:text-base text-sm md:py-3 text-white cursor-pointer hover:bg-transparent hover:text-white duration-700 shadow relative z-10 group justify-between items-center flex uppercase">
              <div className="inset-0 absolute bg-black/80 w-0 group-hover:w-full duration-700 -z-10 h-1/2" />
              <div className="right-0 absolute bg-black/80 w-0 group-hover:w-full duration-700 -z-10 h-1/2 top-1/2 scale-x-[-1]" />
              Get a Quote
              <ArrowRight className="text-white left-0 opacity-0 group-hover:opacity-100 absolute group-hover:left-[80%] duration-700" size={16} />
            </Link>
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
                      <Link href="/projects" className={cn('duration-300', pathname === '/about' && 'text-primary hover:!text-primary/80', 'hover:text-primary')}>Projects</Link>
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
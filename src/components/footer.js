import Link from 'next/link';
import { Facebook, Linkedin, Instagram, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Footer() {
  const quickLinks = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ];

  const contacts = {
    address: '22 Chichele Road, Cricklewood, London NW2 3DA',
    phones: ['020 3754 1809', '0744 688 6409'],
    email: 'info@wjbgroundworks.com',
  };

  return (
    <div className="text-neutral-foreground bg-neutral">
      <div className="py-20">
        <div className="mb-8 text-3xl tracking-tight text-center">Reach us for a quote!</div>
        <Link href="/contact" className="bg-primary w-max mx-auto px-6 hover:pr-12 py-3 text-white cursor-pointer hover:bg-transparent hover:text-black duration-700 shadow relative z-10 group justify-between items-center flex uppercase">
          <div className="inset-0 absolute bg-white w-0 group-hover:w-full duration-700 -z-10 h-1/2" />
          <div className="right-0 absolute bg-white w-0 group-hover:w-full duration-700 -z-10 h-1/2 top-1/2 scale-x-[-1]" />
          Get a Quote
          <ArrowRight className="text-white group-hover:text-black left-0 opacity-0 group-hover:opacity-100 absolute group-hover:left-[80%] duration-700" size={20} />
        </Link>
      </div>
      <div className="grid border-y border-cyan-50/20 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:py-20 px-[5%] md:px-[10%] pt-20 pb-10 md:border-r border-cyan-50/20">
          <div className="text-sm md:w-3/4">Want updates, expert advice and giveaways sent straight to your inbox?</div>
          <form className="relative flex border border-white rounded-md md:w-3/4 bg-white/10">
            <input className="w-[85%] shrink-0 p-3.5 text-sm focus:outline-none placeholder:text-white" placeholder="Enter your email" />
            <button type="submit" className="flex items-center justify-center w-full border-l border-white cursor-pointer">
              <ArrowRight size={16} />
            </button>
          </form>
          <div className="text-xs md:w-3/4">By signing up to receive emails from Rascals, you agree to our <Link href="/#" className="underline">Privacy Policy</Link>. We treat your info responsibly.</div>
          <div className=""></div>
        </div>
        <div className="md:py-20 pb-10 px-[5%] md:px-[10%]">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase">Shop</div>
              <Link className="text-sm hover:underline text-white/80" href="/all-products">All Products</Link>
              <Link className="text-sm hover:underline text-white/80" href="/premium-diapers">Premium Diapers</Link>
              <Link className="text-sm hover:underline text-white/80" href="/training-pants">Premium Training Pants</Link>
              <Link className="text-sm hover:underline text-white/80" href="/sensitive-wipes">Premium Sensitive Wipes</Link>
              <Link className="text-sm hover:underline text-white/80" href="/water-wipes">99% Water Premium Wipes</Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase">About</div>
              <Link className="text-sm hover:underline text-white/80" href="/meet-rascals">Meet Rascals</Link>
              <Link className="text-sm hover:underline text-white/80" href="/about">About Us</Link>
              <Link className="text-sm hover:underline text-white/80" href="/reviews">Reviews</Link>
              <Link className="text-sm hover:underline text-white/80" href="/blog">Blog</Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase">Social</div>
              <Link className="text-sm hover:underline text-white/80" href="https://instagram.com" target="_blank">Instagram</Link>
              <Link className="text-sm hover:underline text-white/80" href="https://tiktok.com" target="_blank">TikTok</Link>
              <Link className="text-sm hover:underline text-white/80" href="https://facebook.com" target="_blank">Facebook</Link>
              <Link className="text-sm hover:underline text-white/80" href="https://pinterest.com" target="_blank">Pinterest</Link>
            </div>

          </div>
        </div>
      </div>
      <div className="py-10 cursor-default">
        <div className="relative size-48 mx-auto">
          <Image src="/logo.png" alt="Rascals Logo" fill className="object-cover" />
        </div>
      </div>
      <div className="px-[5%] tracking-normal pb-10 md:pb-4 w-full flex flex-col items-center md:flex-row md:justify-between text-xs gap-2 md:gap-0">
        <div>
          2024. All Rights Reserved. Hayes Plant Hire.
        </div>
        <div className="flex gap-4">
          <Link href="/#" className="hover:underline">Privacy Policy</Link>
          <Link href="/#" className="hover:underline">Terms of Service</Link>
          <Link href="/#" className="hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}
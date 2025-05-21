'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LucideHome, Box, CircleUserRound, PhoneCall } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.5)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.div
            animate={{
                // top: scrolled ? 0 : 24,
                // backgroundColor: scrolled ? '#000' : 'rgba(0,0,0,0)',
                paddingLeft: scrolled ? '0px' : '48px',
                paddingRight: scrolled ? '0px' : '48px',
                boxShadow: scrolled
                    ? '0px 1px 0px rgba(255,255,255,0)'
                    : '0px 1px 0px rgba(255,255,255,0.2)',
            }}
            transition={{ duration: 0.3 }}
            className={cn("fixed z-50 w-full text-white duration-300 ease-quart", scrolled ? '!bg-orange-400 top-0' : 'bg-transparent top-6')}
        >
            <motion.div
                animate={{
                    width: scrolled ? '90%' : '100%',
                    marginLeft: scrolled ? 'auto' : '0px',
                    marginRight: scrolled ? 'auto' : '0px',
                }}
                transition={{ duration: 0.3 }}
                className="h-[64px] flex justify-between items-center"
            >
                {/* Logo */}
                <motion.div
                    className="relative z-[100]"
                    animate={{
                        width: scrolled ? 80 : 96,
                        height: scrolled ? 80 : 96,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        fill
                        alt="logo"
                        className="object-contain saturate-0 brightness-200"
                        src="/logo-top.png"
                    />
                </motion.div>

                {/* Links */}
                <div className="flex items-center gap-8 justify-right">
                    <div className="items-center hidden gap-8 md:flex">
                        <div className="flex items-center gap-2">
                            <LucideHome size={16} />
                            Home
                        </div>
                        <div className="flex items-center gap-2">
                            <Box size={18} />
                            Services
                        </div>
                        <div className="flex items-center gap-2">
                            <CircleUserRound size={18} />
                            About Us
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 duration-300 border border-white rounded-sm cursor-pointer hover:bg-white hover:text-black">
                        <PhoneCall size={16} />
                        Contact
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

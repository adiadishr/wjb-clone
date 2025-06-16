import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/constants/services";

export default function FlyoutLink({ href, pathname }) {
    const [open, setOpen] = useState(false);

    const showFlyout = open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <Link
                href={href}
                className={cn(
                    "relative flex items-center gap-1 duration-300",
                    pathname.includes('/services') && 'text-primary hover:!text-primary/80',
                    'hover:text-primary'
                )}
            >
                Services

                <span className="relative w-4 h-4">
                    <AnimatePresence mode="sync">
                        {!showFlyout ? (
                            <motion.div
                                key="plus"
                                className="absolute inset-0"
                                initial={{ rotate: 0, scale: 1, opacity: 1 }}
                                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Plus size={16} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="minus"
                                className="absolute inset-0"
                                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                exit={{ rotate: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Minus size={16} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </span>
            </Link>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-20 bg-white text-black"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                        <Content />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Content = () => {
    return (
        <div className="w-64 bg-white p-6 shadow-xl border-b border-primary">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold">Services at Hayes</h3>
                {services.map((service, idx) => (
                    <Link key={idx} href={`/services/${service.slug}`} className="block font-light text-sm hover:underline">
                        {service.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};
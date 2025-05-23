import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Tag, User } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { blogs } from "@/constants/blogs";
import Link from "next/link";

export default function Blogs({ page }) {
    return (
        <div className="container mx-auto w-[90%] py-24 md:py-36">
            <div data-aos='fade-up' className="text-sm font-medium leading-none mb-4 text-primary text-center">Latest Blogs</div>
            <div data-aos='fade-up' className={cn("leading-tight text-4xl md:text-5xl font-semibold tracking-tight text-center", page ? "mb-24" : "mb-8")}>
                Our latest <br /><span className="italic mr-2">blogs </span> and<span className="italic"> articles</span>
            </div>
            {!page &&
                <div data-aos='fade-up' className="w-full flex justify-center mb-24"><Button size={'lg'} className='w-max py-6'>View More<ChevronRight size={16} /></Button></div>
            }
            {!page ?
                <div className="w-full flex justify-center">
                    <Carousel className="w-[90%]">
                        <CarouselContent className="gap-4">
                            {blogs.map((blog, index) => (
                                <CarouselItem key={index} className='sm:basis-1/2 md:basis-1/3'>
                                    <Link href={`/blogs/${blog.slug}`} data-aos='flip-right' data-aos-duration='1500' data-aos-delay={150 + (index * 100)} className='group'>
                                        <div className="md:w-full relative selection:bg-transparent overflow-hidden h-80">
                                            <Image className="absolute group-hover:scale-110 duration-700 ease-quart -z-10 object-cover" fill src={blog.src} alt="blog-image" />
                                        </div>
                                        <div className="bg-white p-8 w-full">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex gap-4">
                                                    <div className="flex items-center gap-2 text-muted-foreground"><User size={16} fill="var(--primary)" stroke="var(--primary)" />{blog.by}</div>
                                                    <div className="flex items-center gap-2 text-muted-foreground"><Tag size={16} fill="var(--primary)" stroke="var(--primary)" />{blog.tag}</div>
                                                </div>
                                                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight line-clamp-1">
                                                    {blog.title}
                                                </h3>
                                                <div className="text-primary relative flex w-max cursor-pointer items-center hover:text-primary/80 duration-300 ease-quart gap-2 text-lg font-semibold">
                                                    Read More
                                                    <ArrowRight className="group-hover:-rotate-45 duration-300" size={16} />
                                                    <div className="w-full -bottom-1 h-px bg-primary absolute group-hover:w-[40%] duration-300 ease-quart"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious variant="default" className='-left-7 md:-left-20 rounded-sm md:p-6' />
                        <CarouselNext variant="default" className='-right-7 md:-right-20 rounded-sm md:p-6' />
                    </Carousel>
                </div>
                :
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {blogs.map((blog, index) => (
                        <Link key={index} href={`/blogs/${blog.slug}`} data-aos='flip-right' data-aos-duration='1500' data-aos-delay={blog.delay} className='group'>
                            <div className="md:w-full relative selection:bg-transparent overflow-hidden h-80">
                                <Image className="absolute group-hover:scale-110 duration-700 ease-quart -z-10 object-cover" fill src={blog.src} alt="blog-image" />
                            </div>
                            <div className="bg-white p-8 w-full">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2 text-muted-foreground"><User size={16} fill="var(--primary)" stroke="var(--primary)" />{blog.by}</div>
                                        <div className="flex items-center gap-2 text-muted-foreground"><Tag size={16} fill="var(--primary)" stroke="var(--primary)" />{blog.tag}</div>
                                    </div>
                                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight line-clamp-1">
                                        {blog.title}
                                    </h3>
                                    <div className="text-primary relative flex w-max cursor-pointer items-center hover:text-primary/80 duration-300 ease-quart gap-2 text-lg font-semibold">
                                        Read More
                                        <ArrowRight className="group-hover:-rotate-45 duration-300" size={16} />
                                        <div className="w-full -bottom-1 h-px bg-primary absolute group-hover:w-[40%] duration-300 ease-quart"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </div>
    )
}
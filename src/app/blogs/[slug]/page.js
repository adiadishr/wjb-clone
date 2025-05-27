import AuxHero from "@/components/aux-hero";
import { blogs } from "@/constants/blogs";
import { services } from "@/constants/services";
import { Link2, Calendar, User, Tag, ArrowRight, Quote, BadgeCheck, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { slug } = await params;
    const blog = blogs.find(item => item.slug === slug)
    if (!blog) {
        notFound()
    }
    const recentBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
    return (<>
        <AuxHero title={blog.title} />
        <div className="bg-white">
            <div className="container mx-auto md:w-[85%] w-[90%] py-24 md:py-36">
                <div className="flex w-full md:flex-row flex-col gap-12 lg:gap-24 relative">
                    <div className="md:w-2/3">
                        <div className="relative w-full h-[36rem]">
                            <Image className="object-cover" fill alt={blog.title} src={blog.src} />
                        </div>
                        <div className="bg-neutral-100 relative p-8 flex flex-col gap-y-6">
                            <Link href="/blogs" className="absolute top-8 right-8 flex gap-2 py-2 px-4 bg-primary items-center text-white">
                                Go Back<ArrowLeft size={16} />
                            </Link>
                            <div className="flex items-center flex-wrap gap-4 md:w-full w-2/3">
                                <div className="flex items-center gap-2 text-muted-foreground"><Calendar size={16} fill="var(--primary)" stroke="white" />{blog.date}</div>
                                <div className="flex items-center gap-2 text-muted-foreground"><User size={16} fill="var(--primary)" stroke="var(--primary)" />{blog.by}</div>
                                <div className="flex items-center gap-2 text-muted-foreground"><Tag size={16} fill="var(--primary)" stroke="var(--primary)" />{blog.tag}</div>
                            </div>
                            <div className="text-3xl font-semibold tracking-tight">{blog.title}</div>
                            <div className="text-base/7 text-paragraph">{blog.content}</div>
                            <div className="border-l-2 border-neutral-300 p-8 relative">
                                <div className="bg-neutral-100 absolute -top-2 -left-2 p-2">
                                    <Quote size={20} fill="var(--primary)" stroke="var(--primary)" className="scale-x-[-1]" />
                                </div>
                                <div className="text-paragraph font-light italic mt-2">&quot;Building sustainably is not just a choice; it&aps;s a responsibility. Thoughtful groundwork practices today create a resilient environment for tomorrow.&quot;</div>
                            </div>
                            <div className="text-base/7 text-paragraph">{blog.content}</div>
                            <div className="text-2xl font-medium tracking-tight">{blog.title}</div>
                            <div className="text-base/7 text-paragraph mb-7">{blog.content}</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 gap-x-12">
                                <div className="relative h-72">
                                    <Image src={blog.src} fill alt={blog.tag} className="object-cover" />
                                </div>
                                <div className="leading-7 flex flex-col gap-6">
                                    <div data-aos="fade-up">
                                        <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={24} /> 260+ Projects Completed
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay='50'>
                                        <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={24} /> 260+ Projects Completed
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay='100'>
                                        <BadgeCheck className="inline-block mr-2" stroke="white" fill="oklch(0.705 0.213 47.604)" size={24} /> 260+ Projects Completed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 md:sticky md:top-[calc(100px)] h-full flex flex-col gap-y-8">
                        <div className="bg-neutral-100 h-full p-[7.5%]">
                            <div className="text-lg lg:text-xl font-semibold tracking-tight mb-4">Our Services</div>
                            <div className="flex mb-8">
                                <div className="h-1 w-2/12 bg-primary"></div>
                                <div className="h-1 w-10/12 bg-neutral-300"></div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                {services.map((service, idx) => (
                                    <Link key={idx} href={`/services/${service.slug}`} className="bg-white p-4 text-muted-foreground cursor-pointer hover:bg-transparent hover:text-white duration-700 ease-quart shadow relative z-10 group justify-between items-center flex">
                                        <div className="inset-0 absolute bg-primary/80 w-0 group-hover:w-full duration-700 -z-10" />
                                        {service.title}
                                        <ArrowRight className="text-white left-0 absolute group-hover:left-[90%] duration-700" size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-neutral-100 h-full p-[7.5%]">
                            <div className="text-lg lg:text-xl font-semibold tracking-tight mb-4">Recent Posts</div>
                            <div className="flex mb-8">
                                <div className="h-1 w-2/12 bg-primary"></div>
                                <div className="h-1 w-10/12 bg-neutral-300"></div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                {recentBlogs.map((blog, idx) => (
                                    <Link key={idx} href={`/services/${blog.slug}`} className="flex gap-x-4 group">
                                        <div className="w-1/3 relative">
                                            <Image className="object-cover" src={blog.src} fill alt={`The image shows the description of ${blog.title}`} />
                                            <div className="absolute inset-0 bg-black/50 scale-0 group-hover:scale-100 duration-500 ease-quart text-primary flex items-center justify-center">
                                                <Link2 size={40} />
                                            </div>
                                        </div>
                                        <div className="w-2/3">
                                            <div className="mb-4 flex gap-2 items-center text-muted-foreground text-sm"><Calendar fill="var(--primary)" stroke="white" size={16} />{blog.date}</div>
                                            <div className="font-semibold md:text-lg group-hover:text-primary duration-300">{blog.title}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
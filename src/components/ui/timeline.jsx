"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full bg-white"
      ref={containerRef}>
      <div className="container mx-auto w-[90%] pt-20">
        <div data-aos='fade-up' className="text-sm font-medium leading-none mb-4 text-primary text-center">How it works</div>
        <div data-aos='fade-up' data-aos-delay='100' className={`leading-tight text-4xl md:text-5xl font-semibold tracking-tight text-center mb-8`}>
          Here's how it all <span className="italic">works</span>
        </div>
      </div>
      <div ref={ref} className="relative container w-[90%] mx-auto pb-48 md:mt-[-2rem]">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-36 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 border-neutral-300 p-2" />
              </div>
              <h3
                className="hidden md:block text-2xl md:pl-20 md:text-4xl text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-muted-foreground text-2xl mb-2 text-left tracking-tight">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent rounded-full" />
        </div>
      </div>
    </div>)
  );
};

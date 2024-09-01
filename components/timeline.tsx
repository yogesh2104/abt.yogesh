"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const { scrollYProgress } = useScroll();
  const scrollYTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div className="flex justify-center py-10">
      <div className="max-w-5xl w-full px-4">
        <div className="text-center">
        <h1 className="text-6xl font-bold mb-8 dark:text-white text-black">Education<span className="text-green-400">.</span></h1>
        </div>

        <div className="relative">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center pt-5 md:gap-1"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center self-start max-w-xs md:w-full">
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="hidden md:block text-xl md:text-3xl mt-4 font-bold text-center"
                >
                  {item.title}
                </motion.h3>
              </div>

              <div className="relative pl-8 pr-4 md:pl-4 w-full text-2xl md:text-3xl">
                <h3 className="text-justify sm:hidden block text-xl md:text-xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item.content}
                </motion.div>
              </div>
            </div>
          ))}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-primary dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
              style={{ height: scrollYTransform }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

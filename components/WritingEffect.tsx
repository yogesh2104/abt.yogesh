"use client"

import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { siteConfig } from "@/config/site"

export const WritingEffect = ({
  words,
  className,
  filter = false,
  duration = 0.5,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const [isFinished, setIsFinished] = useState(false)

  let wordsArray = words.split(" ")

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.1),
      }
    )

    const timer = setTimeout(() => {
      setIsFinished(true)
    }, wordsArray.length * 100 + 2000)

    return () => clearTimeout(timer)
  }, [scope.current, animate, duration, filter, wordsArray.length])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{
              filter: filter ? "blur(4px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  const Badge = ({ title, items }: { title: string; items: string[] }) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    };

    return (
      <motion.div
        className="rounded-lg"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h3 className="text-2xl font-bold mb-2 text-primary flex items-center">
          {title === "Use at work" ? (
            <span className="mr-2 text-green-400">⚡</span>
          ) : (
            <span className="mr-2 text-green-400">😊</span>
          )}
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <motion.span
              key={index}
              className="text-primary font-serif px-2 py-1 bg-secondary rounded-full text-sm border"
              variants={itemVariants}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };


  
  return (
    <div className={" min-h-max text-white"}>
      <div className="md:container mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center dark:text-white text-black">
          About Me<span className="text-primary">.</span>
        </h1>
        <div className={"grid grid-cols-1"}>
          <div className="mb-8">
            <div className="font-serif font-normal leading-8 text-justify">
              {renderWords()}
            </div>
          </div>
        </div>
        {isFinished && 
        <div className="space-y-4">
          <Badge title="Use at work" items={siteConfig.personalData.workItems} />
          <Badge title="Use for fun" items={siteConfig.personalData.funItems} />
        </div>}
      </div>
    </div>
  )
}
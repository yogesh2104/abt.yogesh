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

  const Badge = ({ title, items }:{title:string,items:string[]}) => {
    return (
      <div className="rounded-lg ">
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
            <span key={index} className="text-primary font-serif px-2 py-1 bg-secondary rounded-full text-sm border">
              {item}
            </span>
          ))}
        </div>
      </div>
    )
  }

  
  return (
    <div className={"min-h-max text-white"}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-8 text-center dark:text-white text-black">
          About<span className="text-primary">.</span>
        </h1>

        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-8"}>
          <div className="col-span-2">
              <div className="mb-8">
                  <div className="text-justify dark:text-white text-lg w-full prose-zinc dark:prose-invert leading-8 prose-h1:mb-0 prose-h2:mt-0 prose-h3:mt-0 dark:prose-h1:text-zinc-200 prose-h1:text-zinc-900 prose-h4:font-normal prose-p:text-base dark:prose-h2:text-zinc-300 prose-h2:text-zinc-800 dark:prose-h3:text-zinc-400 prose-h3:text-zinc-800 prose-h4:mt-0 dark:prose-h4:text-zinc-400 prose-h4:text-zinc-700 prose-h4:mb-4 prose-p:text-zinc-700 dark:prose-p:text-zinc-200 prose-a:decoration-wavy prose-a:underline-offset-2 prose-code:px-1 prose-code:rounded-sm prose-code:bg-zinc-400/60 dark:prose-code:bg-zinc-400/20 prose-code:font-normal">
                    {renderWords()}
                  </div>
              </div>
          </div>
          
          <div className="space-y-4">
              <Badge title="Use at work" items={siteConfig.personalData.workItems} />
              <Badge title="Use for fun" items={siteConfig.personalData.funItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
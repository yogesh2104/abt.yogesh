"use client"

import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { cn } from "@/lib/utils"

export const WritingEffect = ({
  words,
  className,
  filter = false,
  duration = 0.5,
  hobbies = [
    { title: "Coding", emoji: "💻", color: "from-blue-400 to-indigo-500" },
    { title: "Reading", emoji: "📚", color: "from-green-400 to-emerald-500" },
    { title: "Travel", emoji: "✈️", color: "from-yellow-400 to-orange-500" },
    { title: "Music", emoji: "🎵", color: "from-pink-400 to-rose-500" },
    { title: "Sports", emoji: "⚽", color: "from-purple-400 to-violet-500" },
  ],
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
  hobbies?: Array<{ title: string; emoji: string; color: string }>
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

  return (
    <div className={cn("font-normal font-serif max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
       <div className="text-center ">
          <h2 className="text-lg md:text-3xl mb-4 text-black dark:text-white">About Me</h2>
        </div>
      <div className="mt-4">
        <div className="text-justify dark:text-white text-lg w-full prose-zinc dark:prose-invert leading-8 prose-h1:mb-0 prose-h2:mt-0 prose-h3:mt-0 dark:prose-h1:text-zinc-200 prose-h1:text-zinc-900 prose-h4:font-normal prose-p:text-base dark:prose-h2:text-zinc-300 prose-h2:text-zinc-800 dark:prose-h3:text-zinc-400 prose-h3:text-zinc-800 prose-h4:mt-0 dark:prose-h4:text-zinc-400 prose-h4:text-zinc-700 prose-h4:mb-4 prose-p:text-zinc-700 dark:prose-p:text-zinc-200 prose-a:decoration-wavy prose-a:underline-offset-2 prose-code:px-1 prose-code:rounded-sm prose-code:bg-zinc-400/60 dark:prose-code:bg-zinc-400/20 prose-code:font-normal">
          {renderWords()}
        </div>
      </div>
      {isFinished && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-12"
        >
          <div className="text-center ">
            <h2 className="text-lg md:text-3xl mb-4 text-black dark:text-white">My Hobbies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${hobby.color} rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl" role="img" aria-label={hobby.title}>
                    {hobby.emoji}
                  </span>
                  <span className="font-medium text-white">{hobby.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
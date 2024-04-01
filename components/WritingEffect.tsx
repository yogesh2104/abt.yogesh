"use client"
import React, { useEffect, useState } from 'react'

interface writingProps{
    text: string
}
const WritingEffect = ({text}:writingProps) => {
    const [displayText,setDisplayText]=useState('')
    const [currentStateIndex,setCurrentStateIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          if (currentStateIndex < text.length) {
            setDisplayText((prevText) => prevText + text[currentStateIndex]);
            setCurrentStateIndex((prevIndex) => prevIndex + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
    
        return () => clearInterval(interval);
      }, [currentStateIndex, text]);

  return <p className="dark:text-white prose w-full prose-zinc dark:prose-invert font-serif leading-8 prose-h1:mb-0 prose-h2:mt-0 prose-h3:mt-0 dark:prose-h1:text-zinc-200 prose-h1:text-zinc-900 prose-h4:font-normal prose-p:text-base dark:prose-h2:text-zinc-300 prose-h2:text-zinc-800 dark:prose-h3:text-zinc-400 prose-h3:text-zinc-800 prose-h4:mt-0 dark:prose-h4:text-zinc-400 prose-h4:text-zinc-700 prose-h4:mb-4 prose-p:text-zinc-700 dark:prose-p:text-zinc-200 prose-a:decoration-wavy prose-a:underline-offset-2 prose-code:px-1 prose-code:rounded-sm prose-code:bg-zinc-400/60 dark:prose-code:bg-zinc-400/20 prose-code:font-normal" 
  dangerouslySetInnerHTML={{ __html:displayText }}/>
}

export default WritingEffect
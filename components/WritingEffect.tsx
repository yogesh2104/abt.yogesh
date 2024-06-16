"use client"
import React, { useEffect, useState } from 'react'

interface writingProps{
    text: string
}
const WritingEffect = ({text}:writingProps) => {
    const [displayResponse, setDisplayResponse] = useState("");

    useEffect(() => {
      let i = 0;

      const intervalId = setInterval(() => {
        setDisplayResponse(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
        }
      }, 20);
    
      return () => clearInterval(intervalId);
  }, [text]);

  return(
    <div className="text-justify dark:text-white text-lg  w-full prose-zinc dark:prose-invert font-serif leading-8 prose-h1:mb-0 prose-h2:mt-0 prose-h3:mt-0 dark:prose-h1:text-zinc-200 prose-h1:text-zinc-900 prose-h4:font-normal prose-p:text-base dark:prose-h2:text-zinc-300 prose-h2:text-zinc-800 dark:prose-h3:text-zinc-400 prose-h3:text-zinc-800 prose-h4:mt-0 dark:prose-h4:text-zinc-400 prose-h4:text-zinc-700 prose-h4:mb-4 prose-p:text-zinc-700 dark:prose-p:text-zinc-200 prose-a:decoration-wavy prose-a:underline-offset-2 prose-code:px-1 prose-code:rounded-sm prose-code:bg-zinc-400/60 dark:prose-code:bg-zinc-400/20 prose-code:font-normal">
      {displayResponse}
    </div>
  )
}

export default WritingEffect
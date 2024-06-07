import React from "react"
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string | undefined;
}


const ThreeDButton = React.forwardRef<HTMLButtonElement,ButtonProps>(
    ({ className,children, ...props }, ref) => {
      return (
        <button 
            className={cn("button text-white dark:border-white border-black text-xs rounded-lg text-center md:text-sm font-medium capitalize tracking-wider no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3",className)}
            type="button" 
            ref={ref}
            {...props}
        >
            <div className="top bg-primary">
                {children}
            </div>
            <div className="bottom bg-primary"></div>
        </button>
      )
    }
  )

ThreeDButton.displayName = "ThreeDButton"
  
export default ThreeDButton
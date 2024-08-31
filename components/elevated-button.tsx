"use client"
import React, { useState, useEffect, forwardRef } from "react";
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string | undefined;
    animateDuration?: number;
}

const ElevatedButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, animateDuration = 3000, ...props }, ref) => {
        const [isAnimating, setIsAnimating] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, animateDuration);

            return () => clearTimeout(timer);
        }, [animateDuration]);

        return (
            <button
                className={cn(
                    "relative focus:animate-none hover:animate-none",
                    isAnimating ? "animate-bounce" : "",
                    className
                )}
                ref={ref}
                {...props}
            >
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-primary"></span>
                <span className="fold-bold relative inline-block font-serif h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-normal text-black transition duration-100 hover:bg-primary hover:text-gray-900">
                    {children}
                </span>
            </button>
        );
    }
);

ElevatedButton.displayName = "ElevatedButton";

export default ElevatedButton;

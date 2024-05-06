import { cn } from "@/lib/utils"; 
import Image from "next/image";
import Link from "next/link";

export const ProjectGrid = ({className,children}: {className?: string;children?: React.ReactNode}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ProjectGridItem = ({
  className,
  role,
  description,
  name,
  demo,
  code
}: {className?: string,role: string,description: string,code:string,demo:string,name?: React.ReactNode}) => {
  return (
    <div className={cn("row-span-1 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col",className)}>
      {name}/ {role}
      <div className="transition duration-200">
        <a target="_blank" href={demo} rel="noopener noreferrer">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            <img alt={role} src={description} style={{width:"-webkit-fill-available", height:"240px"}}/>
          </div>
        </a>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        </div>
      </div>
    </div>
  );
};

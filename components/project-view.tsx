"use client"

import ElevatedButton from "./elevated-button";
import { MoveRight,CircleCheckBig } from 'lucide-react'
import { siteConfig } from '@/config/site';
import { useEffect, useState } from "react";
  

export const ProjectView=()=>{

    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  


    return(
        <div>
           <div className="lg:mb-16">
            <div className="flex flex-col md:mt-10 gap-20 mt-4">
                {siteConfig.projectData.map((project,index)=>(
                    <div 
                    key={project.title} 
                    style={{top:isMobile ? "0px" :`calc(37px + ${index*40}px)`}}
                    className="bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 relative md:sticky ">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-4 sticky top-9">
                            <div className="lg:pb-16">
                                <div>
                                    <div className=" bg-gradient-to-r from-primary to-sky-400 md:inline-flex  gap-2 items-center tracking-widest text-sm lg:text-md text-transparent bg-clip-text">
                                        <span className="md:font-bold uppercase ">{project.name}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl mt-2 md:mt-5 text-primary md:text-3xl">{project.title}</h3>
                                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                    {project.results.map((result)=>(
                                        <li key={result.title} className="flex gap-2 items-center font-serif text-xs md:text-base text-white/80">
                                            <CircleCheckBig className="size-4 md:size-6"/>
                                            <span>{result.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-3">
                                {project.tools.map((tool,index)=>{
                                    return(
                                        <span key={index} className="bg-primary/20 text-white px-3 py-1 rounded-full text-xs font-serif">{tool}</span>
                                    )
                                })}
                                </div>
                                <div className="flex gap-2">
                                    <a href={project.link}>
                                        <ElevatedButton className="group mt-8 h-10 ">
                                            <span className="flex gap-2 items-center text-sm mt-1">Demo <MoveRight className="h-4 w-4 -rotate-45 group-hover:rotate-0"/> </span>
                                        </ElevatedButton>
                                    </a>
                                    <a href={project.code}>
                                        <ElevatedButton className="group mt-8 h-10">
                                            <span className="flex gap-2 items-center text-sm mt-1">Code <MoveRight className="h-4 w-4 -rotate-45 group-hover:rotate-0"/> </span>
                                        </ElevatedButton>
                                    </a>
                                </div>

                            </div>
                            <div className="lg:relative">
                        <       img className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           </div> 
        </div>
    )
}
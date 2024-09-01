"use client"

import Link from "next/link";
import ElevatedButton from "./elevated-button";
import { MoveRight,CircleCheckBig } from 'lucide-react'
import { siteConfig } from '@/config/site';
  

export const ProjectView=()=>{
    return(
        <div>
           <div className="lg:mb-16">
            <div className="flex flex-col md:mt-10 gap-20 mt-4">
                {siteConfig.projectData.map((project)=>(
                    <div key={project.title} className="bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                            <div className="lg:pb-16">
                                <div>
                                    <div className=" bg-gradient-to-r from-primary to-sky-400 md:inline-flex  gap-2 items-center tracking-widest text-sm lg:text-md text-transparent bg-clip-text">
                                        <span className="md:font-bold uppercase ">{project.name}</span>
                                        {/* <span>&bull;</span> */}
                                        {/* <span className="text-xs">{project.role}</span> */}
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
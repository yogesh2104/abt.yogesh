"use client"

import Link from "next/link";
import ElevatedButton from "./elevated-button";
import { MoveRight,CircleCheckBig } from 'lucide-react'


const portfolioProjects = [
    {
      company: "Acme Corp",
      year: "2022",
      title: "Dark Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "https://youtu.be/4k7IdSLxh6w",
      image: '/project/eldoraui.png',
    },
    {
      company: "Innovative Co",
      year: "2021",
      title: "Light Saas Landing Page",
      results: [
        { title: "Boosted sales by 20%" },
        { title: "Expanded customer reach by 35%" },
        { title: "Increased brand awareness by 15%" },
      ],
      link: "https://youtu.be/7hi5zwO75yc",
      image: '/project/noter.png',
    },
    {
      company: "Quantum Dynamics",
      year: "2023",
      title: "AI Startup Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "https://youtu.be/Z7I5uSRHMHg",
      image: '/project/eldoraui.png',
    },
];
  

export const ProjectView=()=>{
    return(
        <div>
           <div className=" md:mb-16">
            <div className="flex flex-col md:mt-10 gap-20 mt-4">
                {portfolioProjects.map((project)=>(
                    <div key={project.title} className="bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                            <div className="lg:pb-16">
                                <div>
                                    <div className=" bg-gradient-to-r from-primary to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm lg:text-md text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl mt-2 md:mt-5 text-primary md:text-3xl">{project.title}</h3>
                                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                    {project.results.map((result)=>(
                                        <li key={result.title} className="flex gap-2 items-center font-serif text-sm md:text-base text-white/80">
                                            <CircleCheckBig className="size-5 md:size-6"/>
                                            <span>{result.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={project.link}>
                                    <ElevatedButton className="group mt-8 h-10">
                                        <span className="flex gap-2 items-center text-sm mt-1">View Live Site <MoveRight className="h-4 w-4 -rotate-45 group-hover:rotate-0"/> </span>
                                    </ElevatedButton>
                                </a>

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
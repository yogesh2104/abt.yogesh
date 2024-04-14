"use client"

import {Fragment} from "react"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import AnimationImg from "@/components/animation/animation-img";
import { PersonalData } from "@/lib/data/personalData";
import { experiences } from '@/lib/data/experienceData';
import experience from "./2.json"
import { BriefcaseBusiness } from "lucide-react";

const skillsData:string[]=["AWS","Bootstrap","NodeJs","ExpressJs","CSS","Django","Docker","Git","HTML","JavaScript","MongoDB","NextJs","Python","React","Strapi","Tailwind","Typescript"]


const SkillPage=()=>{
    return(
        <>
        <div className="w-full">
            <div className="relative z-50 lg:mt-[-70px]">
                <div className="flex justify-center my-5 lg:py-2">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">Skills</span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>
                <div className="container break-normal mb-5 text-justify">{PersonalData?.skillDes}</div>

                <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4"><div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" /></div>
                </div>

                <div className=" container">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                        >
                        {skillsData?.map((skill, id) => (
                            <div className="w-36 min-w-fit h-fit mr-10 flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={id}>
                            <div className="h-full w-full rounded-lg border border-[#1f223c] dark:bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10">
                                    <Image
                                    src={`/skills/${skill.toLowerCase().trim()}.svg`}
                                    alt={skill}
                                    width={30}
                                    height={30}
                                    className="h-full w-auto rounded-lg "
                                    />
                                </div>
                                <p className="text-black dark:text-white text-sm sm:text-lg">
                                    {skill}
                                </p>
                                </div>
                            </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div> 

        <div className="container">
            <div className="relative z-50 border-t border-[#25213b]">
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Experiences</span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <div className="w-full h-full">
                                <AnimationImg animationPath={experience} className="sm:w-44 lg:w-96"/>
                            </div>
                        </div>
                        <div>
                            {experiences.map((exp)=>{
                               return(
                                <Fragment key={exp.id}>
                                    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] mb-4">
                                        <div className="flex flex-row animate-pulse">
                                            <div className=" h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                                            <div className=" h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                                        </div>

                                        <div className="px-4 lg:px-8 py-5">
                                            <div className="flex flex-row space-x-2">
                                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center">
                                            <p className="text-xs sm:text-sm text-[#16f2b3]">{exp?.duration}</p>
                                        </div>

                                        <div className="flex items-center gap-x-8 px-3 py-5">

                                            <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                <BriefcaseBusiness className="h-12 w-12" />
                                            </div>

                                            <div>
                                                <p className="text-base sm:text-xl mb-2 font-medium uppercase text-start"> {exp?.title}</p>
                                                <p className="text-sm sm:text-base text-start"> {exp?.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                               ) 
                            })}
                        </div>
                    </div>
                </div>
            </div>      
        </div>
        </>
    )
}

export default SkillPage
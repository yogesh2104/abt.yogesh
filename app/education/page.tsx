import AnimationImg from "@/components/animation/animation-img"
import education from "./3.json"
import { GraduationCap } from "lucide-react";
import { educations } from '@/lib/data/educationData';
import { Fragment } from "react";


const EduPage=()=>{
    return(
        <div className="container lg:-mt-[50px]">
            <div className="relative z-50 border-[#25213b]">
                <div className="flex justify-center ">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">Education</span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <div className="w-full h-full">
                                <AnimationImg animationPath={education} className="sm:w-44 lg:w-96"/>
                            </div>
                        </div>
                        <div>
                            {educations.map((exp)=>{
                               return(
                                <Fragment key={exp?.id}>
                                    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] mb-4">
                                        <div className="flex flex-row animate-pulse">
                                            <div className=" h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                                            <div className=" h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                                        </div>

                                        <div className="px-4 lg:px-5 py-3">
                                            <div className="flex flex-row space-x-2">
                                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center">
                                            <p className="text-xs sm:text-sm text-[#16f2b3]">{exp?.duration}</p>
                                        </div>

                                        <div className="flex items-center gap-x-6 px-3 py-4">

                                            <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                <GraduationCap className="h-12 w-12" />
                                            </div>

                                            <div>
                                                <p className="text-sm sm:text-lg mb-2 font-medium uppercase text-start"> {exp?.title}</p>
                                                <p className="text-xs text-start"> {exp?.institution}</p>
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
    )
}

export default EduPage
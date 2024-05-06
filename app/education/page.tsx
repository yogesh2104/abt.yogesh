import AnimationImg from "@/components/animation/animation-img"
import education from "./3.json"
import { GraduationCap } from "lucide-react";
import { educations } from '@/lib/data/educationData';
import { Fragment } from "react";
import CardHeader from "@/components/card-header";

export const metadata = {
    title: 'abt-yogesh || education',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const EduPage=()=>{
    return(
        <div className="container lg:-mt-[50px]">
            <div className="relative z-50">
                <div className="flex justify-center ">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-primary"></span>
                    <span className="bg-primary text-white dark:text-black p-1 px-5 text-lg md:text-xl rounded-md">Education</span>
                    <span className="w-24 h-[2px] bg-primary"></span>
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
                                    <div className=" border-black dark:border-white relative rounded-lg border mb-4">
                                        
                                        <CardHeader/>
                                        <div className='overflow-hidden border-t-[1px] border-black dark:border-white px-2 py-2 text-left'/>

                                        <div className="flex justify-center">
                                            <p className="text-xs sm:text-sm text-primary">{exp?.duration}</p>
                                        </div>

                                        <div className="flex items-center gap-x-6 px-3 py-4">

                                            <div className="text-black dark:text-white transition-all duration-300 hover:scale-125">
                                                <GraduationCap className="h-12 w-12" />
                                            </div>

                                            <div>
                                                <p className="text-sm sm:text-lg mb-2 font-medium uppercase text-start text-primary"> {exp?.title}</p>
                                                <p className="text-xs text-start text-primary"> {exp?.institution}</p>
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
import { GraduationCap } from "lucide-react";
import { educations } from '@/lib/data/educationData';
import { Fragment } from "react";
import CardHeader from "@/components/card-header";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import Image from "next/image";


export const metadata = {
    title: 'abt-yogesh || education',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const EduPage=()=>{

    const content = [
        {
          title: "Collaborative Editing",
          description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Collaborative Editing
            </div>
          ),
        },
        {
          title: "Real time changes",
          description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/linear.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Version control",
          description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Version control
            </div>
          ),
        },
        {
          title: "Running out of content",
          description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Running out of content
            </div>
          ),
        },
      ];


    return(
        <div className="container">
            {/* <div className="relative z-50">
                <div className="flex justify-center ">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-primary"></span>
                    <span className="bg-primary text-white dark:text-black p-1 px-5 text-lg md:text-xl rounded-md">Education</span>
                    <span className="w-24 h-[2px] bg-primary"></span>
                    </div>
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        
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
            </div>       */}

        <div className="h-max">
            <StickyScroll content={content} />
        </div>
        </div>
    )
}

export default EduPage
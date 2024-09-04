
import { siteConfig } from "@/config/site";

export const metadata = {
    title: 'abtyogesh || Experience',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const SkillPage=()=>{
    return(
        <>
            <div className="md:container pt-4 font-sans min-h-max text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center dark:text-white text-black">Experience<span className="text-primary">.</span></h1>
            
            {siteConfig.experiences.map((exp) => (
                <div key={exp.id} className="mb-8">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                        <h2 className="text-2xl font-bold text-primary">{exp.title}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">{exp.duration}</p>
                    </div>
                    <hr/>
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-2">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{exp.company}</h3>
                        <p className="text-md text-gray-600 dark:text-gray-400">{exp.location}</p>
                    </div>

                    {exp.project.map((pro, proId) => (
                    <div key={proId} className="mb-6 font-serif">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 ">{pro.name}</h4>
                        <ul className="list-disc pl-5 space-y-2">
                        {pro.keyPoint.map((keypoint, inx) => (
                            <li key={inx} className="text-gray-600 dark:text-gray-400">{keypoint}</li>
                        ))}
                        </ul>
                    </div>
                    ))}

                    {exp.keyPoint.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 font-serif">
                        {exp.keyPoint.map((keypoint, inx) => (
                        <li key={inx} className="text-gray-600 dark:text-gray-400">{keypoint}</li>
                        ))}
                    </ul>
                    )}
                </div>
                </div>
            ))}
            </div>

            {/* <div className="w-full">
                <div className="relative z-50 ">
                    <div className="flex justify-center my-2 lg:py-5">
                        <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-primary"></span>
                        <span className="bg-primary w-fit text-white dark:text-black p-1 px-5 text-lg md:text-xl rounded-md">Skill</span>
                        <span className="w-24 h-[2px] bg-primary"></span>
                        </div>
                    </div>
                    <div className="container text-primary break-normal mb-5 text-justify">{siteConfig.personalData?.skillDes}</div>

                    <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
                    <div className="flex justify-center -translate-y-[1px]">
                        <div className="w-3/4"><div className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent  w-full" /></div>
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
                                <div className="h-full w-full rounded-lg border border-[#1f223c] dark:bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-primary transition-all duration-500">
                                    <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
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
                <div className="relative z-50 border-t border-primary">
                    <div className="flex justify-center my-5 lg:py-8">
                        <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-primary"></span>
                        <span className="bg-primary w-fit text-white dark:text-black p-1 px-5 text-lg md:text-xl rounded-md">Experiences</span>
                        <span className="w-24 h-[2px] bg-primary"></span>
                        </div>
                    </div>

                    <div className="py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                           
                            <div>
                                {siteConfig.experiences.map((exp)=>{
                                return(
                                    <Fragment key={exp.id}>
                                        <div className=" border-black dark:border-white relative rounded-lg border mb-4">
                                        
                                            <CardHeader/>
                                            <div className='overflow-hidden border-t-[1px] border-black dark:border-white px-2 py-2 text-left'/>

                                            <div className="flex justify-center">
                                                <p className="text-xs sm:text-sm text-primary">{exp?.duration}</p>
                                            </div>

                                            <div className="flex items-center gap-x-8 px-3 py-5">

                                                <div className="text-black dark:text-white  transition-all duration-300 hover:scale-125">
                                                    <BriefcaseBusiness className="h-12 w-12" />
                                                </div>

                                                <div>
                                                    <p className="text-base sm:text-xl mb-2 font-medium uppercase text-start text-primary"> {exp?.title}</p>
                                                    <p className="text-sm sm:text-base text-start text-primary"> {exp?.company}</p>
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
            </div> */}
        </>
    )
}

export default SkillPage
import ProjectCard from "@/components/project-card"
import {ProjectData} from "@/lib/data/projectData"


const ProjectPage=()=>{
    return(
        <div className="w-full" id='projects'>
            <div className="relative z-50 lg:mt-[-70px]">
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#2c73e4]"></span>
                    <span className="bg-[#2c73e4] text-white p-2 px-5 text-xl rounded-md">
                        Project
                    </span>
                    <span className="w-24 h-[2px] bg-[#2c73e4]"></span>
                    </div>
                </div>
                

                <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4"><div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" /></div>
                </div>

                <div className="">
                    <div className="flex flex-col gap-6">
                    {ProjectData.slice(0, 4).map((project, index) => (
                        <div
                            id={`sticky-card-${index + 1}`}
                            key={index}
                            className="sticky-card w-full mx-auto max-w-2xl sticky"
                        >
                        <div className="box-border flex items-center justify-center rounded">
                            <ProjectCard project={project} />
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectPage
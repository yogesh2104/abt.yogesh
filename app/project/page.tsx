import ProjectCard from "@/components/project-card"
import {ProjectData} from "@/lib/data/projectData"

export const metadata = {
    title: 'abt-yogesh || project',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}


const ProjectPage=()=>{
    return(
        <div className="container lg:-mt-[50px]" id='projects'>
            <div className="relative z-50">
                <div className="flex justify-center ">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-primary"></span>
                    <span className="bg-primary text-white dark:text-black p-2 px-5 text-xl rounded-md">Project</span>
                    <span className="w-24 h-[2px] bg-primary"></span>
                    </div>
                </div>
                
                <div className="mt-4">
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
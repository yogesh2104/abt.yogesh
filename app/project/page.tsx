import ProjectCard from "@/components/project-card"
import {ProjectData} from "@/lib/data/projectData"
import { ProjectGrid,ProjectGridItem } from "@/components/project-grid";


export const metadata = {
    title: 'abt-yogesh || project',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}


const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const ProjectPage=()=>{
    return(
        <div className="container lg:-mt-[50px]" id='projects'>
            <div className="relative z-50">
                <div className="flex justify-center ">
                    <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-primary"></span>
                    <span className="bg-primary text-white dark:text-black p-1 px-5 text-lg md:text-xl rounded-md">Project</span>
                    <span className="w-24 h-[2px] bg-primary"></span>
                    </div>
                </div>
                
                <div className="mt-4">
                    <ProjectGrid className="mx-auto md:auto-rows-[20rem]">
                        {ProjectData.slice(0, 4).map((item, i) => (
                            <ProjectGridItem
                                key={i}
                                name={item.name}
                                description={item.image}
                                role={item.role}
                                code={item.code}
                                demo={item.demo}
                                className={item.className}
                            />
                        ))}
                    </ProjectGrid>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectPage
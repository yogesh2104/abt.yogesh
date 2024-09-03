import { ProjectView } from "@/components/project-view";


export const metadata = {
    title: 'abtyogesh || project',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}


const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const ProjectPage=()=>{
    return(
        <div className="lg:max-w-5xl" id='projects'>
            <div className="text-white p-6 font-sans sticky top-2">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center dark:text-white text-black">Project<span className="text-primary">.</span></h1>
                
                <div className="mt-4">
                    <ProjectView/>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectPage

import { siteConfig } from "@/config/site";

export const metadata = {
    title: 'abtyogesh || Experience',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const SkillPage=()=>{
    return(
        <>
            <div className="md:container pt-4 font-sans min-h-max text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center dark:text-white text-black">Experience<span className="text-primary">.</span></h1>
            
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
        </>
    )
}

export default SkillPage
import { siteConfig } from "@/config/site"

export const metadata = {
    title: 'abtyogesh || education',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const EduPage=()=>{
  return(
    <div className="md:container min-h-max text-white">
      <div className=" text-white p-6 font-sans">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center dark:text-white text-black">Education<span className="text-primary">.</span></h1>

        {siteConfig.educations.map((edu) => (
          <div key={edu.id} className="border-t border-gray-700 pt-2 mb-4">
            <div className="mb-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-primary ">{edu.title}</h2>
                <p className="text-lg sm:text-xl dark:text-white text-black">{edu.year}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-md font-medium dark:text-white text-black font-serif">{edu.school}</h3>
                <p className="text-lg dark:text-white underline text-black">{edu.location}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-serif">{edu.field}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default EduPage
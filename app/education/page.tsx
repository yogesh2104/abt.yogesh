// import { educations } from '@/lib/data/educationData';
// import {Timeline} from "@/components/timeline"


export const metadata = {
    title: 'abt-yogesh || education',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const educationsV2 = [
  {
    id: 1,
    year: "2020-2024",
    title:"Master of Computer Applications (MCA)",
    school:"Noida Institute Of Engineering And Technology,Greater Noida",
    location:"UP. Greater Noida",
    field:"Computer Application"
  },
  {
    id: 2,
    year:"2017 - 2020",
    title:"Bachelor of Science (B.Sc IT)",
    school:"Anand Vishwa Gurukul Sr. Night College Thane West Maharashtr",
    location:"Thane, Maharashtra",
    field:"Information Technology"
  },
  {
    id: 3,
    year: "2015 - 2017",
    title:"Higher Secondary Certificate(HSC)",
    school:"Gaynodya Vidya Mandir Junior College Thane(W),Maharashtra",
    location:"Thane, Maharashtra",
    field:"Science"
  },
  {
    id: 4,
    year: "2014 - 2015",
    title:"Secondary School Certificate(SSC)",
    school:"Gaynodya Vidya Mandir Junior College Thane(W),Maharashtra",
    location:"Thane, Maharashtra",
    field:"Regular"
  },
]

const EduPage=()=>{
  return(
    <div className="min-h-max text-white">
      <div className=" text-white p-6 font-sans">
        <h1 className="text-6xl font-bold mb-8 text-center dark:text-white text-black">Education<span className="text-primary">.</span></h1>

        {educationsV2.map((edu) => (
          <div key={edu.id} className="border-t border-gray-700 pt-2 mb-4">
            <div className="mb-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-primary ">{edu.title}</h2>
                <p className="text-lg sm:text-xl dark:text-white text-black">{edu.year}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-lg  font-semibold dark:text-white text-black font-serif">{edu.school}</h3>
                <p className="text-lg dark:text-white text-black">{edu.location}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-serif">{edu.field}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
      {/* <Timeline data={educations} /> */}
    </div>
  )
}

export default EduPage
import WritingEffect from "@/components/WritingEffect";
import { PersonalData } from '@/lib/data/personalData';


export const metadata = {
    title: 'abt-yogesh || about',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const AboutPage=()=>{
    return(
        <>
            <div className="w-full">
                <div className="relative z-50">
                    <div className="flex justify-center mb-5">
                        <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-primary"></span>
                        <span className="bg-primary text-white dark:text-black p-1 px-5 text-lg rounded-md lg:text-xl">About Us</span>
                        <span className="w-24 h-[2px] bg-primary"></span>
                        </div>
                    </div>
                    <div className="p-4 break-normal mb-5 mt-4">
                        <WritingEffect text={PersonalData.aboutMe}/>
                    </div>

                    <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
                    <div className="flex justify-center -translate-y-[1px]">
                        <div className="w-3/4"><div className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent  w-full" /></div>
                    </div>
    
                </div>
            </div>
        </>
    )
}

export default AboutPage
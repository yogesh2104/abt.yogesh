import WritingEffect from "@/components/WritingEffect";
import { PersonalData } from '@/lib/data/personalData';

const AboutPage=()=>{
    return(
        <>
            <div className="w-full">
                <div className="relative z-50 lg:mt-[-70px]">
                    <div className="flex justify-center my-5 lg:py-8">
                        <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#2c73e4]"></span>
                        <span className="bg-[#2c73e4] text-white p-2 px-5 text-xl rounded-md">
                            WHO I AM?
                        </span>
                        <span className="w-24 h-[2px] bg-[#2c73e4]"></span>
                        </div>
                    </div>
                    <div className="container break-normal mb-5">
                        <WritingEffect text={PersonalData.aboutMe}/>
                    </div>

                    <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
                    <div className="flex justify-center -translate-y-[1px]">
                        <div className="w-3/4"><div className="h-[1px] bg-gradient-to-r from-transparent via-[#2c73e4] to-transparent  w-full" /></div>
                    </div>
    
                </div>
            </div>
        </>
    )
}

export default AboutPage
import { PersonalData } from "@/lib/data/personalData"
import { GitFork, Star } from "lucide-react"
import Link from "next/link"
import { ThemeCustomizer } from "@/components/theme-customizer";

const Footer=()=>{
    return(
        <div className="text-white">
            <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-5">
                <div className="flex justify-center -z-40">
                <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <p className="text-sm text-black dark:text-white">© Developer Portfolio by 
                    <Link target="_blank" href={PersonalData.linkedIn} className="text-primary ml-1">{PersonalData?.name}</Link></p>
                </div>
                <div className="order-last md:order-1 mt-2">
                    <ThemeCustomizer/>
                </div>
                <div className="flex items-center gap-5 order-2">
                    <Link
                        target="_blank"
                        href={PersonalData.github}
                        className="flex items-center gap-2 uppercase"
                    >
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-black dark:text-white">Star</span>
                    </Link>
                    <Link
                        target="_blank"
                        href={PersonalData.github}
                        className="flex items-center gap-2 uppercase"
                    >
                        <GitFork className="h-4 w-4 text-primary" />
                        <span className="text-black dark:text-white">Fork</span>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
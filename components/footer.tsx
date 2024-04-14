import { PersonalData } from "@/lib/data/personalData"
import { GitFork, Star } from "lucide-react"
import Link from "next/link"

const Footer=()=>{
    return(
        <div className="bg-zinc-100 dark:bg-zinc-900 text-white">
            <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
                <div className="flex justify-center -z-40">
                <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm">© Developer Portfolio by <Link target="_blank" href={PersonalData.linkedIn} className="text-[#16f2b3]">{PersonalData?.name}</Link></p>
                <div className="flex items-center gap-5">
                    <Link
                        target="_blank"
                        href={PersonalData.github}
                        className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
                    >
                        <Star className="h-4 w-4" />
                        <span>Star</span>
                    </Link>
                    <Link
                        target="_blank"
                        href={PersonalData.github}
                        className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
                    >
                        <GitFork className="h-4 w-4" />
                        <span>Fork</span>
                    </Link>
                </div>
                </div>
            </div>
        </div >
    )
}
export default Footer
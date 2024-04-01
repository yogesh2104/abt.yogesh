import { PersonalData } from "@/lib/data/personalData";
import { ArrowDownToLine, Contact, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="relative flex flex-col items-center justify-between">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-black dark:text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] text-left">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{PersonalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{PersonalData?.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={PersonalData?.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Github  className="h-4 w-4"/>
            </Link>
            <Link
              href={PersonalData?.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Linkedin className="h-4 w-4"/>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <Contact className="h-4 w-4"/>
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={PersonalData?.resume}
            >
              <span>Get Resume</span>
              <ArrowDownToLine className="h-4 w-4" />
            </Link>
          </div>

        </div>
        
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] mt-10">
          <div className="flex flex-row animate-pulse">
            <div className=" h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className=" h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 text-left">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{PersonalData.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">{PersonalData?.skill[0]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[1]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[2]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[3]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[4]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[5]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[6]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[7]}</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">{PersonalData?.skill[8]}</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <span className="text-gray-400">{'}'}</span>
            </code>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}

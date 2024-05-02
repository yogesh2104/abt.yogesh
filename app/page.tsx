import CardHeader from "@/components/card-header";
import Typer from "@/components/typer";
import { Button } from "@/components/ui/button";
import { PersonalData } from "@/lib/data/personalData";
import { ArrowDownToLine, Contact, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'abt-yogesh || Home',
  description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

export default function Home() {
  return (
    <>
    <section className="relative flex flex-col items-center justify-between">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-2xl font-bold leading-10 text-black dark:text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] text-left">
            Hello, <br />
            This is {' '}
            <span className=" text-primary">{PersonalData.name}</span>
            {` , I'm a Professional `}
            <Typer data={PersonalData.typerData}/>
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={PersonalData?.github}
              target='_blank'
              className="transition-all text-[#2c73e4] hover:scale-125 duration-300"
            >
              <Github  className="h-4 w-4 text-primary"/>
            </Link>
            <Link
              href={PersonalData?.linkedIn}
              target='_blank'
              className="transition-all text-[#2c73e4] hover:scale-125 duration-300"
            >
              <Linkedin className="h-4 w-4 text-primary"/>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact-us">
              <Button variant="outline" className="h-10 text-primary dark:border-white border-black text-xs rounded-lg text-center md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <Contact className="h-4 w-4"/>
              </Button>
            </Link>

            <Link role="button" target="_blank" href={PersonalData?.resume}>
              <Button variant="outline" className="h-10 text-primary dark:border-white border-black text-xs rounded-lg text-center md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3" >
                <span>Get Resume</span>
                <ArrowDownToLine className="h-4 w-4" />
              </Button>
            </Link>
          </div>

        </div>
        
        <div className="order-1 lg:order-2  p-2">
          <div className="border-black dark:border-white relative rounded-lg border mb-4">
            <CardHeader/>
            <div className="overflow-hidden border-t-[1px] border-black dark:border-white px-4 lg:px-8 py-4 lg:py-8 text-left">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 dark:text-white text-black">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-primary">{PersonalData.name}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" dark:text-white text-black">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-primary">{PersonalData?.skill[0]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[1]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[2]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[3]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[4]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[5]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[6]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[7]}</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-primary">{PersonalData?.skill[8]}</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">hardWorker:</span>
                  <span className="text-primary">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">quickLearner:</span>
                  <span className="text-primary">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">problemSolver:</span>
                  <span className="text-primary">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <span className="text-gray-400">{'}'}</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}

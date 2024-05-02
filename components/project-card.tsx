import { Fragment } from "react";

interface ProjectProps{
    project:{
        name: string,
        tools:string[],
        role:string,
        description:string
    }
}

function ProjectCard({ project }:ProjectProps) {

    return (
      <div className="relative rounded-lg border border-black dark:border-white w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full"></div>
        <div className="h-[1px] w-full "></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-700"></div>
        </div>
        <p className="text-center ml-3 text- text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[1px] border-black dark:border-white  px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base text-left">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 dark:text-white text-black">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-primary">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" dark:text-white text-black">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <Fragment key={i}>
                  <span className="text-primary">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">myRole:</span>
            <span className="text-orange-600">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="dark:text-white text-black">Description:</span>
            <span className="text-primary">{' ' + project.description}</span>
            <span className="text-gray-400"></span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
    );
};
  
export default ProjectCard;
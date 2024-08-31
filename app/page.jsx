import CardHeader from "@/components/card-header";
import Typer from "@/components/typer";
import { PersonalData } from "@/lib/data/personalData";
import { ArrowDownToLine, Contact, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import ElevatedButton from "@/components/elevated-button";

export const metadata = {
  title: 'abt-yogesh || Home',
  description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-[calc(85vh-1px)] ">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold leading-10 space-x-4 text-black dark:text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          Hey, <br />
          This is <span className="text-primary">{PersonalData.name}</span>
          {`, I'm a Professional `}
          <Typer data={PersonalData.typerData} />
          <p className="mt-4 text-lg font-normal text-gray-600 dark:text-gray-300 font-serif">
            I build responsive and interactive web applications with a <br/> focus on performance and user experience.
          </p>
        </h1>

        <div className="my-12 flex items-center gap-5">
          <Link
            href={PersonalData?.github}
            target='_blank'
            className="transition-all text-[#2c73e4] hover:scale-125 duration-300"
          >
            <Github className="h-6 w-6 text-primary" />
          </Link>
          <Link
            href={PersonalData?.linkedIn}
            target='_blank'
            className="transition-all text-[#2c73e4] hover:scale-125 duration-300"
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/contact-us">
            <ElevatedButton>
              <span className="flex items-center gap-3">Contact me<Contact className="ml-1 h-4 w-4" /></span>
            </ElevatedButton>
          </Link>

          <ElevatedButton>
            <span className="flex items-center gap-3">Get Resume<ArrowDownToLine className="ml-1 h-4 w-4" /></span>
          </ElevatedButton>
        </div>
      </div>
    </section>
  );
}

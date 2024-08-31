import { GraduationCap } from "lucide-react";
import { educations } from '@/lib/data/educationData';
import { Fragment } from "react";
import CardHeader from "@/components/card-header";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import {Timeline} from "@/components/timeline"
import Image from "next/image";


export const metadata = {
    title: 'abt-yogesh || education',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}

const EduPage=()=>{
  return(
    <div className="h-max">
      <Timeline data={educations} />
    </div>
  )
}

export default EduPage
import { cn } from "@/lib/utils";
import { Calendar, MoveRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface PostProps{
    slug:string;
    title:string;
    description:string | undefined;
    date:string;
}

const BlogItem = ({slug,title,description,date}:PostProps) =>{
    const getDate = new Date(date);
    
    return(
        <article className="flex flex-col gap-2 border-border border-b py-3 font-serif">
            <div>
                <h2 className="text-2xl font-bold text-start text-primary">
                    <Link href={slug}>{title}</Link>
                </h2>
            </div>
            <div className="max-w-none text-muted-foreground text-start">{description}</div>
            <div className="flex justify-between items-center">
                <dl>
                    <dt className="sr-only">Published On</dt>
                    <dd className="text-sm sm-text-base font-me flex items-center gap-1"> 
                        <Calendar className="h-4 w-4 text-primary"/>
                        <time className="text-primary" dateTime={date}>{getDate.toLocaleDateString("en-IN",{
                            month:"long",
                            day:"numeric",
                            year:"numeric"
                        })}</time>
                    </dd>
                </dl>
                <Link href={slug} className={cn(buttonVariants({variant:"link"}),"py-0")}>
                    Read More <MoveRight className="h-4 w-4" />
                </Link>
            </div>
        </article>
    )
}

export default BlogItem
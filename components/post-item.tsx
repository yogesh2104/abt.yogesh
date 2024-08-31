import { cn } from "@/lib/utils";
import { Calendar, MoveRight } from "lucide-react";
import Link from "next/link";
import { cva } from "class-variance-authority";

interface PostProps{
    slug:string;
    title:string;
    description:string | undefined;
    date:string;
}

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

  

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
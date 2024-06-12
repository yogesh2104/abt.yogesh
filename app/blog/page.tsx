import { Metadata } from "next";
import { posts } from "#post/content";
import PostItem from "@/components/post-item";


export const metadata: Metadata = {
    title: 'abt-yogesh || blog',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}


export default async function BlogPage(){
    const dispalyAllPost = posts

    return(
        <div className="container max-w-4xl py-2 lg:py-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
                {/* <p className="text-xl text-muted-foreground">
                    My ramblings on all things web dev.
                </p> */}
                </div>
            </div>
            {dispalyAllPost.length>0 ? (
            <ul className="flex flex-col">
                {dispalyAllPost.map((postItem,inx)=>{
                    const {title,date,slug,description} = postItem
                    return(
                        <li className="" key={inx}>
                            <PostItem
                                title={title}
                                description={description}
                                date={date}
                                slug={slug}
                            />
                        </li>
                    )
                })}
            </ul>
            ):<p>Nothing to see here</p>}
        </div>
    )
}
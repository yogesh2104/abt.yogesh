import { Metadata } from "next";
import { blogs } from "#post/content";
import BlogItem from "@/components/post-item";


export const metadata: Metadata = {
    title: 'abt-yogesh || blog',
    description: 'This is the portfolio of Yogesh Sing. I am a full stack developer. I am a quick learner and I am always looking for new challenges.',
}


export default async function BlogPage(){
    const dispalyAllBlog = blogs

    return(
        <div className="container">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-primary text-4xl lg:text-5xl">Blog</h1>
            <p className="text-xl text-muted-foreground">
                My ramblings on all things web dev.
            </p>
            </div>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-8">
            <div className="col-span-12 col-start-1 sm:col-span-12">
            <hr />
            {dispalyAllBlog?.length > 0 ? (
                <ul className="flex flex-col">
                {dispalyAllBlog.map((blog) => {
                    const { slug, date, title, description } = blog;
                    return (
                    <li key={slug}>
                        <BlogItem
                        slug={slug}
                        date={date}
                        title={title}
                        description={description}
                        />
                    </li>
                    );
                })}
                </ul>
            ) : (
                <p>Nothing to see here yet</p>
            )}
            
            </div>
            
        </div>
        </div>
    )
}
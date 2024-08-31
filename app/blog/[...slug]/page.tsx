import { blogs } from "#post/content"
import { MDXContent } from "@/components/mdx-components";
import type { Metadata ,ResolvingMetadata} from 'next'
import { notFound } from "next/navigation";
import "@/styles/mdx.css"
interface BlogDetailsProps{
    params:{
        slug:string[]
    }
}

async function getBlogDetails(params:BlogDetailsProps['params']) {
    const slug = params?.slug?.join("/")
    const blog = blogs.find((blogData)=>blogData.slugAsParams ===slug);
    
    return blog
}

export async function generateStaticParams():Promise<BlogDetailsProps["params"][]>{
    return blogs.map((blogData)=>({slug:blogData.slugAsParams.split("/")}))
}


interface BlogPageProps {
    params: {
      slug: string[];
    };
  }
   
export async function generateMetadata({
    params,
  }: BlogPageProps): Promise<Metadata> {
    const blog = await getBlogDetails(params);
  
    if (!blog) {
      return {};
    }
  
    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", blog.title);
  
    return {
      title: blog.title,
      description: blog.description,
      authors: { name: "Yogesh Singh" },
      openGraph: {
        title: blog.title,
        description: blog.description,
        type: "article",
        url: blog.slug,
        images: [
          {
            url: `/api/og?${ogSearchParams.toString()}`,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description,
        images: [`/api/og?${ogSearchParams.toString()}`],
      },
    };
  }
  


const BlogDetails=async({params}:BlogDetailsProps)=>{
    const blog = await getBlogDetails(params)

    if(!blog || !blog.published){
        notFound()
    }

    return(
        <article className="container py-6 prose dark:prose-invert max-w-4xl">
          <h1 className="mb-2">{blog.title}</h1>
          {blog.description ? (
              <p className="text-xl mt-0 text-muted-foreground">{blog.description}</p>
          ) : null}
          <hr className="my-4" />
          <MDXContent code={blog.body} />
        </article>
    )
}

export default BlogDetails
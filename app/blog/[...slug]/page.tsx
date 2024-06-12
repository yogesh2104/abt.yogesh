interface BlogDetailsProps{
    params:{
        slug:string[]
    }
}

const BlogDetails=({params}:BlogDetailsProps)=>{

    return(
        <article className="container py-6 prose dark:prose-invert max-w-3">
            
        </article>
    )
}

export default BlogDetails
import Image from "next/image"
import * as runtime from "react/jsx-runtime"
import { Callout } from "./callout"
import { cn } from "@/lib/utils"
import * as React from "react"


const useMDXComponent =(code:string)=>{
    const fn = new Function(code)
    return fn({...runtime}).default
}

const components ={
    Image,
    Callout
}

interface MDXProps{
    code:string;
}

export function MDXContent({code}:MDXProps){
    const Component = useMDXComponent(code)
    return <Component components={components}/>
}





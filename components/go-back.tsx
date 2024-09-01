"use client"
import { MoveLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export const GoBack=()=>{
    const router = useRouter()
    return(
        <MoveLeft className="h-6 w-6 cursor-pointer" onClick={()=>router.back()}/>
    )
}
"use client"
import { MoveLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export const GoBack=()=>{
    const router = useRouter()
    return(
        <div className="flex gap-4 cursor-pointer">
            <MoveLeft className="h-6 w-6" onClick={()=>router.back()}/> <span>Go Back</span>
        </div>
    )
}
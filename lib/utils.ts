import { type ClassValue, clsx } from "clsx"
import { Brain, FolderKanban, Home, Paperclip, SquareLibrary, SquareTerminal, User ,GraduationCap} from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NavigationBarItem=[
  {name:'Home',slug:'/',icon:Home},
  {name:'Skill',slug:'/skill',icon:SquareLibrary},
  {name:"Education",slug:"/education",icon:GraduationCap},
  {name:'Project',slug:'/project',icon:FolderKanban},
  {name:'Links',slug:'/links',icon:Paperclip},
  {name:'About',slug:'/about',icon:User},
  {name:'Terminal',slug:'/terminal',icon: SquareTerminal }
]

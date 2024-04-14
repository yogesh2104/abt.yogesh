import { type ClassValue, clsx } from "clsx"
import { Brain, FolderKanban, Home, Paperclip, SquareLibrary, SquareTerminal, User ,GraduationCap,FileQuestion, PhoneCall} from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NavigationBarItem=[
  {name:'Home',slug:'/',icon:Home},
  {name:"Education",slug:"/education",icon:GraduationCap},
  {name:'Project',slug:'/project',icon:FolderKanban},
  {name:'Skill',slug:'/skill',icon:SquareLibrary},
  {name:'Guest Book',slug:'/guest-book',icon:FileQuestion},
  {name:'About',slug:'/about',icon:User},
  {name:'Contact',slug:'/contact-us',icon:PhoneCall},
//  {name:'Terminal',slug:'/terminal',icon: SquareTerminal }
]


export function timeConverter(isoTime:any) {
  const currentTime = new Date().getTime();
  const pastTime = new Date(isoTime).getTime();
  const timeDifference = currentTime - pastTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
}
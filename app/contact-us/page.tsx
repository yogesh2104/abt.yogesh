"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { isValidEmail } from "@/lib/utils"
import emailjs from '@emailjs/browser';
import { Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const ContactComponent=()=>{

    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState({
        email: false,
        required: false,
    });

    const checkRequired = () => {
        if (input.email && input.message && input.name) {
            setError({ ...error, required: false });
        }
    };


    const handleSendMail = async (e: React.FormEvent<HTMLFormElement>, input: { name: string, email: string, message: string }) => {
       
    };


    return(
        <>
            <div className="w-full">
                <div className="relative z-50 lg:mt-[-70px]">
                    <div className="flex justify-center my-5 lg:py-8">
                        <div className="flex  items-center">
                            <span className="w-24 h-[2px] bg-[#2c73e4]"></span>
                            <span className="bg-[#2c73e4] text-white p-2 px-5 text-xl rounded-md">Contact with me</span>
                            <span className="w-24 h-[2px] bg-[#2c73e4]"></span>
                        </div>
                    </div>
                    <div className='w-full text-center'>

                        <p className="text-sm dark:text-[#d3d8e8] text-black">If you have any questions please contact me.</p>
                        <div className="mt-6 max-w-lg">
                            <div className="text-start">
                                <Label htmlFor="name" className="text-black dark:text-white">Name</Label>
                                <Input 
                                    type="text" 
                                    id="name" 
                                    maxLength={100}
                                    required={true} 
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                            <div className="text-start">
                                <Label htmlFor="email" className="text-black dark:text-white">Email</Label>
                                <Input 
                                    type="email" 
                                    id="email" 
                                    maxLength={100}
                                    required={true} 
                                    placeholder="Enter Your Email  Address"
                                />
                            </div>
                            {<p className="text-xs text-start text-red-400">Please provide a valid email!</p>}
                            </div>
                
                            <div className="flex flex-col gap-2">
                            <div className="text-start">
                                <Label htmlFor="message" className="text-black dark:text-white">Your message</Label>
                                <Textarea placeholder="Type your message here." id="message" />
                            </div>
                            </div>
                            {
                                <p className="text-xs text-start text-red-400">Message are required!</p>
                            }
                            <div className="flex flex-col items-center gap-2">
                            <Button
                                className="flex items-center gap-1 hover:gap-3 rounded-md dark:text-black px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline  hover:text-white hover:no-underline md:font-semibold"
                                role="button"
                            >
                                <span>Send Message</span>
                                <Send className="h-4 w-4"/>
                            </Button>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}
export default ContactComponent
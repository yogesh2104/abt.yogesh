"use client"
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

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    const handleSendMail = async (e: React.FormEvent<HTMLFormElement>, input: { name: string, email: string, message: string }) => {
        // e.preventDefault();
        // const {name,email,message} = input
        // if (!name || !email || !message) {
        //     setError({ ...setError, required: true });
        //     return;
        // } else if (error.email) {
        //     return;
        // } else {
        //     setError({ ...setError, required: false });
        // }
    
        // try {
        //     const res = await emailjs.send(serviceID, templateID, input, options);
    
        //     if (res.status === 200) {
        //         toast.success('Message sent successfully!');
        //         setInput({
        //             name: '',
        //             email: '',
        //             message: '',
        //         });
        //     }
        // } catch (error) {
        //     toast.error("Somthing failed");
        // }
    };


    return(
        <div className="">
            <p className="font-semibold mb-5 dark:text-[#fbfbfb] text-black text-xl uppercase">Contact with me</p>
            <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5 m-3">
                <p className="text-sm dark:text-[#d3d8e8] text-black">If you have any questions please contact me.</p>
                <div className="mt-6 flex flex-col gap-4">
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
                    <button
                        className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                        role="button"
                    >
                        <span>Send Message</span>
                        <Send className="ww-4 w-4"/>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactComponent
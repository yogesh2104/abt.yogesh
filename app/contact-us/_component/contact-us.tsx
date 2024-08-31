"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormMessage} from "@/components/ui/form"
import CardHeader from "@/components/card-header"
import emailjs from '@emailjs/browser';
import ElevatedButton from "@/components/elevated-button"

const formSchema = z.object({
    from_name: z.string().min(2, {message: "Username must be at least 2 characters."}),
    email:z.string().email(),
    to_name:z.string(),
    message:z.string().max(500,{message: "Please enter message less than 500 characters"})
})  

const ContactUS=()=>{

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            from_name: "",
            to_name:"Yogesh Singh",
            email: "",
            message:""
        },
    })
      
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPATE_KEY as string;
        const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };
    
        try {
            const res = await emailjs.send(serviceID, templateID, values, options);
            if (res.status === 200) {
            toast.success('Message sent successfully!');
            };
        } catch (error:any) {
            toast.error(error?.text)
        };
    }

    return(
        <>
            <div className="flex justify-center mb-5">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-primary"></span>
                <span className="bg-primary text-white dark:text-black p-1 px-5 text-lg rounded-md lg:text-xl">Contact Us</span>
                <span className="w-24 h-[2px] bg-primary"></span>
                </div>
            </div>

            <div className='w-full text-center'>
                <p className="text-sm dark:text-[#d3d8e8] text-black">If you have any questions please contact me.</p>
            </div>
            <div className="mt-3 p-2">
                <div className="border-black dark:border-white relative rounded-lg border mb-4">
                <CardHeader/>
                <div className="overflow-hidden border-t-[1px] border-black dark:border-white px-4 lg:px-8 py-4 lg:py-8 text-left">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="text-center">
                            <FormField
                                control={form.control}
                                name="from_name"
                                render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="text-start">
                                            <Label htmlFor="name" className="text-black dark:text-white">Name</Label>
                                            <Input 
                                                type="text" 
                                                id="name" 
                                                className="mt-2"
                                                maxLength={100}
                                                placeholder="Enter Your Name"
                                                {...field} 
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <div className="text-start">
                                        <Label htmlFor="name" className="text-black dark:text-white">Email</Label>
                                        <Input 
                                            type="email" 
                                            id="email"
                                            className="mt-2"
                                            maxLength={100}
                                            placeholder="Enter Your Email  Address"
                                            {...field} 
                                        />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <div className="text-start">
                                        <Label htmlFor="message" className="text-black dark:text-white">Message</Label>
                                        <Textarea id="message" className="mt-2 resize-none" placeholder="Type your message here." {...field} />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <div className="flex justify-center mt-4 mb-3">
                                <ElevatedButton
                                    className=" rounded-md dark:text-black w-44 text-center text-xs md:text-sm  hover:text-white hover:no-underline md:font-semibold"
                                    role="button"
                                    type="submit"
                                >
                                    <span className="flex items-center gap-3">
                                        Send Message
                                        <Send className="h-4 w-4"/>
                                    </span>
                                </ElevatedButton>
                            </div>
                        </form>
                    </Form>
                </div>
                </div>
            </div>
            
        </>
    )
}
export default ContactUS
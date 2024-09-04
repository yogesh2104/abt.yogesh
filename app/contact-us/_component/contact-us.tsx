"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormMessage} from "@/components/ui/form"
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
        <div className="md:container font-sans ">
            <h1 className="text-4xl pt-4 md:text-6xl font-bold mb-4 text-center dark:text-white text-black">Contact<span className="text-primary">.</span></h1>
        
            <div className="border-t border-gray-700 pt-8">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input
                            placeholder="Your Name"
                            {...field}
                            className="border-gray-700 text-white placeholder-gray-400"
                            />
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
                            <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                            className="border-gray-700 text-white placeholder-gray-400"
                            />
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
                            <Textarea
                            placeholder="Your Message"
                            {...field}
                            className="border-gray-700 text-white placeholder-gray-400 resize-none"
                            rows={4}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex justify-center mt-4 mb-3">
                        <ElevatedButton
                            className=""
                            role="button"
                            type="submit"
                        >
                        <span className="flex items-center gap-3">Send Message<Send className="h-4 w-4"/></span>
                        </ElevatedButton>
                    </div>
                </form>
                </Form>
            </div>
        </div> 
            
        </>
    )
}
export default ContactUS
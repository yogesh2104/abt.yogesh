"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormMessage} from "@/components/ui/form"
import ElevatedButton from "@/components/elevated-button"
import { useState } from "react"

const formSchema = z.object({
    from_name: z.string().min(2, {message: "Username must be at least 2 characters."}),
    email:z.string().email(),
    to_name:z.string(),
    message:z.string().max(500,{message: "Please enter message less than 500 characters"})
})  

const ContactUS=()=>{
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
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
        const { email,from_name ,message } = values

        setStatus("sending")
    
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name:from_name,
                email, 
                message
            }),
          })
    
          if (response.ok) {
            toast.success("Message sent successfully!")
          } else {
            toast.error("Failed to send message. Try again.")
          }
        } catch (error) {
            toast.error("Failed to send message. Try again.")
        }
    }

    return(
        <>
        <div className="md:container font-sans ">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center dark:text-white text-black">Contact<span className="text-primary">.</span></h1>
        
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
                            className="border-gray-700 dark:text-white text-black placeholder-gray-400"
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
                            className="border-gray-700 dark:text-white text-black placeholder-gray-400"
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
                            className="border-gray-700 dark:text-white text-black placeholder-gray-400 resize-none"
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
                            disabled={status === "sending"}
                        >
                        <span className="flex items-center gap-3">{status === "sending" ? "Sending Message..." : "Send Message"}<Send className="h-4 w-4"/></span>
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
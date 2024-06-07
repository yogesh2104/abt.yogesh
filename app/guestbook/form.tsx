'use client';

import { useRef } from 'react';
import { saveGuestbookEntry } from '../db/actions';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem,FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormStatus } from 'react-dom';
import ThreeDButton from "@/components/ui/three-d-button";

const FormSchema = z.object({
  userEntry: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }).max(500, {message: "Message must be less than 500 characters"}),
})

export function InputForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userEntry: "",
    },
  })
 
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await saveGuestbookEntry(data.userEntry);
    form.reset();
  }

  const { pending } = useFormStatus();
 
  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="flex max-w-[500px] align-center gap-5">
      <FormField
        control={form.control}
        name="userEntry"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Write Here..." className="mt-4" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <ThreeDButton type="submit" className="w-36" disabled={pending}>Submit</ThreeDButton>
      </form>
    </Form>
  )
}


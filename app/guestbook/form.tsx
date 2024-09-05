'use client';

import { useRef } from 'react';
import { saveGuestbookEntry } from '../db/actions';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormStatus } from 'react-dom';
import ElevatedButton from '@/components/elevated-button';
import { SignOut } from './button';

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
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="align-center gap-2">
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

      <ElevatedButton type="submit" className="mt-4 mr-3 w-40 text-white text-sm dark:text-black" disabled={pending}>Submit</ElevatedButton>
      <SignOut />
      </form>
    </Form>
  )
}


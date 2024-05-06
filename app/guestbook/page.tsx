import { Suspense } from "react";
import { SignInWithGit, SignInWithGoogle, SignOut } from "./button";
import {InputForm} from "./form";
import { auth } from 'app/auth';
import { getGuestbookEntries } from "../db/queries";
import CardHeader from "@/components/card-header";

export const metadata = {
    title: 'abt.yogesh || Guest book',
    description: 'Sign my guestbook and leave your message.',
};

export default function GuestbookPage() {
    return (
      <section className="w-full lg:-mt-[50px]">
        <div className="flex justify-center mb-5">
            <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-primary"></span>
            <span className="bg-primary text-white dark:text-black p-1 px-5 text-xs rounded-md lg:text-xl">Sign in To Write Message</span>
            <span className="w-24 h-[2px] bg-primary"></span>
            </div>
        </div>

        <Suspense>
          <GuestbookForm />
          <div>
            <GuestbookEntries />
          </div>
        </Suspense>
      </section>
    );
}



async function GuestbookForm() {
    let session = await auth();
  
    return session?.user ? (
      <div className='flex justify-start gap-5 align-center mb-6 ml-3'>
        <InputForm />
        <SignOut />
      </div>
    ) : (
      <div className="flex gap-2 w-full justify-center">
        <SignInWithGoogle/>
        <SignInWithGit />
      </div>
    );
}

async function GuestbookEntries() {
    let entries = await getGuestbookEntries();

    if (entries.length === 0) {
      return null;
    }
  
    return(
      <div className="p-2">
            <div className="border-black dark:border-white relative rounded-lg border mb-4">
              <CardHeader/>
              <div className=" h-[400px] overflow-y-auto border-t-[1px] border-black dark:border-white px-2 lg:px-4 py-2 lg:py-4 text-left">
                {entries.map((entry) => (
                  <div key={entry.id} className="flex flex-col mb-4 ">
                    <div className="w-full text-sm break-words">
                      <span className="text-primary mr-1 font-semibold">
                        {entry.created_by}:
                      </span>
                      {entry.body}
                    </div>
                  </div> 
                ))}
              </div>
            </div>
        </div>
    ) 
}
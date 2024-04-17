import { Suspense } from "react";
import { SignIn, SignOut } from "./button";
import Form from "./form";
import { auth } from 'app/auth';
import { getGuestbookEntries } from "../db/queries";

export const metadata = {
    title: 'Guest book',
    description: 'Sign my guestbook and leave your message.',
};

export default function GuestbookPage() {
    return (
      <section>
        <div className="flex justify-center -mt-7 mb-5">
            <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">Sign in To Write Message</span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
        </div>

        <Suspense>
          {/* <GuestbookForm /> */}
          <div className="border text-start">
            <GuestbookEntries />
          </div>
        </Suspense>
      </section>
    );
}



async function GuestbookForm() {
    let session = await auth();
  
    return session?.user ? (
      <>
        <Form />
        <SignOut />
      </>
    ) : (
      <SignIn />
    );
}

async function GuestbookEntries() {
    let entries = await getGuestbookEntries();

    if (entries.length === 0) {
      return null;
    }
  
    return entries.map((entry) => (
      <div key={entry.id} className="flex flex-col space-y-1 mb-4 p-1">
        <div className="w-full text-sm break-words">
          <span className="text-neutral-600 dark:text-neutral-400 mr-1 font-semibold">
            {entry.created_by}:
          </span>
          {entry.body}
        </div>
      </div>
    ));
}
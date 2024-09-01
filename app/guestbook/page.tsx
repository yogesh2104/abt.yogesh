import { Suspense } from "react"
import { SignInWithGit, SignInWithGoogle, SignOut } from "./button"
import { InputForm } from "./form"
import { auth } from 'app/auth'
import { getGuestbookEntries } from "../db/queries"

export const metadata = {
  title: 'abt.yogesh || Guest book',
  description: 'Sign my guestbook and leave your message.',
}

export default function GuestbookPage() {
  return (
    <section className="text-white p-8 font-sans mb-16">
      <h1 className="text-6xl font-bold mb-8 text-center dark:text-white text-black">Guestbook<span className="text-primary">.</span></h1>
      <div className="border-t border-gray-700 pt-8">
        <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
          <GuestbookEntries />
          <GuestbookForm />
        </Suspense>
      </div>
    </section>
  )
}

async function GuestbookForm() {
  let session = await auth()

  return session?.user ? (
    <div className='flex justify-start gap-5 items-center mt-2'>
      <InputForm />
      <SignOut />
    </div>
  ) : (
    <div className="flex gap-5 justify-center mt-6">
      <SignInWithGoogle />
      <SignInWithGit />
    </div>
  )
}

async function GuestbookEntries() {
  let entries = await getGuestbookEntries()

  if (entries.length === 0) {
    return <p className="text-gray-400">No entries yet. Be the first to sign!</p>
  }

  return (
    <div className="space-y-2">
      {entries.map((entry) => (
        <div key={entry.id} className="bg-gray-800 rounded-lg p-3">
          <p className="text-sm break-words">
            <span className="text-green-400 font-semibold mr-2">
              {entry.created_by}:
            </span>
            {entry.body}
          </p>
        </div>
      ))}
    </div>
  )
}
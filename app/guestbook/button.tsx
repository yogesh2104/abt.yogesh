'use client';

import { Github } from 'lucide-react';
import { signIn, signOut } from 'next-auth/react';
import { Button } from "@/components/ui/button"

export function SignOut() {
    return (
      <Button className="text-white  dark:text-black" onClick={() => signOut()}>
        Sign out
      </Button>
    );
}

export function SignInWithGit() {
  return (
    <Button
      className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 hover:text-white text-neutral-900 dark:text-neutral-100 mb-8"
      onClick={() => signIn('github')}
    >
      {/* <Github className='h-5 w-5'/> */}
      <div className="ml-3">Sign in with GitHub</div>
    </Button>
  );
}

export function SignInWithGoogle() {
  return (
    <Button
      className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 hover:text-white text-neutral-900 dark:text-neutral-100 mb-8"
      onClick={() => signIn('google')}
    >
      {/* <Github className='h-5 w-5'/> */}
      <div className="ml-3">Sign in with Google</div>
    </Button>
  );
}
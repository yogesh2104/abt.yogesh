'use client';

import { Github,LogIn } from 'lucide-react';
import { signIn, signOut } from 'next-auth/react';
import ElevatedButton from "@/components/elevated-button";

export function SignOut() {
    return (
      <ElevatedButton className="text-white w-36  dark:text-black -mt-10" onClick={() => signOut()}>
        Sign out
      </ElevatedButton>
    );
}

export function SignInWithGit() {
  return (
    <ElevatedButton
      className=" "
      onClick={() => signIn('github')}
    >
    <div className="p-2 text-sm">Sign in with GitHub</div>
    </ElevatedButton>
  );
}

export function SignInWithGoogle() {
  return (
    <ElevatedButton
      className=" "
      onClick={() => signIn('google')}
    >
    <div className="p-2 text-sm">Sign in with Google</div>
    </ElevatedButton>
  );
}
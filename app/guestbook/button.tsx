'use client';

import { Github,LogIn } from 'lucide-react';
import { signIn, signOut } from 'next-auth/react';
import ThreeDButton from "@/components/ui/three-d-button";

export function SignOut() {
    return (
      <ThreeDButton className="text-white w-36  dark:text-black" onClick={() => signOut()}>
        Sign out
      </ThreeDButton>
    );
}

export function SignInWithGit() {
  return (
    <ThreeDButton
      className=" "
      onClick={() => signIn('github')}
    >
    <div className="p-2 text-sm">Sign in with GitHub</div>
    </ThreeDButton>
  );
}

export function SignInWithGoogle() {
  return (
    <ThreeDButton
      className=" "
      onClick={() => signIn('google')}
    >
    <div className="p-2 text-sm">Sign in with Google</div>
    </ThreeDButton>
  );
}
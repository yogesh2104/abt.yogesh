import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from "next-auth/providers/google"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
    Google({
        clientId: process.env.AUTH_GOOGLE_ID as string,
        clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    })
  ],
  pages: {
    signIn: '/sign-in',
  },
});

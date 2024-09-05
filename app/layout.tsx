import { Calistoga, } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import type { Metadata ,ResolvingMetadata} from 'next'
import { headers } from 'next/headers'
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDock } from "@/components/floating-dock";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from '@vercel/analytics/react';
import { ThemeWrapper } from "@/components/theme-wrapper";
import grainImage from "./../public/images/grain.jpg"
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import Script from "next/script";



const calistoga = Calistoga({ subsets: ["latin"],variable:"--font-sans",weight:["400"] })

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function Metadata({ params, searchParams }: Props,parent: ResolvingMetadata): Promise<Metadata> {

  return {
    title: {
      template: '%s | Yogesh Singh',
      default: 'Yogesh Singh',
    },
    description: "yogesh//singh, student and web developer from India",
    metadataBase: new URL('http://localhost:3000/'),
    generator: 'Next.js',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    keywords: ['web dev', 'React', 'JavaScript','nextjs','web developer','india','indian developer'],
    authors: [{ name: 'Yogesh' }, { name: 'Yogesh', url: 'http://localhost:3000/' }],
    alternates: {
      canonical: '/',
      languages: {
        'en-IN': '/en-IN',
        'en-US': '/en-US',
      },
    },
    openGraph: {
      title: 'Yogesh Singh',
      description: 'The React Framework for the Web',
      url: 'http://localhost:3000/',
      siteName: 'abt.yogesh.me',
      locale: 'en_IN',
      type: 'website',
    },
  }
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const pathname = headers().get('x-next-pathname') as string;
  return (
    <html lang="en">
    <body className={cn("bg-background antialiased font-sans",calistoga.variable)}>
      <ThemeProvider> 
        <ThemeWrapper className="w-full h-screen">
          <main className="flex flex-col overflow-x-hidden items-center relative flex-grow h-screen">
            <div 
              className="hidden dark:block absolute inset-0 -z-30 opacity-5 h-max" 
              style={{backgroundImage:`url(${grainImage.src})`}}
            />
            <div className="size-[450px] hero-ring"/>
            <div className="size-[650px] hero-ring "/>
            <div className="size-[760px] hero-ring"/>
            <div className="container flex flex-grow">
              <div className="lg:mt-6 w-full z-30">
                {children}
                <Analytics />
              </div>
                <FloatingDock/>
              <Toaster />
            </div>
          </main>
          <ShootingStars />
          <StarsBackground />
        </ThemeWrapper>
      </ThemeProvider>
    </body>
  </html>
  );
}

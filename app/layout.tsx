import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
const inter = Inter({ subsets: ["latin"] });
import type { Metadata ,ResolvingMetadata} from 'next'
import { headers } from 'next/headers'
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/mobile-nav";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from '@vercel/analytics/react';
import { ThemeWrapper } from "@/components/theme-wrapper";

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
      <body className={cn("bg-background",inter.className)}>
        <ThemeProvider> 
          <ThemeWrapper className="w-full">
            <main className="flex selection:bg-zinc-200/30 flex-col overflow-x-hidden min-h-[84.4vh] items-center font-serif max-h-auto relative">
              <div className="flex w-full h-full lg:w-[85%] md:w-2/3">
                <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
                  <NavBar path={pathname} />
                </div>
                <div className="fixed top-0 w-full mb-16 z-[999999] block lg:hidden md:hidden">
                  <MobileNav path={pathname} />
                </div>
                <div className="mt-16 lg:mt-6 w-full">
                  {children}
                  <Analytics />
                </div>
                <Toaster />
              </div>
            </main>
            <Footer/>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

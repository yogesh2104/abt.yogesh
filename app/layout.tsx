import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import type { Metadata ,ResolvingMetadata} from 'next'
import { headers } from 'next/headers'
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/mobile-nav";
import NavBar from "@/components/nav-bar";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props,parent: ResolvingMetadata): Promise<Metadata> {

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
      // images: [
      //   {
      //     url: 'http://localhost:3000/og.png', // Must be an absolute URL
      //     width: 800,
      //     height: 600,
      //   },
      //   {
      //     url: 'http://localhost:3000/og.png', // Must be an absolute URL
      //     width: 1800,
      //     height: 1600,
      //     alt: 'My custom alt',
      //   },
      // ],
      locale: 'en_IN',
      type: 'website',
    },
  

  }
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const pathname = headers().get('x-next-pathname') as string;
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange> 
          <main className="flex selection:bg-zinc-200/30 flex-col overflow-x-hidden min-h-screen items-center bg-zinc-100 dark:bg-zinc-900 font-serif max-h-auto relative">
            <div className="flex w-full h-full lg:w-[60%] md:w-2/3">
              <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
                <NavBar path={pathname} />
              </div>
              <div className="fixed top-0 w-full mb-16 z-50 block lg:hidden md:hidden">
                <MobileNav path={pathname} />
              </div>
              <div className="mt-16">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

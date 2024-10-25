import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { SidebarDesktop } from '@/components/sidebar/sidebar-desktop'

// import { ThemeToggle } from '@/components/theme-toggle'
import { Providers } from '@/components/providers'
// import { Header } from '@/components/header'
// import { Toaster } from '@/components/ui/sonner'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})



const title = 'Tradely'
const description =
  'A fully open-source AI-powered answer engine with a generative UI.'

  export const metadata = {
    metadataBase: process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : undefined,
    title: {
      default: 'Tradely',
      template: `%s - Tradely`
    },
    description:
      'Lightning Fast AI Chatbot that Responds With Live Interactive Stock Charts, Financials, News, Screeners, and More.',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    }
  }

  export const viewport = {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' }
    ]
  }
  
  interface RootLayoutProps {
    children: React.ReactNode
  }

// export const metadata: Metadata = {
//   metadataBase: new URL('https://morphic.sh'),
//   title,
//   description,
//   openGraph: {
//     title,
//     description
//   },
//   twitter: {
//     title,
//     description,
//     card: 'summary_large_image',
//     creator: '@miiura'
//   }
// }


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider >
    <html lang="en" suppressHydrationWarning>
      <body         
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}>
        <Toaster position="top-center" />
        <Providers
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <AppStateProvider>
            <Header />
            <SidebarDesktop />
            <div className="flex flex-col min-h-screen">
              {/* <SidebarDesktop /> */}
              <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
            </div>
            {/* <Sidebar /> */}
            {/* <Footer /> */}
            {/* <Toaster /> */}
          </AppStateProvider>
        </Providers>

      </body>
    </html>
    </ClerkProvider>
  )
}

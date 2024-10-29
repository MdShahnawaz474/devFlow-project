import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import {Inter,Space_Grotesk} from "next/font/google"

import "./globals.css"
import type { Metadata } from 'next'

const inter = Inter ({
  subsets: ['latin'],
  weight: ['100','200','400','500','600','700','800','900'],
  variable:"--font-inter"
 
})
const spaceGrotesk = Space_Grotesk ({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable:"--font-spaceGrotesk"
 
})

export const metaData:Metadata = {
  title:"DevFlow",
  description: "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world.Explore topics in web development, mobile app development, algorithms, data structures, andmore",
  icons:[

  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
      appearance={{
        elements:{
          formButtonPrimary:"primary-gradient",
          footerActionLink:'primary-text-gradient',
        }
      }}
    >
      <html lang="en">

        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

// <SignedOut>
{/* <SignInButton />
</SignedOut>
<SignedIn>
  <UserButton />
</SignedIn> */}
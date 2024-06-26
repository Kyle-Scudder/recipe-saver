// app/layout.tsx
import '../globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { type Metadata } from 'next'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipe Saver',
  description:
    "A site for saving recipes so we don't keep buying ingredients then not using them"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang='en'>
        <body
          className={`${inter.className} flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10
					pt-28 max-md:pb-32 sm:px-10`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

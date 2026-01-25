import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-display" 
});

export const metadata: Metadata = {
  title: 'Kallatage Art Event | Win $100 Prize',
  description: 'Join Kallatage\'s upcoming art event. Free registration, $100 prize pool. Register by March 21st to showcase your creativity!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`${spaceGrotesk.variable} ${syne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
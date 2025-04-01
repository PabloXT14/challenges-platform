import type { Metadata } from 'next'
import { Fira_Code, Poppins } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import { Providers } from './providers'

import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CodeForge',
  description: 'A platform for coding challenges',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${firaCode.variable} antialiased`}>
        <NextTopLoader
          color={'#64ffda'}
          showSpinner={false}
          initialPosition={0.3}
          height={3}
          speed={500}
          crawlSpeed={500} // delay speed in ms
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Fira_Code, Poppins } from 'next/font/google'
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
  title: 'Challenges Platform',
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
        {children}
      </body>
    </html>
  )
}

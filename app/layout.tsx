import type { Metadata } from 'next'
import { Syne, IBM_Plex_Mono, Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'SportTriad - Training the Mind. Protecting the Love of the Game.',
  description: 'AI-powered sports psychology platform for youth sports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable} ${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}

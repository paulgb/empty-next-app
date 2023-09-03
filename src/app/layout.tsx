import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empty Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

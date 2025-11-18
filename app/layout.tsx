import type { Metadata } from 'next'
import { Poppins, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

const _fredoka = Fredoka({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka'
});

export const metadata: Metadata = {
  title: 'Kuk-Hook | Early Learning Toys for Child Development',
  description: 'Premium early learning toys designed by child development experts. Safe, engaging, and educational toys for children 0-6 years. Shop by age, learning type, or developmental milestone.',
  keywords: 'early learning toys, educational toys, child development, baby toys, toddler toys, preschool toys, learning through play',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

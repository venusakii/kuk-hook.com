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
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🧸</text></svg>",
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

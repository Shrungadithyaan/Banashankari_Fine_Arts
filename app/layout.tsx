import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Banashankari Fine Arts - Handcrafted Wooden Furniture',
  description: 'Premium handcrafted wooden furniture by Vignesh Acharya in Sringeri, India. Custom CNC wood carving, chairs, tables, beds, and more.',
  keywords: 'wooden furniture, handcrafted furniture, CNC wood carving, Sringeri, Karnataka, Vignesh Acharya, Banashankari Fine Arts',
  authors: [{ name: 'Vignesh Acharya' }],
  creator: 'Banashankari Fine Arts',
  publisher: 'Banashankari Fine Arts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Banashankari Fine Arts - Handcrafted Wooden Furniture',
    description: 'Premium handcrafted wooden furniture by Vignesh Acharya in Sringeri, India. Custom CNC wood carving, chairs, tables, beds, and more.',
    url: '/',
    siteName: 'Banashankari Fine Arts',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Banashankari Fine Arts - Handcrafted Wooden Furniture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banashankari Fine Arts - Handcrafted Wooden Furniture',
    description: 'Premium handcrafted wooden furniture by Vignesh Acharya in Sringeri, India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#8B4513" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={inter.className}>
          <div className="min-h-screen bg-gradient-to-br from-wood-50 to-wood-100">
            {children}
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fdf8f3',
                color: '#8B4513',
                border: '1px solid #d47d3a',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  )
} 
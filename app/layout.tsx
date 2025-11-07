import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/hooks/use-auth"
import { CartProvider } from "@/hooks/use-cart"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TRYKON - Premium Indian Gymwear | Compression Tees & Athletic Wear",
  description: "India's #1 premium gymwear brand. High-performance compression tees, hoodies & athletic wear designed for modern athletes. Made in India. Free shipping available.",
  keywords: ["gymwear", "fitness clothing", "compression tees", "athletic wear", "indian gymwear", "premium sportswear", "workout clothes", "gym apparel", "made in india", "compression hoodies"],
  authors: [{ name: "TRYKON Team" }],
  creator: "TRYKON",
  publisher: "TRYKON",
  metadataBase: new URL('https://gymwear-react.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TRYKON - Premium Indian Gymwear",
    description: "India's #1 premium gymwear brand. High-performance compression tees & athletic wear for modern athletes.",
    url: 'https://gymwear-react.vercel.app',
    siteName: 'TRYKON',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TRYKON Premium Gymwear',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRYKON - Premium Indian Gymwear',
    description: 'High-performance compression tees & athletic wear for modern athletes. Made in India.',
    images: ['/images/twitter-card.png'],
    creator: '@trykon_official',
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter?.className || ""}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

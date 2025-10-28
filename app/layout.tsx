import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Press_Start_2P } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Load the pixel font properly using Next.js font system
const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aman's Game Dev Portfolio",
  description: "A portfolio showcasing game development and design projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${pixelFont.variable}`}>
      <head>
        {/* Add a preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Script to handle page refresh detection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // This script runs on page load/refresh but not during client-side navigation
            if (performance.navigation && performance.navigation.type === 1) {
              // This is a refresh
              sessionStorage.removeItem('visited');
            } else if (performance.getEntriesByType) {
              // Modern browsers
              const navEntries = performance.getEntriesByType('navigation');
              if (navEntries.length > 0 && navEntries[0].type === 'reload') {
                sessionStorage.removeItem('visited');
              }
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


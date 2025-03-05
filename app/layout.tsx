import "./globals.css"
import "./styles/custom.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SRIT Intern Portal",
  description: "Advanced internship resources for SRIT students",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto p-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


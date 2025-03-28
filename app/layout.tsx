import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ByteScrum - Technology Solutions",
  description: "Professional technology services by ByteScrum",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'
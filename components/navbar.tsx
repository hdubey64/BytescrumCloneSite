import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="ByteScrum Logo" width={180} height={40} className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
            About Us
          </Link>
          <div className="relative group">
            <button className="text-white hover:text-blue-400 transition-colors flex items-center">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/blockchain-development" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                  Blockchain Development
                </Link>
                <Link
                  href="/custom-software-development"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  Custom Software Development
                </Link>
                <Link href="/ecommerce-development" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                  E-commerce Development
                </Link>
                <Link href="/laravel-development" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                  Laravel Development
                </Link>
                <Link href="/python-development" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                  Python Development
                </Link>
                <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                  Digital Marketing
                </Link>
              </div>
            </div>
          </div>
          <Link href="/portfolio" className="text-white hover:text-blue-400 transition-colors">
            Portfolio
          </Link>
          <Link href="/blogs" className="text-white hover:text-blue-400 transition-colors">
            Blogs
          </Link>
          <Link href="/careers" className="text-white hover:text-blue-400 transition-colors">
            Careers
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
            Contact Us
          </Link>
        </div>

        <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6">Free Consultation</Button>
      </div>
    </nav>
  )
}


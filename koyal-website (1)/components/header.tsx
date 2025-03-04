import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-200">
      <Link href="/" className="flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-04%20at%2010.55.39%E2%80%AFPM-ZWlg0z8WpZKf4e8QLiw2Kpq5bJsET3.png"
          alt="Koyal Logo"
          width={120}
          height={40}
          priority
        />
      </Link>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="font-medium hover:text-gray-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="font-medium hover:text-gray-600 transition-colors">
              Current Projects
            </Link>
          </li>
          <li>
            <Link href="/careers" className="font-medium hover:text-gray-600 transition-colors">
              Careers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


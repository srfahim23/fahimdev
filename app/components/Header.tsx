import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#hero" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-gray-800 hover:text-blue-600 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header


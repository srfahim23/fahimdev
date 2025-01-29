"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

const AnimatedNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      setActiveSection(targetId)
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            FahimDev
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className={`text-white transition duration-300 ${
                    activeSection === item.href.slice(1) ? "border-b-2 border-blue-400" : "hover:text-blue-400"
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <motion.span
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="md:hidden text-white p-2 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
      <motion.div
        className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "-100%" },
        }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className={`block py-2 px-4 text-white transition duration-300 ${
                activeSection === item.href.slice(1) ? "border-l-4 border-blue-400" : "hover:text-blue-400"
              }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default AnimatedNav


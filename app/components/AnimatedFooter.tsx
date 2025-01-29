"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa"

const footerSections = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Responsive Design", href: "#services" },
      { name: "SEO Optimization", href: "#services" },
      { name: "Performance Optimization", href: "#services" },
      { name: "Website to App Conversion", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
  },
]

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/srfahim23", color: "hover:text-gray-400" },
  { name: "Email", icon: FaEnvelope, href: "mailto:srfahim23@gmail.com", color: "hover:text-red-400" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#", color: "hover:text-blue-400" },
  { name: "Twitter", icon: FaTwitter, href: "#", color: "hover:text-blue-500" },
  { name: "Instagram", icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
  { name: "Discord", icon: FaDiscord, href: "#", color: "hover:text-indigo-400" },
  { name: "Telegram", icon: FaTelegram, href: "#", color: "hover:text-blue-300" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "#", color: "hover:text-green-400" },
]

const AnimatedFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="mb-4">Follow me on social media to stay updated with my latest projects and developments.</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link href={link.href} className="hover:text-blue-300 transition duration-300">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">
              &copy; {new Date().getFullYear()} Developed and copy by FahimDev
            </span>
            <span className="ml-2 text-gray-300">All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default AnimatedFooter


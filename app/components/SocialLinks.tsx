"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/srfahim23",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "#",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "#",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "#",
    color: "hover:text-pink-400",
  },
]

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex space-x-6 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl text-white transition-colors duration-300 ${social.color}`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon />
          <span className="sr-only">{social.name}</span>
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks


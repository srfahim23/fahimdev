"use client"

import { motion } from "framer-motion"
import { useState, type React } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa"
// import AnimatedUnderline from "./AnimatedUnderline"
import AnimatedGradientText from "./AnimatedGradientText"

const socialLinks = [
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:srfahim23@gmail.com",
    color: "hover:text-red-400",
    isActive: true,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/srfahim23",
    color: "hover:text-gray-400",
    isActive: true,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "#",
    color: "hover:text-blue-400",
    isActive: false,
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "#",
    color: "hover:text-blue-500",
    isActive: false,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "#",
    color: "hover:text-pink-500",
    isActive: false,
  },
  {
    name: "Discord",
    icon: FaDiscord,
    link: "#",
    color: "hover:text-indigo-400",
    isActive: false,
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    link: "#",
    color: "hover:text-blue-400",
    isActive: false,
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "#",
    color: "hover:text-green-400",
    isActive: false,
  },
]

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "srfahim23@gmail.com",
    color: "text-red-400",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+8801617026858",
    color: "text-green-400",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Sirajganj Dhaka, BD",
    color: "text-blue-400",
  },
]

const AnimatedContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 py-20"
    >
      <div className="container mx-auto px-4">
        <AnimatedGradientText text="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className={`w-full px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-white text-purple-700 hover:bg-opacity-90 hover:shadow-lg"
                }`}
                whileHover={isSubmitted ? {} : { scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
                whileTap={isSubmitted ? {} : { scale: 0.95 }}
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <info.icon className={`text-2xl ${info.color}`} />
                    <div>
                      <p className="text-white opacity-70">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.isActive ? social.link : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-300 ${
                      hoveredIcon === social.name ? "bg-white bg-opacity-20" : ""
                    }`}
                    onHoverStart={() => setHoveredIcon(social.name)}
                    onHoverEnd={() => setHoveredIcon(null)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className={`text-3xl text-white ${social.color}`} />
                    <span className="text-white text-xs mt-2">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedContact


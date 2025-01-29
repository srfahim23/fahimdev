"use client"

import { motion } from "framer-motion"
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaRocket, FaExchangeAlt } from "react-icons/fa"
// import AnimatedUnderline from "./AnimatedUnderline"
import AnimatedGradientText from "./AnimatedGradientText"

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Custom website development using the latest technologies and best practices.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces for web applications.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Ensuring your website looks great and functions well on all devices and screen sizes.",
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    description: "Improving your website's visibility and ranking in search engine results.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description: "Enhancing your website's speed and efficiency for a better user experience.",
  },
  {
    icon: FaExchangeAlt,
    title: "Website to App Conversion",
    description: "Transform your website into a fully functional mobile or desktop application.",
  },
]

const AnimatedServices = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <AnimatedGradientText text="My Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-white bg-opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative z-10 p-6 h-full flex flex-col justify-between backdrop-blur-sm transition-all duration-300"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div>
                  <motion.div
                    className="text-5xl mb-4 text-white"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-100">{service.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedServices


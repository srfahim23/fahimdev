"use client"

import { motion } from "framer-motion"
import type React from "react"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ text, className = "" }) => {
  return (
    <motion.h2
      className={`text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-600 to-blue-400 animate-gradient ${className}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h2>
  )
}

export default AnimatedGradientText


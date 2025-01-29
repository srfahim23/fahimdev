"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

const AnimatedHero = () => {
  const [isExploreClicked, setIsExploreClicked] = useState(false)
  const [isGithubClicked, setIsGithubClicked] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500"
    >
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
        >
          Welcome to My Creative World
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
        >
          Animator | Web Developer | Creative Thinker
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#portfolio"
            className={`inline-block px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
              isExploreClicked
                ? "bg-white text-purple-700 shadow-lg"
                : "bg-transparent border-2 border-white text-white"
            }`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExploreClicked(true)}
          >
            {isExploreClicked ? "Exploring..." : "Explore My Work"}
          </motion.a>
          <motion.a
            href="https://github.com/srfahim23"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
              isGithubClicked ? "bg-white text-purple-700 shadow-lg" : "bg-transparent border-2 border-white text-white"
            }`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsGithubClicked(true)}
          >
            <FaGithub className="mr-2 text-xl" />
            {isGithubClicked ? "Viewing GitHub..." : "Visit GitHub"}
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default AnimatedHero


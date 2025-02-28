"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiGraphql } from "react-icons/si"
import AnimatedGradientText from "./AnimatedGradientText"

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
    level: 90,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    level: 80,
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    level: 75,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    level: 70,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    level: 65,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: 60,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 55,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    level: 50,
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
    level: 45,
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "#F24E1E",
    level: 40,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E10098",
    level: 30,
  },
]

const AnimatedSkills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <AnimatedGradientText text="My Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative flex items-center bg-gray-800 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 text-4xl" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-lg font-bold">{skill.name}</span>
                  <span className="text-white text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 relative">
                  <motion.div
                    className="h-4 rounded-full"
                    style={{ backgroundColor: skill.color, width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedSkills
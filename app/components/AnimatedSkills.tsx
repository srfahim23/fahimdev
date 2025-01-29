"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si"
// import AnimatedUnderline from "./AnimatedUnderline"
import AnimatedGradientText from "./AnimatedGradientText"

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
    details: "Semantic markup, Accessibility, SEO optimization",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
    details: "Responsive design, Animations, Flexbox and Grid layouts",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    details: "ES6+, DOM manipulation, Asynchronous programming",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    details: "Component-based architecture, Hooks, State management",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    details: "Server-side rendering, Static site generation, API routes",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    details: "RESTful APIs, Express.js, Database integration",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    details: "Utility-first CSS, Responsive design, Custom configurations",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    details: "Static typing, Interfaces, Generics, Advanced types",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    details: "Version control, Branching strategies, Collaborative workflows",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
    details: "Declarative animations, Gestures, Layout animations",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "#F24E1E",
    details: "UI/UX design, Prototyping, Design systems",
  },
]

const AnimatedSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <AnimatedGradientText text="My Skills" />
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div className="text-6xl mb-2" style={{ color: skill.color }} whileHover={{ scale: 1.2 }}>
                <skill.icon />
              </motion.div>
              <p className="text-white text-center">{skill.name}</p>
              <motion.div
                className="absolute top-full mt-2 bg-white text-gray-900 p-4 rounded-lg shadow-lg text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hoveredSkill === skill.name ? 1 : 0, y: hoveredSkill === skill.name ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                style={{ width: "200px", pointerEvents: hoveredSkill === skill.name ? "auto" : "none" }}
              >
                {skill.details}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedSkills


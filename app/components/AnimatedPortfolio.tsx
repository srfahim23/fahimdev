"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
// import AnimatedUnderline from "./AnimatedUnderline"
import AnimatedGradientText from "./AnimatedGradientText"

const projects = [
  {
    id: 1,
    title: "Creative Frontend Portfolio",
    description: "A minimalist and modern portfolio showcasing creative frontend development and UI design skills",
    image:
      "https://sjc.microlink.io/AQm-k6C69GHvmvBJIAquy5fIEE8vuHqQQtdKUEwXIq20m8TQgOgwdLvcaFbu4wImeqdELZmvSc0TggXQrwXfsA.jpeg",
    link: "https://fahimui.vercel.app/",
  },
  {
    id: 2,
    title: "Tremor - Data Analytics Dashboard",
    description: "A powerful data visualization and analytics platform built with Next.js and Tremor",
    image:
      "https://sjc.microlink.io/uzDcYEghrt9XqqaSS7fBHk79xveoqrnP9MedSg1o5ni9JqJhpjrcVsUgPKsOVJBnQYV58eoGwSStW-b9npWNzA.jpeg",
    link: "https://tremor-deployment.vercel.app/",
  },
  {
    id: 3,
    title: "Gifts.com - E-commerce Platform",
    description: "A modern e-commerce platform for gifts with a seamless shopping experience",
    image:
      "https://sjc.microlink.io/i52_Vp50KhKRLmBbT4Q-uznosoWuff05ReiEneOeab5NxXeDKRyyPCJRBZal6wCNUbb2kvPWfQgOZiFsrfpOgQ.jpeg",
    link: "https://gift-ecommerce-chi.vercel.app/",
  },
  {
    id: 4,
    title: "Luxury Bed Co. - Furniture Store",
    description: "An elegant e-commerce platform for luxury beds and bedroom furniture",
    image:
      "https://sjc.microlink.io/nHyWH10aHua_grEo7VLEkewl66GzV7PK7sHMTMTVogwFGRaILI-9XuWs9qt41slxkdwnDrTSw2yA4BFeSRZHAQ.jpeg",
    link: "https://ecommerce-bed-sample.vercel.app/",
  },
  {
    id: 5,
    title: "Islamic Hub",
    description: "A comprehensive platform for Islamic resources and community engagement",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjb21tZXJjZSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    link: "https://islamic-hub-liard.vercel.app/",
  },
  {
    id: 6,
    title: "Upcoming Project",
    description: "An exciting new project coming soon. Stay tuned!",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjb21tZXJjZSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    link: "#",
    upcoming: true,
  },
  {
    id: 7,
    title: "Future Innovation",
    description: "Innovative ideas taking shape. Watch this space!",
    image: "https://plus.unsplash.com/premium_photo-1725937966775-ca4529944114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1dHVyZSUyMGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
    link: "#",
    upcoming: true,
  },
]

const AnimatedPortfolio = () => {
  const [clickedProjects, setClickedProjects] = useState<{ [key: number]: boolean }>({})
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const handleProjectClick = (id: number, link: string) => {
    setClickedProjects((prev) => ({ ...prev, [id]: true }))
    if (!projects.find((p) => p.id === id)?.upcoming) {
      window.open(link, "_blank")
    }
  }

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <AnimatedGradientText text="My Portfolio" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <motion.button
                      className={`w-full px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ${
                        clickedProjects[project.id]
                          ? "bg-white text-purple-700 shadow-lg"
                          : "bg-transparent border-2 border-white text-white"
                      }`}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProjectClick(project.id, project.link)}
                    >
                      {project.upcoming ? "Coming Soon" : clickedProjects[project.id] ? "Viewing..." : "View Project"}
                    </motion.button>
                  </div>
                </div>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0.8,
                  y: hoveredProject === project.id ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                {project.upcoming && (
                  <motion.div
                    className="mt-4 text-blue-400 font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                  >
                    Upcoming Soon...
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedPortfolio
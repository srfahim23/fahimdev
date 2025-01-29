"use client"

import { useEffect } from "react"
import AnimatedNav from "./components/AnimatedNav"
import AnimatedHero from "./components/AnimatedHero"
import AnimatedAbout from "./components/AnimatedAbout"
import AnimatedSkills from "./components/AnimatedSkills"
import AnimatedServices from "./components/AnimatedServices"
import AnimatedPortfolio from "./components/AnimatedPortfolio"
import AnimatedContact from "./components/AnimatedContact"
import AnimatedFooter from "./components/AnimatedFooter"

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="min-h-screen">
      <AnimatedNav />
      <section id="home">
        <AnimatedHero />
      </section>
      <section id="about">
        <AnimatedAbout />
      </section>
      <section id="skills">
        <AnimatedSkills />
      </section>
      <section id="services">
        <AnimatedServices />
      </section>
      <section id="portfolio">
        <AnimatedPortfolio />
      </section>
      <section id="contact">
        <AnimatedContact />
      </section>
      <AnimatedFooter />
    </div>
  )
}


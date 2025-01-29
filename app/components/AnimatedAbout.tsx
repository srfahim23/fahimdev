"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import AnimatedUnderline from "./AnimatedUnderline"
import AnimatedGradientText from "./AnimatedGradientText";

const AnimatedAbout = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <AnimatedGradientText text="About Me" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-12">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/113962479?v=4&height=400&width=400"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              Hello! I'm Fahim Faysal, a passionate animator and web developer
              with a flair for creating immersive digital experiences.
            </p>
            <p className="text-lg mb-4">
              With 3 years in the industry, I've honed my skills in bringing
              ideas to life through motion and code. My work is a fusion of
              creativity and technology, always pushing the boundaries of what's
              possible in the digital realm.
            </p>
            <p className="text-lg">
              When I'm not crafting animations or building websites, you can
              find me [your hobbies or interests]. I believe in continuous
              learning and am always excited about new challenges in the
              ever-evolving world of digital design and development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAbout;

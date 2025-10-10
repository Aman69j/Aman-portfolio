"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import FilmGrain from "@/components/film-grain"

export default function AboutPage() {
  const skills = [
    "Game Design",
    "Unity Development",
    "Unreal Engine",
    "C# Programming",
    "C++ Programming",
    "3D Modeling",
    "Pixel Art",
    "Level Design",
    "Game AI",
    "Shader Designing",
    "Game UI/UX",
    "Multiplayer",
  ]

  const experiences = [
    {
      year: "Jan 2025 - July 2025",
      position: "UI/UX Developer - Intern",
      company: "Hidden Brains",
      description: "As a UI/UX Developer intern at Hidden Brains, I contributed to design initiatives for an AI accounting product by collaborating with developers to enhance user journeys and optimize interface usability.",
    },
    {
      year: "2017 - 2020",
      position: "Game Programmer",
      company: "AAA Game Studio",
      description: "Implemented gameplay systems, AI behaviors, and optimization for console and PC titles.",
    },
    {
      year: "2015 - 2017",
      position: "Unity Developer",
      company: "Mobile Game Company",
      description:
        "Developed casual mobile games with focus on performance optimization and engaging gameplay mechanics.",
    },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white">
      <FilmGrain />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center">
        <div></div>

        <Link href="/" className="flex items-center gap-2 text-sm hover:text-gray-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key="about-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 pixel-font">About Me</h1>
              <p className="text-lg text-gray-400 max-w-2xl">
                Game developer and designer with a passion for creating engaging, interactive experiences that challenge
                and entertain players.
              </p>
            </motion.div>

            {/* Bio Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <Image src="/placeholder.svg?height=800&width=600" alt="Portrait" fill className="object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-2xl font-medium mb-6 flex items-center pixel-font">
                  <span className="w-12 h-[1px] bg-white mr-4"></span>
                  Biography
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p>
                    I am a Game Developer and 3D Artist passionate about crafting immersive games and stunning 3D environments. 
                    My work combines a love for storytelling and game design with technical expertise in Unreal Engine 5 and Blender. 
                    I have hands-on experience delivering high-quality, game-ready assets for indie developers through freelance commissions.
                  </p>
                  <p>
                    My deep love for storytelling and game design led me to pursue a formal education in Computer Science and Engineering. 
                    I&apos;ve honed my skills and creative vision by supplementing my degree with key certifications, including Unreal Engine 5 development, 
                    Blueprint Essentials from Epic Games, and UX Design from Google.
                  </p>
                  <p>
                    I have experience collaborating with developers, cross-functional teams, and clients to bring creative visions to life. 
                    My goal is to create games that deliver memorable experiences by combining solid gameplay mechanics with compelling narratives 
                    and striking visuals.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-2xl font-medium mb-8 flex items-center pixel-font">
                <span className="w-12 h-[1px] bg-white mr-4"></span>
                Skills & Expertise
              </h2>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm pixel-font text-xs"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-medium mb-8 flex items-center pixel-font">
                <span className="w-12 h-[1px] bg-white mr-4"></span>
                Experience
              </h2>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-[200px_1fr] gap-6"
                  >
                    <div className="text-gray-500 pixel-font text-xs">{exp.year}</div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 pixel-font">{exp.position}</h3>
                      <p className="text-gray-300 mb-2">{exp.company}</p>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="mb-4"></div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 uppercase">Email</span>
              <Link href="mailto:hello@example.com" className="text-sm hover:text-gray-400 transition-colors">
                hello@example.com
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 uppercase">Follow</span>
              <div className="flex gap-4">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="https://itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  Itch.io
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

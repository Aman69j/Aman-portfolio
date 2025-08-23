"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import FilmGrain from "@/components/film-grain"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Pixel Dungeon",
      category: "Blender",
      year: "2023",
      video:"/videos/blender/swordAnimations.mp4",
      link: "/projects/pixel-dungeon",
    },
    {
      id: 2,
      title: "Neon Racer",
      category: "Blender",
      year: "2022",
      video:"/videos/blender/Minecarft.mp4",
      link: "/projects/neon-racer",
    },
    {
      id: 3,
      title: "Space Odyssey",
      category: "Blender",
      year: "2021",
      video: "/videos/blender/earphone.mp4",
      link: "/projects/space-odyssey",
    },
    {
      id: 4,
      title: "Dragon's Quest",
      category: "Blender",
      year: "2023",
      video: "/videos/blender/swordAnimation.mp4",
      link: "/projects/dragons-quest",
    },
    {
      id: 5,
      title: "Cyber Defender",
      category: "Blender",
      year: "2022",
      video: "/videos/blender/waterAnimations.mp4",
      link: "/projects/cyber-defender",
    },
    {
      id: 6,
      title: "Unreal Gaming",
      category: "Unreal",
      year: "2021",
      video: "/videos/unreal/Automatic_Doors.mp4",
      link: "/projects/puzzle-master",
    },
    {
      id: 7,
      title: "Unreal_1",
      category: "Unreal",
      year: "2021",
      video: "/videos/unreal/unreal_1.mp4",
      link: "/projects/puzzle-master",
    },
    {
      id: 8,
      title: "Unreal_2",
      category: "Unreal",
      year: "2021",
      video: "/videos/unreal/unreal_2.mp4",
      link: "/projects/puzzle-master",
    },
    {
      id: 9,
      title: "Unreal_3",
      category: "Unreal",
      year: "2021",
      video: "/videos/unreal/unreal_3.mp4",
      link: "/projects/puzzle-master",
    },
    {
      id: 10,
      title: "Unreal_4",
      category: "Unreal",
      year: "2021",
      video: "/videos/unreal/unreal_4.mp4",
      link: "/projects/puzzle-master",
    },
    {
      id: 11,
      title: "Unreal_5",
      category: "Unreal",
      year: "2021",
      video: "/videos/unreal/unreal_5.mp4",
      link: "/projects/puzzle-master",
    },
  ]

  const categories = [
    "All",
    "Blender",
    "Unity",
    "Unreal",

  ]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

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
          key="projects-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 pixel-font">Projects</h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              A collection of my work spanning various game genres and platforms. Each project represents a unique
              gaming experience crafted with passion and technical expertise.
            </p>
          </motion.div>

          {/* Filter */}
          <div className="mb-12 flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  filter === category ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"
                } pixel-font text-xs`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
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


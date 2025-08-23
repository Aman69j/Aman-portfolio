"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  year: string
  video: string
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="group"
      >
        <Link
            href={project.link}
            className="block"
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => {
              videoRef.current?.pause()
              videoRef.current!.currentTime = 0 // reset to first frame
            }}
        >
          <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
            <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.div
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
                whileHover={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg pixel-font text-sm">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
            <span className="text-sm text-gray-400">{project.year}</span>
          </div>
        </Link>
      </motion.div>
  )
}

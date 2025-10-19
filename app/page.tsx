"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight, Mail, Github, Linkedin } from "lucide-react"
import FilmGrain from "@/components/film-grain"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Typewriter from "typewriter-effect"

export default function Home() {
  // Check if this is the initial page load by checking if we're in the browser and if the flag exists
  const isFirstVisit = typeof window !== "undefined" && !sessionStorage.getItem("visited")
  const [isLoading, setIsLoading] = useState(isFirstVisit)
  const [menuOpen, setMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Only show loading on first visit or page refresh, not during navigation
    if (isFirstVisit) {
      // Mark that the user has visited the site
      sessionStorage.setItem("visited", "true")

      // Simulate loading time for intro animation
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [isFirstVisit])

  useEffect(() => {
    // Auto-play video when it's loaded
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [isLoading])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const projects = [
    {
      id: 1,
      title: "Cat Character",
      category: "Blender",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032200/CatCharacter_wkrtaj.mp4",
      link: "/projects/homepage-projects/blender1-homepage",
    },
    {
      id: 2,
      title: "Flaming Sword",
      category: "Blender",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032209/swordAnimations_sojmgq.mp4",
      link: "/projects/homepage-projects/blender2-homepage",
    },
    {
      id: 3,
      title: "Airpods Product Visualization",
      category: "Blender",
      year: "2021",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032212/earphone_fxr5mf.mp4",
      link: "/projects/homepage-projects/blender3-homepage",
    },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <FilmGrain />

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[16vw] font-bold tracking-tighter retro-text"
            >
              <span className="retro-glitch" data-text="AMAN">
                AMAN
              </span>
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-0 right-0 text-center text-sm uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Game Developer • Designer • Programmer
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center">
        <div></div>

        <button
          onClick={toggleMenu}
          className="z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex flex-col items-center gap-8 text-4xl font-light pixel-font">
              {["Home", "Projects", "About", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="relative group"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="absolute bottom-10 flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:hello@example.com" className="hover:text-gray-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 pixel-font">
              <div className="min-h-[2.4em] md:min-h-[2.4em] lg:min-h-[2.4em] mb-8">
                <Typewriter
                  options={{
                    strings: ["Creating immersive games", "Designing virtual worlds", "Coding interactive adventures"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </h1>
            <div className="mt-16">
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
                Game developer and designer specializing in creating engaging, interactive experiences that captivate
                and challenge players.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  asChild
                  className="group bg-white text-black hover:bg-white/90 rounded-full px-6 py-6 text-sm font-medium"
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full h-12 border-white/30 hover:bg-white/10 text-sm"
                >
                  <Link href="/contact">Let's Connect</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-2xl font-medium mb-12 flex items-center pixel-font">
              <span className="w-12 h-[1px] bg-white mr-4"></span>
              Featured Projects
            </h2>

            {/* Gameplay Showcase */}
            <div className="mb-16 rounded-lg overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative aspect-video w-full"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <video ref={videoRef} className="w-full h-full object-cover" loop muted playsInline>
                    <source src="/placeholder.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 pixel-font">Dragon&#39;s Quest</h3>
                    <p className="text-gray-300 max-w-xl">
                      An epic open-world RPG with dynamic combat and a branching storyline. Explore vast landscapes,
                      battle mythical creatures, and forge your own legend.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-4 rounded-full border-white/30 hover:bg-white/10 text-sm"
                    >
                      <Link href="/projects/dragons-quest">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button> 
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 hover:bg-white/10 text-sm pixel-font"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About Section Preview */}
        <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-2xl font-medium mb-6 flex items-center pixel-font">
                <span className="w-12 h-[1px] bg-white mr-4"></span>
                About Me
              </h2>
              <p className="text-gray-400 mb-6">
                I am an aspiring Game Developer and 3D Artist with a passion for building immersive games and stunning 3D environments. 
                My core competencies are in game development and 3D modeling utilizing tools like Unreal Engine 5 and Blender.
              </p>
              <p className="text-gray-400 mb-8">
                My practical experience includes completing freelance commissions for indie game developers, where I managed the full 
                asset pipeline to create optimized, game-ready assets for Unreal Engine and Unity. In my recent role as a UI/UX Developer intern, 
                I enhanced my design and collaboration skills by working with developers and cross-functional teams to streamline digital interactions.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  asChild
                  className="group bg-white text-black hover:bg-white/90 rounded-full px-6 py-6 text-sm font-medium"
                >
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full h-12 border-white/30 hover:bg-white/10 text-sm"
                >
                  <Link href="/contact">Let's Connect</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Game development workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-sm uppercase tracking-widest text-gray-300 pixel-font">
                  Game Development Process
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

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

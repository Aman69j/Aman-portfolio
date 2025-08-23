"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import FilmGrain from "@/components/film-grain"
import { Button } from "@/components/ui/button"

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [isLoading, setIsLoading] = useState(true)

  // Mock project data - in a real app, this would come from an API or CMS
  const projects = [
    {
      id: 1,
      slug: "pixel-dungeon",
      title: "Pixel Dungeon",
      category: "Roguelike RPG",
      year: "2023",
      platform: "PC, Mobile",
      description:
        "A procedurally generated dungeon crawler with pixel art aesthetics and challenging roguelike mechanics.",
      fullDescription:
        "Pixel Dungeon is a challenging roguelike RPG with procedurally generated levels, items, and enemies. Each playthrough offers a unique experience as you delve deeper into the dungeon. The game features permadeath mechanics, meaning once your character dies, you'll need to start a new adventure. With dozens of unique items, weapons, and spells to discover, multiple character classes with different playstyles, and challenging boss encounters, Pixel Dungeon offers hundreds of hours of gameplay. The retro pixel art style pays homage to classic dungeon crawlers while adding modern gameplay mechanics and quality-of-life features.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "neon-racer",
    },
    {
      id: 2,
      slug: "neon-racer",
      title: "Neon Racer",
      category: "Racing Game",
      year: "2022",
      platform: "PC, Console",
      description: "A high-speed futuristic racing game with neon-soaked visuals and a dynamic electronic soundtrack.",
      fullDescription:
        "Neon Racer is a high-octane futuristic racing game set in a cyberpunk world. Players compete in anti-gravity vehicles capable of extreme speeds and gravity-defying maneuvers. The game features 12 meticulously designed tracks across 4 distinct environments, each with dynamic weather and time-of-day changes that affect racing conditions. The vehicle customization system allows players to modify both the appearance and performance of their racers, with over 200 unique parts to collect. The online multiplayer mode supports up to 16 players simultaneously, with a robust ranking system and seasonal competitions. The game's visual style combines vibrant neon aesthetics with realistic lighting effects, creating a distinctive and immersive racing experience.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "space-odyssey",
    },
    {
      id: 3,
      slug: "space-odyssey",
      title: "Space Odyssey",
      category: "Strategy Game",
      year: "2021",
      platform: "PC",
      description:
        "A grand strategy game set in space where players build empires, manage resources, and engage in interstellar diplomacy or warfare.",
      fullDescription:
        "Space Odyssey is a 4X strategy game (eXplore, eXpand, eXploit, eXterminate) that challenges players to build a galactic civilization from the ground up. Starting with a single planet, players must research technologies, design ships, manage resources, and interact with other civilizations through diplomacy or warfare. The game features a procedurally generated galaxy with unique star systems, planets, and anomalies to discover. The tech tree offers multiple paths to victory, allowing players to focus on scientific advancement, cultural influence, economic dominance, or military conquest. The game's AI adapts to player strategies, providing a challenging experience even for veteran strategy gamers. With its deep systems and emergent storytelling, Space Odyssey offers nearly limitless replayability.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "dragons-quest",
    },
    {
      id: 4,
      slug: "dragons-quest",
      title: "Dragon's Quest",
      category: "Open-World RPG",
      year: "2023",
      platform: "PC, Console",
      description: "An epic open-world RPG with dynamic combat and a branching storyline set in a vast fantasy realm.",
      fullDescription:
        "Dragon's Quest is an immersive open-world RPG set in the vast fantasy realm of Eldoria. Players take on the role of a customizable hero who discovers they have the rare ability to communicate with dragons, the most powerful and feared creatures in the land. The game features a massive open world with diverse biomes, from lush forests and snow-capped mountains to scorching deserts and treacherous swamplands. The combat system combines real-time action with tactical elements, allowing players to switch between direct control and party-based strategy. With over 100 hours of main story content and countless side quests, Dragon's Quest offers a deeply engaging narrative with meaningful choices that affect the game world. The relationship system with companion characters and factions adds another layer of depth, as your decisions shape how others perceive and interact with you throughout your journey.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "pixel-dungeon",
    },
  ]

  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (!project) {
      notFound()
    }

    // Simulate loading for animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [project, slug])

  if (isLoading || !project) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <FilmGrain />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center">
        <div></div>

        <Link href="/projects" className="flex items-center gap-2 text-sm hover:text-gray-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={`project-${slug}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero Section */}
          <section className="relative h-[70vh] w-full overflow-hidden">
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-24">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex flex-col gap-4">
                  <span className="text-sm uppercase tracking-widest text-gray-300 pixel-font text-xs">
                    {project.category} • {project.year}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter pixel-font">
                    {project.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 max-w-2xl">{project.description}</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Project Details */}
          <main className="py-20 px-6 md:px-12 lg:px-24">
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="text-2xl font-medium mb-6 pixel-font">About the Project</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.fullDescription}</p>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 pixel-font text-xs">
                      Platform
                    </h3>
                    <p>{project.platform}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 pixel-font text-xs">Year</h3>
                    <p>{project.year}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 pixel-font text-xs">
                      Category
                    </h3>
                    <p>{project.category}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Project Images */}
            <div className="space-y-12">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative aspect-video w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Next Project */}
            <div className="mt-32 border-t border-white/10 pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-sm uppercase tracking-widest text-gray-500 mb-4 pixel-font text-xs">
                  Next Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 pixel-font">
                  {projects.find((p) => p.slug === project.nextProject)?.title}
                </h2>
                <Button
                  asChild
                  className="group bg-white text-black hover:bg-white/90 rounded-full px-6 py-6 text-sm font-medium pixel-font"
                >
                  <Link href={`/projects/${project.nextProject}`}>
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </main>
        </motion.div>
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


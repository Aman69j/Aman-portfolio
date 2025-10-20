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
      id: 4,
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
      id: 5,
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
      id: 6,
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
    // Unreal category detailed pages
    {
      id: 7,
      slug: "unreal-sci-fi-hall",
      title: "UE5 Sci‑Fi Hall",
      category: "Unreal Environment",
      year: "2024",
      platform: "Unreal Engine 5",
      description: "Nanite/ Lumen powered corridor with emissive trims and VFX.",
      fullDescription:
        "A cinematic corridor built using modular trimsheets, Nanite meshes and Lumen global illumination. Includes Niagara spark/steam effects and sequencer camera shots.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "unreal-forest-daylight",
    },
    {
      id: 8,
      slug: "unreal-forest-daylight",
      title: "UE5 Forest Daylight",
      category: "Unreal Environment",
      year: "2024",
      platform: "Unreal Engine 5",
      description: "Open forest lit with dynamic sky/atmosphere and foliage wind.",
      fullDescription:
        "An outdoor scene leveraging virtual shadows, foilage painter, and Lumen sky light for natural daylight rendering.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "unreal-interior-archviz",
    },
    {
      id: 9,
      slug: "unreal-interior-archviz",
      title: "UE5 Interior ArchViz",
      category: "Unreal ArchViz",
      year: "2023",
      platform: "Unreal Engine 5",
      description: "High-fidelity interior walkthrough with baked/virtual lighting mix.",
      fullDescription:
        "ArchViz sample focused on camera movement, material variants, and post-process volumes for color grading.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "unreal-stylized-town",
    },
    {
      id: 10,
      slug: "unreal-stylized-town",
      title: "UE5 Stylized Town",
      category: "Unreal Stylized",
      year: "2023",
      platform: "Unreal Engine 5",
      description: "Toon-shaded town with outline shaders and light-mass settings.",
      fullDescription:
        "Uses custom material shaders and post-process outlines for a painterly look, paired with optimized instanced meshes.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "unreal-cave-sequence",
    },
    {
      id: 11,
      slug: "unreal-cave-sequence",
      title: "UE5 Cave Sequence",
      category: "Unreal Cinematic",
      year: "2022",
      platform: "Unreal Engine 5",
      description: "Sequencer-based short cinematic in a cave with fog volumes.",
      fullDescription:
        "Cinematic sequence showcasing depth, fog, and camera rails with sound cues and timed VFX.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "unreal-vehicle-demo",
    },
    {
      id: 12,
      slug: "unreal-vehicle-demo",
      title: "UE5 Vehicle Demo",
      category: "Unreal Gameplay",
      year: "2022",
      platform: "Unreal Engine 5",
      description: "Chaos vehicles demo with tuned suspension and inputs.",
      fullDescription:
        "Demonstrates vehicle physics setup, input mapping context, and a basic UI HUD.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "unreal-niagara-vfx-pack",
    },
    {
      id: 13,
      slug: "unreal-niagara-vfx-pack",
      title: "UE5 Niagara VFX Pack",
      category: "Unreal VFX",
      year: "2022",
      platform: "Unreal Engine 5",
      description: "Collection of Niagara particle effects and materials.",
      fullDescription:
        "Includes fire, smoke, magic bursts and impact effects with material parameter collections for easy tuning.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: "unreal-sci-fi-hall",
    },
    //Project page blender projects 
    {
      id: 14,
      slug: "blender14-projects",
      title: "Water Splash Effect",
      category: "3D Visual Effects (VFX)",
      year: "2023",
      platform: "Blender",
      description: "A 3D animation project focusing on a realistic or stylized water splash simulation interacting with a simple object (e.g., a soda can). ",
      fullDescription:
        "The project demonstrates proficiency in Blender's fluid dynamics to create intricate liquid behavior, droplets, and surface interactions, suitable for product visualization or environmental effects.",
      coverImage: "/Water Splash Landscape.jpg",
      images: [],
      nextProject: "blender15-homepage",
    },
    {
      id: 15,
      slug: "blender15-projects",
      title: "Low‑Poly Forest",
      category: "Stylized Environment",
      year: "2022",
      platform: "Blender",
      description: "A stylized low‑poly forest scene focusing on simple shapes and colors.",
      fullDescription:
        "A lightweight environment ideal for mobile/indie games. Emphasis on modular assets, color harmony, and performant scene composition with instancing.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [],
      nextProject: "blender16-homepage",
    },
    {
      id: 16,
      slug: "blender16-projects",
      title: "Stylized Potion Bottles",
      category: "Stylized Props",
      year: "2021",
      platform: "Blender",
      description: "A set of potion bottles with hand‑painted look and emissive glows.",
      fullDescription:
        "Focused on glass shaders, volume color, and rim lighting to achieve a magical look. Includes simple animation-ready topology for corks and liquid levels.",
      coverImage: "/placeholder.svg?height=800&width=1200",
      images: [],
      nextProject: "blender-homepage",
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


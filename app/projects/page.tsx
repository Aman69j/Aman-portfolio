"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import FilmGrain from "@/components/film-grain"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Blender" | "Unity" | "Unreal">("All")

  type ProjectCardItem = {
    slug: string
    title: string
    category: "Blender" | "Unity" | "Unreal" | "Uncategorized"
    year: string
    video?: string
  }

  // Known projects from the codebase
  const allProjects = useMemo<ProjectCardItem[]>(
    () => [
    // Blender (homepage) projects
    {
      slug: "homepage-projects/blender1-homepage",
      title: "Cat Character",
      category: "Blender",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032200/CatCharacter_wkrtaj.mp4",
    },
    {
      slug: "homepage-projects/blender2-homepage",
      title: "Flaming Sword",
      category: "Blender",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032209/swordAnimations_sojmgq.mp4",
    },
    {
      slug: "homepage-projects/blender3-homepage",
      title: "Airpods Product Visualization",
      category: "Blender",
      year: "2021",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032212/earphone_fxr5mf.mp4",
    },
    //Blender Projects Page Projects
    {
      slug: "blender14-projects",
      title: "Water Splash Effect",
      category: "Blender",
      year: "2023",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032220/waterAnimations_xr0itt.mp4",
    },
    {
      slug: "blender15-projects",
      title: "Ice-Cream Man",
      category: "Blender",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1761634422/Ice_Cream_Character_Animation_Video_dhkz9x.mp4",
    },
    {
      slug: "blender16-projects",
      title: "Minecraft Block Drop Animation",
      category: "Blender",
      year: "2021",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032171/Minecarft_fwma2y.mp4",
    },
    {
      slug: "blender17-projects",
      title: "Flaming Sword Animation",
      category: "Blender",
      year: "2022",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756032175/swordAnimations_1_jwp57j.mp4",
    }, 
    {
      slug: "blender18-projects",
      title: "Realistic Rainy Ocean Environment",
      category: "Blender",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756035719/waterboatAniamations_bznfra.mp4",
    }, 
    // Uncategorised Projects only Dargon Quest on the homepage is relevant
    {
      slug: "ai-combat",
      title: "AI Combat & Core Game System Developmen",
      category: "Uncategorized",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756035798/soul_like_game_fftzzh.mp4",
    },
    // Unreal projects
    {
      slug: "automatic-door",
      title: "Automatic Door (Blueprint Project)",
      category: "Unreal",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756804810/Automatic_Doors_l3de1c.mp4",
    },
    {
      slug: "speed-booster",
      title: "Speed Booster Pickup (Game Mechanic)",
      category: "Unreal",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756806387/Speed_Boosters_ug0mql.mp4",
    },
    {
      slug: "save-point",
      title: "Persistent Save Point System",
      category: "Unreal",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756805428/Save_Points_zyfugz.mp4",
    },
    {
      slug: "body-drag",
      title: "Ragdoll/Body Drag System",
      category: "Unreal",
      year: "2023",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756804261/Dragdoll_1_pqtjbx.mp4",
    },
    {
      slug: "parkour",
      title: "Dynamic Parkour Movement System",
      category: "Unreal",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756801174/Parkour_s572wf.mp4",
    },
    {
      slug: "aladdin",
      title: "'Aladdin' Themed Egyptian Environment",
      category: "Unreal",
      year: "2024",
      video: "https://res.cloudinary.com/dyuhapfwj/video/upload/v1756035785/world_map_uklvzd.mp4",
    },
    ],
    []
  )

  const categories = ["All", "Blender", "Unity", "Unreal"] as const

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return allProjects
    return allProjects.filter((p) => p.category === activeCategory)
  }, [activeCategory, allProjects])

  return (
    <div className="relative min-h-screen bg-black text-white">
      <FilmGrain />

      <header className="sticky top-0 z-40 px-6 py-6 flex justify-between items-center">
        <div></div>
        <Link href="/" className="text-sm hover:text-gray-400 transition-colors">
          Home
        </Link>
      </header>

      <main className="py-12 px-6 md:px-12 lg:px-24">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter pixel-font">Projects</h1>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Explore selected projects. Click any project to view full details.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={
                activeCategory === cat
                  ? "rounded-full bg-white text-black hover:bg-white/90 text-xs"
                  : "rounded-full border-white/30 hover:bg-white/10 text-xs"
              }
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 text-[10px] text-gray-500">
                  {allProjects.filter((p) => p.category === cat).length}
                </span>
              )}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors bg-black/40"
            >
              <div className="relative aspect-video w-full">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center text-xs text-gray-400">
                    No preview
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold pixel-font">{project.title}</h2>
                  <span className="text-xs text-gray-400 pixel-font">{project.year}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{project.category}</p>
                <Button variant="outline" className="mt-4 rounded-full border-white/30 hover:bg-white/10 text-xs">
                  View Details
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div className="mt-12 mb-24 flex justify-center">
        <Button
          asChild
          className="group bg-white text-black hover:bg-white/90 rounded-full px-6 py-6 text-sm font-medium"
        >
        <Link href="/contact">
          Let&apos;s Connect
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        </Button>
      </div>


      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="mb-4"></div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}



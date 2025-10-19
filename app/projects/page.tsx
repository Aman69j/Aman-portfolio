"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import FilmGrain from "@/components/film-grain"
import { Button } from "@/components/ui/button"

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
      title: "Low‑Poly Forest",
      category: "Blender",
      year: "2022",
      video: "",
    },
    {
      slug: "blender16-projects",
      title: "Stylized Potion Bottles",
      category: "Blender",
      year: "2021",
      video: "",
    },
    // Uncategorised Projects only Dargon Quest on the homepage is relevant
    {
      slug: "neon-racer",
      title: "Neon Racer",
      category: "Uncategorized",
      year: "2022",
      video: "",
    },
    {
      slug: "space-odyssey",
      title: "Space Odyssey",
      category: "Uncategorized",
      year: "2021",
      video: "/placeholder.svg?height=600&width=900",
    },
    {
      slug: "dragons-quest",
      title: "Dragon's Quest",
      category: "Uncategorized",
      year: "2023",
      video: "/placeholder.svg?height=600&width=900",
    },
    // Unreal projects
    {
      slug: "unreal-sci-fi-hall",
      title: "UE5 Sci‑Fi Hall",
      category: "Unreal",
      year: "2024",
      video: "",
    },
    {
      slug: "unreal-forest-daylight",
      title: "UE5 Forest Daylight",
      category: "Unreal",
      year: "2024",
      video: "",
    },
    {
      slug: "unreal-interior-archviz",
      title: "UE5 Interior ArchViz",
      category: "Unreal",
      year: "2023",
      video: "",
    },
    {
      slug: "unreal-stylized-town",
      title: "UE5 Stylized Town",
      category: "Unreal",
      year: "2023",
      video: "",
    },
    {
      slug: "unreal-cave-sequence",
      title: "UE5 Cave Sequence",
      category: "Unreal",
      year: "2022",
      video: "",
    },
    {
      slug: "unreal-vehicle-demo",
      title: "UE5 Vehicle Demo",
      category: "Unreal",
      year: "2022",
      video: "",
    },
    {
      slug: "unreal-niagara-vfx-pack",
      title: "UE5 Niagara VFX Pack",
      category: "Unreal",
      year: "2022",
      video: "",
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



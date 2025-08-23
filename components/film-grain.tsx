"use client"

import { useEffect, useRef } from "react"

export default function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions to match window
    const setCanvasDimensions = () => {
      const width = window.innerWidth || document.documentElement.clientWidth || 1
      const height = window.innerHeight || document.documentElement.clientHeight || 1

      canvas.width = Math.max(1, width)
      canvas.height = Math.max(1, height)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Pixel noise animation (modified to be more pixelated)
    const renderGrain = () => {
      // Check if canvas dimensions are valid
      if (!canvas.width || !canvas.height) {
        // Reset dimensions and try again on next frame
        setCanvasDimensions()
        animationFrameId = requestAnimationFrame(renderGrain)
        return
      }

      // Create a smaller buffer for pixelated effect
      const pixelSize = 4 // Size of each "pixel" block
      const bufferWidth = Math.ceil(canvas.width / pixelSize)
      const bufferHeight = Math.ceil(canvas.height / pixelSize)

      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      // Fill with pixelated noise
      for (let y = 0; y < bufferHeight; y++) {
        for (let x = 0; x < bufferWidth; x++) {
          // Generate a random value for this pixel block
          const noise = Math.floor(Math.random() * 20)

          // Fill the entire pixel block with this value
          for (let py = 0; py < pixelSize; py++) {
            for (let px = 0; px < pixelSize; px++) {
              const realX = x * pixelSize + px
              const realY = y * pixelSize + py

              if (realX < canvas.width && realY < canvas.height) {
                const i = (realY * canvas.width + realX) * 4
                data[i] = noise // R
                data[i + 1] = noise // G
                data[i + 2] = noise // B
                data[i + 3] = 8 // Alpha (very subtle)
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)
      animationFrameId = requestAnimationFrame(renderGrain)
    }

    renderGrain()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10 opacity-30" aria-hidden="true" />
}


"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

type Particle = {
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
}

export default function BlockchainParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const requestRef = useRef<number>()
  const connectionsRef = useRef<{ from: number; to: number }[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = window.innerWidth
    const height = window.innerHeight
    const particleCount = width < 768 ? 15 : 30

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 2,
      color: getRandomColor(),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    // Create connections (simulating blockchain)
    connectionsRef.current = []
    for (let i = 0; i < particleCount; i++) {
      const connections = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < connections; j++) {
        const to = Math.floor(Math.random() * particleCount)
        if (i !== to) {
          connectionsRef.current.push({ from: i, to })
        }
      }
    }

    const animate = () => {
      const ctx = document.createElement("canvas").getContext("2d")
      if (!ctx) return

      // Update particle positions
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  const getRandomColor = () => {
    const colors = ["#60a5fa", "#f472b6", "#9ca3af"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {particlesRef.current.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          animate={{
            x: [particle.x, particle.x + Math.random() * 100 - 50],
            y: [particle.y, particle.y + Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: 0.7,
          }}
        />
      ))}

      {connectionsRef.current.map((connection, index) => {
        const from = particlesRef.current[connection.from]
        const to = particlesRef.current[connection.to]

        if (!from || !to) return null

        const angle = Math.atan2(to.y - from.y, to.x - from.x)
        const distance = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2))

        return (
          <motion.div
            key={`connection-${index}`}
            className="absolute origin-left"
            style={{
              left: from.x,
              top: from.y,
              width: distance,
              height: 1,
              backgroundColor: from.color,
              opacity: 0.3,
              transform: `rotate(${angle}rad)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        )
      })}
    </div>
  )
}


"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type SnakeSegment = {
  x: number
  y: number
}

export default function PythonSnake() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [snakes, setSnakes] = useState<SnakeSegment[][]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    // Create snakes
    const newSnakes = Array.from({ length: 5 }).map(() => {
      const length = Math.floor(Math.random() * 10) + 5
      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * window.innerHeight

      return Array.from({ length }).map((_, i) => ({
        x: startX - i * 15,
        y: startY,
      }))
    })

    setSnakes(newSnakes)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {/* Python-inspired snake animations */}
      {snakes.map((snake, snakeIndex) => (
        <div key={`snake-${snakeIndex}`} className="absolute">
          {snake.map((segment, segmentIndex) => {
            const isHead = segmentIndex === 0
            const delay = segmentIndex * 0.05
            const size = isHead ? 12 : 10 - segmentIndex * 0.5

            return (
              <motion.div
                key={`segment-${snakeIndex}-${segmentIndex}`}
                className={`absolute rounded-full ${isHead ? "bg-blue-500" : "bg-blue-400"}`}
                style={{
                  width: Math.max(size, 4),
                  height: Math.max(size, 4),
                  opacity: isHead ? 0.8 : 0.6 - segmentIndex * 0.03,
                }}
                animate={{
                  x: [
                    segment.x,
                    segment.x + Math.random() * 400 - 200,
                    segment.x + Math.random() * 400 - 200,
                    segment.x,
                  ],
                  y: [
                    segment.y,
                    segment.y + Math.random() * 400 - 200,
                    segment.y + Math.random() * 400 - 200,
                    segment.y,
                  ],
                }}
                transition={{
                  duration: 30,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay,
                  ease: "easeInOut",
                }}
              />
            )
          })}
        </div>
      ))}

      {/* Python symbols */}
      {Array.from({ length: 20 }).map((_, index) => {
        const symbols = [
          "def",
          "class",
          "import",
          "for",
          "if",
          "elif",
          "else",
          "return",
          "yield",
          "async",
          "await",
          "try",
          "except",
          "finally",
          "with",
          "lambda",
          "self",
          "__init__",
        ]
        const symbol = symbols[Math.floor(Math.random() * symbols.length)]
        const size = Math.random() * 20 + 10

        return (
          <motion.div
            key={`symbol-${index}`}
            className="absolute font-mono text-blue-500/30"
            style={{
              fontSize: size,
            }}
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0,
              rotate: Math.random() * 20 - 10,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              rotate: [Math.random() * 20 - 10, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: Math.random() * 5,
            }}
          >
            {symbol}
          </motion.div>
        )
      })}

      {/* Floating indentation lines */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`indent-${index}`}
          className="absolute h-px bg-gray-700"
          style={{
            width: Math.random() * 100 + 50,
            left: Math.random() * dimensions.width,
            top: Math.random() * dimensions.height,
          }}
          animate={{
            width: [0, Math.random() * 100 + 50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            repeatDelay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}


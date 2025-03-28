"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function SoftwareGrid() {
  const gridSize = 20
  const gridRef = useRef<HTMLDivElement>(null)

  // Generate grid cells
  const cells = Array.from({ length: gridSize * gridSize }).map((_, index) => {
    const row = Math.floor(index / gridSize)
    const col = index % gridSize

    return {
      id: index,
      row,
      col,
      delay: (row + col) * 0.05,
      duration: Math.random() * 3 + 2,
    }
  })

  return (
    <div ref={gridRef} className="fixed inset-0 z-0 overflow-hidden opacity-30">
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {cells.map((cell) => (
          <motion.div
            key={cell.id}
            className="border border-gray-800 relative"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              backgroundColor: ["rgba(96, 165, 250, 0)", "rgba(96, 165, 250, 0.1)", "rgba(96, 165, 250, 0)"],
            }}
            transition={{
              duration: cell.duration,
              delay: cell.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.9 && (
              <motion.div
                className="absolute inset-0 bg-blue-500"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 1,
                  delay: Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  repeatDelay: Math.random() * 10,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Code streams */}
      {Array.from({ length: 10 }).map((_, index) => {
        const startPosition = Math.random() * 100
        const duration = Math.random() * 10 + 10

        return (
          <motion.div
            key={`stream-${index}`}
            className="absolute w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0"
            style={{
              left: `${startPosition}%`,
              height: "100%",
            }}
            initial={{ opacity: 0, top: "-100%" }}
            animate={{
              opacity: [0, 0.7, 0],
              top: ["0%", "100%"],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: Math.random() * 5,
              ease: "linear",
            }}
          />
        )
      })}
    </div>
  )
}


"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function BlockchainAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* 3D Blockchain Network */}
      <div className="absolute inset-0 perspective-1000">
        {/* Animated Blockchain Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-30">
          {Array.from({ length: 36 }).map((_, index) => (
            <motion.div
              key={`grid-${index}`}
              className="border border-blue-900/20 relative"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                backgroundColor: ["rgba(37, 99, 235, 0)", "rgba(37, 99, 235, 0.05)", "rgba(37, 99, 235, 0)"],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          ))}
        </div>

        {/* 3D Floating Blocks */}
        {Array.from({ length: 15 }).map((_, index) => {
          const size = Math.random() * 80 + 40
          const depth = Math.random() * 500 - 250

          return (
            <motion.div
              key={`block-${index}`}
              className="absolute rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-900/10 to-blue-800/5 backdrop-blur-sm"
              style={{
                width: size,
                height: size,
                left: `calc(${Math.random() * 100}% - ${size / 2}px)`,
                top: `calc(${Math.random() * 100}% - ${size / 2}px)`,
                transform: `translateZ(${depth}px)`,
              }}
              initial={{ opacity: 0, rotateX: 0, rotateY: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                rotateX: [0, Math.random() * 360],
                rotateY: [0, Math.random() * 360],
                z: [depth, depth + Math.random() * 200 - 100],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              {/* Hash value inside block */}
              <div className="absolute inset-0 flex items-center justify-center text-blue-400/70 text-xs font-mono overflow-hidden p-2">
                {`0x${Math.random().toString(16).substring(2, 10)}`}
              </div>

              {/* Connection lines */}
              {Math.random() > 0.5 && (
                <motion.div
                  className="absolute w-[200px] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
                  style={{
                    left: "100%",
                    top: "50%",
                    transformOrigin: "left center",
                    transform: `rotate(${Math.random() * 60 - 30}deg)`,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              )}
            </motion.div>
          )
        })}

        {/* Glowing Nodes */}
        {Array.from({ length: 20 }).map((_, index) => {
          const size = Math.random() * 10 + 5
          const colors = ["#3B82F6", "#EC4899", "#8B5CF6"]
          const color = colors[Math.floor(Math.random() * colors.length)]

          return (
            <motion.div
              key={`node-${index}`}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                backgroundColor: color,
                boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              }}
            />
          )
        })}

        {/* Data Streams */}
        {Array.from({ length: 15 }).map((_, index) => {
          const isHorizontal = Math.random() > 0.5
          const width = isHorizontal ? Math.random() * 300 + 100 : 2
          const height = isHorizontal ? 2 : Math.random() * 300 + 100

          return (
            <motion.div
              key={`stream-${index}`}
              className="absolute bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"
              style={{
                width,
                height,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                x: isHorizontal ? [-width, width] : 0,
                y: isHorizontal ? 0 : [-height, height],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"

export default function EcommerceFloating() {
  // Shopping elements
  const elements = [
    { icon: "🛒", size: 40, color: "#f472b6" },
    { icon: "💳", size: 36, color: "#60a5fa" },
    { icon: "📱", size: 38, color: "#9ca3af" },
    { icon: "🛍️", size: 42, color: "#f472b6" },
    { icon: "💻", size: 40, color: "#60a5fa" },
    { icon: "📦", size: 36, color: "#9ca3af" },
    { icon: "🏷️", size: 34, color: "#f472b6" },
    { icon: "🔍", size: 32, color: "#60a5fa" },
  ]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Floating elements */}
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute flex items-center justify-center rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            times: [0, 0.5, 1],
          }}
          style={{
            width: element.size,
            height: element.size,
            fontSize: element.size * 0.7,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Gradient circles */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`circle-${index}`}
          className="absolute rounded-full opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            background:
              index % 2 === 0
                ? "radial-gradient(circle, rgba(244,114,182,0.3) 0%, rgba(244,114,182,0) 70%)"
                : "radial-gradient(circle, rgba(96,165,250,0.3) 0%, rgba(96,165,250,0) 70%)",
          }}
        />
      ))}

      {/* Payment lines */}
      {Array.from({ length: 8 }).map((_, index) => {
        const isHorizontal = Math.random() > 0.5
        const startX = isHorizontal ? 0 : Math.random() * window.innerWidth
        const startY = isHorizontal ? Math.random() * window.innerHeight : 0
        const endX = isHorizontal ? window.innerWidth : startX
        const endY = isHorizontal ? startY : window.innerHeight

        return (
          <motion.div
            key={`line-${index}`}
            className="absolute bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              x: isHorizontal ? [startX - 100, endX + 100] : startX,
              y: isHorizontal ? startY : [startY - 100, endY + 100],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              width: isHorizontal ? 100 : 2,
              height: isHorizontal ? 2 : 100,
            }}
          />
        )
      })}
    </div>
  )
}


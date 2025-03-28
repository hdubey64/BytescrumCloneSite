"use client"

import { motion } from "framer-motion"

export default function LaravelWaves() {
  // Laravel's primary color is red, but we'll use pink to match the theme
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background waves */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`wave-${index}`}
          className="absolute w-full h-[300px] opacity-10"
          style={{
            bottom: `${index * 15 - 30}%`,
            background: `linear-gradient(90deg, rgba(244,114,182,0) 0%, rgba(244,114,182,0.3) 50%, rgba(244,114,182,0) 100%)`,
            borderRadius: "50% 50% 0 0",
            transformOrigin: "bottom",
          }}
          animate={{
            scaleY: [0.8, 1, 0.8],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Laravel logo elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.div
          className="w-[600px] h-[600px] border-[20px] border-pink-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [0.9, 1, 0.9],
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* Floating code snippets */}
      {Array.from({ length: 15 }).map((_, index) => {
        const size = Math.random() * 100 + 50
        const startX = Math.random() * window.innerWidth
        const startY = Math.random() * window.innerHeight

        return (
          <motion.div
            key={`snippet-${index}`}
            className="absolute rounded-md border border-pink-500/20 bg-black/30 backdrop-blur-sm p-2 text-xs text-pink-500/40 font-mono"
            style={{
              width: size,
              height: size * 0.6,
            }}
            initial={{
              x: startX,
              y: startY,
              opacity: 0,
              rotate: Math.random() * 20 - 10,
            }}
            animate={{
              x: [startX, startX + (Math.random() * 200 - 100)],
              y: [startY, startY + (Math.random() * 200 - 100)],
              opacity: [0, 0.3, 0],
              rotate: [Math.random() * 20 - 10, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              times: [0, 0.5, 1],
            }}
          >
            {`<?php\n  Route::get('/', function () {\n    return view('welcome');\n  });`}
          </motion.div>
        )
      })}
    </div>
  )
}


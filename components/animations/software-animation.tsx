"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function SoftwareAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\|{}[]!@#$%^&*()_+-="

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Digital Matrix Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, columnIndex) => {
          const columnChars = Array.from({ length: Math.floor(Math.random() * 20) + 10 }).map((_, charIndex) => ({
            char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
            opacity: Math.random() * 0.7 + 0.3,
            delay: charIndex * 0.1,
          }))

          return (
            <div
              key={`column-${columnIndex}`}
              className="absolute top-0 flex flex-col"
              style={{ left: `${(columnIndex / 30) * 100}%` }}
            >
              {columnChars.map((charObj, charIndex) => (
                <motion.div
                  key={`char-${columnIndex}-${charIndex}`}
                  className="text-green-500 font-mono text-opacity-70"
                  style={{
                    opacity: charObj.opacity,
                    fontSize: Math.random() * 8 + 12,
                  }}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{
                    y: [-(charIndex * 20), window.innerHeight],
                    opacity: [0, charObj.opacity, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    delay: Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {charObj.char}
                </motion.div>
              ))}
            </div>
          )
        })}
      </div>

      {/* Floating Code Snippets */}
      {Array.from({ length: 8 }).map((_, index) => {
        const width = Math.random() * 300 + 200
        const height = Math.random() * 150 + 100
        const codeSnippets = [
          `function getUser() {\n  return fetch('/api/user')\n    .then(res => res.json());\n}`,
          `class DataService {\n  constructor() {\n    this.data = [];\n  }\n}`,
          `const calculateTotal = (items) => {\n  return items.reduce((sum, item) => \n    sum + item.price, 0);\n};`,
          `import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n}`,
          `async function processData(input) {\n  const result = await transform(input);\n  return result;\n}`,
        ]
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]

        return (
          <motion.div
            key={`snippet-${index}`}
            className="absolute rounded-md border border-blue-500/30 bg-black/80 backdrop-blur-sm p-3 text-xs text-blue-300 font-mono overflow-hidden"
            style={{
              width,
              height,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              rotateX: Math.random() * 40 - 20,
              rotateY: Math.random() * 40 - 20,
              rotateZ: Math.random() * 10 - 5,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 0.8, 0],
              rotateX: [Math.random() * 40 - 20, Math.random() * 40 - 20],
              rotateY: [Math.random() * 40 - 20, Math.random() * 40 - 20],
              rotateZ: [Math.random() * 10 - 5, Math.random() * 10 - 5],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {snippet}
          </motion.div>
        )
      })}

      {/* Glowing Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 20 }).map((_, index) => {
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          const endX = startX + (Math.random() * 20 - 10)
          const endY = startY + (Math.random() * 20 - 10)
          const midX1 = startX + (endX - startX) * 0.33
          const midY1 = startY + (endY - startY) * 0.33
          const midX2 = startX + (endX - startX) * 0.66
          const midY2 = startY + (endY - startY) * 0.66

          return (
            <motion.path
              key={`circuit-${index}`}
              d={`M ${startX}% ${startY}% L ${midX1}% ${midY1}% L ${midX2}% ${midY2}% L ${endX}% ${endY}%`}
              stroke="#3B82F6"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          )
        })}
      </svg>

      {/* Floating UI Elements */}
      {Array.from({ length: 6 }).map((_, index) => {
        const size = Math.random() * 150 + 100
        const uiElements = [
          <div
            key={`ui-inner-${index}-1`}
            className="w-full h-full rounded-md border border-gray-700 p-2 flex flex-col"
          >
            <div className="h-4 w-2/3 bg-gray-700 rounded mb-2"></div>
            <div className="flex-1 flex gap-2">
              <div className="w-1/3 bg-gray-800 rounded"></div>
              <div className="w-2/3 flex flex-col gap-2">
                <div className="h-3 bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>,
          <div
            key={`ui-inner-${index}-2`}
            className="w-full h-full rounded-md border border-gray-700 p-2 flex flex-col"
          >
            <div className="flex justify-between mb-2">
              <div className="h-3 w-1/4 bg-blue-700 rounded"></div>
              <div className="h-3 w-1/4 bg-gray-700 rounded"></div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="bg-gray-800 rounded"></div>
              <div className="bg-gray-800 rounded"></div>
              <div className="bg-gray-800 rounded"></div>
              <div className="bg-gray-800 rounded"></div>
            </div>
          </div>,
          <div
            key={`ui-inner-${index}-3`}
            className="w-full h-full rounded-md border border-gray-700 p-2 flex flex-col"
          >
            <div className="h-4 bg-gray-700 rounded-full mb-2"></div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-3 bg-gray-700 rounded-full"></div>
              <div className="h-3 bg-gray-700 rounded-full"></div>
              <div className="h-3 bg-gray-700 rounded-full"></div>
              <div className="h-3 bg-blue-700 rounded-full"></div>
            </div>
          </div>,
        ]
        const element = uiElements[Math.floor(Math.random() * uiElements.length)]

        return (
          <motion.div
            key={`ui-${index}`}
            className="absolute bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden"
            style={{
              width: size,
              height: size * 0.75,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              rotateX: Math.random() * 40 - 20,
              rotateY: Math.random() * 40 - 20,
              rotateZ: Math.random() * 10 - 5,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 0.6, 0],
              rotateX: [Math.random() * 40 - 20, Math.random() * 40 - 20],
              rotateY: [Math.random() * 40 - 20, Math.random() * 40 - 20],
              rotateZ: [Math.random() * 10 - 5, Math.random() * 10 - 5],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {element}
          </motion.div>
        )
      })}
    </div>
  )
}


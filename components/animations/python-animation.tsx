"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function PythonAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Python code snippets
  const pythonSnippets = [
    `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci(10):\n    print(num)`,
    `import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\nplt.plot(x, y)\nplt.show()`,
    `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def greet(self):\n        return f"Hello, my name is {self.name}"`,
    `from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello World!"`,
    `import pandas as pd\n\ndf = pd.read_csv("data.csv")\nresult = df.groupby("category").mean()\nprint(result)`,
  ]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Python-inspired Animation */}
      <div className="absolute inset-0">
        {/* Advanced Python Snakes */}
        {Array.from({ length: 8 }).map((_, snakeIndex) => {
          const segments = 20
          const snakeColor = snakeIndex % 2 === 0 ? "#3B82F6" : "#8B5CF6"
          const startX = Math.random() * window.innerWidth
          const startY = Math.random() * window.innerHeight

          return (
            <div key={`snake-${snakeIndex}`} className="absolute">
              {Array.from({ length: segments }).map((_, segmentIndex) => {
                const isHead = segmentIndex === 0
                const size = isHead ? 16 : 14 - segmentIndex * 0.4
                const delay = segmentIndex * 0.05
                const opacity = isHead ? 0.9 : 0.8 - segmentIndex * 0.03

                // Generate control points for the snake's path
                const points = []
                for (let i = 0; i < 4; i++) {
                  points.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  })
                }

                return (
                  <motion.div
                    key={`segment-${snakeIndex}-${segmentIndex}`}
                    className="absolute rounded-full"
                    style={{
                      width: Math.max(size, 4),
                      height: Math.max(size, 4),
                      backgroundColor: snakeColor,
                      boxShadow: isHead ? `0 0 10px ${snakeColor}, 0 0 20px ${snakeColor}` : "none",
                      opacity,
                      zIndex: segments - segmentIndex,
                    }}
                    animate={{
                      x: [
                        startX + Math.cos(segmentIndex * 0.2) * 50,
                        points[0].x + Math.cos(segmentIndex * 0.2) * 50,
                        points[1].x + Math.cos(segmentIndex * 0.2) * 50,
                        points[2].x + Math.cos(segmentIndex * 0.2) * 50,
                        points[3].x + Math.cos(segmentIndex * 0.2) * 50,
                        startX + Math.cos(segmentIndex * 0.2) * 50,
                      ],
                      y: [
                        startY + Math.sin(segmentIndex * 0.2) * 50,
                        points[0].y + Math.sin(segmentIndex * 0.2) * 50,
                        points[1].y + Math.sin(segmentIndex * 0.2) * 50,
                        points[2].y + Math.sin(segmentIndex * 0.2) * 50,
                        points[3].y + Math.sin(segmentIndex * 0.2) * 50,
                        startY + Math.sin(segmentIndex * 0.2) * 50,
                      ],
                      scale: isHead ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 40,
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: delay,
                      ease: "easeInOut",
                    }}
                  />
                )
              })}
            </div>
          )
        })}

        {/* Python Code Blocks */}
        {Array.from({ length: 6 }).map((_, index) => {
          const size = Math.random() * 300 + 200
          const snippet = pythonSnippets[Math.floor(Math.random() * pythonSnippets.length)]

          return (
            <motion.div
              key={`code-${index}`}
              className="absolute rounded-lg border border-blue-500/30 bg-black/80 backdrop-blur-sm p-4 text-sm text-blue-300 font-mono overflow-hidden"
              style={{
                width: size,
                height: size * 0.8,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                rotateX: Math.random() * 20 - 10,
                rotateY: Math.random() * 20 - 10,
                rotateZ: Math.random() * 10 - 5,
              }}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0, 0.8, 0],
                rotateX: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                rotateY: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                rotateZ: [Math.random() * 10 - 5, Math.random() * 10 - 5],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <pre>{snippet}</pre>
            </motion.div>
          )
        })}

        {/* Python Symbols and Keywords */}
        {Array.from({ length: 25 }).map((_, index) => {
          const symbols = [
            "def",
            "class",
            "import",
            "from",
            "if",
            "elif",
            "else",
            "for",
            "while",
            "try",
            "except",
            "finally",
            "with",
            "lambda",
            "return",
            "yield",
            "async",
            "await",
            "self",
            "__init__",
            "print",
            "list",
            "dict",
            "set",
            "tuple",
          ]
          const symbol = symbols[Math.floor(Math.random() * symbols.length)]
          const size = Math.random() * 20 + 14

          return (
            <motion.div
              key={`symbol-${index}`}
              className="absolute font-mono text-blue-400/60"
              style={{
                fontSize: size,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                rotate: Math.random() * 20 - 10,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                rotate: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: Math.random() * 5,
              }}
            >
              {symbol}
            </motion.div>
          )
        })}

        {/* Data Visualization Elements */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {/* Bar Chart */}
          <motion.g transform={`translate(${window.innerWidth * 0.2}, ${window.innerHeight * 0.7})`}>
            {Array.from({ length: 5 }).map((_, i) => {
              const height = Math.random() * 100 + 50

              return (
                <motion.rect
                  key={`bar-${i}`}
                  x={i * 30}
                  y={-height}
                  width="20"
                  height={height}
                  fill="#3B82F6"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scaleY: [0, 1, 0],
                  }}
                  transition={{
                    duration: 10,
                    delay: i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              )
            })}
          </motion.g>

          {/* Line Chart */}
          <motion.g transform={`translate(${window.innerWidth * 0.6}, ${window.innerHeight * 0.3})`}>
            {(() => {
              const points = Array.from({ length: 10 }).map((_, i) => ({
                x: i * 30,
                y: Math.random() * 100,
              }))

              const pathData =
                `M ${points[0].x} ${points[0].y} ` +
                points
                  .slice(1)
                  .map((p) => `L ${p.x} ${p.y}`)
                  .join(" ")

              return (
                <motion.path
                  d={pathData}
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              )
            })()}
          </motion.g>
        </svg>
      </div>
    </div>
  )
}


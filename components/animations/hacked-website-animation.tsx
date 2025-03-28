"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HackedWebsiteAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [terminalCommands, setTerminalCommands] = useState<string[]>([])
  const [binaryValues, setBinaryValues] = useState<{ [key: string]: string }>({})

  // Generate random terminal commands
  useEffect(() => {
    const commands = [
      "> scanning system files...",
      "> detecting malware signatures...",
      "> removing backdoor access...",
      "> patching vulnerabilities...",
      "> updating security protocols...",
      "> firewall status: active",
      "> malicious code detected in: wp-content/uploads/",
      "> quarantining infected files...",
      "> restoring from clean backup...",
      "> implementing security hardening...",
      "> changing all passwords...",
      "> updating CMS core files...",
      "> scanning database for injections...",
      "> removing suspicious admin accounts...",
      "> enabling two-factor authentication...",
      "> THREAT NEUTRALIZED",
      "> system secured",
    ]

    const updateCommands = () => {
      setTerminalCommands((prevCommands) => {
        const newCommands = [...prevCommands]
        if (newCommands.length > 15) {
          newCommands.shift()
        }
        newCommands.push(commands[Math.floor(Math.random() * commands.length)])
        return newCommands
      })
    }

    // Initialize with a few commands
    for (let i = 0; i < 5; i++) {
      updateCommands()
    }

    // Update commands periodically
    const interval = setInterval(updateCommands, 1500)
    return () => clearInterval(interval)
  }, [])

  // Dynamic binary values that change between 0 and 1
  useEffect(() => {
    // Create initial binary fragments
    const initialBinary: { [key: string]: string } = {}
    for (let i = 0; i < 20; i++) {
      const key = `binary-${i}`
      initialBinary[key] = generateBinaryString(Math.floor(Math.random() * 20) + 10)
    }
    setBinaryValues(initialBinary)

    // Update binary values periodically
    const interval = setInterval(() => {
      setBinaryValues((prev) => {
        const updated = { ...prev }
        // Randomly select fragments to update
        const keysToUpdate = Object.keys(updated).filter(() => Math.random() > 0.7)

        keysToUpdate.forEach((key) => {
          const currentValue = updated[key]
          // Replace a random character with its opposite (0->1 or 1->0)
          const charIndex = Math.floor(Math.random() * currentValue.length)
          const newChar = currentValue[charIndex] === "0" ? "1" : "0"
          updated[key] = currentValue.substring(0, charIndex) + newChar + currentValue.substring(charIndex + 1)
        })

        return updated
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  // Generate binary string
  const generateBinaryString = (length: number) => {
    return Array.from({ length }, () => Math.round(Math.random())).join("")
  }

  // Binary code fragments for background
  const binaryFragments = Array.from({ length: 20 }, (_, index) => ({
    id: `binary-${index}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 10,
    opacity: Math.random() * 0.5 + 0.1,
  }))

  // Terminal windows
  const terminals = Array.from({ length: 3 }, (_, index) => ({
    width: Math.random() * 300 + 200,
    height: Math.random() * 200 + 150,
    posX: Math.random() * 70 + 5,
    posY: Math.random() * 70 + 5,
    duration: Math.random() * 10 + 25,
    delay: index * 5,
  }))

  // Code blocks
  const codeSnippets = [
    `function scanMalware() {
  const files = getWebsiteFiles();
  return files.filter(file => 
    containsMaliciousCode(file));
}`,
    `async function removeBackdoors() {
  const suspiciousFiles = await findBackdoors();
  for (const file of suspiciousFiles) {
    await quarantine(file);
  }
  return "Backdoors removed";
}`,
    `class SecurityMonitor {
  constructor() {
    this.alerts = [];
    this.status = "SECURE";
  }
  
  scan() {
    // Continuous monitoring
  }
}`,
  ]

  const codeBlocks = Array.from({ length: 6 }, (_, index) => ({
    snippet: codeSnippets[index % codeSnippets.length],
    size: Math.random() * 100 + 150,
    startX: Math.random() * window.innerWidth,
    startY: Math.random() * window.innerHeight,
    endX: Math.random() * window.innerWidth,
    endY: Math.random() * window.innerHeight,
    duration: Math.random() * 20 + 25,
    delay: index * 3,
    rotateX: Math.random() * 20 - 10,
    rotateY: Math.random() * 20 - 10,
  }))

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 30 }).map((_, colIndex) => (
          <div
            key={`col-${colIndex}`}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${(colIndex / 30) * 100}%`, backgroundColor: "#0f0" }}
          >
            {Array.from({ length: Math.floor(Math.random() * 10) + 5 }).map((_, rowIndex) => (
              <motion.div
                key={`col-${colIndex}-row-${rowIndex}`}
                className="absolute w-px bg-green-500"
                style={{
                  height: Math.random() * 100 + 50,
                  opacity: Math.random() * 0.5 + 0.1,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  top: ["0%", "100%"],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 10,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Binary Code Fragments with changing 0s and 1s */}
      {binaryFragments.map((fragment) => (
        <motion.div
          key={fragment.id}
          className="absolute font-mono text-red-500/70"
          style={{
            left: `${fragment.x}%`,
            top: `${fragment.y}%`,
            fontSize: fragment.size,
            opacity: fragment.opacity,
          }}
          animate={{
            opacity: [fragment.opacity, fragment.opacity + 0.2, fragment.opacity],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {binaryValues[fragment.id] || ""}
        </motion.div>
      ))}

      {/* Terminal Windows with smooth transitions */}
      {terminals.map((terminal, index) => (
        <motion.div
          key={`terminal-${index}`}
          className="absolute rounded-md border border-green-500/50 bg-black/90 backdrop-blur-sm overflow-hidden"
          style={{
            width: terminal.width,
            height: terminal.height,
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
            x: terminal.posX + "%",
            y: terminal.posY + "%",
          }}
          animate={{
            opacity: [0, 0.9, 0.9, 0.9, 0],
            scale: [0.8, 1, 1, 1, 0.8],
            x: [
              `${terminal.posX}%`,
              `${terminal.posX + 2}%`,
              `${terminal.posX - 2}%`,
              `${terminal.posX + 1}%`,
              `${terminal.posX}%`,
            ],
            y: [
              `${terminal.posY}%`,
              `${terminal.posY - 2}%`,
              `${terminal.posY + 2}%`,
              `${terminal.posY - 1}%`,
              `${terminal.posY}%`,
            ],
          }}
          transition={{
            duration: terminal.duration,
            times: [0, 0.1, 0.4, 0.9, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 5,
            delay: terminal.delay,
          }}
        >
          <div className="h-6 bg-gray-800 flex items-center px-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-xs text-gray-300">security_scan.sh</div>
          </div>
          <div className="p-3 font-mono text-xs text-green-400 h-[calc(100%-24px)] overflow-hidden">
            {terminalCommands.slice(index * 5, index * 5 + 10).map((cmd, cmdIndex) => (
              <motion.div
                key={`cmd-${index}-${cmdIndex}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-1"
              >
                {cmd}
              </motion.div>
            ))}
            <motion.div
              className="h-4 w-2 bg-green-500 inline-block ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      ))}

      {/* Enhanced Shield Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-[400px] h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Shield Base */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [0.95, 1.05, 0.95],
              rotateY: [0, 360],
            }}
            transition={{
              scale: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
              rotateY: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-blue-500" viewBox="0 0 24 24" fill="none">
              <motion.path
                d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  stroke: ["#3b82f6", "#10b981", "#3b82f6"],
                }}
                transition={{
                  duration: 3,
                  stroke: {
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                  },
                }}
              />
            </svg>
          </motion.div>

          {/* Shield Inner Elements */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`shield-ring-${i}`}
                className="absolute rounded-full border-2 border-dashed"
                style={{
                  width: `${60 - i * 15}%`,
                  height: `${60 - i * 15}%`,
                  borderColor: i === 0 ? "#3b82f6" : i === 1 ? "#10b981" : "#8b5cf6",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  rotate: {
                    duration: 20 - i * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  scale: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                  opacity: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                }}
              />
            ))}
          </motion.div>

          {/* Shield Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="text-green-500 text-5xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                rotateY: {
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              ✓
            </motion.div>
          </motion.div>

          {/* Orbiting Security Elements */}
          {Array.from({ length: 5 }).map((_, i) => {
            const icons = ["🔒", "🛡️", "🔐", "🔍", "⚠️"]
            const colors = ["text-blue-500", "text-green-500", "text-purple-500", "text-yellow-500", "text-red-500"]
            const size = 30 + Math.random() * 20
            const distance = 150 + i * 10
            const speed = 10 + i * 2
            const startAngle = i * (360 / 5)

            return (
              <motion.div
                key={`orbiting-${i}`}
                className={`absolute text-2xl ${colors[i]}`}
                style={{
                  width: size,
                  height: size,
                  borderRadius: "50%",
                }}
                animate={{
                  x: Array.from({ length: 60 }).map(
                    (_, j) => Math.cos(((startAngle + j * 6) * Math.PI) / 180) * distance,
                  ),
                  y: Array.from({ length: 60 }).map(
                    (_, j) => Math.sin(((startAngle + j * 6) * Math.PI) / 180) * distance,
                  ),
                }}
                transition={{
                  duration: speed,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="flex items-center justify-center h-full">{icons[i]}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Code Recovery Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => {
          const width = Math.random() * 200 + 100
          const startX = Math.random() * 100

          return (
            <motion.div
              key={`code-recovery-${index}`}
              className="absolute h-4 bg-gradient-to-r from-red-500/0 via-green-500/50 to-blue-500/0"
              style={{
                width,
                left: `${startX}%`,
                bottom: `${index * 20}px`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.7, 0],
                x: [0, width],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                delay: index * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 3,
              }}
            />
          )
        })}
      </div>

      {/* Scanning Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0"
        animate={{
          top: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating Code Blocks with smooth transitions */}
      {codeBlocks.map((block, index) => (
        <motion.div
          key={`code-block-${index}`}
          className="absolute rounded-md border border-blue-500/30 bg-black/80 backdrop-blur-sm p-3 font-mono text-xs text-blue-400 overflow-hidden"
          style={{
            width: block.size,
            height: block.size * 0.8,
          }}
          initial={{
            x: block.startX,
            y: block.startY,
            opacity: 0,
            scale: 0.8,
            rotateX: block.rotateX,
            rotateY: block.rotateY,
          }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            scale: [0.8, 1, 1, 0.8],
            rotateX: [block.rotateX, block.rotateX + 5, block.rotateX - 5, block.rotateX],
            rotateY: [block.rotateY, block.rotateY - 5, block.rotateY + 5, block.rotateY],
            x: [block.startX, block.endX, block.endX, block.startX],
            y: [block.startY, block.endY, block.endY, block.startY],
          }}
          transition={{
            duration: block.duration,
            times: [0, 0.1, 0.9, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 5,
            delay: block.delay,
          }}
        >
          <pre>{block.snippet}</pre>
        </motion.div>
      ))}

      {/* Digital Particles */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            backgroundColor: index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#10b981" : "#8b5cf6",
            boxShadow: index % 3 === 0 ? "0 0 10px #3b82f6" : index % 3 === 1 ? "0 0 10px #10b981" : "0 0 10px #8b5cf6",
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0,
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
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}


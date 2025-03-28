"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function UiUxAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Design Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={`grid-col-${index}`} className="border-r border-pink-500/20 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={`grid-row-${index}`} className="border-b border-pink-500/20 w-full"></div>
          ))}
        </div>
      </div>

      {/* Wireframes */}
      {Array.from({ length: 6 }).map((_, index) => {
        const size = Math.random() * 300 + 200
        const wireframes = [
          <div
            key={`wireframe-inner-${index}-1`}
            className="w-full h-full rounded-md border border-gray-500 p-4 bg-black/80"
          >
            <div className="h-4 w-2/3 bg-gray-700 rounded mb-4"></div>
            <div className="h-20 w-full bg-gray-700 rounded mb-4"></div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="h-40 bg-gray-700 rounded"></div>
              <div className="h-40 bg-gray-700 rounded"></div>
            </div>
            <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
          </div>,
          <div
            key={`wireframe-inner-${index}-2`}
            className="w-full h-full rounded-md border border-gray-500 p-4 bg-black/80"
          >
            <div className="flex justify-between mb-4">
              <div className="h-8 w-1/4 bg-gray-700 rounded"></div>
              <div className="flex space-x-2">
                <div className="h-8 w-8 bg-gray-700 rounded"></div>
                <div className="h-8 w-8 bg-gray-700 rounded"></div>
                <div className="h-8 w-8 bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="h-40 w-full bg-gray-700 rounded mb-4"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 bg-gray-700 rounded"></div>
              <div className="h-24 bg-gray-700 rounded"></div>
              <div className="h-24 bg-gray-700 rounded"></div>
            </div>
          </div>,
          <div
            key={`wireframe-inner-${index}-3`}
            className="w-full h-full rounded-md border border-gray-500 p-4 bg-black/80"
          >
            <div className="flex space-x-4 mb-4">
              <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 w-1/3 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="h-60 w-full bg-gray-700 rounded mb-4"></div>
            <div className="flex justify-between">
              <div className="h-8 w-8 bg-gray-700 rounded"></div>
              <div className="h-8 w-8 bg-gray-700 rounded"></div>
              <div className="h-8 w-8 bg-gray-700 rounded"></div>
            </div>
          </div>,
        ]
        const wireframe = wireframes[Math.floor(Math.random() * wireframes.length)]

        return (
          <motion.div
            key={`wireframe-${index}`}
            className="absolute"
            style={{
              width: size,
              height: size * 1.2,
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
              opacity: [0, 0.7, 0],
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
            {wireframe}
          </motion.div>
        )
      })}

      {/* UI Components */}
      {Array.from({ length: 8 }).map((_, index) => {
        const size = Math.random() * 150 + 100
        const components = [
          <div
            key={`component-inner-${index}-1`}
            className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm p-4 border border-pink-500/30"
          >
            <div className="text-pink-400 text-sm font-medium mb-2">Button Component</div>
            <div className="flex flex-col space-y-2">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm">Primary Button</button>
              <button className="bg-transparent border border-pink-500 text-pink-400 px-4 py-2 rounded-md text-sm">
                Secondary Button
              </button>
              <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md text-sm">Tertiary Button</button>
            </div>
          </div>,
          <div
            key={`component-inner-${index}-2`}
            className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm p-4 border border-purple-500/30"
          >
            <div className="text-purple-400 text-sm font-medium mb-2">Card Component</div>
            <div className="bg-gray-900/60 rounded-md p-3 border border-gray-700">
              <div className="h-20 bg-gray-800 rounded-md mb-3"></div>
              <div className="h-3 bg-gray-700 rounded-full mb-2 w-2/3"></div>
              <div className="h-3 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-3 bg-gray-700 rounded-full mb-3 w-3/4"></div>
              <div className="flex justify-end">
                <div className="h-6 w-16 bg-purple-500/50 rounded-md"></div>
              </div>
            </div>
          </div>,
          <div
            key={`component-inner-${index}-3`}
            className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 border border-blue-500/30"
          >
            <div className="text-blue-400 text-sm font-medium mb-2">Form Component</div>
            <div className="space-y-3">
              <div>
                <div className="h-3 bg-gray-700 rounded-full mb-1 w-1/4"></div>
                <div className="h-8 bg-gray-900/60 rounded-md border border-gray-700"></div>
              </div>
              <div>
                <div className="h-3 bg-gray-700 rounded-full mb-1 w-1/3"></div>
                <div className="h-8 bg-gray-900/60 rounded-md border border-gray-700"></div>
              </div>
              <div>
                <div className="h-3 bg-gray-700 rounded-full mb-1 w-1/4"></div>
                <div className="h-20 bg-gray-900/60 rounded-md border border-gray-700"></div>
              </div>
              <div className="h-8 w-full bg-blue-500/50 rounded-md"></div>
            </div>
          </div>,
        ]
        const component = components[Math.floor(Math.random() * components.length)]

        return (
          <motion.div
            key={`component-${index}`}
            className="absolute"
            style={{
              width: size,
              height: size * 1.2,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 0.9, 0],
              scale: [0.8, 1, 0.8],
              rotate: [Math.random() * 10 - 5, Math.random() * 10 - 5],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {component}
          </motion.div>
        )
      })}

      {/* Color Palettes */}
      {Array.from({ length: 4 }).map((_, index) => {
        const size = Math.random() * 200 + 100
        const palettes = [
          <div
            key={`palette-inner-${index}-1`}
            className="w-full h-full rounded-lg shadow-lg bg-black/80 backdrop-blur-sm p-4 border border-gray-700"
          >
            <div className="text-gray-300 text-sm font-medium mb-3">Color Palette</div>
            <div className="grid grid-cols-5 gap-2 h-12">
              <div className="rounded-md bg-pink-500"></div>
              <div className="rounded-md bg-pink-400"></div>
              <div className="rounded-md bg-pink-300"></div>
              <div className="rounded-md bg-pink-200"></div>
              <div className="rounded-md bg-pink-100"></div>
            </div>
            <div className="grid grid-cols-5 gap-2 h-12 mt-2">
              <div className="rounded-md bg-purple-500"></div>
              <div className="rounded-md bg-purple-400"></div>
              <div className="rounded-md bg-purple-300"></div>
              <div className="rounded-md bg-purple-200"></div>
              <div className="rounded-md bg-purple-100"></div>
            </div>
            <div className="grid grid-cols-5 gap-2 h-12 mt-2">
              <div className="rounded-md bg-blue-500"></div>
              <div className="rounded-md bg-blue-400"></div>
              <div className="rounded-md bg-blue-300"></div>
              <div className="rounded-md bg-blue-200"></div>
              <div className="rounded-md bg-blue-100"></div>
            </div>
          </div>,
          <div
            key={`palette-inner-${index}-2`}
            className="w-full h-full rounded-lg shadow-lg bg-black/80 backdrop-blur-sm p-4 border border-gray-700"
          >
            <div className="text-gray-300 text-sm font-medium mb-3">Color Palette</div>
            <div className="grid grid-cols-5 gap-2 h-12">
              <div className="rounded-md bg-emerald-500"></div>
              <div className="rounded-md bg-emerald-400"></div>
              <div className="rounded-md bg-emerald-300"></div>
              <div className="rounded-md bg-emerald-200"></div>
              <div className="rounded-md bg-emerald-100"></div>
            </div>
            <div className="grid grid-cols-5 gap-2 h-12 mt-2">
              <div className="rounded-md bg-teal-500"></div>
              <div className="rounded-md bg-teal-400"></div>
              <div className="rounded-md bg-teal-300"></div>
              <div className="rounded-md bg-teal-200"></div>
              <div className="rounded-md bg-teal-100"></div>
            </div>
            <div className="grid grid-cols-5 gap-2 h-12 mt-2">
              <div className="rounded-md bg-cyan-500"></div>
              <div className="rounded-md bg-cyan-400"></div>
              <div className="rounded-md bg-cyan-300"></div>
              <div className="rounded-md bg-cyan-200"></div>
              <div className="rounded-md bg-cyan-100"></div>
            </div>
          </div>,
        ]
        const palette = palettes[Math.floor(Math.random() * palettes.length)]

        return (
          <motion.div
            key={`palette-${index}`}
            className="absolute"
            style={{
              width: size,
              height: size * 0.8,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              rotateZ: Math.random() * 10 - 5,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 0.9, 0],
              rotateZ: [Math.random() * 10 - 5, Math.random() * 10 - 5],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {palette}
          </motion.div>
        )
      })}

      {/* Design Tools Icons */}
      {Array.from({ length: 15 }).map((_, index) => {
        const size = Math.random() * 40 + 20
        const icons = [
          "logos:figma",
          "logos:adobe-xd",
          "logos:sketch",
          "simple-icons:framer",
          "simple-icons:invision",
          "logos:adobe-photoshop",
          "logos:adobe-illustrator",
          "logos:adobe-after-effects",
          "simple-icons:zeplin",
          "logos:miro",
          "simple-icons:principle",
          "simple-icons:maze",
          "logos:storybook-icon",
          "simple-icons:protopie",
          "simple-icons:axure",
        ]
        const icon = icons[Math.floor(Math.random() * icons.length)]

        return (
          <motion.div
            key={`tool-icon-${index}`}
            className="absolute flex items-center justify-center"
            style={{
              width: size,
              height: size,
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
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              times: [0, 0.5, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <span className="iconify" data-icon={icon}></span>
          </motion.div>
        )
      })}

      {/* Design Elements */}
      {Array.from({ length: 20 }).map((_, index) => {
        const size = Math.random() * 100 + 50
        const shapes = [
          <div
            key={`shape-inner-${index}-1`}
            className="w-full h-full rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30"
          ></div>,
          <div
            key={`shape-inner-${index}-2`}
            className="w-full h-full rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30"
          ></div>,
          <div
            key={`shape-inner-${index}-3`}
            className="w-full h-full transform rotate-45 bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30"
          ></div>,
          <div
            key={`shape-inner-${index}-4`}
            className="w-full h-full clip-path-polygon bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>,
        ]
        const shape = shapes[Math.floor(Math.random() * shapes.length)]

        return (
          <motion.div
            key={`shape-${index}`}
            className="absolute"
            style={{
              width: size,
              height: size,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0.5,
              rotate: 0,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 30 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {shape}
          </motion.div>
        )
      })}
    </div>
  )
}


"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function EcommerceAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Product icons and elements
  const productElements = [
    { icon: "📱", name: "Smartphone", price: "$999" },
    { icon: "💻", name: "Laptop", price: "$1299" },
    { icon: "👟", name: "Sneakers", price: "$149" },
    { icon: "👕", name: "T-Shirt", price: "$29" },
    { icon: "🎮", name: "Game Console", price: "$499" },
    { icon: "🎧", name: "Headphones", price: "$199" },
    { icon: "⌚", name: "Smartwatch", price: "$349" },
    { icon: "📚", name: "Books", price: "$19" },
    { icon: "🛋️", name: "Furniture", price: "$599" },
    { icon: "🧴", name: "Beauty", price: "$49" },
  ]

  // E-commerce UI elements
  const uiElements = [
    <div
      key="cart"
      className="w-full h-full bg-black/80 backdrop-blur-sm rounded-lg border border-pink-500/30 p-3 flex flex-col"
    >
      <div className="text-pink-400 font-semibold mb-2 flex items-center">
        <span className="mr-2">🛒</span> Shopping Cart
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => {
          const product = productElements[Math.floor(Math.random() * productElements.length)]
          return (
            <div key={i} className="flex justify-between items-center text-xs border-b border-gray-800 pb-1">
              <div className="flex items-center">
                <span className="mr-2">{product.icon}</span>
                <span className="text-gray-300">{product.name}</span>
              </div>
              <span className="text-pink-300">{product.price}</span>
            </div>
          )
        })}
      </div>
      <div className="mt-2 pt-2 border-t border-gray-800 flex justify-between">
        <span className="text-gray-400">Total:</span>
        <span className="text-pink-400 font-bold">$1,247</span>
      </div>
    </div>,
    <div
      key="product"
      className="w-full h-full bg-black/80 backdrop-blur-sm rounded-lg border border-pink-500/30 p-3 flex flex-col"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="text-4xl mb-2">
          {productElements[Math.floor(Math.random() * productElements.length)].icon}
        </span>
        <div className="text-center">
          <div className="text-white font-semibold">
            {productElements[Math.floor(Math.random() * productElements.length)].name}
          </div>
          <div className="text-pink-400 font-bold">
            {productElements[Math.floor(Math.random() * productElements.length)].price}
          </div>
          <div className="mt-2">
            <span className="inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded-full">Add to Cart</span>
          </div>
        </div>
      </div>
    </div>,
    <div
      key="checkout"
      className="w-full h-full bg-black/80 backdrop-blur-sm rounded-lg border border-pink-500/30 p-3 flex flex-col"
    >
      <div className="text-pink-400 font-semibold mb-2 flex items-center">
        <span className="mr-2">💳</span> Checkout
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-6 bg-gray-800 rounded-md w-full"></div>
        <div className="h-6 bg-gray-800 rounded-md w-full"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-6 bg-gray-800 rounded-md"></div>
          <div className="h-6 bg-gray-800 rounded-md"></div>
        </div>
        <div className="h-6 bg-gray-800 rounded-md w-3/4"></div>
      </div>
      <div className="mt-2">
        <div className="bg-pink-600 text-white text-center py-1 rounded-md">Complete Order</div>
      </div>
    </div>,
  ]

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* 3D Shopping Space */}
      <div className="absolute inset-0 perspective-1000">
        {/* Floating Product Cards */}
        {Array.from({ length: 8 }).map((_, index) => {
          const size = Math.random() * 150 + 100
          const element = uiElements[Math.floor(Math.random() * uiElements.length)]
          const depth = Math.random() * 500 - 250

          return (
            <motion.div
              key={`product-card-${index}`}
              className="absolute"
              style={{
                width: size,
                height: size * 1.2,
                transformStyle: "preserve-3d",
                transform: `translateZ(${depth}px)`,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                rotateX: Math.random() * 20 - 10,
                rotateY: Math.random() * 20 - 10,
              }}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0, 0.9, 0],
                rotateX: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                rotateY: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                z: [depth, depth + Math.random() * 200 - 100],
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

        {/* Floating Shopping Icons */}
        {Array.from({ length: 15 }).map((_, index) => {
          const size = Math.random() * 40 + 30
          const product = productElements[Math.floor(Math.random() * productElements.length)]
          const depth = Math.random() * 300 - 150

          return (
            <motion.div
              key={`icon-${index}`}
              className="absolute flex items-center justify-center"
              style={{
                width: size,
                height: size,
                fontSize: size * 0.6,
                transformStyle: "preserve-3d",
                transform: `translateZ(${depth}px)`,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                rotateZ: Math.random() * 20 - 10,
              }}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
                rotateZ: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                z: [depth, depth + Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              {product.icon}
            </motion.div>
          )
        })}

        {/* Payment Processing Lines */}
        {Array.from({ length: 10 }).map((_, index) => {
          const startX = Math.random() * window.innerWidth
          const startY = Math.random() * window.innerHeight
          const angle = Math.random() * 360
          const length = Math.random() * 300 + 100

          return (
            <motion.div
              key={`payment-line-${index}`}
              className="absolute h-px bg-gradient-to-r from-pink-500/0 via-pink-500/70 to-pink-500/0"
              style={{
                width: length,
                left: startX,
                top: startY,
                transform: `rotate(${angle}deg)`,
                transformOrigin: "left center",
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          )
        })}

        {/* Shopping Cart Trails */}
        {Array.from({ length: 5 }).map((_, index) => {
          const points = Array.from({ length: 5 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }))

          const pathData = `M ${points[0].x} ${points[0].y} Q ${points[1].x} ${points[1].y}, ${points[2].x} ${points[2].y} T ${points[3].x} ${points[3].y} ${points[4].x} ${points[4].y}`

          return (
            <svg key={`cart-path-${index}`} className="absolute inset-0 w-full h-full">
              <motion.path
                d={pathData}
                fill="none"
                stroke="#EC4899"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  delay: Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />

              <motion.circle
                cx={points[0].x}
                cy={points[0].y}
                r="8"
                fill="#EC4899"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  cx: [points[0].x, points[1].x, points[2].x, points[3].x, points[4].x],
                  cy: [points[0].y, points[1].y, points[2].y, points[3].y, points[4].y],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  delay: Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </svg>
          )
        })}
      </div>
    </div>
  )
}


"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function DigitalMarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={`grid-col-${index}`} className="border-r border-blue-500/20 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={`grid-row-${index}`} className="border-b border-blue-500/20 w-full"></div>
          ))}
        </div>
      </div>

      {/* Floating devices */}
      {Array.from({ length: 5 }).map((_, index) => {
        const devices = [
          <div
            key={`device-inner-${index}-1`}
            className="w-full h-full rounded-md border border-gray-700 p-2 bg-black/80"
          >
            {/* Laptop */}
            <div className="relative">
              <div className="h-40 bg-gray-900 rounded-t-md border border-gray-700 p-2">
                <div className="h-3 w-2/3 bg-blue-500/30 rounded mb-2"></div>
                <div className="h-3 w-full bg-gray-700 rounded mb-2"></div>
                <div className="h-3 w-full bg-gray-700 rounded mb-2"></div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-12 bg-purple-500/20 rounded"></div>
                  <div className="h-12 bg-blue-500/20 rounded"></div>
                  <div className="h-12 bg-pink-500/20 rounded"></div>
                </div>
              </div>
              <div className="h-2 bg-gray-800 rounded-b-md"></div>
              <div className="h-1 w-10 bg-gray-800 mx-auto"></div>
            </div>
          </div>,
          <div
            key={`device-inner-${index}-2`}
            className="w-full h-full rounded-md border border-gray-700 p-2 bg-black/80"
          >
            {/* Smartphone */}
            <div className="relative mx-auto w-24">
              <div className="h-48 w-24 bg-gray-900 rounded-xl border border-gray-700 p-2 mx-auto">
                <div className="h-2 w-8 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <div className="h-2 w-full bg-blue-500/30 rounded mb-2"></div>
                <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                <div className="h-2 w-2/3 bg-gray-700 rounded mb-4"></div>
                <div className="h-20 w-full bg-purple-500/20 rounded-md"></div>
                <div className="flex justify-between mt-4">
                  <div className="h-4 w-4 bg-pink-500/30 rounded-full"></div>
                  <div className="h-4 w-4 bg-blue-500/30 rounded-full"></div>
                  <div className="h-4 w-4 bg-green-500/30 rounded-full"></div>
                </div>
              </div>
              <div className="h-1 w-8 bg-gray-800 rounded-full mx-auto mt-1"></div>
            </div>
          </div>,
          <div
            key={`device-inner-${index}-3`}
            className="w-full h-full rounded-md border border-gray-700 p-2 bg-black/80"
          >
            {/* Tablet */}
            <div className="relative mx-auto">
              <div className="h-56 w-40 bg-gray-900 rounded-xl border border-gray-700 p-3 mx-auto">
                <div className="h-2 w-6 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <div className="h-3 w-full bg-blue-500/30 rounded mb-2"></div>
                <div className="h-3 w-full bg-gray-700 rounded mb-2"></div>
                <div className="h-3 w-2/3 bg-gray-700 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-green-500/20 rounded"></div>
                  <div className="h-16 bg-amber-500/20 rounded"></div>
                </div>
                <div className="h-16 w-full bg-purple-500/20 rounded mt-2"></div>
              </div>
              <div className="h-1 w-8 bg-gray-800 rounded-full mx-auto mt-1"></div>
            </div>
          </div>,
        ]
        const device = devices[Math.floor(Math.random() * devices.length)]
        const size = Math.random() * 100 + 150

        return (
          <motion.div
            key={`device-${index}`}
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
            {device}
          </motion.div>
        )
      })}

      {/* Analytics Charts */}
      {Array.from({ length: 6 }).map((_, index) => {
        const size = Math.random() * 150 + 100
        const charts = [
          <div
            key={`chart-inner-${index}-1`}
            className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-4 border border-blue-500/30"
          >
            <div className="text-blue-400 text-sm font-medium mb-2">Website Traffic</div>
            <div className="flex items-end h-32 gap-1">
              {Array.from({ length: 12 }).map((_, i) => {
                const height = Math.random() * 100
                return (
                  <div
                    key={`bar-${i}`}
                    className="flex-1 bg-gradient-to-t from-blue-600/50 to-blue-400/50 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                )
              })}
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-xs text-gray-400">Jan</div>
              <div className="text-xs text-gray-400">Dec</div>
            </div>
          </div>,
          <div
            key={`chart-inner-${index}-2`}
            className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-4 border border-purple-500/30"
          >
            <div className="text-purple-400 text-sm font-medium mb-2">Conversion Rate</div>
            <div className="relative h-32">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                <path
                  d="M0,50 Q10,20 20,40 T40,30 T60,40 T80,10 T100,30"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.5)"
                  strokeWidth="2"
                />
                <path
                  d="M0,50 Q10,20 20,40 T40,30 T60,40 T80,10 T100,30"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.8)"
                  strokeWidth="0.5"
                  strokeDasharray="2"
                />
                <circle cx="20" cy="40" r="1.5" fill="rgba(168, 85, 247, 1)" />
                <circle cx="40" cy="30" r="1.5" fill="rgba(168, 85, 247, 1)" />
                <circle cx="60" cy="40" r="1.5" fill="rgba(168, 85, 247, 1)" />
                <circle cx="80" cy="85,247,1)" />
                <circle cx="60" cy="40" r="1.5" fill="rgba(168, 85, 247, 1)" />
                <circle cx="80" cy="10" r="1.5" fill="rgba(168, 85, 247, 1)" />
                <circle cx="100" cy="30" r="1.5" fill="rgba(168, 85, 247, 1)" />
              </svg>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-xs text-gray-400">0%</div>
              <div className="text-xs text-gray-400">5%</div>
            </div>
          </div>,
          <div
            key={`chart-inner-${index}-3`}
            className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-sm p-4 border border-green-500/30"
          >
            <div className="text-green-400 text-sm font-medium mb-2">Channel Performance</div>
            <div className="relative h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-8 border-green-500/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-6 border-teal-500/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/30"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-xs text-gray-400">Organic</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <div className="text-xs text-gray-400">Social</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="text-xs text-gray-400">Paid</div>
                </div>
              </div>
            </div>
          </div>,
        ]
        const chart = charts[Math.floor(Math.random() * charts.length)]

        return (
          <motion.div
            key={`chart-${index}`}
            className="absolute"
            style={{
              width: size,
              height: size,
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
            {chart}
          </motion.div>
        )
      })}

      {/* SEO Keywords */}
      {Array.from({ length: 15 }).map((_, index) => {
        const keywords = [
          "digital marketing",
          "SEO",
          "social media",
          "content strategy",
          "PPC",
          "conversion rate",
          "email marketing",
          "analytics",
          "brand awareness",
          "lead generation",
          "ROI",
          "engagement",
          "target audience",
          "marketing funnel",
          "call to action",
          "backlinks",
          "organic traffic",
          "keywords",
          "meta tags",
          "alt text",
        ]
        const keyword = keywords[Math.floor(Math.random() * keywords.length)]
        const size = keyword.length * 8 + Math.random() * 20
        const colors = ["blue", "purple", "pink", "green", "indigo"]
        const color = colors[Math.floor(Math.random() * colors.length)]

        return (
          <motion.div
            key={`keyword-${index}`}
            className={`absolute px-3 py-1 rounded-full bg-${color}-900/30 border border-${color}-500/30 text-${color}-400 text-sm font-medium`}
            style={{
              width: "auto",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {keyword}
          </motion.div>
        )
      })}

      {/* Social Media Icons */}
      {Array.from({ length: 10 }).map((_, index) => {
        const size = Math.random() * 30 + 20
        const icons = [
          "logos:facebook",
          "logos:twitter",
          "logos:instagram-icon",
          "logos:linkedin-icon",
          "logos:youtube-icon",
          "logos:pinterest",
          "logos:tiktok-icon",
          "logos:snapchat",
          "logos:google-ads",
          "logos:google-analytics",
        ]
        const icon = icons[Math.floor(Math.random() * icons.length)]

        return (
          <motion.div
            key={`social-icon-${index}`}
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

      {/* Floating elements */}
      {Array.from({ length: 8 }).map((_, index) => {
        const size = Math.random() * 80 + 40
        const elements = [
          <div
            key={`element-inner-${index}-1`}
            className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
          ></div>,
          <div
            key={`element-inner-${index}-2`}
            className="w-full h-full rounded-md bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30"
          ></div>,
          <div
            key={`element-inner-${index}-3`}
            className="w-full h-full transform rotate-45 bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30"
          ></div>,
          <div
            key={`element-inner-${index}-4`}
            className="w-full h-full clip-path-polygon bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>,
        ]
        const element = elements[Math.floor(Math.random() * elements.length)]

        return (
          <motion.div
            key={`element-${index}`}
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
            {element}
          </motion.div>
        )
      })}
    </div>
  )
}


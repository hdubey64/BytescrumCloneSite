"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function FullStackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Frontend Layer */}
      <div className="absolute inset-0 opacity-30">
        {/* UI Components */}
        {Array.from({ length: 8 }).map((_, index) => {
          const size = Math.random() * 200 + 100
          const uiElements = [
            <div
              key={`ui-inner-${index}-1`}
              className="w-full h-full rounded-md border border-blue-700 p-2 flex flex-col"
            >
              <div className="h-4 w-2/3 bg-blue-700 rounded mb-2"></div>
              <div className="flex-1 flex gap-2">
                <div className="w-1/3 bg-blue-800 rounded"></div>
                <div className="w-2/3 flex flex-col gap-2">
                  <div className="h-3 bg-blue-700 rounded"></div>
                  <div className="h-3 bg-blue-700 rounded"></div>
                  <div className="h-3 bg-blue-700 rounded"></div>
                </div>
              </div>
            </div>,
            <div
              key={`ui-inner-${index}-2`}
              className="w-full h-full rounded-md border border-blue-700 p-2 flex flex-col"
            >
              <div className="flex justify-between mb-2">
                <div className="h-3 w-1/4 bg-blue-700 rounded"></div>
                <div className="h-3 w-1/4 bg-blue-700 rounded"></div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div className="bg-blue-800 rounded"></div>
                <div className="bg-blue-800 rounded"></div>
                <div className="bg-blue-800 rounded"></div>
                <div className="bg-blue-800 rounded"></div>
              </div>
            </div>,
            <div
              key={`ui-inner-${index}-3`}
              className="w-full h-full rounded-md border border-blue-700 p-2 flex flex-col"
            >
              <div className="h-4 bg-blue-700 rounded-full mb-2"></div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-3 bg-blue-700 rounded-full"></div>
                <div className="h-3 bg-blue-700 rounded-full"></div>
                <div className="h-3 bg-blue-700 rounded-full"></div>
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

        {/* Frontend Code Snippets */}
        {Array.from({ length: 5 }).map((_, index) => {
          const size = Math.random() * 300 + 200
          const snippets = [
            `function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
            `const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Logo />
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};`,
            `// Simple state management
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;`,
          ]
          const snippet = snippets[Math.floor(Math.random() * snippets.length)]

          return (
            <motion.div
              key={`snippet-${index}`}
              className="absolute rounded-md border border-blue-500/20 bg-black/80 backdrop-blur-sm p-4 text-xs text-blue-300 font-mono overflow-hidden"
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
              <pre>{snippet}</pre>
            </motion.div>
          )
        })}
      </div>

      {/* Backend Layer */}
      <div className="absolute inset-0 opacity-30">
        {/* Backend Code Snippets */}
        {Array.from({ length: 5 }).map((_, index) => {
          const size = Math.random() * 300 + 200
          const snippets = [
            `// Simple API route
export default function handler(req, res) {
  // Static data - no database needed
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  res.status(200).json(items);
}`,
            `// Server component
export default async function Page() {
  // Static content - no database needed
  return (
    <main>
      <h1>Welcome to our site</h1>
      <p>This content is statically rendered</p>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
    </main>
  );
}`,
            `// Simple middleware
export function middleware(req) {
  const path = req.nextUrl.pathname;

  // Simple path-based routing logic
  if (path.startsWith('/api/')) {
    // API route handling
    console.log('API route accessed:', path);
  } else if (path.startsWith('/admin/')) {
    // Admin route handling
    console.log('Admin route accessed:', path);
  }

  return NextResponse.next();
}`,
          ]
          const snippet = snippets[Math.floor(Math.random() * snippets.length)]

          return (
            <motion.div
              key={`backend-snippet-${index}`}
              className="absolute rounded-md border border-purple-500/20 bg-black/80 backdrop-blur-sm p-4 text-xs text-purple-300 font-mono overflow-hidden"
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
              <pre>{snippet}</pre>
            </motion.div>
          )
        })}

        {/* UI/Component Structure */}
        {Array.from({ length: 3 }).map((_, index) => {
          const size = Math.random() * 250 + 150
          const structures = [
            `// Component structure
components/
├── layout/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Sidebar.jsx
├── ui/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Input.jsx
└── features/
    ├── home/
    │   └── HeroSection.jsx
    └── products/
        └── ProductList.jsx`,
            `// Page structure
app/
├── page.jsx
├── layout.jsx
├── about/
│   └── page.jsx
├── products/
│   ├── page.jsx
│   └── [id]/
│       └── page.jsx
└── contact/
    └── page.jsx`,
            `// Project structure
project/
├── app/
│   └── routes
├── components/
│   └── shared
├── hooks/
│   └── useLocalStorage.js
├── utils/
│   └── formatters.js
└── styles/
    └── globals.css`,
          ]
          const structure = structures[Math.floor(Math.random() * structures.length)]

          return (
            <motion.div
              key={`structure-${index}`}
              className="absolute rounded-md border border-green-500/20 bg-black/80 backdrop-blur-sm p-4 text-xs text-green-300 font-mono overflow-hidden"
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
              <pre>{structure}</pre>
            </motion.div>
          )
        })}
      </div>

      {/* Technology Icons */}
      {Array.from({ length: 20 }).map((_, index) => {
        const size = Math.random() * 40 + 20
        const icons = [
          "logos:react",
          "logos:angular",
          "logos:vue",
          "logos:nextjs-icon",
          "logos:nodejs-icon",
          "logos:express",
          "logos:typescript-icon",
          "logos:javascript",
          "logos:python",
          "logos:java",
          "logos:docker-icon",
          "logos:kubernetes",
          "logos:aws",
          "logos:firebase",
          "logos:graphql",
          "logos:redux",
          "logos:tailwindcss-icon",
          "logos:html-5",
          "logos:css-3",
          "logos:sass",
        ]
        const icon = icons[Math.floor(Math.random() * icons.length)]

        return (
          <motion.div
            key={`tech-icon-${index}`}
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

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 15 }).map((_, index) => {
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          const endX = Math.random() * 100
          const endY = Math.random() * 100

          return (
            <motion.path
              key={`line-${index}`}
              d={`M ${startX}% ${startY}% L ${endX}% ${endY}%`}
              stroke={index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#8b5cf6" : "#10b981"}
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                delay: Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          )
        })}
      </svg>

      {/* Data Flow Particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            backgroundColor: index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#8b5cf6" : "#10b981",
            boxShadow: index % 3 === 0 ? "0 0 10px #3b82f6" : index % 3 === 1 ? "0 0 10px #8b5cf6" : "0 0 10px #10b981",
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


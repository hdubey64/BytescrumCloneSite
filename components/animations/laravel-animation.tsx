"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function LaravelAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Laravel-inspired Animation */}
      <div className="absolute inset-0">
        {/* Elegant Flowing Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {Array.from({ length: 5 }).map((_, index) => {
            const waveHeight = Math.random() * 200 + 100
            const waveWidth = window.innerWidth
            const startY = Math.random() * window.innerHeight

            // Generate smooth wave path
            const points = []
            for (let i = 0; i <= 10; i++) {
              const x = (i / 10) * waveWidth
              const y = startY + Math.sin((i * Math.PI) / 2) * waveHeight
              points.push({ x, y })
            }

            const pathData =
              `M ${points[0].x} ${points[0].y} ` +
              points
                .slice(1)
                .map((p) => `L ${p.x} ${p.y}`)
                .join(" ")

            return (
              <motion.path
                key={`wave-${index}`}
                d={pathData}
                fill="none"
                stroke="#F9A8D4"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            )
          })}
        </svg>

        {/* Laravel Logo Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[600px] h-[600px] border-[20px] border-pink-500/10 rounded-full"
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

        {/* Floating PHP/Laravel Code Snippets */}
        {Array.from({ length: 12 }).map((_, index) => {
          const size = Math.random() * 200 + 150
          const snippets = [
            `<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\User;\nuse Illuminate\\Http\\Request;\n\nclass UserController extends Controller\n{\n    public function index()\n    {\n        return User::all();\n    }\n}`,
            `<?php\n\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/', function () {\n    return view('welcome');\n});\n\nRoute::resource('users', UserController::class);`,
            `@extends('layouts.app')\n\n@section('content')\n<div class="container">\n    <h1>{{ $title }}</h1>\n    @foreach($users as $user)\n        <div>{{ $user->name }}</div>\n    @endforeach\n</div>\n@endsection`,
            `<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    protected $fillable = [\n        'title', 'content', 'user_id'\n    ];\n}`,
            `php artisan make:controller API/ProductController --api\nphp artisan make:model Product -m\nphp artisan migrate:fresh --seed`,
          ]
          const snippet = snippets[Math.floor(Math.random() * snippets.length)]

          return (
            <motion.div
              key={`snippet-${index}`}
              className="absolute rounded-md border border-pink-500/20 bg-black/80 backdrop-blur-sm p-4 text-xs text-pink-300 font-mono overflow-hidden"
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

        {/* Artisan Command Lines */}
        {Array.from({ length: 8 }).map((_, index) => {
          const commands = [
            "php artisan make:controller",
            "php artisan migrate",
            "php artisan serve",
            "php artisan make:model",
            "php artisan queue:work",
            "php artisan make:middleware",
            "php artisan storage:link",
            "php artisan route:list",
          ]
          const command = commands[Math.floor(Math.random() * commands.length)]

          return (
            <motion.div
              key={`command-${index}`}
              className="absolute font-mono text-pink-400/60 bg-black/30 px-3 py-1 rounded-md"
              style={{
                fontSize: Math.random() * 10 + 12,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth + (Math.random() * 200 - 100)],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight + (Math.random() * 200 - 100),
                ],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              $ {command}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}


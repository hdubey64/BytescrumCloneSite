"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function PhpDevAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* PHP-inspired Animation */}
      <div className="absolute inset-0">
        {/* PHP Logo Elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <motion.div
            className="w-[500px] h-[500px] rounded-full border-[30px] border-indigo-500/30"
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

        {/* PHP Code Snippets */}
        {Array.from({ length: 10 }).map((_, index) => {
          const size = Math.random() * 250 + 150
          const snippets = [
            `<?php
// Simple function to process data
function processData($data) {
    $result = [];
    
    foreach ($data as $item) {
        $result[] = [
            'id' => $item['id'],
            'name' => strtoupper($item['name']),
            'value' => $item['value'] * 2
        ];
    }
    
    return $result;
}

// Sample data - no database needed
$data = [
    ['id' => 1, 'name' => 'item1', 'value' => 10],
    ['id' => 2, 'name' => 'item2', 'value' => 20],
];

$processed = processData($data);
print_r($processed);`,
            `<?php
// Simple API endpoint
header('Content-Type: application/json');

// Static data - no database needed
$users = [
    ['id' => 1, 'name' => 'John Doe', 'email' => 'john@example.com'],
    ['id' => 2, 'name' => 'Jane Smith', 'email' => 'jane@example.com'],
];

echo json_encode([
    'status' => 'success',
    'data' => $users
]);`,
            `<?php
class User {
    private $name;
    private $email;
    
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function getEmail() {
        return $this->email;
    }
}

// Create users from static data
$users = [
    new User('John Doe', 'john@example.com'),
    new User('Jane Smith', 'jane@example.com')
];`,
            `<?php
// Simple router
$route = $_GET['route'] ?? 'home';

switch ($route) {
    case 'home':
        include 'views/home.php';
        break;
    case 'about':
        include 'views/about.php';
        break;
    case 'contact':
        include 'views/contact.php';
        break;
    default:
        include 'views/404.php';
        break;
}`,
          ]
          const snippet = snippets[Math.floor(Math.random() * snippets.length)]

          return (
            <motion.div
              key={`snippet-${index}`}
              className="absolute rounded-md border border-indigo-500/20 bg-black/80 backdrop-blur-sm p-4 text-xs text-indigo-300 font-mono overflow-hidden"
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

        {/* PHP Functions */}
        {Array.from({ length: 15 }).map((_, index) => {
          const functions = [
            "array_map()",
            "array_filter()",
            "array_reduce()",
            "json_encode()",
            "json_decode()",
            "file_get_contents()",
            "preg_match()",
            "str_replace()",
            "explode()",
            "implode()",
            "date()",
            "strtotime()",
            "password_hash()",
            "password_verify()",
            "session_start()",
          ]
          const func = functions[Math.floor(Math.random() * functions.length)]

          return (
            <motion.div
              key={`function-${index}`}
              className="absolute font-mono text-indigo-400/60"
              style={{
                fontSize: Math.random() * 14 + 12,
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
              {func}
            </motion.div>
          )
        })}

        {/* PHP Tags */}
        {Array.from({ length: 10 }).map((_, index) => {
          const tags = [
            "<?php",
            "?>",
            "<?=",
            "<?php echo",
            "<?php if",
            "<?php foreach",
            "<?php function",
            "<?php class",
          ]
          const tag = tags[Math.floor(Math.random() * tags.length)]

          return (
            <motion.div
              key={`tag-${index}`}
              className="absolute font-mono text-indigo-500/70 bg-black/30 px-2 py-1 rounded-md"
              style={{
                fontSize: Math.random() * 16 + 14,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.9, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              {tag}
            </motion.div>
          )
        })}

        {/* Flowing Data Streams */}
        {Array.from({ length: 8 }).map((_, index) => {
          const isHorizontal = Math.random() > 0.5
          const startX = isHorizontal ? 0 : Math.random() * window.innerWidth
          const startY = isHorizontal ? Math.random() * window.innerHeight : 0
          const endX = isHorizontal ? window.innerWidth : startX
          const endY = isHorizontal ? startY : window.innerHeight

          return (
            <motion.div
              key={`stream-${index}`}
              className="absolute bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"
              style={{
                width: isHorizontal ? "100%" : "2px",
                height: isHorizontal ? "2px" : "100%",
                left: startX,
                top: startY,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                x: isHorizontal ? ["-100%", "100%"] : 0,
                y: isHorizontal ? 0 : ["-100%", "100%"],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}


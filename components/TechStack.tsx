"use client"

import { motion } from "framer-motion"

interface Technology {
  name: string
  icon: string
}

interface TechStackProps {
  title: string
  technologies: Technology[]
}

const TechStack = ({ title, technologies }: TechStackProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)",
                scale: 1.05,
              }}
            >
              <motion.div
                className="w-16 h-16 mb-3 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <span className="iconify text-4xl" data-icon={tech.icon}></span>
              </motion.div>
              <motion.span className="text-sm font-medium text-center" whileHover={{ scale: 1.1 }}>
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack


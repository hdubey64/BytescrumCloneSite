"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Developer {
  name: string
  role: string
  experience: string
  skills: string[]
  image: string
  bio: string
}

interface DeveloperShowcaseProps {
  title: string
  developers: Developer[]
}

const DeveloperShowcase = ({ title, developers }: DeveloperShowcaseProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
            >
              <div className="relative h-64">
                <Image src={developer.image || "/placeholder.svg"} alt={developer.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{developer.name}</h3>
                <p className="text-blue-400 mb-2">{developer.role}</p>
                <p className="text-gray-400 mb-4">{developer.bio}</p>
                <div className="mb-4">
                  <span className="text-gray-300 text-sm">Experience: {developer.experience}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {developer.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeveloperShowcase


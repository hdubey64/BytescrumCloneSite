"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import FullStackAnimation from "@/components/animations/full-stack-animation"
import DeveloperShowcase from "@/components/DeveloperShowcase"
import HireDeveloperCTA from "@/components/HireDeveloperCTA"
import TechStack from "@/components/TechStack"

export default function FullStackDeveloperPage() {
  const [activeTab, setActiveTab] = useState("frontend")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const skills = {
    frontend: [
      { name: "React", icon: "logos:react", level: 95 },
      { name: "Next.js", icon: "logos:nextjs-icon", level: 90 },
      { name: "Vue.js", icon: "logos:vue", level: 85 },
      { name: "Angular", icon: "logos:angular-icon", level: 80 },
      { name: "TypeScript", icon: "logos:typescript-icon", level: 90 },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 95 },
    ],
    backend: [
      { name: "Node.js", icon: "logos:nodejs-icon", level: 90 },
      { name: "Express", icon: "simple-icons:express", level: 85 },
      { name: "Python", icon: "logos:python", level: 80 },
      { name: "Django", icon: "vscode-icons:file-type-django", level: 75 },
      { name: "PHP", icon: "logos:php", level: 70 },
      { name: "Laravel", icon: "logos:laravel", level: 75 },
    ],
    database: [
      { name: "MongoDB", icon: "logos:mongodb-icon", level: 90 },
      { name: "PostgreSQL", icon: "logos:postgresql", level: 85 },
      { name: "MySQL", icon: "logos:mysql", level: 80 },
      { name: "Firebase", icon: "logos:firebase", level: 90 },
      { name: "Redis", icon: "logos:redis", level: 75 },
      { name: "GraphQL", icon: "logos:graphql", level: 80 },
    ],
    devops: [
      { name: "Docker", icon: "logos:docker-icon", level: 85 },
      { name: "Kubernetes", icon: "logos:kubernetes", level: 75 },
      { name: "AWS", icon: "logos:aws", level: 80 },
      { name: "CI/CD", icon: "logos:github-actions", level: 85 },
      { name: "Git", icon: "logos:git-icon", level: 95 },
      { name: "Linux", icon: "logos:linux-tux", level: 85 },
    ],
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Healthcare Management System",
      description: "A comprehensive healthcare management system for hospitals and clinics.",
      technologies: ["Angular", "Express", "PostgreSQL", "Docker", "Azure"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Real Estate Marketplace",
      description: "A platform connecting property buyers, sellers, and agents with advanced search capabilities.",
      technologies: ["Next.js", "GraphQL", "Firebase", "Google Maps API", "Vercel"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <>
      <FullStackAnimation />

      <div className="content-container relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Full Stack Developer
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building end-to-end solutions with expertise in both frontend and backend technologies
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link href="#hire-developer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Hire Full Stack Developer
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-blue-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Full Stack Developers Do
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "carbon:application-web",
                  title: "Web Application Development",
                  description:
                    "Build responsive, high-performance web applications using modern frameworks and technologies.",
                  color: "blue",
                },
                {
                  icon: "carbon:api",
                  title: "API Development",
                  description:
                    "Design and implement robust, scalable APIs that connect your frontend and backend systems.",
                  color: "purple",
                },
                {
                  icon: "carbon:cloud-service-management",
                  title: "Database Design & Management",
                  description: "Create efficient database structures and implement optimized data access patterns.",
                  color: "indigo",
                },
                {
                  icon: "carbon:development",
                  title: "Frontend Development",
                  description:
                    "Craft intuitive user interfaces with modern JavaScript frameworks like React, Vue, and Angular.",
                  color: "pink",
                },
                {
                  icon: "carbon:server-operations",
                  title: "Backend Development",
                  description:
                    "Build robust server-side applications using Node.js, Python, PHP, and other technologies.",
                  color: "green",
                },
                {
                  icon: "carbon:cloud-foundry",
                  title: "DevOps & Deployment",
                  description: "Implement CI/CD pipelines and manage cloud infrastructure for seamless deployment.",
                  color: "teal",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${service.color}-900/20 border border-gray-800 rounded-xl p-6 hover:border-${service.color}-500/50 transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
                >
                  <div
                    className={`w-14 h-14 bg-${service.color}-900/30 rounded-lg flex items-center justify-center mb-5`}
                  >
                    <span className={`iconify text-2xl text-${service.color}-500`} data-icon={service.icon}></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technical Expertise
            </motion.h2>

            <div className="mb-8">
              <div className="flex justify-center space-x-2 mb-12 overflow-x-auto pb-4">
                <div className="flex space-x-2 bg-gray-900/50 p-1 rounded-lg">
                  {Object.keys(skills).map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {skills[activeTab as keyof typeof skills].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center mb-3">
                      <span className="iconify text-2xl mr-3" data-icon={skill.icon}></span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-purple-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Development Process
            </motion.h2>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

                {[
                  {
                    title: "Requirements Analysis",
                    description:
                      "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.",
                    icon: "carbon:document-preliminary",
                    color: "blue",
                  },
                  {
                    title: "Planning & Architecture",
                    description:
                      "Our architects design a comprehensive solution blueprint, including technology stack, system architecture, and data models.",
                    icon: "carbon:chart-relationship",
                    color: "purple",
                  },
                  {
                    title: "UI/UX Design",
                    description:
                      "Our designers create intuitive interfaces and prototypes that align with your brand identity and user expectations.",
                    icon: "carbon:pen-fountain",
                    color: "pink",
                  },
                  {
                    title: "Development",
                    description:
                      "Our expert developers build your solution using the latest technologies and best practices for optimal performance.",
                    icon: "carbon:code",
                    color: "indigo",
                  },
                  {
                    title: "Testing & QA",
                    description:
                      "We conduct thorough testing to ensure your solution is bug-free, secure, and delivers an exceptional user experience.",
                    icon: "carbon:task-complete",
                    color: "green",
                  },
                  {
                    title: "Deployment & Launch",
                    description:
                      "We handle the deployment process and ensure a smooth launch, with comprehensive documentation and training.",
                    icon: "carbon:rocket",
                    color: "teal",
                  },
                  {
                    title: "Maintenance & Support",
                    description:
                      "We provide ongoing maintenance and support to ensure your solution continues to perform optimally.",
                    icon: "carbon:help",
                    color: "amber",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative mb-12 flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Timeline node */}
                    <motion.div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-${step.color}-900 border-4 border-gray-900 z-10 flex items-center justify-center`}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className={`iconify text-${step.color}-500`} data-icon={step.icon}></span>
                    </motion.div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto"}`}>
                      <div
                        className={`bg-gradient-to-br from-gray-900 to-${step.color}-900/20 border border-gray-800 rounded-lg p-4`}
                      >
                        <h3 className={`text-xl font-semibold mb-2 text-${step.color}-400`}>{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack
          title="Technologies Our Full Stack Developers Master"
          technologies={[
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "React", icon: "logos:react" },
            { name: "Next.js", icon: "logos:nextjs-icon" },
            { name: "Vue.js", icon: "logos:vue" },
            { name: "Angular", icon: "logos:angular-icon" },
            { name: "Node.js", icon: "logos:nodejs-icon" },
            { name: "Express", icon: "simple-icons:express" },
            { name: "Python", icon: "logos:python" },
            { name: "Django", icon: "vscode-icons:file-type-django" },
            { name: "PHP", icon: "logos:php" },
            { name: "Laravel", icon: "logos:laravel" },
            { name: "MongoDB", icon: "logos:mongodb-icon" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "MySQL", icon: "logos:mysql" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "AWS", icon: "logos:aws" },
            { name: "Git", icon: "logos:git-icon" },
          ]}
        />

        {/* Developer Showcase Section */}
        <DeveloperShowcase
          title="Meet Our Full Stack Developers"
          developers={[
            {
              name: "Alex Johnson",
              role: "Senior Full Stack Developer",
              experience: "8+ years",
              skills: ["React", "Node.js", "MongoDB", "AWS"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Alex is a seasoned full stack developer with expertise in building scalable web applications using the MERN stack.",
            },
            {
              name: "Sarah Chen",
              role: "Full Stack Developer",
              experience: "5+ years",
              skills: ["Angular", "Express", "PostgreSQL", "Docker"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Sarah specializes in enterprise applications with a focus on performance optimization and security.",
            },
            {
              name: "Michael Rodriguez",
              role: "Full Stack Developer",
              experience: "6+ years",
              skills: ["Vue.js", "Python", "Django", "AWS"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Michael excels at building complex web applications with a focus on clean architecture and maintainable code.",
            },
          ]}
        />

        {/* Hire Developer CTA Section */}
        <HireDeveloperCTA
          title="Hire Full Stack Developers"
          description="Get access to our pool of talented full stack developers who can bring your project to life."
          buttonText="Hire Full Stack Developer"
        />
      </div>
    </>
  )
}


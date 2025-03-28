"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import LaravelDevAnimation from "@/components/animations/laravel-dev-animation"
import DeveloperShowcase from "@/components/DeveloperShowcase"
import HireDeveloperCTA from "@/components/HireDeveloperCTA"
import TechStack from "@/components/TechStack"

export default function LaravelDeveloperPage() {
  const [activeTab, setActiveTab] = useState("backend")

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
    backend: [
      { name: "Laravel", icon: "logos:laravel", level: 95 },
      { name: "PHP", icon: "logos:php", level: 90 },
      { name: "MySQL", icon: "logos:mysql", level: 85 },
      { name: "RESTful APIs", icon: "carbon:api", level: 90 },
      { name: "Eloquent ORM", icon: "carbon:data-base", level: 95 },
      { name: "Laravel Livewire", icon: "simple-icons:livewire", level: 85 },
    ],
    frontend: [
      { name: "Blade Templates", icon: "carbon:code", level: 90 },
      { name: "Vue.js", icon: "logos:vue", level: 85 },
      { name: "Alpine.js", icon: "simple-icons:alpinedotjs", level: 80 },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 85 },
      { name: "Bootstrap", icon: "logos:bootstrap", level: 90 },
      { name: "JavaScript", icon: "logos:javascript", level: 85 },
    ],
    devops: [
      { name: "Docker", icon: "logos:docker-icon", level: 80 },
      { name: "Git", icon: "logos:git-icon", level: 90 },
      { name: "CI/CD", icon: "carbon:continuous-deployment", level: 75 },
      { name: "Laravel Forge", icon: "carbon:cloud-foundry", level: 85 },
      { name: "Laravel Vapor", icon: "carbon:cloud-service-management", level: 80 },
      { name: "AWS", icon: "logos:aws", level: 75 },
    ],
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
      technologies: ["Laravel", "MySQL", "Vue.js", "Stripe", "Redis"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "CRM System",
      description: "A comprehensive customer relationship management system for sales teams.",
      technologies: ["Laravel", "Livewire", "Alpine.js", "MySQL", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Healthcare Management System",
      description: "A platform for healthcare providers to manage patient records, appointments, and billing.",
      technologies: ["Laravel", "MySQL", "Vue.js", "Docker", "AWS"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <>
      <LaravelDevAnimation />

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
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Laravel Developer
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building robust, scalable web applications with the elegant PHP framework
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link href="#hire-developer">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Hire Laravel Developer
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-red-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Laravel Developers Do
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
                    "Build robust, scalable web applications using Laravel's powerful features and elegant syntax.",
                  color: "red",
                },
                {
                  icon: "carbon:api",
                  title: "API Development",
                  description: "Create RESTful APIs and microservices that connect your frontend and backend systems.",
                  color: "pink",
                },
                {
                  icon: "carbon:data-base",
                  title: "Database Design & Management",
                  description:
                    "Design efficient database structures and implement optimized data access patterns with Eloquent ORM.",
                  color: "orange",
                },
                {
                  icon: "carbon:security",
                  title: "Secure Authentication",
                  description:
                    "Implement robust authentication and authorization systems to protect your application and user data.",
                  color: "amber",
                },
                {
                  icon: "carbon:cloud-service-management",
                  title: "Third-Party Integrations",
                  description: "Integrate payment gateways, social media, email services, and other third-party APIs.",
                  color: "yellow",
                },
                {
                  icon: "carbon:chart-line-data",
                  title: "Performance Optimization",
                  description:
                    "Optimize application performance through caching, database optimization, and code refactoring.",
                  color: "lime",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${service.color}-900/20 border border-gray-800 rounded-xl p-6 hover:border-${service.color}-500/50 transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(239, 68, 68, 0.5)" }}
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
                        activeTab === tab ? "bg-red-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
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
                        className="bg-red-600 h-2.5 rounded-full"
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
        <section className="py-20 bg-gradient-to-b from-black/50 to-pink-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Laravel Development Process
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
                    color: "red",
                  },
                  {
                    title: "Architecture Design",
                    description:
                      "Our architects design a comprehensive solution blueprint, including database schema, API endpoints, and system architecture.",
                    icon: "carbon:chart-relationship",
                    color: "pink",
                  },
                  {
                    title: "Development",
                    description:
                      "Our expert Laravel developers build your application using best practices, design patterns, and clean code principles.",
                    icon: "carbon:code",
                    color: "orange",
                  },
                  {
                    title: "Testing & QA",
                    description:
                      "We conduct thorough testing, including unit tests, feature tests, and browser tests to ensure your application is bug-free.",
                    icon: "carbon:task-complete",
                    color: "amber",
                  },
                  {
                    title: "Deployment",
                    description:
                      "We handle the deployment process, setting up servers, configuring environments, and ensuring smooth operation.",
                    icon: "carbon:rocket",
                    color: "yellow",
                  },
                  {
                    title: "Maintenance & Support",
                    description:
                      "We provide ongoing maintenance and support to ensure your Laravel application continues to perform optimally.",
                    icon: "carbon:help",
                    color: "lime",
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
              Featured Laravel Projects
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
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(239, 68, 68, 0.5)" }}
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
                        <span key={techIndex} className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded">
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

        {/* Laravel Features Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-red-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Laravel?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Elegant Syntax",
                  description: "Laravel's clean, expressive syntax makes development more enjoyable and productive.",
                  icon: "carbon:code",
                  color: "red",
                },
                {
                  title: "Robust Ecosystem",
                  description: "A rich ecosystem of packages, tools, and resources to accelerate development.",
                  icon: "carbon:assembly-cluster",
                  color: "pink",
                },
                {
                  title: "Built-in Security",
                  description:
                    "Comprehensive security features including CSRF protection, encryption, and authentication.",
                  icon: "carbon:security",
                  color: "orange",
                },
                {
                  title: "Eloquent ORM",
                  description: "Intuitive ActiveRecord implementation for working with your database.",
                  icon: "carbon:data-base",
                  color: "amber",
                },
                {
                  title: "Artisan CLI",
                  description: "Powerful command-line interface for automating repetitive tasks.",
                  icon: "carbon:terminal",
                  color: "yellow",
                },
                {
                  title: "Blade Templating",
                  description: "Simple yet powerful templating engine for creating dynamic views.",
                  icon: "carbon:document",
                  color: "lime",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${feature.color}-900/20 border border-gray-800 rounded-xl p-6`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: `0 10px 30px -15px rgba(var(--${feature.color}-rgb), 0.5)` }}
                >
                  <div
                    className={`w-14 h-14 bg-${feature.color}-900/30 rounded-lg flex items-center justify-center mb-5`}
                  >
                    <span className={`iconify text-2xl text-${feature.color}-500`} data-icon={feature.icon}></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack
          title="Technologies Our Laravel Developers Master"
          technologies={[
            { name: "Laravel", icon: "logos:laravel" },
            { name: "PHP", icon: "logos:php" },
            { name: "MySQL", icon: "logos:mysql" },
            { name: "Vue.js", icon: "logos:vue" },
            { name: "Livewire", icon: "simple-icons:livewire" },
            { name: "Alpine.js", icon: "simple-icons:alpinedotjs" },
            { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
            { name: "Bootstrap", icon: "logos:bootstrap" },
            { name: "Redis", icon: "logos:redis" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "Git", icon: "logos:git-icon" },
            { name: "AWS", icon: "logos:aws" },
          ]}
        />

        {/* Developer Showcase Section */}
        <DeveloperShowcase
          title="Meet Our Laravel Developers"
          developers={[
            {
              name: "Michael Rodriguez",
              role: "Senior Laravel Developer",
              experience: "8+ years",
              skills: ["Laravel", "PHP", "MySQL", "Vue.js", "API Development"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Michael is a seasoned Laravel developer with expertise in building scalable web applications and RESTful APIs.",
            },
            {
              name: "Sarah Johnson",
              role: "Laravel Developer",
              experience: "5+ years",
              skills: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Sarah specializes in building interactive web applications using Laravel, Livewire, and Alpine.js.",
            },
            {
              name: "David Chen",
              role: "Full Stack Laravel Developer",
              experience: "6+ years",
              skills: ["Laravel", "Vue.js", "Docker", "AWS", "CI/CD"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "David excels at building and deploying Laravel applications with a focus on DevOps and cloud infrastructure.",
            },
          ]}
        />

        {/* Hire Developer CTA Section */}
        <HireDeveloperCTA
          title="Hire Laravel Developers"
          description="Get access to our pool of talented Laravel developers who can bring your project to life."
          buttonText="Hire Laravel Developer"
        />
      </div>
    </>
  )
}


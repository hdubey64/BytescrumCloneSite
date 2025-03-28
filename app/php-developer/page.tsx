"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import PhpDevAnimation from "@/components/animations/php-dev-animation"
import DeveloperShowcase from "@/components/DeveloperShowcase"
import HireDeveloperCTA from "@/components/HireDeveloperCTA"
import TechStack from "@/components/TechStack"

export default function PhpDeveloperPage() {
  const [activeTab, setActiveTab] = useState("core")

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
    core: [
      { name: "PHP", icon: "logos:php", level: 95 },
      { name: "Object-Oriented PHP", icon: "carbon:code", level: 90 },
      { name: "PHP 8.x Features", icon: "carbon:chart-line-data", level: 85 },
      { name: "RESTful APIs", icon: "carbon:api", level: 90 },
      { name: "PHP Security", icon: "carbon:security", level: 85 },
      { name: "Composer", icon: "simple-icons:composer", level: 90 },
    ],
    frameworks: [
      { name: "Laravel", icon: "logos:laravel", level: 90 },
      { name: "Symfony", icon: "logos:symfony", level: 85 },
      { name: "CodeIgniter", icon: "logos:codeigniter", level: 80 },
      { name: "CakePHP", icon: "logos:cakephp", level: 75 },
      { name: "Yii", icon: "logos:yii", level: 70 },
      { name: "Slim", icon: "simple-icons:slim", level: 75 },
    ],
    database: [
      { name: "MySQL", icon: "logos:mysql", level: 90 },
      { name: "PostgreSQL", icon: "logos:postgresql", level: 80 },
      { name: "MongoDB", icon: "logos:mongodb-icon", level: 75 },
      { name: "Redis", icon: "logos:redis", level: 80 },
      { name: "Eloquent ORM", icon: "carbon:data-base", level: 85 },
      { name: "Doctrine ORM", icon: "carbon:data-view", level: 75 },
    ],
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "CMS System",
      description: "A content management system with advanced publishing workflows and user management.",
      technologies: ["PHP", "Symfony", "MySQL", "React", "Redis"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "API Gateway",
      description:
        "A high-performance API gateway for microservices architecture with authentication and rate limiting.",
      technologies: ["PHP", "Slim", "PostgreSQL", "Docker", "Redis"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <>
      <PhpDevAnimation />

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
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              PHP Developer
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building powerful, scalable web applications with PHP and modern frameworks
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link href="#hire-developer">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Hire PHP Developer
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-indigo-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our PHP Developers Do
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
                    "Build robust, scalable web applications using PHP and modern frameworks like Laravel and Symfony.",
                  color: "blue",
                },
                {
                  icon: "carbon:api",
                  title: "API Development",
                  description: "Create RESTful APIs and microservices that connect your frontend and backend systems.",
                  color: "indigo",
                },
                {
                  icon: "carbon:data-base",
                  title: "Database Design & Management",
                  description: "Design efficient database structures and implement optimized data access patterns.",
                  color: "purple",
                },
                {
                  icon: "carbon:security",
                  title: "Secure Authentication",
                  description:
                    "Implement robust authentication and authorization systems to protect your application and user data.",
                  color: "violet",
                },
                {
                  icon: "carbon:cloud-service-management",
                  title: "Third-Party Integrations",
                  description: "Integrate payment gateways, social media, email services, and other third-party APIs.",
                  color: "blue",
                },
                {
                  icon: "carbon:chart-line-data",
                  title: "Performance Optimization",
                  description:
                    "Optimize application performance through caching, database optimization, and code refactoring.",
                  color: "indigo",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${service.color}-900/20 border border-gray-800 rounded-xl p-6 hover:border-${service.color}-500/50 transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.5)" }}
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
                          ? "bg-indigo-600 text-white"
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
                        className="bg-indigo-600 h-2.5 rounded-full"
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
        <section className="py-20 bg-gradient-to-b from-black/50 to-blue-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our PHP Development Process
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
                    title: "Architecture Design",
                    description:
                      "Our architects design a comprehensive solution blueprint, including database schema, API endpoints, and system architecture.",
                    icon: "carbon:chart-relationship",
                    color: "indigo",
                  },
                  {
                    title: "Development",
                    description:
                      "Our expert PHP developers build your application using best practices, design patterns, and clean code principles.",
                    icon: "carbon:code",
                    color: "purple",
                  },
                  {
                    title: "Testing & QA",
                    description:
                      "We conduct thorough testing, including unit tests, feature tests, and browser tests to ensure your application is bug-free.",
                    icon: "carbon:task-complete",
                    color: "violet",
                  },
                  {
                    title: "Deployment",
                    description:
                      "We handle the deployment process, setting up servers, configuring environments, and ensuring smooth operation.",
                    icon: "carbon:rocket",
                    color: "blue",
                  },
                  {
                    title: "Maintenance & Support",
                    description:
                      "We provide ongoing maintenance and support to ensure your PHP application continues to perform optimally.",
                    icon: "carbon:help",
                    color: "indigo",
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
              Featured PHP Projects
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
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.5)" }}
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
                        <span key={techIndex} className="bg-indigo-900/30 text-indigo-400 text-xs px-2 py-1 rounded">
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

        {/* PHP Features Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-indigo-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose PHP?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Versatility",
                  description:
                    "PHP can be used for a wide range of applications, from simple websites to complex enterprise systems.",
                  icon: "carbon:flexibility",
                  color: "blue",
                },
                {
                  title: "Mature Ecosystem",
                  description: "A rich ecosystem of frameworks, libraries, and tools to accelerate development.",
                  icon: "carbon:assembly-cluster",
                  color: "indigo",
                },
                {
                  title: "Cost-Effective",
                  description:
                    "Open-source nature and wide availability of hosting options make PHP a cost-effective choice.",
                  icon: "carbon:money",
                  color: "purple",
                },
                {
                  title: "Scalability",
                  description:
                    "Modern PHP applications can be highly scalable with proper architecture and infrastructure.",
                  icon: "carbon:growth",
                  color: "violet",
                },
                {
                  title: "Community Support",
                  description: "Large, active community providing support, resources, and continuous improvement.",
                  icon: "carbon:group",
                  color: "blue",
                },
                {
                  title: "Modern Features",
                  description:
                    "PHP 8.x introduces powerful features like attributes, JIT compilation, and union types.",
                  icon: "carbon:chart-line-data",
                  color: "indigo",
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
          title="Technologies Our PHP Developers Master"
          technologies={[
            { name: "PHP", icon: "logos:php" },
            { name: "Laravel", icon: "logos:laravel" },
            { name: "Symfony", icon: "logos:symfony" },
            { name: "CodeIgniter", icon: "logos:codeigniter" },
            { name: "MySQL", icon: "logos:mysql" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "Redis", icon: "logos:redis" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "Git", icon: "logos:git-icon" },
            { name: "Composer", icon: "simple-icons:composer" },
            { name: "PHPUnit", icon: "simple-icons:phpunit" },
            { name: "AWS", icon: "logos:aws" },
          ]}
        />

        {/* Developer Showcase Section */}
        <DeveloperShowcase
          title="Meet Our PHP Developers"
          developers={[
            {
              name: "John Smith",
              role: "Senior PHP Developer",
              experience: "10+ years",
              skills: ["PHP", "Laravel", "MySQL", "API Development", "AWS"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "John is a seasoned PHP developer with expertise in building scalable web applications and RESTful APIs.",
            },
            {
              name: "Emily Chen",
              role: "PHP Developer",
              experience: "6+ years",
              skills: ["PHP", "Symfony", "PostgreSQL", "Docker", "Redis"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Emily specializes in building high-performance PHP applications with a focus on security and scalability.",
            },
            {
              name: "Robert Johnson",
              role: "Full Stack PHP Developer",
              experience: "8+ years",
              skills: ["PHP", "Laravel", "Vue.js", "MySQL", "DevOps"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Robert excels at building full-stack applications with PHP backends and modern JavaScript frontends.",
            },
          ]}
        />

        {/* Hire Developer CTA Section */}
        <HireDeveloperCTA
          title="Hire PHP Developers"
          description="Get access to our pool of talented PHP developers who can bring your project to life."
          buttonText="Hire PHP Developer"
        />
      </div>
    </>
  )
}


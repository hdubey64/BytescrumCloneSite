"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import UiUxAnimation from "@/components/animations/ui-ux-animation"
import DeveloperShowcase from "@/components/DeveloperShowcase"
import HireDeveloperCTA from "@/components/HireDeveloperCTA"
import TechStack from "@/components/TechStack"

export default function UiUxDesignerPage() {
  const [activeTab, setActiveTab] = useState("ui")

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
    ui: [
      { name: "Visual Design", icon: "carbon:paint-brush", level: 95 },
      { name: "Color Theory", icon: "carbon:color-palette", level: 90 },
      { name: "Typography", icon: "carbon:text-font", level: 85 },
      { name: "Iconography", icon: "carbon:image-service", level: 90 },
      { name: "Responsive Design", icon: "carbon:devices", level: 95 },
      { name: "Design Systems", icon: "carbon:assembly-cluster", level: 90 },
    ],
    ux: [
      { name: "User Research", icon: "carbon:user-research", level: 90 },
      { name: "Wireframing", icon: "carbon:chart-line-data", level: 95 },
      { name: "Prototyping", icon: "carbon:flow", level: 90 },
      { name: "Usability Testing", icon: "carbon:test", level: 85 },
      { name: "Information Architecture", icon: "carbon:tree-view", level: 80 },
      { name: "Interaction Design", icon: "carbon:touch-interaction", level: 90 },
    ],
    tools: [
      { name: "Figma", icon: "logos:figma", level: 95 },
      { name: "Adobe XD", icon: "logos:adobe-xd", level: 90 },
      { name: "Sketch", icon: "logos:sketch", level: 85 },
      { name: "InVision", icon: "simple-icons:invision", level: 80 },
      { name: "Photoshop", icon: "logos:adobe-photoshop", level: 85 },
      { name: "Illustrator", icon: "logos:adobe-illustrator", level: 80 },
    ],
  }

  const projects = [
    {
      title: "E-commerce Redesign",
      description:
        "Complete redesign of an e-commerce platform focusing on improving conversion rates and user experience.",
      deliverables: ["User Research", "Wireframes", "UI Design", "Prototypes", "Design System"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Banking App",
      description: "Mobile banking application designed with a focus on simplicity, security, and accessibility.",
      deliverables: ["User Flows", "Wireframes", "UI Design", "Prototypes", "Usability Testing"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Healthcare Dashboard",
      description: "Complex dashboard for healthcare professionals to monitor patient data and manage appointments.",
      deliverables: ["User Research", "Information Architecture", "UI Design", "Interactive Prototype"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <>
      <UiUxAnimation />

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
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              UI/UX Designer
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Creating intuitive, engaging, and beautiful digital experiences
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link href="#hire-designer">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Hire UI/UX Designer
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-pink-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our UI/UX Designers Do
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
                  icon: "carbon:user-research",
                  title: "User Research",
                  description:
                    "Understand user needs, behaviors, and motivations through interviews, surveys, and usability testing.",
                  color: "pink",
                },
                {
                  icon: "carbon:flow",
                  title: "Wireframing & Prototyping",
                  description:
                    "Create low and high-fidelity wireframes and interactive prototypes to visualize the user experience.",
                  color: "purple",
                },
                {
                  icon: "carbon:touch-interaction",
                  title: "Interaction Design",
                  description:
                    "Design intuitive interactions and animations that enhance the user experience and guide users.",
                  color: "indigo",
                },
                {
                  icon: "carbon:paint-brush",
                  title: "Visual Design",
                  description:
                    "Create visually appealing interfaces with attention to color, typography, and visual hierarchy.",
                  color: "blue",
                },
                {
                  icon: "carbon:assembly-cluster",
                  title: "Design Systems",
                  description:
                    "Develop comprehensive design systems that ensure consistency across products and platforms.",
                  color: "teal",
                },
                {
                  icon: "carbon:test",
                  title: "Usability Testing",
                  description:
                    "Evaluate designs with real users to identify issues and validate solutions before development.",
                  color: "green",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${service.color}-900/20 border border-gray-800 rounded-xl p-6 hover:border-${service.color}-500/50 transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(236, 72, 153, 0.5)" }}
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
              Design Expertise
            </motion.h2>

            <div className="mb-8">
              <div className="flex justify-center space-x-2 mb-12 overflow-x-auto pb-4">
                <div className="flex space-x-2 bg-gray-900/50 p-1 rounded-lg">
                  {Object.keys(skills).map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab
                          ? "bg-pink-600 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.toUpperCase()}
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
                        className="bg-pink-600 h-2.5 rounded-full"
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

        {/* Design Process Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-purple-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Design Process
            </motion.h2>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Discover",
                    description:
                      "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations and research.",
                    icon: "carbon:search",
                    color: "pink",
                    steps: ["Stakeholder Interviews", "User Research", "Competitive Analysis", "Define Requirements"],
                  },
                  {
                    title: "Define",
                    description:
                      "We define the problem space and create user personas, journeys, and information architecture to guide the design process.",
                    icon: "carbon:document",
                    color: "purple",
                    steps: ["User Personas", "User Journeys", "Information Architecture", "Content Strategy"],
                  },
                  {
                    title: "Design",
                    description:
                      "We create wireframes, visual designs, and interactive prototypes that bring your product to life.",
                    icon: "carbon:pen",
                    color: "indigo",
                    steps: ["Wireframing", "Visual Design", "Interaction Design", "Prototyping"],
                  },
                  {
                    title: "Deliver",
                    description:
                      "We finalize designs, create design systems, and work closely with developers to ensure pixel-perfect implementation.",
                    icon: "carbon:delivery",
                    color: "blue",
                    steps: ["Design System", "Developer Handoff", "Implementation Support", "Design QA"],
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br from-gray-900 to-${phase.color}-900/20 border border-gray-800 rounded-xl p-6 relative overflow-hidden`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: `0 10px 30px -15px rgba(var(--${phase.color}-rgb), 0.5)` }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <span className={`iconify text-8xl text-${phase.color}-500`} data-icon={phase.icon}></span>
                    </div>
                    <div
                      className={`w-12 h-12 bg-${phase.color}-900/30 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <span className={`iconify text-2xl text-${phase.color}-500`} data-icon={phase.icon}></span>
                    </div>
                    <h3 className={`text-2xl font-semibold mb-3 text-${phase.color}-400`}>{phase.title}</h3>
                    <p className="text-gray-400 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center">
                          <span className={`iconify text-${phase.color}-500 mr-2`} data-icon="carbon:checkmark"></span>
                          <span className="text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ul>
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
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(236, 72, 153, 0.5)" }}
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
                    <div className="mb-2 text-sm text-gray-300">Deliverables:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.deliverables.map((deliverable, deliverableIndex) => (
                        <span key={deliverableIndex} className="bg-pink-900/30 text-pink-400 text-xs px-2 py-1 rounded">
                          {deliverable}
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
          title="Design Tools Our UI/UX Designers Master"
          technologies={[
            { name: "Figma", icon: "logos:figma" },
            { name: "Adobe XD", icon: "logos:adobe-xd" },
            { name: "Sketch", icon: "logos:sketch" },
            { name: "InVision", icon: "simple-icons:invision" },
            { name: "Photoshop", icon: "logos:adobe-photoshop" },
            { name: "Illustrator", icon: "logos:adobe-illustrator" },
            { name: "After Effects", icon: "logos:adobe-after-effects" },
            { name: "Principle", icon: "simple-icons:principle" },
            { name: "Framer", icon: "simple-icons:framer" },
            { name: "Zeplin", icon: "simple-icons:zeplin" },
            { name: "Miro", icon: "logos:miro" },
            { name: "Maze", icon: "simple-icons:maze" },
          ]}
        />

        {/* Designer Showcase Section */}
        <DeveloperShowcase
          title="Meet Our UI/UX Designers"
          developers={[
            {
              name: "Emily Chen",
              role: "Senior UI/UX Designer",
              experience: "7+ years",
              skills: ["User Research", "Visual Design", "Prototyping", "Design Systems"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Emily is a seasoned designer with expertise in creating intuitive and visually appealing interfaces for web and mobile applications.",
            },
            {
              name: "David Kim",
              role: "UI/UX Designer",
              experience: "5+ years",
              skills: ["Interaction Design", "Wireframing", "Usability Testing", "Figma"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "David specializes in creating engaging user experiences with a focus on accessibility and inclusive design.",
            },
            {
              name: "Sophia Martinez",
              role: "Product Designer",
              experience: "6+ years",
              skills: ["Product Strategy", "UI Design", "User Research", "Design Thinking"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Sophia combines strategic thinking with design expertise to create products that solve real user problems.",
            },
          ]}
        />

        {/* Hire Designer CTA Section */}
        <HireDeveloperCTA
          title="Hire UI/UX Designers"
          description="Get access to our pool of talented UI/UX designers who can transform your ideas into beautiful, user-friendly experiences."
          buttonText="Hire UI/UX Designer"
        />
      </div>
    </>
  )
}


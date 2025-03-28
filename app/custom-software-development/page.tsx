"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import useElementSize from "@/hooks/useElementSize"
import SoftwareAnimation from "@/components/animations/software-animation"

export default function CustomSoftwareDevelopmentPage() {
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

  return (
    <>
      <SoftwareAnimation />

      <div className="content-container relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CUSTOM SOFTWARE DEVELOPMENT
        </motion.h1>

        <div className="max-w-4xl mx-auto mt-16">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlocking Tailored Solutions for Business Success
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Custom software development entails the meticulous process of crafting software applications or solutions
            that are precisely tailored to fulfill the distinct requirements of a particular business, organization, or
            individual. Diverging from off-the-shelf software, custom software is conceived and developed from scratch
            with the sole purpose of addressing specific needs and bestowing a competitive advantage.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="service-card bg-gradient-to-br from-black to-red-950/20"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(239, 68, 68, 0.2)" }}
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Requirements Gathering</h4>
              <p className="text-gray-400">
                In this critical phase, we gather and comprehend client requirements, ensuring a clear understanding of
                the software's specific needs.
              </p>
            </motion.div>

            <motion.div
              className="service-card bg-gradient-to-br from-black to-purple-950/20"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)" }}
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Planning and Design</h4>
              <p className="text-gray-400">
                Our team carefully plans the architecture, database design, user interface, and project flow, creating a
                comprehensive blueprint for development.
              </p>
            </motion.div>

            <motion.div
              className="service-card bg-gradient-to-br from-black to-amber-950/20"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(245, 158, 11, 0.2)" }}
            >
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Development</h4>
              <p className="text-gray-400">
                We seamlessly deploy and integrate the software, optimizing workflows and ensuring operational
                efficiency for your business processes.
              </p>
            </motion.div>

            <motion.div
              className="service-card bg-gradient-to-br from-black to-teal-950/20"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(20, 184, 166, 0.2)" }}
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Deployment and Integration</h4>
              <p className="text-gray-400">
                After thorough testing, the software is seamlessly deployed and integrated for smooth workflows and
                optimal efficiency.
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline Component */}
          <TimelineProcess />

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="section-subtitle text-center">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                "Healthcare",
                "Finance",
                "E-commerce",
                "Education",
                "Manufacturing",
                "Logistics",
                "Real Estate",
                "Entertainment",
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-black to-blue-950/10 p-4 rounded-lg border border-blue-900/20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)" }}
                >
                  <span className="text-white">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Software
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

// Timeline Process Component
function TimelineProcess() {
  const { ref: sizeRef, height } = useElementSize<HTMLDivElement>()
  const [activeStep, setActiveStep] = useState(-1)

  // Timeline Items Data
  const timelineItems = [
    {
      title: "Discovery & Analysis",
      description:
        "We begin by understanding your business objectives, challenges, and requirements through in-depth consultations and research.",
      color: "blue",
    },
    {
      title: "Solution Architecture",
      description:
        "Our architects design a comprehensive solution blueprint, including technology stack, system architecture, and data models.",
      color: "indigo",
    },
    {
      title: "Development & Testing",
      description:
        "We follow agile methodologies to develop your software iteratively, with continuous testing and quality assurance at every stage.",
      color: "purple",
    },
    {
      title: "Deployment & Training",
      description:
        "We handle the deployment process and provide comprehensive training to ensure your team can effectively use the new software.",
      color: "pink",
    },
    {
      title: "Maintenance & Support",
      description:
        "We provide ongoing maintenance, support, and updates to ensure your software continues to meet your evolving business needs.",
      color: "red",
    },
  ]

  // Generate refs dynamically
  const [inViewStates, setInViewStates] = useState(timelineItems.map(() => false))
  const refs = useRef(timelineItems.map(() => useRef(null)))

  // Update active step based on which item is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          setInViewStates((prev) => {
            const newState = [...prev]
            newState[index] = entry.isIntersecting
            return newState
          })
        })
      },
      {
        threshold: 0.5,
      },
    )

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [refs])

  useEffect(() => {
    const activeIndex = inViewStates.findIndex((inView) => inView)
    setActiveStep(activeIndex !== -1 ? activeIndex : -1)
  }, [inViewStates])

  // Calculate line height based on active step
  const getLineHeight = () => {
    if (activeStep === -1) return "0%"
    // Calculate percentage based on which step is active
    return `${(activeStep + 1) * (100 / timelineItems.length)}%`
  }

  return (
    <div className="mt-16">
      <h3 className="section-subtitle text-center">Our Custom Software Development Approach</h3>
      <div className="relative mt-12" ref={sizeRef}>
        {/* Timeline Line Container - Always visible */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800">
          {/* Animated Fill Line - Height changes based on active step */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-purple-600"
            animate={{ height: getLineHeight() }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineItems.map((item, index) => {
            return (
              <div key={index} className="relative" ref={refs.current[index]}>
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-black z-10`}
                  animate={{
                    backgroundColor: activeStep >= index ? `var(--${item.color}-600)` : "#1f2937",
                    scale: activeStep >= index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className={`${index % 2 === 0 ? "ml-auto mr-8 md:mr-auto md:ml-8 md:pl-10" : "mr-auto ml-8 md:ml-auto md:mr-8 md:pr-10"} w-full md:w-1/2 p-4 rounded-lg bg-gradient-to-br from-black to-${item.color}-950/20 border border-${item.color}-900/30`}
                  animate={{
                    opacity: activeStep >= index - 1 ? 1 : 0.5,
                    y: activeStep >= index - 1 ? 0 : 20,
                    scale: activeStep === index ? 1.03 : 1,
                    boxShadow: activeStep === index ? `0 0 15px rgba(var(--${item.color}-rgb), 0.3)` : "none",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


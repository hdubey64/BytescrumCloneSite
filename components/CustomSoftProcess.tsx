"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionTitle from "./SectionTitle"

const CustomSoftProcess = () => {
  // Track which timeline item is currently in view (0-4)
  const [activeStep, setActiveStep] = useState(-1)

  // Create refs for each timeline item
  const [ref0, inView0] = useInView({ threshold: 0.5 })
  const [ref1, inView1] = useInView({ threshold: 0.5 })
  const [ref2, inView2] = useInView({ threshold: 0.5 })
  const [ref3, inView3] = useInView({ threshold: 0.5 })
  const [ref4, inView4] = useInView({ threshold: 0.5 })

  // Update active step based on which item is in view
  useEffect(() => {
    if (inView0) setActiveStep(0)
    else if (inView1) setActiveStep(1)
    else if (inView2) setActiveStep(2)
    else if (inView3) setActiveStep(3)
    else if (inView4) setActiveStep(4)
  }, [inView0, inView1, inView2, inView3, inView4])

  // Timeline items data
  const timelineItems = [
    {
      title: "Discovery & Analysis",
      description:
        "We begin by understanding your business objectives, challenges, and requirements through in-depth consultations and research.",
      color: "blue",
      ref: ref0,
    },
    {
      title: "Solution Architecture",
      description:
        "Our architects design a comprehensive solution blueprint, including technology stack, system architecture, and data models.",
      color: "indigo",
      ref: ref1,
    },
    {
      title: "Development & Testing",
      description:
        "We follow agile methodologies to develop your software iteratively, with continuous testing and quality assurance at every stage.",
      color: "purple",
      ref: ref2,
    },
    {
      title: "Deployment & Training",
      description:
        "We handle the deployment process and provide comprehensive training to ensure your team can effectively use the new software.",
      color: "pink",
      ref: ref3,
    },
    {
      title: "Maintenance & Support",
      description:
        "We provide ongoing maintenance, support, and updates to ensure your software continues to meet your evolving business needs.",
      color: "red",
      ref: ref4,
    },
  ]

  // Calculate line height based on active step
  const getLineHeight = () => {
    if (activeStep === -1) return "0%"
    // Calculate percentage based on which step is active
    return `${(activeStep + 1) * (100 / timelineItems.length)}%`
  }

  return (
    <div className="px-5 md:px-[40px] pb-[60px] md:pb-[80px] gap-[40px] bg-[#000000] relative z-50 w-full">
      <div className="mt-16 max-w-5xl m-auto">
        <SectionTitle className="section-subtitle text-center">Our Custom Software Development Approach</SectionTitle>
        <div className="relative mt-12">
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
            {timelineItems.map((item, index) => (
              <div key={index} className="relative" ref={item.ref}>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomSoftProcess


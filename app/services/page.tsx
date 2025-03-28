"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaCode, FaShieldAlt, FaUsers, FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa"
import { HiOutlineChip } from "react-icons/hi"
import { MdOutlineDesignServices } from "react-icons/md"
import { BsGraphUp } from "react-icons/bs"
import CountUp from "react-countup"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all")

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

  const services = [
    {
      id: "mobile-app",
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-3xl text-blue-500" />,
      description: "Create powerful, user-friendly mobile applications that engage users and drive business growth.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support",
      ],
      category: "development",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      caseStudy: "Helped a fintech startup increase user engagement by 45% with an intuitive mobile banking app.",
    },
    {
      id: "blockchain",
      title: "Blockchain Development",
      icon: <HiOutlineChip className="text-3xl text-purple-500" />,
      description: "Leverage blockchain technology to build secure, transparent, and decentralized applications.",
      features: [
        "Smart Contract Development",
        "DApp Creation",
        "Tokenization Solutions",
        "Blockchain Integration",
        "Security Audits",
      ],
      category: "development",
      technologies: ["Ethereum", "Solana", "Hyperledger", "Web3.js", "Solidity"],
      caseStudy: "Developed a blockchain-based supply chain solution that reduced verification time by 60%.",
    },
    {
      id: "custom-software",
      title: "Custom Software Solution",
      icon: <FaCode className="text-3xl text-green-500" />,
      description:
        "Tailor-made software solutions designed to address your specific business challenges and objectives.",
      features: [
        "Requirement Analysis",
        "Custom Architecture Design",
        "Agile Development",
        "Quality Assurance",
        "Ongoing Support",
      ],
      category: "development",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET"],
      caseStudy: "Built a custom ERP system for a manufacturing company that improved operational efficiency by 35%.",
    },
    {
      id: "web-development",
      title: "Web Development",
      icon: <FaLaptopCode className="text-3xl text-pink-500" />,
      description:
        "Create responsive, high-performance websites and web applications that deliver exceptional user experiences.",
      features: [
        "Frontend Development",
        "Backend Development",
        "Progressive Web Apps",
        "E-commerce Websites",
        "CMS Integration",
      ],
      category: "development",
      technologies: ["React", "Next.js", "Vue", "Angular", "Laravel"],
      caseStudy: "Redesigned an e-commerce platform resulting in a 28% increase in conversion rate.",
    },
    {
      id: "ecommerce",
      title: "E-commerce Development",
      icon: <BsGraphUp className="text-3xl text-amber-500" />,
      description:
        "Build powerful online stores that drive sales, enhance customer experiences, and grow your business.",
      features: [
        "Custom E-commerce Solutions",
        "Payment Gateway Integration",
        "Inventory Management",
        "Mobile-Optimized Stores",
        "Analytics Integration",
      ],
      category: "development",
      technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe"],
      caseStudy: "Launched a Shopify store for a fashion brand that generated $1M in sales within the first year.",
    },
    {
      id: "hire-developer",
      title: "Hire Developer",
      icon: <FaUsers className="text-3xl text-blue-500" />,
      description: "Access top-tier development talent to augment your team and accelerate your project delivery.",
      features: [
        "Dedicated Developers",
        "Team Augmentation",
        "Project-Based Hiring",
        "Technical Screening",
        "Seamless Integration",
      ],
      category: "hiring",
      technologies: ["Full Stack", "Frontend", "Backend", "Mobile", "DevOps"],
      caseStudy:
        "Provided a team of 5 developers to a SaaS company, helping them launch their product 2 months ahead of schedule.",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      icon: <MdOutlineDesignServices className="text-3xl text-indigo-500" />,
      description: "Create intuitive, engaging user interfaces that enhance user satisfaction and drive conversion.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing", "Design Systems"],
      category: "design",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
      caseStudy:
        "Redesigned a SaaS platform's interface, improving user retention by 40% and reducing support tickets by 25%.",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: <FaChartLine className="text-3xl text-red-500" />,
      description:
        "Drive growth with data-driven digital marketing strategies that increase visibility and generate leads.",
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media Management",
        "PPC Campaigns",
        "Analytics & Reporting",
      ],
      category: "marketing",
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Facebook Ads", "Google Ads"],
      caseStudy: "Increased organic traffic by 150% and lead generation by 75% for a B2B software company.",
    },
    {
      id: "security-services",
      title: "Security Services",
      icon: <FaShieldAlt className="text-3xl text-green-500" />,
      description: "Protect your digital assets with comprehensive security solutions and proactive monitoring.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Compliance Solutions",
        "Security Monitoring",
      ],
      category: "security",
      technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark", "Burp Suite"],
      caseStudy:
        "Identified and remediated critical vulnerabilities for a fintech company, preventing potential data breaches.",
    },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  // Create refs for each step to track visibility
  const stepRefs = useRef([])
  const [stepInView, setStepInView] = useState(Array(6).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          setStepInView((prev) => {
            const newState = [...prev]
            newState[Number.parseInt(entry.target.dataset.index)] = entry.isIntersecting
            return newState
          })
        })
      },
      {
        threshold: 0.5,
        triggerOnce: false,
      },
    )

    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3],
              backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3],
              backgroundPosition: ["100% 0%", "0% 0%", "100% 0%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Animated particles */}
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={`particle-${index}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                backgroundColor: index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#8b5cf6" : "#ec4899",
                boxShadow:
                  index % 3 === 0 ? "0 0 10px #3b82f6" : index % 3 === 1 ? "0 0 10px #8b5cf6" : "0 0 10px #ec4899",
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                times: [0, 0.5, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Our Services
              </motion.span>
            </motion.h1>
            <div className="text-gray-400 mb-8">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span className="mx-2">|</span>
              <span className="text-gray-300">Our-Service</span>
            </div>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  color: ["#f3f4f6", "#93c5fd", "#f3f4f6"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Transforming ideas into powerful digital solutions
              </motion.span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">What we offer</h2>
            <p className="text-gray-300">
              As a leading IT company, ByteScrum provides personalized solutions that help clients stay competitive in
              the modern business market.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <div className="flex space-x-2 bg-gray-900/50 p-1 rounded-lg">
              {["all", "development", "design", "marketing", "security", "hiring"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
              >
                <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-900/30 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-5">{service.description}</p>
                <Link
                  href={`/${service.id.replace(/\s+/g, "-").toLowerCase()}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explore <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-gray-300">
              We follow a structured approach to deliver high-quality solutions that meet your business objectives.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Discovery & Planning",
                  description:
                    "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.",
                  icon: "carbon:document-preliminary",
                  color: "#3b82f6",
                },
                {
                  title: "Design & Prototyping",
                  description:
                    "Our designers create intuitive interfaces and prototypes that align with your brand identity and user expectations.",
                  icon: "carbon:pen-fountain",
                  color: "#8b5cf6",
                },
                {
                  title: "Development",
                  description:
                    "Our expert developers build your solution using the latest technologies and best practices for optimal performance.",
                  icon: "carbon:code",
                  color: "#ec4899",
                },
                {
                  title: "Testing & QA",
                  description:
                    "We conduct thorough testing to ensure your solution is bug-free, secure, and delivers an exceptional user experience.",
                  icon: "carbon:task-complete",
                  color: "#f59e0b",
                },
                {
                  title: "Deployment & Launch",
                  description:
                    "We handle the deployment process and ensure a smooth launch, with comprehensive documentation and training.",
                  icon: "carbon:rocket",
                  color: "#10b981",
                },
                {
                  title: "Maintenance & Support",
                  description:
                    "We provide ongoing maintenance and support to ensure your solution continues to perform optimally.",
                  icon: "carbon:help",
                  color: "#3b82f6",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: `0 10px 30px -15px ${step.color}40` }}
                >
                  {/* Background gradient */}
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${step.color}, transparent 70%)`,
                    }}
                  />

                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 relative"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: [0, 10, 0, -10, 0] }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <span className="iconify text-3xl" data-icon={step.icon} style={{ color: step.color }}></span>
                    </motion.div>

                    {/* Animated rings */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: step.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.5] }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                        delay: index * 0.2,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Animated arrow */}
                  {index < 5 && (
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span
                        className="iconify text-xl"
                        data-icon="carbon:arrow-right"
                        style={{ color: step.color }}
                      ></span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process flow visualization */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Process markers */}
            {[0, 20, 40, 60, 80, 100].map((position, index) => (
              <motion.div
                key={index}
                className="absolute top-0 -mt-4"
                style={{ left: `${position}%` }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-black"
                  style={{
                    borderColor:
                      index === 0
                        ? "#3b82f6"
                        : index === 1
                          ? "#8b5cf6"
                          : index === 2
                            ? "#ec4899"
                            : index === 3
                              ? "#f59e0b"
                              : index === 4
                                ? "#10b981"
                                : "#3b82f6",
                  }}
                >
                  <span
                    className="iconify text-sm"
                    data-icon={
                      index === 0
                        ? "carbon:document-preliminary"
                        : index === 1
                          ? "carbon:pen-fountain"
                          : index === 2
                            ? "carbon:code"
                            : index === 3
                              ? "carbon:task-complete"
                              : index === 4
                                ? "carbon:rocket"
                                : "carbon:help"
                    }
                    style={{
                      color:
                        index === 0
                          ? "#3b82f6"
                          : index === 1
                            ? "#8b5cf6"
                            : index === 2
                              ? "#ec4899"
                              : index === 3
                                ? "#f59e0b"
                                : index === 4
                                  ? "#10b981"
                                  : "#3b82f6",
                    }}
                  ></span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Technologies We Master</h2>
            <p className="text-gray-300">
              We leverage cutting-edge technologies to build innovative solutions that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "logos:react", color: "#61DAFB" },
              { name: "Node.js", icon: "logos:nodejs", color: "#539E43" },
              { name: "Python", icon: "logos:python", color: "#3776AB" },
              { name: "Flutter", icon: "logos:flutter", color: "#02539a" },
              { name: "AWS", icon: "logos:aws", color: "#FF9900" },
              { name: "Laravel", icon: "logos:laravel", color: "#FF2D20" },
              { name: "Angular", icon: "logos:angular-icon", color: "#DD0031" },
              { name: "Vue.js", icon: "logos:vue", color: "#4FC08D" },
              { name: "MongoDB", icon: "logos:mongodb", color: "#47A248" },
              { name: "Firebase", icon: "logos:firebase", color: "#FFCA28" },
              { name: "Ethereum", icon: "logos:ethereum", color: "#627EEA" },
              { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
            ].map((tech, index) => (
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
                  boxShadow: `0 10px 30px -15px ${tech.color}80`,
                  borderColor: `${tech.color}40`,
                  scale: 1.05,
                }}
              >
                <motion.div
                  className="w-16 h-16 mb-3 flex items-center justify-center bg-black/30 rounded-full p-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <div className="w-full h-full relative flex items-center justify-center">
                    <span className="iconify text-4xl" data-icon={tech.icon}></span>
                  </div>
                </motion.div>
                <motion.span className="text-sm font-medium" style={{ color: tech.color }} whileHover={{ scale: 1.1 }}>
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Real
              </motion.span>{" "}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Value Since 2015
              </motion.span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "8+", label: "Years in Business", color: "blue" },
              { value: "275+", label: "Clients Served Globally", color: "purple" },
              { value: "200+", label: "Successful Projects", color: "pink" },
              { value: "100%", label: "Success Rate", color: "green" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.1 + 0.2,
                  }}
                >
                  {/* Background circle with pulse animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-${stat.color}-500/20`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      width: "120px",
                      height: "120px",
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  {/* Value with counting animation */}
                  <motion.div
                    className={`text-5xl font-bold text-${stat.color}-500 mb-2 relative z-10`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <CountUp
                      start={0}
                      end={Number.parseInt(stat.value) || 100}
                      duration={2.5}
                      suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-gray-300">
              We deliver tailored solutions across diverse industries, helping businesses overcome unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Healthcare",
              "Finance",
              "E-commerce",
              "Education",
              "Real Estate",
              "Manufacturing",
              "Logistics",
              "Entertainment",
              "Travel & Hospitality",
              "Food & Beverage",
              "Non-Profit",
              "Technology",
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center hover:bg-blue-900/10 hover:border-blue-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-gray-300">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "ByteScrum delivered our mobile app on time and exceeded our expectations. Their team was professional, responsive, and truly cared about our project's success.",
                author: "Sarah Johnson",
                position: "CEO, FinTech Solutions",
                image: "/testimonials/person1.jpg",
              },
              {
                quote:
                  "Working with ByteScrum on our e-commerce platform was a game-changer. They understood our vision and transformed it into a high-performing website that our customers love.",
                author: "Michael Chen",
                position: "Founder, StyleHub",
                image: "/testimonials/person2.jpg",
              },
              {
                quote:
                  "The blockchain solution developed by ByteScrum revolutionized our supply chain operations. Their expertise and innovative approach helped us stay ahead of the competition.",
                author: "David Rodriguez",
                position: "CTO, LogisticsPro",
                image: "/testimonials/person3.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -top-5 -left-5 text-5xl text-blue-500 opacity-30">"</div>
                <p className="text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4">
                    {/* Placeholder for testimonial image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Animated lines */}
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={`line-${index}`}
              className="absolute h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
              style={{
                width: "100%",
                top: `${index * 20}%`,
                left: 0,
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: index * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Tech Your Business Further
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Elevate your business to new heights with our innovative solutions. We are dedicated to providing
              exceptional service and support, ensuring your success in the digital landscape.
            </motion.p>
            <motion.button
              className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/70 to-blue-400/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">Let's Connect us</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300">Find answers to common questions about our services and processes.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is your development process?",
                answer:
                  "Our development process includes discovery, planning, design, development, testing, deployment, and ongoing maintenance. We follow agile methodologies to ensure flexibility and regular client feedback throughout the project.",
              },
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We provide detailed timelines during the planning phase.",
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your solution continues to perform optimally. Our support includes bug fixes, security updates, and feature enhancements.",
              },
              {
                question: "How do you ensure the security of applications?",
                answer:
                  "We implement industry best practices for security, including secure coding standards, regular security audits, penetration testing, and compliance with relevant regulations like GDPR and CCPA.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "We offer flexible engagement models and can seamlessly integrate with your existing team, providing the specific expertise you need to complement your internal resources.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 border border-gray-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-gray-900/50 p-4 cursor-pointer hover:bg-gray-800/50 transition-colors">
                  <h3 className="text-lg font-medium flex justify-between items-center">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </h3>
                </div>
                <div className="p-4 bg-black border-t border-gray-800">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold">Trusted By Industry Leaders</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Shopify", "Meta", "Google", "eBay", "Microsoft"].map((partner, index) => (
              <motion.div
                key={index}
                className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="h-8 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">{partner}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


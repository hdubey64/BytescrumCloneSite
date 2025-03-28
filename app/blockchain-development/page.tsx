"use client"

import { useEffect } from "react"
import BlockchainAnimation from "@/components/animations/blockchain-animation"
import { motion, useAnimation } from "framer-motion"
import { FaEthereum, FaCode, FaShieldAlt, FaUsers, FaCube, FaRocket, FaChartLine, FaLock } from "react-icons/fa"
import { useInView } from "react-intersection-observer"

export default function BlockchainDevelopmentPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-purple-900 text-white">
      <BlockchainAnimation />

      <div className="relative z-10 pt-20 pb-32">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Blockchain Development
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-16 text-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering the future with secure, scalable, and innovative blockchain solutions
        </motion.p>

        <motion.div
          className="max-w-6xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {/* Key Features Section */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Features of Our Blockchain Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FaLock,
                  title: "Enhanced Security",
                  description: "Utilize cryptographic techniques for unparalleled data protection",
                },
                {
                  icon: FaChartLine,
                  title: "Scalability",
                  description: "Build solutions that grow with your business needs",
                },
                {
                  icon: FaUsers,
                  title: "Decentralization",
                  description: "Eliminate single points of failure with distributed systems",
                },
                {
                  icon: FaCode,
                  title: "Smart Contracts",
                  description: "Automate processes with self-executing contracts",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="text-4xl mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Blockchain Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: FaCube,
                  title: "Custom Blockchain Development",
                  description: "Tailor-made blockchain solutions designed to meet your specific business requirements.",
                },
                {
                  icon: FaEthereum,
                  title: "Smart Contract Development",
                  description: "Create and deploy secure, efficient smart contracts on various blockchain platforms.",
                },
                {
                  icon: FaRocket,
                  title: "DApp Development",
                  description:
                    "Build decentralized applications that leverage the full potential of blockchain technology.",
                },
                {
                  icon: FaShieldAlt,
                  title: "Blockchain Security Audits",
                  description:
                    "Comprehensive security assessments to identify and mitigate vulnerabilities in your blockchain systems.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <service.icon className="text-5xl mb-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-blue-200">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12 text-center">Blockchain Technologies We Master</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Ethereum",
                "Hyperledger",
                "Solana",
                "Polkadot",
                "Binance Smart Chain",
                "Polygon",
                "Avalanche",
                "Cardano",
                "Cosmos",
                "Tezos",
                "Algorand",
                "Corda",
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="text-lg font-semibold text-blue-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Development Process</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
              {[
                {
                  title: "Discovery & Planning",
                  description: "We analyze your requirements and create a comprehensive project plan.",
                },
                {
                  title: "Architecture Design",
                  description: "Our experts design a robust and scalable blockchain architecture.",
                },
                {
                  title: "Development & Testing",
                  description: "We develop and rigorously test your blockchain solution.",
                },
                {
                  title: "Deployment & Integration",
                  description: "We deploy your solution and integrate it with existing systems.",
                },
                {
                  title: "Maintenance & Support",
                  description: "We provide ongoing support and updates for your blockchain application.",
                },
              ].map((step, index) => (
                <motion.div key={index} className="flex items-center mb-12" variants={itemVariants}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                    <h4 className="text-2xl font-semibold mb-2 text-blue-300">{step.title}</h4>
                    <p className="text-blue-200">{step.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "text-right pr-8"}`}></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business with Blockchain?</h2>
            <p className="text-xl text-blue-200 mb-12">
              Let's discuss how our blockchain solutions can drive innovation and growth for your organization.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold py-4 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started with Blockchain
            </motion.button>
          </section>
        </motion.div>
      </div>
    </div>
  )
}


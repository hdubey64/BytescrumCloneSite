"use client"

import { motion } from "framer-motion"
import HackedWebsiteAnimation from "@/components/animations/hacked-website-animation"
import Link from "next/link"

export default function RecoverHackedWebsitePage() {
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
      <HackedWebsiteAnimation />

      <div className="content-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Website Rescue:
              <br />
              <span className="text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                Regain Website Control
              </span>
            </motion.h1>

            <motion.div
              className="text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span className="mx-2">|</span>
              <span className="text-gray-300">Recover-Hacked-Website</span>
            </motion.div>
          </div>

          <motion.div className="mt-24" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              className="inline-block bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30 mb-8"
              variants={itemVariants}
            >
              <span className="text-green-500 font-semibold">Preventing Future Hacking</span>
            </motion.div>

            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8" variants={itemVariants}>
              Hacked Website Recovery
            </motion.h2>

            <motion.p className="text-gray-300 mb-12 text-lg" variants={itemVariants}>
              Ensuring the security of your website is crucial in today's digital landscape, where cyber threats are
              ever-evolving. By adopting proactive measures, you can significantly reduce the risk of future hacking
              attempts and protect your online presence.
            </motion.p>

            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-12"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">How to Fix A Hacked Website?</h3>
              <p className="text-gray-300">Recovering from a website hack requires a systematic approach:</p>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Identify and isolate the compromised areas of your website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Remove malicious code, backdoors, and unauthorized access points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Restore from clean backups when available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Update and patch all software, plugins, and themes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Implement stronger security measures to prevent future attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Monitor your website for any signs of recurring issues</span>
                </li>
              </ul>
            </motion.div>

            <motion.p className="text-gray-300 mb-12 text-lg" variants={itemVariants}>
              Hacked website recovery differs depending on the nature and intensity of the attack; expert support from
              services is essential for a successful recovery.
            </motion.p>

            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-12"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                How can we assist you in detecting and monitoring if your website has been hacked using a comprehensive
                approach?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border border-gray-800 rounded-lg p-6 bg-gradient-to-br from-black to-blue-950/20">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Continuous Monitoring</h4>
                  <p className="text-gray-400">
                    We implement 24/7 monitoring systems that scan your website for suspicious activities, unauthorized
                    changes, and known malware signatures.
                  </p>
                </div>
                <div className="border border-gray-800 rounded-lg p-6 bg-gradient-to-br from-black to-green-950/20">
                  <h4 className="text-xl font-semibold mb-3 text-green-400">Malware Detection</h4>
                  <p className="text-gray-400">
                    Our advanced scanning tools can identify hidden malware, backdoors, and other malicious code that
                    might be lurking in your website files.
                  </p>
                </div>
                <div className="border border-gray-800 rounded-lg p-6 bg-gradient-to-br from-black to-purple-950/20">
                  <h4 className="text-xl font-semibold mb-3 text-purple-400">Security Audits</h4>
                  <p className="text-gray-400">
                    Regular security audits help identify vulnerabilities before they can be exploited, ensuring your
                    website remains protected against emerging threats.
                  </p>
                </div>
                <div className="border border-gray-800 rounded-lg p-6 bg-gradient-to-br from-black to-red-950/20">
                  <h4 className="text-xl font-semibold mb-3 text-red-400">Incident Response</h4>
                  <p className="text-gray-400">
                    In case of a security breach, our team provides rapid response services to contain the threat,
                    remove malicious elements, and restore your website.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="mt-16 text-center" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Ready to secure your website?</h3>
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                Get Expert Recovery Support
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import ShopifyDevAnimation from "@/components/animations/shopify-dev-animation"
import DeveloperShowcase from "@/components/DeveloperShowcase"
import HireDeveloperCTA from "@/components/HireDeveloperCTA"
import TechStack from "@/components/TechStack"

export default function ShopifyDeveloperPage() {
  const [activeTab, setActiveTab] = useState("theme")

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
    theme: [
      { name: "Liquid", icon: "simple-icons:shopify", level: 95 },
      { name: "Theme Development", icon: "carbon:template", level: 90 },
      { name: "Theme Customization", icon: "carbon:paint-brush", level: 95 },
      { name: "Responsive Design", icon: "carbon:devices", level: 90 },
      { name: "Theme Architecture", icon: "carbon:chart-relationship", level: 85 },
      { name: "Theme Optimization", icon: "carbon:chart-line-data", level: 90 },
    ],
    app: [
      { name: "Shopify App Development", icon: "carbon:application", level: 90 },
      { name: "Shopify API", icon: "carbon:api", level: 85 },
      { name: "GraphQL", icon: "logos:graphql", level: 80 },
      { name: "Shopify CLI", icon: "carbon:terminal", level: 85 },
      { name: "App Bridge", icon: "carbon:bridge", level: 80 },
      { name: "Polaris", icon: "carbon:user-interface", level: 85 },
    ],
    frontend: [
      { name: "JavaScript", icon: "logos:javascript", level: 90 },
      { name: "React", icon: "logos:react", level: 85 },
      { name: "Next.js", icon: "logos:nextjs-icon", level: 80 },
      { name: "CSS/SCSS", icon: "logos:sass", level: 90 },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 85 },
      { name: "Alpine.js", icon: "simple-icons:alpinedotjs", level: 80 },
    ],
  }

  const projects = [
    {
      title: "Custom Shopify Theme",
      description:
        "A bespoke Shopify theme designed for a fashion brand with advanced product filtering and customization options.",
      technologies: ["Liquid", "JavaScript", "SCSS", "Shopify API", "Alpine.js"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Shopify App for Inventory Management",
      description: "A custom Shopify app that enhances inventory management with advanced features and analytics.",
      technologies: ["React", "Node.js", "GraphQL", "Polaris", "Shopify API"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Headless Shopify Store",
      description: "A headless Shopify implementation using Next.js for the frontend and Shopify as the backend.",
      technologies: ["Next.js", "Shopify Storefront API", "GraphQL", "Tailwind CSS", "Vercel"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <>
      <ShopifyDevAnimation />

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
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Shopify Developer
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Creating beautiful, high-converting Shopify stores and custom applications
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link href="#hire-developer">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Hire Shopify Developer
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-green-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Shopify Developers Do
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
                  icon: "carbon:template",
                  title: "Theme Development",
                  description:
                    "Create custom Shopify themes that align with your brand identity and business requirements.",
                  color: "green",
                },
                {
                  icon: "carbon:application",
                  title: "App Development",
                  description:
                    "Build custom Shopify apps that extend your store's functionality and enhance the user experience.",
                  color: "teal",
                },
                {
                  icon: "carbon:store",
                  title: "Store Setup & Migration",
                  description:
                    "Set up new Shopify stores or migrate existing ones with minimal disruption to your business.",
                  color: "emerald",
                },
                {
                  icon: "carbon:chart-line-data",
                  title: "Performance Optimization",
                  description: "Optimize your Shopify store for speed, conversion, and search engine visibility.",
                  color: "green",
                },
                {
                  icon: "carbon:cloud-service-management",
                  title: "Third-Party Integrations",
                  description:
                    "Integrate payment gateways, shipping providers, marketing tools, and other third-party services.",
                  color: "teal",
                },
                {
                  icon: "carbon:headset",
                  title: "Ongoing Support & Maintenance",
                  description: "Provide continuous support and maintenance to ensure your Shopify store runs smoothly.",
                  color: "emerald",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${service.color}-900/20 border border-gray-800 rounded-xl p-6 hover:border-${service.color}-500/50 transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(16, 185, 129, 0.5)" }}
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
                          ? "bg-green-600 text-white"
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
                        className="bg-green-600 h-2.5 rounded-full"
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
        <section className="py-20 bg-gradient-to-b from-black/50 to-teal-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Shopify Development Process
            </motion.h2>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

                {[
                  {
                    title: "Discovery & Planning",
                    description:
                      "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.",
                    icon: "carbon:document-preliminary",
                    color: "green",
                  },
                  {
                    title: "Design & Wireframing",
                    description:
                      "Our designers create mockups and wireframes that align with your brand identity and business requirements.",
                    icon: "carbon:pen-fountain",
                    color: "teal",
                  },
                  {
                    title: "Development",
                    description:
                      "Our expert Shopify developers build your store or app using best practices and clean code principles.",
                    icon: "carbon:code",
                    color: "emerald",
                  },
                  {
                    title: "Testing & QA",
                    description:
                      "We conduct thorough testing across devices and browsers to ensure your Shopify store or app functions flawlessly.",
                    icon: "carbon:task-complete",
                    color: "green",
                  },
                  {
                    title: "Deployment",
                    description:
                      "We handle the deployment process, ensuring a smooth launch with minimal disruption to your business.",
                    icon: "carbon:rocket",
                    color: "teal",
                  },
                  {
                    title: "Maintenance & Support",
                    description:
                      "We provide ongoing maintenance and support to ensure your Shopify store or app continues to perform optimally.",
                    icon: "carbon:help",
                    color: "emerald",
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
              Featured Shopify Projects
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
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(16, 185, 129, 0.5)" }}
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
                        <span key={techIndex} className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">
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

        {/* Shopify Features Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-green-900/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Shopify?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ease of Use",
                  description:
                    "Shopify's intuitive interface makes it easy to manage your online store, even for non-technical users.",
                  icon: "carbon:user-interface",
                  color: "green",
                },
                {
                  title: "Scalability",
                  description: "Shopify can handle stores of any size, from startups to enterprise-level businesses.",
                  icon: "carbon:growth",
                  color: "teal",
                },
                {
                  title: "Security",
                  description:
                    "Shopify is PCI compliant and includes SSL certificates, ensuring your store and customer data are secure.",
                  icon: "carbon:security",
                  color: "emerald",
                },
                {
                  title: "App Ecosystem",
                  description:
                    "Access to thousands of apps that extend your store's functionality without custom development.",
                  icon: "carbon:application",
                  color: "green",
                },
                {
                  title: "Payment Processing",
                  description:
                    "Built-in payment processing with Shopify Payments and support for over 100 payment gateways.",
                  icon: "carbon:money",
                  color: "teal",
                },
                {
                  title: "SEO & Marketing",
                  description: "Powerful SEO features and marketing tools to help you attract and convert customers.",
                  icon: "carbon:chart-line-data",
                  color: "emerald",
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
          title="Technologies Our Shopify Developers Master"
          technologies={[
            { name: "Shopify Liquid", icon: "simple-icons:shopify" },
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "React", icon: "logos:react" },
            { name: "Next.js", icon: "logos:nextjs-icon" },
            { name: "GraphQL", icon: "logos:graphql" },
            { name: "Node.js", icon: "logos:nodejs-icon" },
            { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
            { name: "SCSS", icon: "logos:sass" },
            { name: "Alpine.js", icon: "simple-icons:alpinedotjs" },
            { name: "Shopify Polaris", icon: "simple-icons:shopify" },
            { name: "Git", icon: "logos:git-icon" },
            { name: "Figma", icon: "logos:figma" },
          ]}
        />

        {/* Developer Showcase Section */}
        <DeveloperShowcase
          title="Meet Our Shopify Developers"
          developers={[
            {
              name: "Jessica Lee",
              role: "Senior Shopify Developer",
              experience: "7+ years",
              skills: ["Shopify Liquid", "Theme Development", "JavaScript", "Shopify API", "UI/UX Design"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Jessica is a seasoned Shopify developer with expertise in creating custom themes and optimizing stores for conversion.",
            },
            {
              name: "Mark Wilson",
              role: "Shopify App Developer",
              experience: "5+ years",
              skills: ["React", "Node.js", "GraphQL", "Shopify App Bridge", "Polaris"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Mark specializes in building custom Shopify apps that extend store functionality and enhance the user experience.",
            },
            {
              name: "Sophia Chen",
              role: "Headless Shopify Developer",
              experience: "6+ years",
              skills: ["Next.js", "Shopify Storefront API", "GraphQL", "Tailwind CSS", "Vercel"],
              image: "/placeholder.svg?height=300&width=300",
              bio: "Sophia excels at building headless Shopify implementations with modern JavaScript frameworks.",
            },
          ]}
        />

        {/* Hire Developer CTA Section */}
        <HireDeveloperCTA
          title="Hire Shopify Developers"
          description="Get access to our pool of talented Shopify developers who can transform your e-commerce vision into reality."
          buttonText="Hire Shopify Developer"
        />
      </div>
    </>
  )
}


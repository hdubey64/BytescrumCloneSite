"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import DigitalMarketingAnimation from "@/components/animations/digital-marketing-animation"
import { FaSearch, FaHashtag, FaChartLine, FaPencilAlt, FaEnvelope, FaAd, FaArrowRight } from "react-icons/fa"

export default function DigitalMarketingPage() {
  const [activeTab, setActiveTab] = useState("seo")
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [visibleSection, setVisibleSection] = useState("")
  const controls = useAnimation()

  // References for each section
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    strategies: useRef<HTMLDivElement>(null),
    seo: useRef<HTMLDivElement>(null),
    social: useRef<HTMLDivElement>(null),
    content: useRef<HTMLDivElement>(null),
    analytics: useRef<HTMLDivElement>(null),
    showcase: useRef<HTMLDivElement>(null),
    platforms: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
  }

  // Intersection observer for each section
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSection(key)
            }
          },
          { threshold: 0.3 },
        )

        observer.observe(ref.current)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

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
      title: "Search Engine Optimization",
      icon: <FaSearch className="text-3xl text-blue-500" />,
      description: "Boost your website's visibility in search engine results and drive organic traffic.",
      link: "/digital-marketing/seo",
    },
    {
      title: "Social Media Marketing",
      icon: <FaHashtag className="text-3xl text-purple-500" />,
      description: "Engage with your audience and build brand awareness across social media platforms.",
      link: "/digital-marketing/social-media",
    },
    {
      title: "Content Marketing",
      icon: <FaPencilAlt className="text-3xl text-pink-500" />,
      description: "Create valuable content that attracts and retains your target audience.",
      link: "/digital-marketing/content",
    },
    {
      title: "Email Marketing",
      icon: <FaEnvelope className="text-3xl text-green-500" />,
      description: "Nurture leads and drive conversions with targeted email campaigns.",
      link: "/digital-marketing/email",
    },
    {
      title: "Pay-Per-Click Advertising",
      icon: <FaAd className="text-3xl text-amber-500" />,
      description: "Generate immediate traffic and conversions with strategic paid advertising.",
      link: "/digital-marketing/ppc",
    },
    {
      title: "Analytics & Reporting",
      icon: <FaChartLine className="text-3xl text-indigo-500" />,
      description: "Measure performance and gain insights to optimize your marketing strategies.",
      link: "/digital-marketing/analytics",
    },
  ]

  const strategies = [
    {
      title: "Brand Awareness",
      description: "Increase visibility and recognition of your brand among your target audience.",
      color: "blue",
    },
    {
      title: "Lead Generation",
      description: "Attract and convert high-quality prospects into leads for your business.",
      color: "purple",
    },
    {
      title: "Conversion Optimization",
      description: "Improve your website's ability to convert visitors into customers.",
      color: "pink",
    },
    {
      title: "Customer Retention",
      description: "Develop strategies to keep customers engaged and coming back for more.",
      color: "green",
    },
  ]

  const seoServices = [
    {
      title: "Keyword Research",
      description: "Identify high-value keywords that your target audience is searching for.",
      icon: "carbon:search",
    },
    {
      title: "On-Page SEO",
      description: "Optimize your website's content and structure to improve search engine rankings.",
      icon: "carbon:document",
    },
    {
      title: "Off-Page SEO",
      description: "Build high-quality backlinks and improve your website's authority.",
      icon: "carbon:connection",
    },
    {
      title: "Technical SEO",
      description: "Ensure your website is technically optimized for search engine crawling and indexing.",
      icon: "carbon:code",
    },
    {
      title: "Local SEO",
      description: "Improve visibility for local searches and attract customers in your area.",
      icon: "carbon:location",
    },
    {
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's SEO performance and opportunities.",
      icon: "carbon:report",
    },
  ]

  const socialMediaServices = [
    {
      title: "Social Media Strategy",
      description: "Develop a comprehensive strategy aligned with your business goals.",
      icon: "carbon:strategy",
    },
    {
      title: "Content Creation",
      description: "Create engaging content tailored to each social media platform.",
      icon: "carbon:pen",
    },
    {
      title: "Community Management",
      description: "Build and nurture relationships with your audience through active engagement.",
      icon: "carbon:group",
    },
    {
      title: "Social Media Advertising",
      description: "Create targeted ad campaigns to reach your ideal customers.",
      icon: "carbon:campaign",
    },
    {
      title: "Influencer Marketing",
      description: "Collaborate with influencers to expand your reach and credibility.",
      icon: "carbon:star",
    },
    {
      title: "Social Listening",
      description: "Monitor conversations about your brand and industry to gain insights.",
      icon: "carbon:hearing",
    },
  ]

  const contentServices = [
    {
      title: "Content Strategy",
      description: "Develop a content plan aligned with your business goals and audience needs.",
      icon: "carbon:document-strategy",
    },
    {
      title: "Blog Writing",
      description: "Create informative and engaging blog posts that attract and educate your audience.",
      icon: "carbon:blog",
    },
    {
      title: "Copywriting",
      description: "Craft compelling copy that drives action and conversions.",
      icon: "carbon:text",
    },
    {
      title: "Video Content",
      description: "Produce engaging video content that tells your brand story.",
      icon: "carbon:video",
    },
    {
      title: "Infographics",
      description: "Create visual content that simplifies complex information.",
      icon: "carbon:chart-line-data",
    },
    {
      title: "Content Distribution",
      description: "Ensure your content reaches your target audience through multiple channels.",
      icon: "carbon:share",
    },
  ]

  const analyticsServices = [
    {
      title: "Performance Tracking",
      description: "Monitor key metrics to measure the success of your marketing campaigns.",
      icon: "carbon:chart-line",
    },
    {
      title: "Conversion Analysis",
      description: "Identify what drives conversions and optimize your marketing funnel.",
      icon: "carbon:chart-conversion",
    },
    {
      title: "Audience Insights",
      description: "Gain a deeper understanding of your audience's behavior and preferences.",
      icon: "carbon:user-profile",
    },
    {
      title: "Competitive Analysis",
      description: "Benchmark your performance against competitors and identify opportunities.",
      icon: "carbon:chart-comparison",
    },
    {
      title: "Custom Reporting",
      description: "Receive tailored reports that focus on the metrics that matter to your business.",
      icon: "carbon:report-data",
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable insights through visual representations.",
      icon: "carbon:chart-pie",
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Revenue Growth",
      description: "Increased online sales by 150% through integrated SEO and PPC strategies.",
      industry: "Retail",
      results: ["150% increase in revenue", "200% ROI on ad spend", "45% increase in organic traffic"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "B2B Lead Generation",
      description: "Generated 300+ qualified leads per month for a SaaS company through content marketing.",
      industry: "Technology",
      results: ["300+ monthly leads", "35% conversion rate", "65% reduction in cost per lead"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Local Business Visibility",
      description: "Boosted local search visibility and in-store visits for a retail chain.",
      industry: "Local Business",
      results: [
        "400% increase in local search visibility",
        "250% increase in store visits",
        "125% increase in revenue",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const platforms = [
    { name: "Google", icon: "logos:google", category: "search" },
    { name: "Facebook", icon: "logos:facebook", category: "social" },
    { name: "Instagram", icon: "logos:instagram-icon", category: "social" },
    { name: "LinkedIn", icon: "logos:linkedin-icon", category: "social" },
    { name: "Twitter", icon: "logos:twitter", category: "social" },
    { name: "YouTube", icon: "logos:youtube-icon", category: "social" },
    { name: "Pinterest", icon: "logos:pinterest", category: "social" },
    { name: "TikTok", icon: "logos:tiktok-icon", category: "social" },
    { name: "Google Ads", icon: "logos:google-ads", category: "advertising" },
    { name: "Facebook Ads", icon: "logos:facebook", category: "advertising" },
    { name: "Mailchimp", icon: "logos:mailchimp", category: "email" },
    { name: "HubSpot", icon: "logos:hubspot", category: "marketing" },
    { name: "Semrush", icon: "simple-icons:semrush", category: "seo" },
    { name: "Ahrefs", icon: "simple-icons:ahrefs", category: "seo" },
    { name: "Google Analytics", icon: "logos:google-analytics", category: "analytics" },
  ]

  const faqs = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing encompasses all marketing efforts that use electronic devices or the internet. Businesses leverage digital channels such as search engines, social media, email, and websites to connect with current and prospective customers.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "The timeline for seeing results varies depending on the strategies implemented. Some tactics like PPC advertising can yield immediate results, while others like SEO and content marketing are long-term strategies that typically show significant results after 3-6 months of consistent effort.",
    },
    {
      question: "How much should I budget for digital marketing?",
      answer:
        "Your digital marketing budget depends on your business goals, industry, and the competitive landscape. As a general guideline, businesses typically allocate 7-10% of their revenue to marketing, with a growing portion dedicated to digital channels. We offer customized strategies to fit various budget levels.",
    },
    {
      question: "Do I need to be on all social media platforms?",
      answer:
        "No, it's more effective to focus on the platforms where your target audience is most active rather than spreading yourself thin across all platforms. We help identify the most relevant channels for your business and develop strategies to maximize your presence there.",
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer:
        "We track key performance indicators (KPIs) aligned with your business goals, such as website traffic, conversion rates, lead generation, engagement metrics, and return on investment (ROI). We provide regular reports with actionable insights to continuously optimize your campaigns.",
    },
    {
      question: "Can digital marketing work for my small business?",
      answer:
        "Digital marketing offers scalable solutions for businesses of all sizes. For small businesses, it provides cost-effective ways to reach targeted audiences and compete with larger companies. We develop strategies tailored to your specific needs and budget constraints.",
    },
  ]

  const otherServices = [
    {
      title: "Web Development",
      description: "Create responsive, high-performance websites and web applications.",
      link: "/custom-software-development",
      color: "blue",
    },
    {
      title: "E-commerce Development",
      description: "Build powerful online stores that drive sales and enhance customer experiences.",
      link: "/ecommerce-development",
      color: "pink",
    },
    {
      title: "Mobile App Development",
      description: "Develop custom mobile applications for iOS and Android platforms.",
      link: "/mobile-app-development",
      color: "green",
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive, engaging user interfaces that enhance user satisfaction.",
      link: "/ui-ux-designer",
      color: "purple",
    },
    {
      title: "Blockchain Development",
      description: "Leverage blockchain technology for secure, transparent applications.",
      link: "/blockchain-development",
      color: "indigo",
    },
  ]

  return (
    <>
      <DigitalMarketingAnimation />

      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={sectionRefs.hero} className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
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
                  Digital Marketing
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Drive growth with data-driven strategies that increase visibility, engage your audience, and generate
                leads
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link href="#services">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Services
                  </motion.button>
                </Link>
                <Link href="#contact">
                  <motion.button
                    className="bg-transparent border border-purple-500 text-purple-400 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get a Free Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" ref={sectionRefs.services} className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Digital Marketing Services</h2>
              <p className="text-gray-300">
                We offer comprehensive digital marketing solutions tailored to your business goals and target audience.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
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
                    href={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Digital Marketing Strategies Section */}
        <section ref={sectionRefs.strategies} className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Digital Marketing Strategies</h2>
              <p className="text-gray-300">
                We develop customized strategies to achieve your specific business objectives and drive measurable
                results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${strategy.color}-900/20 border border-gray-800 rounded-xl p-8 relative overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: `0 10px 30px -15px rgba(var(--${strategy.color}-rgb), 0.5)` }}
                >
                  {/* Background number */}
                  <div className={`absolute -top-10 -right-10 text-9xl font-bold text-${strategy.color}-500/10`}>
                    {index + 1}
                  </div>
                  <h3 className={`text-2xl font-semibold mb-4 text-${strategy.color}-400 relative z-10`}>
                    {strategy.title}
                  </h3>
                  <p className="text-gray-300 relative z-10">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Services Section */}
        <section ref={sectionRefs.seo} className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Search Engine Optimization</h2>
              <p className="text-gray-300">
                Improve your website's visibility in search engine results and drive organic traffic to your business.
              </p>
            </motion.div>

            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <div className="flex space-x-2 bg-gray-900/50 p-1 rounded-lg">
                {["seo", "social", "content", "analytics"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "seo"
                      ? "SEO"
                      : tab === "social"
                        ? "Social Media"
                        : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "seo" &&
                seoServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)" }}
                  >
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      <span className="iconify text-blue-400 text-2xl" data-icon={service.icon}></span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}

              {activeTab === "social" &&
                socialMediaServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.5)" }}
                  >
                    <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                      <span className="iconify text-purple-400 text-2xl" data-icon={service.icon}></span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}

              {activeTab === "content" &&
                contentServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(236, 72, 153, 0.5)" }}
                  >
                    <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                      <span className="iconify text-pink-400 text-2xl" data-icon={service.icon}></span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}

              {activeTab === "analytics" &&
                analyticsServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(16, 185, 129, 0.5)" }}
                  >
                    <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                      <span className="iconify text-green-400 text-2xl" data-icon={service.icon}></span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Social Media Marketing Section */}
        <section ref={sectionRefs.social} className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6">Social Media Marketing</h2>
                <p className="text-gray-300 mb-8">
                  Build brand awareness, engage with your audience, and drive conversions through strategic social media
                  marketing.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Platform Selection",
                      description:
                        "We identify the most relevant platforms for your business based on your target audience and goals.",
                    },
                    {
                      title: "Content Strategy",
                      description:
                        "We develop a content strategy that resonates with your audience and aligns with your brand voice.",
                    },
                    {
                      title: "Community Building",
                      description: "We help you build and nurture an engaged community around your brand.",
                    },
                    {
                      title: "Paid Advertising",
                      description:
                        "We create targeted ad campaigns to reach your ideal customers and drive specific actions.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link href="/digital-marketing/social-media">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                      Learn More About Social Media Marketing
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Snapchat"].map(
                    (platform, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.5)" }}
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                            <span className="iconify text-3xl" data-icon={`logos:${platform.toLowerCase()}`}></span>
                          </div>
                          <p className="text-gray-300 text-sm">{platform}</p>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>

                {/* Floating social media metrics */}
                <motion.div
                  className="absolute -top-10 -right-10 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 w-40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <div className="text-center">
                    <p className="text-purple-400 font-bold text-2xl">+245%</p>
                    <p className="text-gray-300 text-sm">Engagement Rate</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-10 -left-10 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 w-40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <div className="text-center">
                    <p className="text-blue-400 font-bold text-2xl">+187%</p>
                    <p className="text-gray-300 text-sm">Follower Growth</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Marketing Section */}
        <section ref={sectionRefs.content} className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Content Marketing</h2>
              <p className="text-gray-300">
                Create valuable, relevant content that attracts and engages your target audience, establishing your
                brand as an industry authority.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Content Types We Create</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Blog Posts",
                      description: "Informative articles that establish your expertise and improve SEO.",
                      icon: "carbon:blog",
                      color: "pink",
                    },
                    {
                      title: "Infographics",
                      description: "Visual content that simplifies complex information and increases shareability.",
                      icon: "carbon:chart-line-data",
                      color: "blue",
                    },
                    {
                      title: "Videos",
                      description: "Engaging video content that tells your brand story and demonstrates products.",
                      icon: "carbon:video",
                      color: "purple",
                    },
                    {
                      title: "Ebooks & Whitepapers",
                      description: "In-depth resources that generate leads and showcase your expertise.",
                      icon: "carbon:document",
                      color: "green",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex gap-4 p-4 rounded-lg bg-gradient-to-br from-black to-${item.color}-900/10 border border-${item.color}-900/20`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5, boxShadow: `0 10px 30px -15px rgba(var(--${item.color}-rgb), 0.3)` }}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${item.color}-900/30 flex items-center justify-center flex-shrink-0`}
                      >
                        <span className={`iconify text-${item.color}-400 text-2xl`} data-icon={item.icon}></span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Content Marketing Benefits</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Increased Website Traffic",
                      icon: "carbon:chart-line",
                      color: "blue",
                    },
                    {
                      title: "Higher Conversion Rates",
                      icon: "carbon:chart-conversion",
                      color: "green",
                    },
                    {
                      title: "Improved Brand Awareness",
                      icon: "carbon:visibility",
                      color: "purple",
                    },
                    {
                      title: "Better Customer Engagement",
                      icon: "carbon:user-profile",
                      color: "pink",
                    },
                    {
                      title: "Enhanced SEO Performance",
                      icon: "carbon:search",
                      color: "amber",
                    },
                    {
                      title: "Established Industry Authority",
                      icon: "carbon:certificate",
                      color: "indigo",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-${benefit.color}-900/30 flex items-center justify-center flex-shrink-0`}
                      >
                        <span className={`iconify text-${benefit.color}-400 text-lg`} data-icon={benefit.icon}></span>
                      </div>
                      <p className="text-gray-300">{benefit.title}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="/digital-marketing/content">
                    <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Analytics & Reporting Section */}
        <section ref={sectionRefs.analytics} className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Analytics & Reporting</h2>
              <p className="text-gray-300">
                Gain valuable insights into your marketing performance and make data-driven decisions to optimize your
                strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Performance Dashboard</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Organic Traffic", value: "12,458", growth: "+24%", color: "blue" },
                        { label: "Conversion Rate", value: "3.8%", growth: "+1.2%", color: "green" },
                        { label: "Bounce Rate", value: "42%", growth: "-5%", color: "pink" },
                        { label: "Avg. Session Duration", value: "2:45", growth: "+0:35", color: "purple" },
                      ].map((metric, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div>
                            <p className="text-gray-400 text-sm">{metric.label}</p>
                            <p className="text-2xl font-bold">{metric.value}</p>
                          </div>
                          <div className={`text-${metric.color}-400 flex items-center`}>
                            {metric.growth.startsWith("+") ? (
                              <span className="iconify mr-1" data-icon="carbon:arrow-up"></span>
                            ) : (
                              <span className="iconify mr-1" data-icon="carbon:arrow-down"></span>
                            )}
                            {metric.growth}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                    <div className="space-y-3">
                      {[
                        "Real-time performance monitoring",
                        "Custom reporting dashboards",
                        "Actionable insights and recommendations",
                        "ROI tracking for all marketing channels",
                        "Competitor benchmarking",
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <span className="iconify text-green-400 text-sm" data-icon="carbon:checkmark"></span>
                          </div>
                          <p className="text-gray-300">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Floating element */}
                  <motion.div
                    className="absolute -top-10 -left-10 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    <div className="text-center">
                      <p className="text-blue-400 font-bold text-xl">Data-Driven</p>
                      <p className="text-gray-300 text-sm">Decision Making</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-semibold mb-6">Measure What Matters</h3>
                <p className="text-gray-300 mb-8">
                  Our analytics and reporting services provide you with clear, actionable insights into your marketing
                  performance, helping you make informed decisions and optimize your strategies for maximum ROI.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Tracking",
                      description:
                        "We track all relevant metrics across your marketing channels to provide a complete picture of your performance.",
                      icon: "carbon:chart-multitype",
                      color: "blue",
                    },
                    {
                      title: "Custom Dashboards",
                      description:
                        "We create tailored dashboards that focus on the metrics that matter most to your business goals.",
                      icon: "carbon:dashboard",
                      color: "purple",
                    },
                    {
                      title: "Regular Reporting",
                      description:
                        "Receive detailed reports with actionable insights and recommendations for optimization.",
                      icon: "carbon:report",
                      color: "green",
                    },
                    {
                      title: "Continuous Optimization",
                      description:
                        "We use data-driven insights to continuously refine and improve your marketing strategies.",
                      icon: "carbon:optimize",
                      color: "pink",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${item.color}-900/30 flex items-center justify-center flex-shrink-0`}
                      >
                        <span className={`iconify text-${item.color}-400 text-2xl`} data-icon={item.icon}></span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link href="/digital-marketing/analytics">
                    <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                      Learn More About Analytics
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section ref={sectionRefs.showcase} className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-gray-300">
                See how our digital marketing strategies have helped businesses achieve their goals and drive measurable
                results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
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
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-900/70 text-blue-300 text-xs px-2 py-1 rounded">{study.industry}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                    <p className="text-gray-400 mb-4">{study.description}</p>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-400">{result}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href="/case-studies"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                      >
                        Read Full Case Study <FaArrowRight className="ml-2 text-sm" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/case-studies">
                <button className="bg-transparent border border-blue-500 text-blue-400 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-blue-900/20">
                  View All Case Studies
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Platforms Section */}
        <section ref={sectionRefs.platforms} className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Platforms We Work With</h2>
              <p className="text-gray-300">
                We leverage the most effective platforms and tools to execute your digital marketing strategies and
                achieve your business goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {platforms.map((platform, index) => (
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
                    boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)",
                    scale: 1.05,
                  }}
                >
                  <motion.div
                    className="w-16 h-16 mb-3 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <span className="iconify text-4xl" data-icon={platform.icon}></span>
                  </motion.div>
                  <motion.span className="text-sm font-medium text-center" whileHover={{ scale: 1.1 }}>
                    {platform.name}
                  </motion.span>
                  <span className="text-xs text-gray-500 mt-1 capitalize">{platform.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={sectionRefs.faq} className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300">
                Find answers to common questions about our digital marketing services and how we can help your business
                grow.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-6 border border-gray-800 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div
                    className="bg-gray-900/50 p-4 cursor-pointer hover:bg-gray-800/50 transition-colors flex justify-between items-center"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-400 transform transition-transform ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: activeFaq === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-black border-t border-gray-800">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-gray-300 mb-4">Still have questions?</p>
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Explore Our Other Services</h2>
              <p className="text-gray-300">
                Discover our full range of services to help your business thrive in the digital landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-black to-${service.color}-900/20 border border-gray-800 rounded-xl p-6 hover:border-${service.color}-500/50 transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: `0 10px 30px -15px rgba(var(--${service.color}-rgb), 0.5)` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-5">{service.description}</p>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center text-${service.color}-400 hover:text-${service.color}-300 transition-colors`}
                  >
                    Learn More <FaArrowRight className="ml-2 text-sm" />
                  </Link>
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
                  Ready to Grow Your Business?
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let's discuss how our digital marketing strategies can help you achieve your business goals and drive
                measurable results.
              </motion.p>
              <motion.button
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 overflow-hidden"
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
                <span className="relative z-10">Schedule a Free Consultation</span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}


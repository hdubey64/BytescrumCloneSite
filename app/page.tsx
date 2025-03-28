"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
   const services = [
      {
         title: "Blockchain Development",
         description:
            "Innovative blockchain solutions for secure, decentralized applications.",
         href: "/blockchain-development",
         color: "from-blue-500/20 to-blue-600/20",
         textColor: "text-blue-400",
         borderColor: "border-blue-500/30",
      },
      {
         title: "Custom Software Development",
         description:
            "Tailored software solutions designed to meet your specific business needs.",
         href: "/custom-software-development",
         color: "from-purple-500/20 to-purple-600/20",
         textColor: "text-purple-400",
         borderColor: "border-purple-500/30",
      },
      {
         title: "E-commerce Development",
         description:
            "Powerful online stores that drive sales and enhance customer experiences.",
         href: "/ecommerce-development",
         color: "from-pink-500/20 to-pink-600/20",
         textColor: "text-pink-400",
         borderColor: "border-pink-500/30",
      },
      {
         title: "Laravel Web Development",
         description:
            "Robust web applications built with the elegant Laravel framework.",
         href: "/laravel-development",
         color: "from-red-500/20 to-pink-600/20",
         textColor: "text-pink-400",
         borderColor: "border-pink-500/30",
      },
      {
         title: "Python Development",
         description:
            "Versatile Python solutions for web, data science, AI, and automation.",
         href: "/python-development",
         color: "from-blue-500/20 to-blue-600/20",
         textColor: "text-blue-400",
         borderColor: "border-blue-500/30",
      },
      {
         title: "Digital Marketing",
         description:
            "Digital Analytics solutions for web, data science and AI, and automation and digital analytics",
         href: "/digital-marketing",
         color: "from-purple-500/20 to-purple-600/20",
         textColor: "text-purple-400",
         borderColor: "border-purple-500/30",
      },
   ];

   return (
      <div className="min-h-screen bg-black text-white">
         <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background animation */}
            <div className="fixed inset-0 z-0">
               {Array.from({ length: 50 }).map((_, index) => (
                  <motion.div
                     key={index}
                     className="absolute rounded-full"
                     initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: Math.random() * 0.3,
                     }}
                     animate={{
                        x: [
                           Math.random() * window.innerWidth,
                           Math.random() * window.innerWidth,
                        ],
                        y: [
                           Math.random() * window.innerHeight,
                           Math.random() * window.innerHeight,
                        ],
                        opacity: [
                           Math.random() * 0.5,
                           Math.random() * 0.8,
                           Math.random() * 0.5,
                        ],
                     }}
                     transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                     }}
                     style={{
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        background:
                           index % 3 === 0
                              ? "radial-gradient(circle, rgba(244,114,182,0.2) 0%, rgba(244,114,182,0) 70%)"
                              : index % 3 === 1
                              ? "radial-gradient(circle, rgba(96,165,250,0.2) 0%, rgba(96,165,250,0) 70%)"
                              : "radial-gradient(circle, rgba(156,163,175,0.2) 0%, rgba(156,163,175,0) 70%)",
                     }}
                  />
               ))}
            </div>

            <div className="relative z-10 text-center px-4">
               <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  ByteScrum
               </motion.h1>
               <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  Innovative technology solutions for modern businesses
               </motion.p>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
               >
                  <Link href="#services">
                     <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        Explore Our Services
                     </button>
                  </Link>
               </motion.div>
            </div>
         </div>

         <div id="services" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-4xl font-bold mb-16 text-center">
                  Our Services
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                     <motion.div
                        key={index}
                        className={`bg-gradient-to-br ${service.color} border ${service.borderColor} rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                     >
                        <h3
                           className={`text-2xl font-semibold mb-4 ${service.textColor}`}
                        >
                           {service.title}
                        </h3>
                        <p className="text-gray-300 mb-6">
                           {service.description}
                        </p>
                        <Link href={service.href}>
                           <button className="bg-black text-white border border-gray-700 hover:border-gray-500 font-medium py-2 px-4 rounded-lg transition-all duration-300">
                              Learn More
                           </button>
                        </Link>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

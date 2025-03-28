import PythonAnimation from "@/components/animations/python-animation"

export default function PythonDevelopmentPage() {
  return (
    <>
      <PythonAnimation />

      <div className="content-container relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">PYTHON DEVELOPMENT</h1>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="section-title text-center">Versatile Solutions with Python</h2>
          <p className="text-gray-300 mb-12 text-center">
            Our Python development services leverage the language's versatility and power to create scalable, efficient
            applications across web development, data science, AI, and automation. We build custom Python solutions that
            drive innovation and solve complex business challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="service-card bg-gradient-to-br from-black to-blue-950/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Web Development</h4>
              <p className="text-gray-400">
                Custom web applications built with Python frameworks like Django and Flask for robust, scalable
                solutions.
              </p>
            </div>

            <div className="service-card bg-gradient-to-br from-black to-green-950/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Data Science & Analytics</h4>
              <p className="text-gray-400">
                Advanced data analysis, visualization, and machine learning solutions using Python's powerful libraries.
              </p>
            </div>

            <div className="service-card bg-gradient-to-br from-black to-purple-950/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Automation & Scripting</h4>
              <p className="text-gray-400">
                Efficient automation solutions and scripts to streamline workflows and increase productivity.
              </p>
            </div>

            <div className="service-card bg-gradient-to-br from-black to-teal-950/20">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">AI & Machine Learning</h4>
              <p className="text-gray-400">
                Cutting-edge AI and machine learning solutions using TensorFlow, PyTorch, and other Python frameworks.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="section-subtitle text-center">Python Frameworks & Libraries We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Django</h4>
                <p className="text-gray-400 text-sm">
                  High-level web framework for rapid development and clean, pragmatic design.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Flask</h4>
                <p className="text-gray-400 text-sm">
                  Lightweight WSGI web application framework for building APIs and microservices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">TensorFlow</h4>
                <p className="text-gray-400 text-sm">
                  Open-source library for machine learning and artificial intelligence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">PyTorch</h4>
                <p className="text-gray-400 text-sm">
                  Deep learning framework for research and production applications.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Pandas</h4>
                <p className="text-gray-400 text-sm">
                  Data analysis and manipulation library for structured data operations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">NumPy</h4>
                <p className="text-gray-400 text-sm">Fundamental package for scientific computing with Python.</p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Scikit-learn</h4>
                <p className="text-gray-400 text-sm">
                  Machine learning library for classification, regression, and clustering.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/10 p-6 rounded-lg border border-blue-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-blue-400">FastAPI</h4>
                <p className="text-gray-400 text-sm">Modern, fast web framework for building APIs with Python 3.7+.</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="section-subtitle text-center">Our Python Development Process</h3>
            <div className="relative mt-12">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600/50 to-purple-600/50"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-black"></div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:pl-10 w-full md:w-1/2 p-4 rounded-lg bg-gradient-to-br from-black to-blue-950/20 border border-blue-900/30">
                    <h4 className="text-lg font-semibold mb-2">Requirements Analysis</h4>
                    <p className="text-gray-400 text-sm">
                      We work closely with you to understand your business needs and define the scope and requirements
                      of your Python project.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-black"></div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:pr-10 w-full md:w-1/2 p-4 rounded-lg bg-gradient-to-br from-black to-indigo-950/20 border border-indigo-900/30">
                    <h4 className="text-lg font-semibold mb-2">Architecture & Design</h4>
                    <p className="text-gray-400 text-sm">
                      Our architects design a robust application structure optimized for performance, scalability, and
                      maintainability.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-black"></div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:pl-10 w-full md:w-1/2 p-4 rounded-lg bg-gradient-to-br from-black to-purple-950/20 border border-purple-900/30">
                    <h4 className="text-lg font-semibold mb-2">Development & Testing</h4>
                    <p className="text-gray-400 text-sm">
                      We follow agile methodologies to develop your Python application with continuous testing and
                      quality assurance.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-black"></div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:pr-10 w-full md:w-1/2 p-4 rounded-lg bg-gradient-to-br from-black to-blue-950/20 border border-blue-900/30">
                    <h4 className="text-lg font-semibold mb-2">Deployment & Documentation</h4>
                    <p className="text-gray-400 text-sm">
                      We handle the deployment process and provide comprehensive documentation to ensure your team can
                      effectively manage the application.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-black"></div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:pl-10 w-full md:w-1/2 p-4 rounded-lg bg-gradient-to-br from-black to-purple-950/20 border border-purple-900/30">
                    <h4 className="text-lg font-semibold mb-2">Maintenance & Support</h4>
                    <p className="text-gray-400 text-sm">
                      We provide ongoing maintenance, support, and updates to ensure your Python application continues
                      to meet your evolving business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Explore Python Solutions
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


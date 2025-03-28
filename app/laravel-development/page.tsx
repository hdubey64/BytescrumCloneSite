import LaravelAnimation from "@/components/animations/laravel-animation"

export default function LaravelDevelopmentPage() {
  return (
    <>
      <LaravelAnimation />

      <div className="content-container relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">LARAVEL WEB DEVELOPMENT</h1>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="section-title text-center">Powerful Web Applications with Laravel</h2>
          <p className="text-gray-300 mb-12 text-center">
            Our Laravel development services deliver robust, scalable, and secure web applications using the most
            elegant PHP framework. We leverage Laravel's powerful features to create custom solutions that drive
            business growth and enhance user experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="service-card bg-gradient-to-br from-black to-pink-950/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-400"
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
              <h4 className="text-xl font-semibold mb-3">Custom Laravel Development</h4>
              <p className="text-gray-400">
                Tailored Laravel applications built from scratch to meet your specific business requirements and
                objectives.
              </p>
            </div>

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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Database Integration</h4>
              <p className="text-gray-400">
                Seamless database design and integration using Laravel's Eloquent ORM for efficient data management.
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">API Development</h4>
              <p className="text-gray-400">
                Robust API development using Laravel's powerful tools for creating secure and scalable RESTful services.
              </p>
            </div>

            <div className="service-card bg-gradient-to-br from-black to-amber-950/20">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Laravel Maintenance</h4>
              <p className="text-gray-400">
                Ongoing support, updates, and optimization to keep your Laravel applications running smoothly and
                securely.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="section-subtitle text-center">Why Choose Laravel?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-black to-pink-950/10 p-6 rounded-lg border border-pink-900/20">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Elegant Syntax</h4>
                <p className="text-gray-400 text-sm">
                  Laravel's clean, expressive syntax makes development more enjoyable and productive, reducing
                  development time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-pink-950/10 p-6 rounded-lg border border-pink-900/20">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Built-in Security</h4>
                <p className="text-gray-400 text-sm">
                  Laravel includes robust security features like CSRF protection, encryption, and secure authentication
                  systems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-pink-950/10 p-6 rounded-lg border border-pink-900/20">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Rapid Development</h4>
                <p className="text-gray-400 text-sm">
                  Laravel's extensive ecosystem of packages and tools accelerates development without compromising
                  quality.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="section-subtitle text-center">Our Laravel Development Process</h3>
            <div className="mt-8 space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Requirements Analysis</h4>
                  <p className="text-gray-400">
                    We work closely with you to understand your business needs and define the scope and requirements of
                    your Laravel project.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Architecture & Database Design</h4>
                  <p className="text-gray-400">
                    Our architects design a robust application structure and database schema optimized for performance
                    and scalability.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Development & Testing</h4>
                  <p className="text-gray-400">
                    We follow agile methodologies to develop your Laravel application with continuous testing and
                    quality assurance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Deployment & Training</h4>
                  <p className="text-gray-400">
                    We handle the deployment process and provide comprehensive training to ensure your team can
                    effectively manage the application.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Maintenance & Support</h4>
                  <p className="text-gray-400">
                    We provide ongoing maintenance, support, and updates to ensure your Laravel application continues to
                    meet your evolving business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Laravel Project
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


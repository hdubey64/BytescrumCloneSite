import EcommerceAnimation from "@/components/animations/ecommerce-animation"

export default function EcommerceDevelopmentPage() {
  return (
    <>
      <EcommerceAnimation />

      <div className="content-container relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">E-COMMERCE DEVELOPMENT</h1>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="section-title text-center">Transforming Online Shopping Experiences</h2>
          <p className="text-gray-300 mb-12 text-center">
            Our e-commerce development services create powerful, user-friendly online stores that drive sales and
            enhance customer experiences. We build custom solutions tailored to your business needs, integrating
            seamless payment processing, inventory management, and mobile optimization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Custom Store Development</h4>
              <p className="text-gray-400">
                Tailored e-commerce solutions designed specifically for your business needs and brand identity.
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Payment Integration</h4>
              <p className="text-gray-400">
                Secure and seamless payment gateway integrations supporting multiple payment methods.
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Analytics & Reporting</h4>
              <p className="text-gray-400">
                Comprehensive analytics tools to track sales, customer behavior, and business performance.
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Mobile Optimization</h4>
              <p className="text-gray-400">
                Responsive designs that provide seamless shopping experiences across all devices.
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
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Customer Support</h4>
              <p className="text-gray-400">
                Integration of live chat, helpdesk, and support ticket systems to enhance customer service.
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Inventory Management</h4>
              <p className="text-gray-400">
                Robust inventory systems to track stock levels, manage products, and automate reordering.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="section-subtitle text-center">E-commerce Platforms We Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-gradient-to-br from-black to-pink-950/10 p-6 rounded-lg border border-pink-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-pink-400">Shopify</h4>
                <p className="text-gray-400 text-sm">
                  Custom Shopify store development with theme customization and app integration.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-pink-950/10 p-6 rounded-lg border border-pink-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-pink-400">WooCommerce</h4>
                <p className="text-gray-400 text-sm">
                  WordPress-based e-commerce solutions with extensive customization options.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-pink-950/10 p-6 rounded-lg border border-pink-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-pink-400">Magento</h4>
                <p className="text-gray-400 text-sm">
                  Enterprise-grade e-commerce platforms for large-scale businesses.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-pink-950/10 p-6 rounded-lg border border-pink-900/20 text-center">
                <h4 className="text-lg font-semibold mb-2 text-pink-400">Custom Solutions</h4>
                <p className="text-gray-400 text-sm">
                  Bespoke e-commerce platforms built from scratch for unique business requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="section-subtitle text-center">Our E-commerce Development Process</h3>
            <div className="mt-8 space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Discovery & Strategy</h4>
                  <p className="text-gray-400">
                    We analyze your business goals, target audience, and competition to develop a comprehensive
                    e-commerce strategy.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">UX/UI Design</h4>
                  <p className="text-gray-400">
                    Our designers create intuitive, conversion-focused interfaces that enhance the shopping experience
                    and reflect your brand identity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Development & Integration</h4>
                  <p className="text-gray-400">
                    We build your e-commerce platform with clean code and integrate essential features like payment
                    gateways, shipping calculators, and inventory management.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Testing & Quality Assurance</h4>
                  <p className="text-gray-400">
                    We conduct thorough testing across devices and browsers to ensure your store functions flawlessly
                    and provides a seamless shopping experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Launch & Optimization</h4>
                  <p className="text-gray-400">
                    We handle the deployment process and provide ongoing optimization to improve conversion rates and
                    enhance performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Launch Your Online Store
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


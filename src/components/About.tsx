import aboutPhoto from "../assets/about.png";

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl p-1">
                <div className="w-full h-full rounded-lg overflow-hidden border-4 border-white">
                  <img
                    src={aboutPhoto}
                    alt="Jason Krause"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                I'm a Passionate AI/ML Engineer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm a senior AI/ML engineer with a passion for building
                intelligent and scalable systems. I love turning complex data
                problems into practical, production-ready solutions that make a
                real-world impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in AI and machine learning started with curiosity and
                has grown into a career designing systems across healthcare,
                fintech, and cloud platforms. I enjoy exploring Generative AI,
                computer vision, and MLOps while staying up-to-date with the
                latest advancements in AI technologies.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Innovative Thinker
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Generative AI & ML focus
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Data-Driven
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Evidence-based decisions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Mentor
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Guiding teams & peers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Impact-Oriented
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Solutions that matter
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

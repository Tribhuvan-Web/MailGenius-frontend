import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-down">
                Revolutionizing Email Communication
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Powered by AI • Crafted for Excellence • Designed for You
              </p>
              <div className="animate-bounce">
                <svg
                  className="w-12 h-12 mx-auto text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="px-8 py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                About MailGenius
              </h2>

              <div className="space-y-12">
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  MailGenius harnesses cutting-edge AI technology to transform
                  your email communication experience. Our intelligent system
                  analyzes context, understands nuances, and crafts responses
                  that perfectly match your desired tone and style.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Lightning Fast Responses
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Generate professional-quality replies in seconds, not
                      hours
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-600 p-3 rounded-lg mr-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Smart Tone Adaptation
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Perfectly match formal, casual, or professional
                      communication styles
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-12">
                    How It Works
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        step: 1,
                        title: "Input Email",
                        desc: "Paste the email content you need to respond to",
                      },
                      {
                        step: 2,
                        title: "Choose Tone",
                        desc: "Select your preferred communication style",
                      },
                      {
                        step: 3,
                        title: "Get Response",
                        desc: "Receive AI-crafted reply instantly",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {item.step}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Transform Your Email Experience?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Join and save the time with MailGenius
                  </p>
                  <button
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

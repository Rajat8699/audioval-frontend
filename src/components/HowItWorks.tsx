import React from "react";
import Heading from "./Heading";
import Text from "./Text";

const HowItWorks: React.FC = () => {
  const listenerFeatures = [
    "Discover new music on Drop Day",
    "Listen offline or online",
    "Get personalized recommendations",
    "Unlock full tracks after previewing",
    "No more ads after you unlock a song",
  ];

  const artistFeatures = [
    "Upload one song per Drop Day",
    "Earn up to 10x more than Spotify",
    "Keep 70% of ad revenue",
    "Paid fast through Stripe",
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Square blocks pattern - unique to this section */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
            linear-gradient(0deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
          `,
            backgroundSize: "60px 60px, 60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading
            variant="h2"
            className="text-4xl lg:text-5xl mb-6 text-primary"
          >
            How It Works
          </Heading>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Listeners Card */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-black/70">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="text-center">
                <Heading
                  variant="h3"
                  className="text-2xl lg:text-3xl mb-4 text-primary"
                >
                  For Listeners
                </Heading>
              </div>

              {/* Music Player Interface */}
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gray-800 p-4">
                  <div className="text-center mb-3">
                    <Text
                      variant="paragraph"
                      className="text-white font-semibold text-sm"
                    >
                      HEADLINERS
                    </Text>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </div>
                    <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center relative">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 text-white ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3">
                {listenerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <Text variant="text" className="text-gray-300">
                      {feature}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* For Artists Card */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-black/70">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="text-center">
                <Heading
                  variant="h3"
                  className="text-2xl lg:text-3xl mb-4 text-primary"
                >
                  For Artists
                </Heading>
              </div>

              {/* Scenic Video Thumbnail */}
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 h-32">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3">
                {artistFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <Text variant="text" className="text-gray-300">
                      {feature}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Text variant="paragraph" className="text-gray-300">
            Submit your song for review, then get paid when it goes live on Drop
            Day.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

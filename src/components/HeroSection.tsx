import React from "react";
import Heading from "./Heading";
import Text from "./Text";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Heading variant="h1" className="text-5xl lg:text-7xl">
                <span className="text-white">Where Every</span>
                <br />
                <span className="text-primary">Drop Resonates</span>
              </Heading>

              <Text
                variant="paragraph"
                className="text-xl lg:text-2xl text-gray-300 max-w-2xl"
              >
                Artists upload only one song per Drop Day, ensuring each track
                gets the moment it deserves.
              </Text>
            </div>

            <div className="space-y-4">
              <Text
                variant="paragraph"
                className="text-lg text-white font-semibold"
              >
                Download the App
              </Text>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Google Play Store Button */}
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-4 bg-black border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>

                {/* Apple App Store Button */}
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-4 bg-black border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Person with Music Icons */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main blob shape with person */}
              <div className="relative z-10">
                <Image
                  src="/assets/HeroImage.png"
                  width={400}
                  height={400}
                  alt="audioval-image"
                />
              </div>

              {/* Glow effect behind the illustration */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

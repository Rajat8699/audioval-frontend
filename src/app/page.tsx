import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const faqData = [
  {
    question: "How do artists get paid?",
    answer:
      "Artists earn 70% of ad revenue based on their total song unlocks each month. Paid monthly through Stripe. A song becomes eligible for earnings once it goes live on Drop Day. Artists must earn a minimum of $10 to receive a payout",
  },
  {
    question: "What makes AudioVal different?",
    answer:
      "AudioVal focuses on the Drop Day concept where artists upload only one song per day, ensuring each track gets the attention it deserves. We offer higher revenue sharing and a unique discovery experience.",
  },
  {
    question: "Can I listen without ads?",
    answer:
      "Yes! Once you unlock a track, you can listen to it without any ads. The unlock system ensures that artists get compensated while providing listeners with an ad-free experience for their favorite songs.",
  },
  {
    question: "What is Drop Day?",
    answer:
      "Drop Day is our unique system where artists can upload one song per day. This creates a curated, focused listening experience where each track gets its moment to shine and listeners can discover new music intentionally.",
  },
  {
    question:
      "How does AudioVal ensure music quality and copyright compliance?",
    answer:
      "All songs go through a review process before going live on Drop Day. We have strict quality standards and copyright compliance measures to ensure only original, high-quality content reaches our listeners.",
  },
];

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
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <div
        className="absolute rounded-full opacity-5 blur-[112.5px]"
        style={{
          width: "738.076127882232px",
          height: "528.4411916469799px",
          top: "712.5px",
          left: "-196px",
          transform: "rotate(0deg)",
          background: "#6FA8DC",
        }}
      ></div>
      <div
        className="absolute rounded-full opacity-10 blur-[112.5px]"
        style={{
          width: "738.076127882232px",
          height: "528.4411916469799px",
          top: "-44px",
          left: "-285px",
          transform: "rotate(0deg)",
          background: "#6FA8DC",
        }}
      ></div>
      <div
        className="absolute rounded-full opacity-10"
        style={{
          width: "351.35442718046244px",
          height: "354.8220785084499px",
          top: "678.25px",
          left: "-141.75px",
          transform: "rotate(-88.76deg)",
          background:
            "radial-gradient(circle, #C7C7D9 85.1%, transparent 100%)",
          filter: "blur(112.5px)",
          zIndex: 10,
        }}
      ></div>
      <div
        className="absolute rounded-full opacity-15"
        style={{
          width: "922px",
          height: "922px",
          top: "-192px",
          left: "678px",
          transform: "rotate(0deg)",
          background: "white",
          filter: "blur(468px)",
        }}
      ></div>
      <section className="relative min-h-screen overflow-hidden">
        {/* Main content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center justify-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 col-span-2">
              <div className="space-y-6">
                <Heading variant="h1" className="text-primary">
                  Where Every Drop Resonates
                </Heading>

                <Text variant="paragraph" className="text-xl text-white">
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
                      <div className="text-xs text-gray-400">
                        Download on the
                      </div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Person with Music Icons */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Main blob shape with person */}
                <div className="relative z-10">
                  <Image
                    src="/assets/HeroImage.png"
                    width={400}
                    height={400}
                    alt="audioval-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
      </section>
      <div className="pt-16 bg-[url('/assets/backGrid.png')] bg-cover bg-center">
        <section className="relative py-20 overflow-hidden lg:px-48">
          {/* Main content */}
          <div className="relative z-10 container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-14">
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
              <Card className="border-primary/20 bg-black/20 backdrop-blur-sm py-8 px-6">
                <CardHeader className="px-0 pb-0">
                  <Heading
                    variant="h3"
                    className="text-2xl lg:text-3xl text-primary"
                  >
                    For Listeners
                  </Heading>
                </CardHeader>
                <Separator className="px-4" />
                <CardContent className="px-4">
                  {/* Bullet Points */}
                  <div className="space-y-1">
                    {listenerFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <Text variant="text" className="text-gray-300">
                          {feature}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <AspectRatio ratio={16 / 9} className="mt-20 w-full h-full">
                    <iframe
                      src="https://www.youtube.com/embed?v=QEEZx5GJdHI&list=RDQEEZx5GJdHI&start_radio=1"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>

              {/* For Artists Card */}
              <Card className="border-primary/20 bg-black/20 backdrop-blur-sm py-8 px-6">
                <CardHeader className="px-0 pb-0">
                  <Heading
                    variant="h3"
                    className="text-2xl lg:text-3xl text-primary"
                  >
                    For Artists
                  </Heading>
                </CardHeader>
                <Separator className="px-4" />
                <CardContent className="px-4">
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
                  <AspectRatio ratio={16 / 9} className="mt-20 w-full h-full">
                    <iframe
                      src="https://www.youtube.com/embed?v=QEEZx5GJdHI&list=RDQEEZx5GJdHI&start_radio=1"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <Text variant="paragraph" className="text-gray-300">
                Submit your song for review, then get paid when it goes live on
                Drop Day.
              </Text>
            </div>
          </div>
        </section>
        <section className="relative py-20 overflow-hidden lg:px-48">
          {/* Main content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start justify-center">
              {/* Left side - Heading */}
              <div className="space-y-6 my-auto">
                <Heading
                  variant="h2"
                  className="text-4xl lg:text-5xl text-primary font-semibold"
                >
                  Frequently Asked Question
                </Heading>
              </div>

              {/* Right side - Accordion */}
              <div className="w-full">
                <div className="bg-[#838383]/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2"
                  >
                    {faqData.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b border-gray-700 last:border-b-0"
                      >
                        <AccordionTrigger className="text-left py-4 hover:no-underline px-0">
                          <span className="text-lg font-semibold text-white pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 px-0">
                          <Text variant="paragraph" className="text-gray-300">
                            {faq.answer}
                          </Text>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

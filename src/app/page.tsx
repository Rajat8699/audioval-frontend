import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";
import { BackgroundBlob } from "@/components/ui/background-blob";
import { AppStoreButton } from "@/components/ui/app-store-button";
import { FeatureCard } from "@/components/ui/feature-card";
import { FAQSection } from "@/components/FAQSection";
import { memo } from "react";

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

// Figma-accurate blob configurations with 4K responsive scaling
const blobConfigs = {
  primary: {
    className: "opacity-[0.08]",
    style: {
      width: "738.076127882232px",
      height: "528.4411916469799px",
      background: "#6FA8DC",
      filter: "blur(30px)",
    },
  },
  primaryAlt: {
    className: "opacity-[0.08]",
    style: {
      width: "738.076127882232px",
      height: "528.4411916469799px",
      background: "#6FA8DC",
      filter: "blur(30px)",
    },
  },
  purple: {
    className: "opacity-[0.08]",
    style: {
      width: "351.35442718046244px",
      height: "354.8220785084499px",
      background: "radial-gradient(circle, #C7C7D9 85.1%, transparent 100%)",
      filter: "blur(30px)",
      zIndex: 10,
    },
  },
  white: {
    className: "opacity-[0.08]",
    style: {
      width: "922px",
      height: "922px",
      background: "#FFFFFF",
      filter: "blur(50px)",
    },
  },
  large: {
    className: "opacity-[0.08]",
    style: {
      width: "550.4999968227481px",
      height: "933.7499946107921px",
      background: "#6FA8DC",
      filter: "blur(30px)",
    },
  },
};

// Memoized background blobs for better performance
const BackgroundBlobs = memo(() => (
  <>
    {/* Top Left - Primary */}
    <BackgroundBlob
      className={blobConfigs.primary.className}
      style={{
        ...blobConfigs.primary.style,
        top: "-120px",
        left: "-285px",
        transform: "rotate(0deg)",
        zIndex: 1,
      }}
    />
    {/* Top Right - White */}
    <BackgroundBlob
      className={blobConfigs.white.className}
      style={{
        ...blobConfigs.white.style,
        top: "-100px",
        left: "650px",
        transform: "rotate(0deg)",
        zIndex: 1,
      }}
    />
    {/* Below Top Left - Purple */}
    <BackgroundBlob
      className={blobConfigs.purple.className}
      style={{
        ...blobConfigs.purple.style,
        top: "678.25px",
        left: "-141.75px",
        transform: "rotate(-88.76deg)",
        zIndex: 1,
      }}
    />
    {/* Below Top Right - Large */}
    <BackgroundBlob
      className={blobConfigs.large.className}
      style={{
        ...blobConfigs.large.style,
        top: "563px",
        left: "925px",
        transform: "rotate(75deg)",
        zIndex: 1,
      }}
    />
    {/* 2nd Below Top Left - PrimaryAlt */}
    <BackgroundBlob
      className={blobConfigs.primaryAlt.className}
      style={{
        ...blobConfigs.primaryAlt.style,
        top: "712.5px",
        left: "-196px",
        transform: "rotate(0deg)",
        zIndex: 1,
      }}
    />
  </>
));

BackgroundBlobs.displayName = "BackgroundBlobs";

// Memoized hero section for better performance
const HeroSection = memo(() => (
  <section className="relative overflow-hidden">
    <div className="relative z-10 px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 flex items-center justify-center min-h-[80vh]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6 2xl:space-y-8 col-span-2">
          <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 xl:space-y-4">
            <Heading variant="h1" className="text-primary">
              Where Every Drop Resonates
            </Heading>

            <Text variant="paragraph" className="text-white">
              Artists upload only one song per Drop Day, ensuring each track
              gets the moment it deserves.
            </Text>
          </div>

          <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
            <Text
              variant="paragraph"
              className="text-white font-semibold mb-1.5 sm:mb-2"
            >
              Download the App
            </Text>
            <div className="flex gap-2">
              <AppStoreButton platform="google" />
              <AppStoreButton platform="apple" />
            </div>
          </div>
        </div>

        {/* Right side - Person with Music Icons */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
            <div className="relative z-10">
              <Image
                src="/assets/HeroImage.png"
                width={400}
                height={400}
                alt="audioval-image"
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";

// Memoized how it works section
const HowItWorksSection = memo(() => (
  <section className="relative py-4 sm:py-6 lg:py-8 xl:py-10 2xl:py-12 overflow-hidden">
    <div className="relative z-10 container-responsive">
      {/* Section Header */}
      <div className="text-center mb-4 sm:mb-6 lg:mb-8 xl:mb-12 2xl:mb-16">
        <Heading variant="h1" className="text-primary">
          How It Works
        </Heading>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12">
        <FeatureCard title="For Listeners" features={listenerFeatures} />
        <FeatureCard title="For Artists" features={artistFeatures} />
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-4 sm:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16">
        <Text variant="paragraph" className="text-gray-300">
          Submit your song for review, then get paid when it goes live on Drop
          Day.
        </Text>
      </div>
    </div>
  </section>
));

HowItWorksSection.displayName = "HowItWorksSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      <BackgroundBlobs />

      <HeroSection />

      <div
        className="px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 pt-2 sm:pt-4 lg:pt-6 xl:pt-8 2xl:pt-12 bg-[url('/assets/backGrid.png')] bg-cover bg-center"
        style={{ backgroundPosition: "center -70px" }}
      >
        <HowItWorksSection />
        <FAQSection title="Frequently Asked Questions" faqData={faqData} />
      </div>
    </main>
  );
}

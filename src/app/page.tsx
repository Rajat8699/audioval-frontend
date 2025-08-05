import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";
import { BackgroundBlob } from "@/components/ui/background-blob";
import { AppStoreButton } from "@/components/ui/app-store-button";
import { FeatureCard } from "@/components/ui/feature-card";
import { FAQSection } from "@/components/FAQSection";
import { memo } from "react";
import {
  FAQ_DATA,
  LISTENER_FEATURES,
  ARTIST_FEATURES,
  BLOB_CONFIGS,
  HERO_CONTENT,
  SECTION_TITLES,
  CTA_TEXT,
  ASSETS
} from "@/lib/constants";
import type { Metadata } from "next";
import { generateMetadata, SEO_HELPERS, generateWebsiteStructuredData, generateFAQStructuredData } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: SEO_HELPERS.home.title,
  description: SEO_HELPERS.home.description,
  keywords: SEO_HELPERS.home.keywords,
  path: SEO_HELPERS.home.path,
});

// Memoized background blobs for better performance
const BackgroundBlobs = memo(() => (
  <>
    {/* Top Left - Primary */}
    <BackgroundBlob
      className={BLOB_CONFIGS.primary.className}
      style={{
        ...BLOB_CONFIGS.primary.style,
        top: "-120px",
        left: "-285px",
        transform: "rotate(0deg)",
        zIndex: 1,
      }}
    />
    {/* Top Right - White */}
    <BackgroundBlob
      className={BLOB_CONFIGS.white.className}
      style={{
        ...BLOB_CONFIGS.white.style,
        top: "-100px",
        left: "650px",
        transform: "rotate(0deg)",
        zIndex: 1,
      }}
    />
    {/* Below Top Left - Purple */}
    <BackgroundBlob
      className={BLOB_CONFIGS.purple.className}
      style={{
        ...BLOB_CONFIGS.purple.style,
        top: "678.25px",
        left: "-141.75px",
        transform: "rotate(-88.76deg)",
        zIndex: 1,
      }}
    />
    {/* Below Top Right - Large */}
    <BackgroundBlob
      className={BLOB_CONFIGS.large.className}
      style={{
        ...BLOB_CONFIGS.large.style,
        top: "563px",
        left: "925px",
        transform: "rotate(75deg)",
        zIndex: 1,
      }}
    />
    {/* 2nd Below Top Left - PrimaryAlt */}
    <BackgroundBlob
      className={BLOB_CONFIGS.primaryAlt.className}
      style={{
        ...BLOB_CONFIGS.primaryAlt.style,
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
              {HERO_CONTENT.title}
            </Heading>

            <Text variant="paragraph" className="text-white">
              {HERO_CONTENT.subtitle}
            </Text>
          </div>

          <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
            <Text
              variant="paragraph"
              className="text-white font-semibold mb-1.5 sm:mb-2"
            >
              {HERO_CONTENT.downloadText}
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
                src={ASSETS.heroImage}
                width={400}
                height={400}
                alt="AudioVal - Best Music App for Independent Artists with Free Offline Downloads"
                priority
                className="w-full h-auto"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 400px"
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
          {SECTION_TITLES.howItWorks}
        </Heading>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12">
        <FeatureCard title={SECTION_TITLES.forListeners} features={LISTENER_FEATURES} />
        <FeatureCard title={SECTION_TITLES.forArtists} features={ARTIST_FEATURES} />
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-4 sm:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16">
        <Text variant="paragraph" className="text-gray-300">
          {CTA_TEXT.submitSong}
        </Text>
      </div>
    </div>
  </section>
));

HowItWorksSection.displayName = "HowItWorksSection";

export default function Home() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteStructuredData())
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQStructuredData(FAQ_DATA))
        }}
      />

      <main className="min-h-screen flex flex-col relative overflow-hidden">
        <BackgroundBlobs />

        <HeroSection />

        <div
          className="px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 pt-2 sm:pt-4 lg:pt-6 xl:pt-8 2xl:pt-12 bg-[url('/assets/backGrid.png')] bg-cover bg-center"
          style={{ backgroundPosition: "center -70px" }}
        >
          <HowItWorksSection />
          <FAQSection title={SECTION_TITLES.faq} faqData={FAQ_DATA} />
        </div>
      </main>
    </>
  );
}

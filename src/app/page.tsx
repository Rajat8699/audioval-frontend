import { BackgroundBlob } from "@/components/ui/background-blob";
import { FAQSection } from "@/components/FAQSection";
import { memo } from "react";
import {
  FAQ_DATA,
  BLOB_CONFIGS,
  SECTION_TITLES
} from "@/lib/constants";
import type { Metadata } from "next";
import { generateMetadata, SEO_HELPERS, generateWebsiteStructuredData, generateFAQStructuredData } from "@/lib/seo";
import HowItWorksSection from "@/components/HowItWorksSection";
import HeroSection from "@/components/HeroSection";

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

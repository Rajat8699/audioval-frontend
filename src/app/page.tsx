import { FAQSection } from "@/components/FAQSection";
import {
  FAQ_DATA,
  SECTION_TITLES
} from "@/lib/constants";
import type { Metadata } from "next";
import { generateMetadata, SEO_HELPERS, generateWebsiteStructuredData, generateFAQStructuredData } from "@/lib/seo";
import HowItWorksSection from "@/components/HowItWorksSection";
import HeroSection from "@/components/HeroSection";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export const metadata: Metadata = generateMetadata({
  title: SEO_HELPERS.home.title,
  description: SEO_HELPERS.home.description,
  keywords: SEO_HELPERS.home.keywords,
  path: SEO_HELPERS.home.path,
});

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

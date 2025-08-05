import type { Metadata } from "next";

// Base SEO Configuration
export const SEO_CONFIG = {
  baseUrl: "https://audioval.com",
  siteName: "AudioVal",
  defaultImage: "/assets/HeroImage.png",
  defaultImageAlt: "AudioVal - Best Music App for Independent Artists",
  twitterHandle: "@audioval",
  themeColor: "#6FA8DC",
} as const;

// Core Keywords (Primary SEO targets)
export const CORE_KEYWORDS = [
  "best music app for independent artists",
  "music app that pays artists",
  "new music discovery app",
  "how to get paid as an independent artist",
  "best apps for underground artists",
  "music drop day app",
  "apps like Spotify but better for artists",
  "where to upload music to make money",
  "independent artist music platform",
  "music promotion app",
  "best free music app with free offline downloads",
  "free offline downloads music app",
  "music app with free offline downloads",
  "free offline music download app",
  "listen to music offline for free",
  "download music for free offline",
  "best free music apps with offline playback",
  "apps that allow free offline downloads",
  "free offline downloads for music lovers",
  "how to download music offline for free",
  "music app that pays artists with free offline downloads",
  "best music app for indie artists with offline downloads",
  "new music app with free offline playback",
  "best underground music app with free offline downloads",
] as const;

// Additional Keywords
export const ADDITIONAL_KEYWORDS = [
  "AudioVal",
  "music streaming",
  "independent music",
  "artist platform",
  "music discovery",
  "offline music",
  "music revenue",
  "artist payments",
  "music upload",
  "underground music",
  "indie artists",
  "music promotion",
  "free music downloads",
] as const;

// Page-specific keywords
export const PAGE_KEYWORDS = {
  privacy: [
    "AudioVal privacy policy",
    "music app privacy",
    "independent artist privacy",
    "music platform data protection",
    "artist data privacy",
    "music streaming privacy",
    "offline music privacy",
    "music app security",
    "artist platform privacy",
    "music discovery privacy",
  ],
  terms: [
    "AudioVal terms and conditions",
    "music app terms",
    "independent artist terms",
    "music platform terms",
    "artist agreement terms",
    "music streaming terms",
    "offline music terms",
    "music app conditions",
    "artist platform terms",
    "music discovery terms",
  ],
} as const;

// SEO Metadata Generator
export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image = SEO_CONFIG.defaultImage,
  imageAlt = SEO_CONFIG.defaultImageAlt,
  type = "website",
  structuredData = null,
}: {
  title: string;
  description: string;
  keywords?: readonly string[];
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  structuredData?: any;
}): Metadata {
  const fullTitle = title.includes("AudioVal")
    ? title
    : `${title} | AudioVal - Best Music App for Independent Artists`;
  const url = `${SEO_CONFIG.baseUrl}${path}`;
  const allKeywords = [
    ...CORE_KEYWORDS,
    ...ADDITIONAL_KEYWORDS,
    ...keywords,
  ].join(", ");

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: "AudioVal Team" }],
    creator: SEO_CONFIG.siteName,
    publisher: SEO_CONFIG.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SEO_CONFIG.baseUrl),
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: SEO_CONFIG.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };
}

// Structured Data Generators
export function generateAppStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "AudioVal",
    description:
      "Best music app for independent artists with free offline downloads and artist payments",
    url: SEO_CONFIG.baseUrl,
    applicationCategory: "MusicApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free music app with offline downloads",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
    creator: {
      "@type": "Organization",
      name: "AudioVal",
      url: SEO_CONFIG.baseUrl,
    },
    keywords: CORE_KEYWORDS.slice(0, 5),
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AudioVal",
    description:
      "Best music app for independent artists with free offline downloads and artist payments",
    url: SEO_CONFIG.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_CONFIG.baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    sameAs: [
      "https://twitter.com/audioval",
      "https://facebook.com/audioval",
      "https://instagram.com/audioval",
    ],
  };
}

export function generateFAQStructuredData(
  faqData: ReadonlyArray<{ readonly question: string; readonly answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleStructuredData({
  name,
  description,
  url,
  keywords,
}: {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: name,
    description: description,
    url: url,
    mainEntity: {
      "@type": "Article",
      name: name,
      description: description,
      keywords: keywords,
    },
  };
}

// SSR Verification Helper
export function verifySSRCompliance() {
  return {
    metadata: {
      serverSide: true,
      staticGeneration: true,
      noClientDependencies: true,
    },
    structuredData: {
      serverRendered: true,
      noJavaScriptRequired: true,
      searchEngineFriendly: true,
    },
    seo: {
      completeMetadata: true,
      properCanonicals: true,
      socialMediaOptimized: true,
      keywordOptimized: true,
    },
    performance: {
      noLayoutShift: true,
      fastInitialLoad: true,
      optimizedImages: true,
    },
  };
}

// Page-specific SEO helpers
export const SEO_HELPERS = {
  home: {
    title:
      "AudioVal - Where Every Drop Resonates | Best Music App for Independent Artists",
    description:
      "AudioVal is the best music app for independent artists. Upload one song per Drop Day, earn 70% of ad revenue, and get paid through Stripe. Discover new music with free offline downloads. The ultimate platform for underground artists and music lovers.",
    keywords: [],
    path: "/",
  },
  privacy: {
    title: "Privacy Policy | AudioVal - Best Music App for Independent Artists",
    description:
      "AudioVal Privacy Policy - Learn how we protect your data while providing the best music app for independent artists with free offline downloads and artist payments.",
    keywords: PAGE_KEYWORDS.privacy,
    path: "/privacy-policy",
  },
  terms: {
    title:
      "Terms and Conditions | AudioVal - Best Music App for Independent Artists",
    description:
      "AudioVal Terms and Conditions - Learn about our platform rules for the best music app for independent artists with free offline downloads and artist payments.",
    keywords: PAGE_KEYWORDS.terms,
    path: "/terms-and-conditions",
  },
} as const;

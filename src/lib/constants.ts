// Contact Information
export const CONTACT_INFO = {
  email: "info@audioval.com",
  copyright: "© Copyright 2025 - Audioval.",
} as const;

// Business Information
export const BUSINESS_INFO = {
  name: "AudioVal",
  artistRevenueShare: "70%",
  minimumPayout: "$10",
  platformName: "AudioVal",
} as const;

// FAQ Data
export const FAQ_DATA = [
  {
    question: "How do artists get paid?",
    answer:
      "Artists earn 70% of ad revenue from their songs and get paid quickly through Stripe once their song goes live on Drop Day.",
  },
  {
    question: "What makes AudioVal different?",
    answer:
      "We focus on quality, not quantity — only one song upload every dropday to give every artist the spotlight. Plus, artists earn way more than on other platforms.",
  },
  {
    question: "Can I listen without ads?",
    answer:
      "Once you unlock a song after the ad, you can listen to it ad-free anytime, online or offline. We're also working on a premium version for completely ad-free listening across the app.",
  },
  {
    question: "What is Drop Day?",
    answer:
      "Drop Day is a special, scheduled date set by the CEO when all newly uploaded songs—limited to one per artist—are released together, getting maximum attention on the app's dedicated section until the next scheduled release.",
  },
  {
    question:
      "How does AudioVal ensure music quality and copyright compliance?",
    answer:
      "Our dedicated curation team carefully reviews every submitted song to maintain the high-quality listening experience AudioVal promises. We also perform copyright checks to ensure all tracks are original or properly licensed before they appear on Drop Day.",
  },
] as const;

// Feature Lists
export const LISTENER_FEATURES = [
  "Discover new music on Drop Day",
  "Listen offline or online",
  "Get personalized recommendations",
  "Unlock full tracks after previewing",
  "No more ads after you unlock a song",
] as const;

export const ARTIST_FEATURES = [
  "Upload one song per Drop Day",
  "Earn up to 10x more than Spotify",
  "Keep 70% of ad revenue",
  "Paid fast through Stripe",
] as const;

// Hero Section Content
export const HERO_CONTENT = {
  title: "Where Every Drop Resonates",
  subtitle:
    "Artists upload only one song per Drop Day, ensuring each track gets the moment it deserves.",
  downloadText: "Download the App",
} as const;

// Section Titles
export const SECTION_TITLES = {
  howItWorks: "How It Works",
  faq: "Frequently Asked Questions",
  forListeners: "For Listeners",
  forArtists: "For Artists",
} as const;

// CTA Text
export const CTA_TEXT = {
  submitSong:
    "Submit your song for review, then get paid when it goes live on Drop Day.",
} as const;

// Background Blob Configurations
export const BLOB_CONFIGS = {
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
} as const;

// Privacy Policy Content
export const PRIVACY_POLICY_SECTIONS = [
  {
    title: "1. Information We Collect",
    icon: "📊",
    items: [
      "Account Information: Name, email, password, and other signup data.",
      "Artist Data: Songs, profile info, Stripe account for payouts.",
      "Usage Data: What you listen to, likes, previews, and unlocks.",
      "Device Data: Device type, IP address, OS, and browser info.",
    ],
  },
  {
    title: "2. How We Use Your Info",
    icon: "⚙️",
    items: [
      "To operate and improve the AudioVal platform",
      "To personalize your experience and recommend music",
      "To process artist payouts",
      "To communicate updates, changes, or promotions (if opted-in)",
    ],
  },
  {
    title: "3. Sharing Your Info",
    icon: "🤝",
    content:
      "We do not sell your data. We only share with trusted third parties (e.g., Stripe for payments, analytics providers) to help us operate our service.",
  },
  {
    title: "4. Cookies & Tracking",
    icon: "🍪",
    content:
      "We use basic cookies or tracking tools (like Google Analytics) to understand site usage. You can disable cookies in your browser if you prefer.",
  },
  {
    title: "5. Your Rights",
    icon: "⚖️",
    subtitle: "You can request to:",
    items: [
      "Access or update your data",
      "Delete your account",
      "Opt-out of non-essential communication",
    ],
  },
  {
    title: "6. Security",
    icon: "🔐",
    content:
      "We implement reasonable measures to protect your data but cannot guarantee 100% security.",
  },
  {
    title: "7. Children's Privacy",
    icon: "👶",
    content: "AudioVal is not intended for users under 13 years old.",
  },
  {
    title: "8. Changes",
    icon: "📝",
    content:
      "We may update this Privacy Policy as needed. We'll notify users of major changes.",
  },
] as const;

// Terms and Conditions Content
export const TERMS_AND_CONDITIONS_SECTIONS = [
  {
    title: "1. Use of the Platform",
    icon: "🎵",
    content:
      "You agree to use AudioVal for personal, non-commercial purposes unless you are an artist uploading your own content. You must comply with all applicable laws and these Terms.",
  },
  {
    title: "2. Account Registration",
    icon: "👤",
    content:
      "To use certain features, you may need to register and create an account. You are responsible for maintaining the confidentiality of your login information.",
  },
  {
    title: "3. User Content",
    icon: "🎨",
    subtitle: "By uploading a song or content, you affirm that:",
    items: [
      "You own the rights to it or have permission to distribute it.",
      "It does not infringe on any copyright, trademark, or other legal rights.",
    ],
    additionalContent:
      "AudioVal reserves the right to reject or remove content that violates these rules.",
  },
  {
    title: "4. Payment to Artists",
    icon: "💰",
    content:
      "Artists earn 70% of ad revenue generated from their songs. Payouts are processed via Stripe, subject to Stripe's own terms and conditions.",
  },
  {
    title: "5. Intellectual Property",
    icon: "⚖️",
    content:
      "All trademarks, logos, and content on AudioVal (excluding user-submitted songs) are the property of AudioVal. You may not copy, reproduce, or distribute any part of our platform without permission.",
  },
  {
    title: "6. Termination",
    icon: "🚫",
    content:
      "We may suspend or terminate access to AudioVal at any time if you violate these terms or for any other reason.",
  },
  {
    title: "7. Changes",
    icon: "📝",
    content:
      "We reserve the right to modify these terms at any time. Continued use of AudioVal constitutes acceptance of those changes.",
  },
] as const;

// Navigation Links
export const NAVIGATION_LINKS = {
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
} as const;

// Asset Paths
export const ASSETS = {
  logo: "/assets/Logo.png",
  heroImage: "/assets/HeroImage.png",
  backGrid: "/assets/backGrid.png",
  appleStore: "/assets/applestore.png",
  playStore: "/assets/playstore.png",
} as const;

// Social Media Links (placeholder URLs)
export const SOCIAL_LINKS = {
  youtube: "#",
  discord: "#",
  pinterest: "#",
  twitter: "#",
  facebook: "#",
} as const;

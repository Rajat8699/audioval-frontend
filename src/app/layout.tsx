import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadata, SEO_HELPERS, generateAppStructuredData } from "@/lib/seo";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  ...generateMetadata({
    title: SEO_HELPERS.home.title,
    description: SEO_HELPERS.home.description,
    keywords: SEO_HELPERS.home.keywords,
    path: SEO_HELPERS.home.path,
  }),
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/Logo.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#6FA8DC",
    "msapplication-TileColor": "#6FA8DC",
    "application-name": "AudioVal",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "AudioVal",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileImage": "/assets/Logo.png",
    "msapplication-tap-highlight": "no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${raleway.variable} antialiased`}>
        {/* Structured Data for Music App - SSR compatible */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateAppStructuredData())
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

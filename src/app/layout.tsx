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

export const metadata: Metadata = generateMetadata({
  title: SEO_HELPERS.home.title,
  description: SEO_HELPERS.home.description,
  keywords: SEO_HELPERS.home.keywords,
  path: SEO_HELPERS.home.path,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/Logo.png" />
        <meta name="theme-color" content="#6FA8DC" />
        <meta name="msapplication-TileColor" content="#6FA8DC" />
        <meta name="application-name" content="AudioVal" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AudioVal" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/assets/Logo.png" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Structured Data for Music App */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateAppStructuredData())
          }}
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

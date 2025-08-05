import LegalPage from "@/components/LegalPage";
import { PRIVACY_POLICY_SECTIONS } from "@/lib/constants";
import type { Metadata } from "next";
import { generateMetadata, SEO_HELPERS, generateArticleStructuredData } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: SEO_HELPERS.privacy.title,
    description: SEO_HELPERS.privacy.description,
    keywords: SEO_HELPERS.privacy.keywords,
    path: SEO_HELPERS.privacy.path,
});

export default function PrivacyPolicy() {
    return (
        <>
            {/* Structured Data for Privacy Policy */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateArticleStructuredData({
                        name: "AudioVal Privacy Policy",
                        description: "Privacy Policy for AudioVal - Best Music App for Independent Artists",
                        url: "https://audioval.com/privacy-policy",
                        keywords: [
                            "AudioVal privacy policy",
                            "music app privacy",
                            "independent artist privacy",
                            "music platform data protection"
                        ]
                    }))
                }}
            />
            <LegalPage
                title="Privacy Policy"
                subtitle='AudioVal ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information.'
                headerIcon="🔒"
                sections={PRIVACY_POLICY_SECTIONS}
                contactSection={true}
            />
        </>
    );
}
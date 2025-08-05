import LegalPage from "@/components/LegalPage";
import { TERMS_AND_CONDITIONS_SECTIONS } from "@/lib/constants";
import type { Metadata } from "next";
import { generateMetadata, SEO_HELPERS, generateArticleStructuredData } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: SEO_HELPERS.terms.title,
    description: SEO_HELPERS.terms.description,
    keywords: SEO_HELPERS.terms.keywords,
    path: SEO_HELPERS.terms.path,
});

export default function TermAndConditions() {
    return (
        <>
            {/* Structured Data for Terms and Conditions */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateArticleStructuredData({
                        name: "AudioVal Terms and Conditions",
                        description: "Terms and Conditions for AudioVal - Best Music App for Independent Artists",
                        url: "https://audioval.com/terms-and-conditions",
                        keywords: [
                            "AudioVal terms and conditions",
                            "music app terms",
                            "independent artist terms",
                            "music platform terms"
                        ]
                    }))
                }}
            />
            <LegalPage
                title="Terms and Conditions"
                subtitle='Welcome to AudioVal. By using our website or mobile application ("App"), you agree to the following terms and conditions. If you do not agree, please do not use our platform.'
                headerIcon="📄"
                sections={TERMS_AND_CONDITIONS_SECTIONS}
                contactSection={true}
            />
        </>
    );
}
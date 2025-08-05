import { ARTIST_FEATURES, CTA_TEXT, LISTENER_FEATURES, SECTION_TITLES } from "@/lib/constants";
import Heading from "./Heading";
import Text from "./Text";
import { FeatureCard } from "./ui/feature-card";
import { Container } from "./ui/container";
import { memo } from "react";

const HowItWorksSection = memo(() => {
    return (
        <section className="relative py-4 sm:py-6 lg:py-8 xl:py-10 2xl:py-12 overflow-hidden">
            <Container className="relative z-10">
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
            </Container>
        </section>
    );
});

HowItWorksSection.displayName = "HowItWorksSection";

export default HowItWorksSection;
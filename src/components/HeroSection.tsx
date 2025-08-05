import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";
import { AppStoreButton } from "@/components/ui/app-store-button";
import { HERO_CONTENT, ASSETS } from "@/lib/constants";

const HeroSection = () => (
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
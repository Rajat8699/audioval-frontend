"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./card";
import { Separator } from "./separator";
import { AspectRatio } from "./aspect-ratio";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

interface FeatureCardProps {
  title: string;
  features: readonly string[];
  videoUrl?: string;
  className?: string;
}

const FeatureCard = ({
  title,
  features,
  videoUrl = "https://www.youtube.com/embed?v=QEEZx5GJdHI&list=RDQEEZx5GJdHI&start_radio=1",
  className,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "border-primary/20 bg-black/80 backdrop-blur-sm py-2 sm:py-3 lg:py-4 xl:py-6 px-1.5 sm:px-2 lg:px-3 xl:px-4",
        className
      )}
    >
      <CardHeader className="px-0 pb-0">
        <Heading variant="h1" className="text-primary">
          {title}
        </Heading>
      </CardHeader>
      <Separator className="px-0.5 sm:px-1 lg:px-2" />
      <CardContent className="px-0.5 sm:px-1 lg:px-2">
        {/* Bullet Points */}
        <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-1 sm:gap-1.5 lg:gap-2"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
              <Text
                variant="text"
                className="text-sm sm:text-base lg:text-lg text-gray-300"
              >
                {feature}
              </Text>
            </div>
          ))}
        </div>

        {/* Video Section */}
        {videoUrl && (
          <div className="mt-4 sm:mt-6 lg:mt-8 xl:mt-12 w-full">
            <AspectRatio ratio={16 / 9} className="w-3/4 h-full">
              <iframe
                src={videoUrl}
                className="rounded-md object-cover w-full h-full"
                title={`${title} video`}
                loading="lazy"
                allowFullScreen
              />
            </AspectRatio>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export { FeatureCard };

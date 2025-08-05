"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo } from "react";

interface AppStoreButtonProps {
  platform: "google" | "apple";
  href?: string;
  className?: string;
}

const AppStoreButton = memo<AppStoreButtonProps>(
  ({ platform, href = "#", className }) => {
    const imageSrc = platform === "google" ? "/assets/playstore.png" : "/assets/applestore.png";
    const altText = `Download on ${platform === "google" ? "Google Play" : "App Store"}`;

    return (
      <a
        href={href}
        className={cn(
          "flex items-center w-fit rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg",
          className
        )}
        aria-label={altText}
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={135}
          height={40}
          className="w-auto h-8 sm:h-10"
          sizes="(max-width: 640px) 108px, 135px"
        />
      </a>
    );
  }
);

AppStoreButton.displayName = "AppStoreButton";

export { AppStoreButton };

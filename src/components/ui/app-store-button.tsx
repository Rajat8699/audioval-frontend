"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AppStoreButtonProps {
  platform: "google" | "apple";
  href?: string;
  className?: string;
}

const AppStoreButton = ({ platform, href = "#", className }: AppStoreButtonProps) => {
  const imageSrc = platform === "google" ? "/assets/playstore.png" : "/assets/applestore.png";
  const imageAlt = `Download on ${platform}`;

  return (
    <a
      href={href}
      className={cn(
        "flex items-center w-fit rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={135}
        height={40}
      />
    </a>
  );
};

export { AppStoreButton };

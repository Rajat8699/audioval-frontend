"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { APP_STORE_LINKS } from "@/lib/constants";
import Link from "next/link";
import { GooglePlayIcon, AppStoreIcon } from "@/components/icons";

interface AppStoreButtonProps {
  platform: "google" | "apple";
  href?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const AppStoreButton = ({
  platform,
  href,
  className,
  variant = "outline",
  size = "lg"
}: AppStoreButtonProps) => {
  const defaultHref = platform === "google" ? APP_STORE_LINKS.google : APP_STORE_LINKS.apple;
  const finalHref = href || defaultHref;

  const getStoreIcon = () => {
    if (platform === "google") {
      return <GooglePlayIcon />;
    } else {
      return <AppStoreIcon />;
    }
  };

  const getStoreText = () => {
    if (platform === "google") {
      return (
        <div className="flex flex-col items-start">
          <span className="text-xs text-muted-foreground">GET IT ON</span>
          <span className="text-sm font-semibold">Google Play</span>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-start">
          <span className="text-xs text-muted-foreground">Download on the</span>
          <span className="text-sm font-semibold">App Store</span>
        </div>
      );
    }
  };

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("gap-3 p-6", className)}
    >
      <Link href={finalHref} target="_blank" rel="noopener noreferrer">
        {getStoreIcon()}
        {getStoreText()}
      </Link>
    </Button>
  );
};

export { AppStoreButton };

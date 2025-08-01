"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";

interface BackgroundBlobProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const BackgroundBlob = memo<BackgroundBlobProps>(
  ({ className, style, children }) => {
    return (
      <div
        className={cn("absolute rounded-full background-blob", className)}
        style={style}
      >
        {children}
      </div>
    );
  }
);

BackgroundBlob.displayName = "BackgroundBlob";

export { BackgroundBlob };

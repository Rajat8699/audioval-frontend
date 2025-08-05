"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "@/lib/utils";

interface AspectRatioProps
  extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {
  className?: string;
}

function AspectRatio({ className, ...props }: AspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root
      data-slot="aspect-ratio"
      className={cn("w-full overflow-hidden", className)}
      {...props}
    />
  );
}

export { AspectRatio };

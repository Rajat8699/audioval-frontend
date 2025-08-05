import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  h1: "text-4xl font-normal md:text-5xl",
  h2: "text-3xl font-normal md:text-4xl lg:text-5xl",
  h3: "text-2xl font-normal md:text-3xl lg:text-4xl",
  h4: "text-xl font-normal md:text-2xl lg:text-3xl",
  h5: "text-lg font-normal md:text-xl lg:text-2xl",
  h6: "text-base font-normal md:text-lg lg:text-xl",
} as const;

const Heading = React.memo<HeadingProps>(({
  variant = "h1",
  children,
  className,
  ...props
}) => {
  const baseStyles = "font-bold font-sans leading-tight";
  const classes = cn(baseStyles, variantStyles[variant], className);

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
});

Heading.displayName = "Heading";

export default Heading;

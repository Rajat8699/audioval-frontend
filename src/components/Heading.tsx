import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  variant = "h1",
  children,
  className,
  ...props
}) => {
  const baseStyles = "font-bold font-sans leading-tight";

  const variantStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    h2: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    h3: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
    h4: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    h5: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
    h6: "text-base md:text-lg lg:text-xl xl:text-2xl",
  };

  const renderHeading = () => {
    const classes = cn(baseStyles, variantStyles[variant], className);

    switch (variant) {
      case "h1":
        return (
          <h1 className={classes} {...props}>
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 className={classes} {...props}>
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 className={classes} {...props}>
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4 className={classes} {...props}>
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5 className={classes} {...props}>
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6 className={classes} {...props}>
            {children}
          </h6>
        );
      default:
        return (
          <h1 className={classes} {...props}>
            {children}
          </h1>
        );
    }
  };

  return renderHeading();
};

export default Heading;

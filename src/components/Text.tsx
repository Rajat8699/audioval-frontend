import React from "react";
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "paragraph"
    | "code"
    | "blockquote"
    | "ul"
    | "ol"
    | "label"
    | "text";
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  variant = "paragraph",
  children,
  className,
  ...props
}) => {
  const baseStyles = "font-sans";

  const variantStyles = {
    paragraph: "text-base md:text-lg leading-relaxed",
    code: "font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200",
    blockquote:
      "border-l-4 border-primary pl-4 italic text-lg text-gray-600 dark:text-gray-300",
    ul: "list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed",
    ol: "list-decimal list-inside space-y-2 text-base md:text-lg leading-relaxed",
    label: "text-sm font-medium text-gray-700 dark:text-gray-300",
    text: "text-base leading-relaxed",
  };

  const renderText = () => {
    const classes = cn(baseStyles, variantStyles[variant], className);

    switch (variant) {
      case "paragraph":
        return (
          <p className={classes} {...props}>
            {children}
          </p>
        );
      case "code":
        return (
          <code className={classes} {...props}>
            {children}
          </code>
        );
      case "blockquote":
        return (
          <blockquote className={classes} {...props}>
            {children}
          </blockquote>
        );
      case "ul":
        return (
          <ul className={classes} {...props}>
            {children}
          </ul>
        );
      case "ol":
        return (
          <ol className={classes} {...props}>
            {children}
          </ol>
        );
      case "label":
        return (
          <label className={classes} {...props}>
            {children}
          </label>
        );
      case "text":
        return (
          <span className={classes} {...props}>
            {children}
          </span>
        );
      default:
        return (
          <p className={classes} {...props}>
            {children}
          </p>
        );
    }
  };

  return renderText();
};

export default Text;

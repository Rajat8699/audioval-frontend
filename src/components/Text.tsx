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

const variantStyles = {
  paragraph: "text-base md:text-lg leading-relaxed",
  code: "font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200",
  blockquote:
    "border-l-4 border-primary pl-4 italic text-lg text-gray-600 dark:text-gray-300",
  ul: "list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed",
  ol: "list-decimal list-inside space-y-2 text-base md:text-lg leading-relaxed",
  label: "text-sm font-medium text-gray-700 dark:text-gray-300",
  text: "text-base leading-relaxed",
} as const;

const variantElements = {
  paragraph: "p",
  code: "code",
  blockquote: "blockquote",
  ul: "ul",
  ol: "ol",
  label: "label",
  text: "span",
} as const;

const Text = React.memo<TextProps>(({
  variant = "paragraph",
  children,
  className,
  ...props
}) => {
  const baseStyles = "font-sans";
  const classes = cn(baseStyles, variantStyles[variant], className);
  const Component = variantElements[variant] as keyof JSX.IntrinsicElements;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
});

Text.displayName = "Text";

export default Text;

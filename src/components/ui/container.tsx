import { cn } from "@/lib/utils";
import { memo } from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    variant?: "responsive" | "wide" | "ultra-wide" | "4k";
    as?: keyof JSX.IntrinsicElements;
}

const containerVariants = {
    responsive: "max-w-7xl mx-auto px-4",
    wide: "max-w-screen-xl mx-auto px-4",
    "ultra-wide": "max-w-screen-2xl mx-auto px-4",
    "4k": "max-w-[2000px] mx-auto px-4",
} as const;

const Container = memo<ContainerProps>(({
    children,
    className,
    variant = "responsive",
    as: Component = "div",
}) => {
    return (
        <Component className={cn(containerVariants[variant], className)}>
            {children}
        </Component>
    );
});

Container.displayName = "Container";

export { Container }; 
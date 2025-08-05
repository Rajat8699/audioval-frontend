import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function for performance optimization
  debounce: <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance optimization
  throttle: <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Memoization helper
  memoize: <T extends (...args: unknown[]) => unknown>(fn: T): T => {
    const cache = new Map<string, unknown>();
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }) as T;
  },
} as const;

// SEO and accessibility utilities
export const seoUtils = {
  // Generate structured data for better SEO
  generateStructuredData: (data: Record<string, unknown>) => {
    return JSON.stringify({
      "@context": "https://schema.org",
      ...data,
    });
  },

  // Generate meta description
  generateMetaDescription: (text: string, maxLength: number = 160) => {
    return text.length > maxLength
      ? text.substring(0, maxLength - 3) + "..."
      : text;
  },

  // Generate canonical URL
  generateCanonicalUrl: (
    path: string,
    baseUrl: string = "https://audioval.com"
  ) => {
    return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  },
} as const;

// Image optimization utilities
export const imageUtils = {
  // Generate responsive image sizes
  generateImageSizes: (
    maxWidth: number,
    breakpoints: number[] = [640, 1024, 1920]
  ) => {
    const sizes = breakpoints
      .map((bp) => {
        const width = Math.min(maxWidth, bp);
        return `(max-width: ${bp}px) ${width}px`;
      })
      .join(", ");
    return `${sizes}, ${maxWidth}px`;
  },

  // Generate image alt text
  generateAltText: (title: string, context?: string) => {
    return context ? `${title} - ${context}` : title;
  },
} as const;

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to get the correct image path for GitHub Pages
export function getImagePath(path: string) {
  const basePath = process.env.NODE_ENV === 'production' ? '/Iraklis_Portfolio_Website_final' : '';
  return `${basePath}${path}`;
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

function formatDate(isoString: string): string {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getReleaseDateDisplay(releaseDate: string): string {
    const date = new Date(releaseDate);
    const year = date.getFullYear();

    return year < 2019 ? "Unknown" : formatDate(releaseDate);
}

export function cleanEnum(value?: string | null): string | null {
    if (!value) return value ?? null;
    const parts = value.split("::");
    return parts.length > 1 ? parts.pop() || null : value;
}

export const safeValue = (val: any, suffix = "") => {
  if (val === null || val === undefined || val === "") return "Unknown";
  return `${val}${suffix}`;
};

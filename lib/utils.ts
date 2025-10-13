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

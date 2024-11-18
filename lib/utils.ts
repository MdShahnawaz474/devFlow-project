import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getTimeStamp = (createdAt: Date): string => {
  const now: Date = new Date();
  const timeDifference: number = now.getTime() - createdAt.getTime();

  const seconds: number = Math.floor(timeDifference / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  const months: number = Math.floor(days / 30); // Approximation for months
  const years: number = Math.floor(days / 365); // Approximation for years

  if (years > 0) {
    return `${years} year${years === 1 ? '' : 's'} ago`;
  } else if (months > 0) {
    return `${months} month${months === 1 ? '' : 's'} ago`;
  } else if (days > 0) {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else {
    return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  }
};

export const formatAndDivideNumber = (inputNumber: number): string => {
  if (inputNumber >= 1000000) {
    return (inputNumber / 1000000).toFixed(1) + 'M';
  } else if (inputNumber >= 1000) {
    return (inputNumber / 1000).toFixed(1) + 'k';
  } else {
    return inputNumber.toString();
  }
};
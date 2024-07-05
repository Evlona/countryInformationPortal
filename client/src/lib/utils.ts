import { type ClassValue, clsx } from "clsx";
import { revalidatePath } from "next/cache";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a new object with selected keys from the input object.
 * @template T - The type of the input object.
 * @template K - The keys to pick from the input object.
 * @param {T} input - The input object from which to pick keys.
 * @param {K[]} keys - The keys to pick from the input object.
 * @returns {Pick<T, K>} - A new object containing only the selected keys.
 */
export function pick<T extends Object, K extends keyof T>(
  input: T,
  keys: K[]
): Pick<T, K> {
  const pickedObject = keys.reduce((obj, key) => {
    obj[key] = input[key];
    return obj;
  }, {} as Pick<T, K>);

  return pickedObject;
}

/**
 * Capitalizes the first letter of a string and converts the rest of the letters to lowercase.
 * @param {string} text - The input text to capitalize.
 * @returns {string} The capitalized text.
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Splits a string into an array of substrings based on capital letters.
 * @param {string} text - The input text to split based on capital letters.
 * @returns {string[]} An array of substrings split based on capital letters.
 */
export function splitByCapitalLetters(text: string): string[] {
  return text.split(/(?=[A-Z])/);
}

export async function httpRequest<T>(
  input: URL | RequestInfo,
  opt: RequestInit = {}
): Promise<T> {
  const response = await fetch(input, {
    ...opt,
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw Error(`Api response ${response.status}`);
  }
  revalidatePath("page");
  return response.json().then<T>((j) => j.data);
}

export const transformStringInputToArrayOfWords = (value: string) =>
  value.split(/;|,| |\n/);

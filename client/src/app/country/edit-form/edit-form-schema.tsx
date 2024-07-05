import { z } from "zod";

const lettersSpacesCommasOnly = /^[A-Za-z ,]+$/;

export const formSchema = z
  .object({
    capital: z
      .string()
      .min(1, { message: "Most enter at least one capital" })
      .refine((value) => lettersSpacesCommasOnly.test(value), {
        message: "Capital must contain only letters comma and space",
      })
      .optional(),
    population: z
      .number()
      .min(1, "population most be greater then 0")
      .max(Number.MAX_VALUE)
      .optional(),
  })
  .refine((data) => data.capital || data.population, {
    message: "At least one of the fields most be provided",
    path: ["capital", "population"],
  });

export type FormSchemaType = z.infer<typeof formSchema>;

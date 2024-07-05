import { z, Schema } from 'zod';

const objectIdRegex = /^[0-9a-fA-F]{24}$/;
const lettersOnly = /^[A-Za-z]+$/;

export const validateId: Schema = z.object({
    id: z.string().regex(objectIdRegex, { message: 'Invalid ID' }),
});

export const validatePopulationAndCapital: Schema = z.object({
    population: z.number().min(1).max(Number.MAX_VALUE),
    capital: z
        .string()
        .regex(lettersOnly, {
            message: 'Invalid input string array contains only letters',
        })
        .array()
        .min(1),
});

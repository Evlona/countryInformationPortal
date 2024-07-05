import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ZodSchema } from 'zod';

const validate =
    <T>(schema: {
        params?: ZodSchema<T>;
        query?: ZodSchema<T>;
        body?: ZodSchema<T>;
    }) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            if (schema.params) {
                schema.params.parse(req.params);
            }
            if (schema.query) {
                schema.query.parse(req.query);
            }
            if (schema.body) {
                schema.body.parse(req.body);
            }
            next();
        } catch (e) {
            return res.status(400).json({ e });
        }
    };

export { validate };

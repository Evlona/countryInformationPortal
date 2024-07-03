import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../middleware/async';
import * as countriesService from '../services/countries';
import { StatusCodes } from 'http-status-codes';
import { ErrorResponse } from '../utils/errorResponse';

export const getCountryByName = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.params;
        const country = await countriesService.getCountryByName(name);

        if (!country) {
            return next(
                new ErrorResponse(
                    `Country not found with name of ${name}`,
                    StatusCodes.NOT_FOUND,
                ),
            );
        }

        res.status(StatusCodes.OK).json({
            success: true,
            data: country,
        });
    },
);

export const getCountries = asyncHandler(
    async (_req: Request, res: Response, _next: NextFunction) => {
        const countries = await countriesService.getCountries();

        res.status(StatusCodes.OK).json({
            success: true,
            data: countries,
        });
    },
);

export const updateCountry = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.params;
        const { population, capital } = req.body;

        const updatedCountry = await countriesService.updateCountry(name, {
            population,
            capital,
        });

        if (!updatedCountry) {
            return next(
                new ErrorResponse(
                    `Country not found with name of ${name}`,
                    StatusCodes.NOT_FOUND,
                ),
            );
        }

        res.status(StatusCodes.OK).json({
            success: true,
            data: updatedCountry,
        });
    },
);

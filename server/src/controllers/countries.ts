import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../middleware/async';
import { StatusCodes } from 'http-status-codes';
import countriesService from '../services/countries';

export const getCountryById = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction) => {
        const { id } = req.params;
        const country = await countriesService.getCountryById(id);

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
    async (req: Request, res: Response, _next: NextFunction) => {
        const { id } = req.params;
        const { population, capital } = req.body;

        const updatedCountry = await countriesService.updateCountry(id, {
            population,
            capital,
        });

        res.status(StatusCodes.OK).json({
            success: true,
            data: updatedCountry,
        });
    },
);

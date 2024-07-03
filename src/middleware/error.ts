import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorResponse } from '../utils/errorResponse';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const error: ErrorResponse = {
        ...err,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    };

    console.error(err.stack);

    return res.status(error.statusCode).json({
        success: false,
        error: error.message || 'Server Error',
    });
};

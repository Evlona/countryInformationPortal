import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorResponse } from '../utils/errorResponse';

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    const error: ErrorResponse = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Server Error',
        name: err.name,
        stack: err.stack,
    };

    console.error(error.stack);

    return res.status(error.statusCode).json({
        success: false,
        error: error.message,
    });
};

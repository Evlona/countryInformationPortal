import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorResponse } from '../utils/errorResponse';

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    let error = err as ErrorResponse;

    if (!(err instanceof ErrorResponse)) {
        error = {
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            message: err.message || 'Server Error',
            name: err.name,
            stack: err.stack,
        };
    }

    return res.status(error.statusCode).json({
        success: false,
        error: error.message,
    });
};

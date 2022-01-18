import { ErrorRequestHandler, NextFunction } from "express";
import { StatusCodes } from "../enums/StatusCodes";
import HttpException from "../exceptions/HttpException";

const ErrorsHandlingMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    const debugError = error as HttpException;

    if(debugError.statusCode) {
        res.status(error.statusCode).json({
            message: error.message
        });
    }
    else {
        res.status(StatusCodes.InternalServerError).json({
            message: error.message
        });
    }
}

export default ErrorsHandlingMiddleware;
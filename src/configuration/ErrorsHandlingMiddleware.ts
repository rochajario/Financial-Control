import { ErrorRequestHandler } from "express";
import { HttpRequestError } from "../exceptions/HttpRequestError";

const ErrorsHandlingMiddleware: ErrorRequestHandler = (exception, req, res, next) => {
    if(exception instanceof HttpRequestError) {
        res.status(exception.status).json({
            message: exception.message,
            errors: exception.errors
        });
        return;
    }
    res.status(500).json({
        message: 'An unexpected error ocurred'
    });
}

export default ErrorsHandlingMiddleware;
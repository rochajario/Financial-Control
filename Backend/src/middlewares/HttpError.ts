import { ErrorRequestHandler } from "express";

class BaseError {
    constructor() {
        Error.apply(this, arguments);
    }
}
BaseError.prototype = new Error();
export class HttpException extends BaseError
{
    constructor(public status: number, public message: string, public errors: any[] | undefined = undefined) {
        super();
    }
}

const HttpExceptionFilter: ErrorRequestHandler = (exception, req, res, next) => {
    if(exception instanceof HttpException) {
        res.status(exception.status).json({
            message: exception.message,
            errors: exception.errors
        });
        return;
    }
    res.status(500).json({
        message: exception.message
    });
}

export default HttpExceptionFilter;
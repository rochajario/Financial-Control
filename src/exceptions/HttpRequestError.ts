class BaseError {
    constructor() {
        Error.apply(this, arguments);
    }
}

BaseError.prototype = new Error();

export class HttpRequestError extends BaseError
{
    constructor(public status: number, public message: string, public errors: any[] = null) {
        super();
    }
}
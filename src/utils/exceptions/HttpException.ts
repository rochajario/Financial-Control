import { StatusCodes } from "../enums/StatusCodes";

export default class HttpException extends Error
{
    public statusCode : StatusCodes;

    constructor(statusCode: StatusCodes, public message: string) {
        super(message);
        this.statusCode = statusCode;
    } 
}
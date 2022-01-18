import { RequestHandler } from "express";
import { StatusCodes } from "../enums/StatusCodes";
import HttpException from "../exceptions/HttpException";

export const InexistentRouteMiddleware : RequestHandler = function (req: any, res: any) {
    const request = req as Request;
    throw new HttpException(StatusCodes.NotFound, `No such ${request.url} route active.`);
}
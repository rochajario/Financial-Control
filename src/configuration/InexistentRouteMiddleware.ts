import { RequestHandler, Request } from "express";

const InexistentRouteMiddleware : RequestHandler = function (req: any, res: any) {
    const request = req as Request;
    res.status(404).json({message: `No such ${request.url} route active.`});
}

export default InexistentRouteMiddleware;
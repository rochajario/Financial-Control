import { RequestHandler, Request } from "express";

const InexistentRoute : RequestHandler = function (req: any, res: any) {
    const request = req as Request;
    res.status(404).json({message: `No such method ${request.method} mapped to ${request.url} route.`});
}

export default InexistentRoute;
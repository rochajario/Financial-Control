import { NextFunction, Request, Response } from 'express';
import { Router } from "express";

export class WakeupRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post('/', this.wakeup);
    }

    async wakeup(request: Request, response: Response, next: NextFunction) {
        response.status(204).send();
    }
}
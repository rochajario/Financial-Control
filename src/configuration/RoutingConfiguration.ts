import { Request, Response } from 'express';
import { Routes } from "../routes";

export const routeConfig = (app: any) => {
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(res => res !== null && res !== undefined ? res.send(res) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });
}
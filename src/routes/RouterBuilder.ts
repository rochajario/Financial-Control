import express, { Router } from "express";
import { ICustomRouter } from "../interfaces/routes/ICustomRouter";

export class RouterBuilder {
    private static router: Router = express.Router();

    public static withRoute(endpoint: string, router: ICustomRouter): Router {
        this.router.use(endpoint, router.getConfiguration());
        return this.router;
    }
}
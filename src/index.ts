import "reflect-metadata";
import {createConnection} from "typeorm";
import * as dotenv from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import { InexistentRouteMiddleware } from "./configuration/InexistentRouteMiddleware";
import ErrorsHandlingMiddleware from "./configuration/ErrorsHandlingMiddleware";

dotenv.config();
if (!process.env.APP_PORT) {
    console.log('Error: Couldn\'t load Environment Variables.');
}

createConnection().then(async connection => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    app
    .use(ErrorsHandlingMiddleware)
    .all('*', InexistentRouteMiddleware);
    // start express server
    app.listen(process.env.APP_PORT);

    console.log(`Server has started on port ${process.env.APP_PORT}.`);

}).catch(error => console.log(error));

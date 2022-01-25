import "reflect-metadata";
import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from 'cors';
import * as bodyParser from "body-parser";
import InexistentRouteMiddleware from "./configuration/InexistentRouteMiddleware";
import ErrorsHandlingMiddleware from "./configuration/ErrorsHandlingMiddleware";
import { options } from "./configuration/AllowedOrigins";
import { createConnection } from "typeorm";
import { routeConfig } from "./configuration/RoutingConfiguration";

dotenv.config();
if (!process.env.PORT) {
    console.log('Error: Couldn\'t load Environment Variables.');
}

createConnection().then(async connection => {
    const app = express();
    app.disable("x-powered-by");

    app.use(cors(options));
    app.use(bodyParser.json());
    routeConfig(app);

    app
        .use(ErrorsHandlingMiddleware)
        .all('*', InexistentRouteMiddleware);

    app.listen(process.env.PORT);
    console.log(`Server has started on port ${process.env.PORT}.`);

}).catch(error => console.log(error));

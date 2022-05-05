import "reflect-metadata";
import {createConnection} from "typeorm";
import * as dotenv from 'dotenv';
import { Server } from "./server";

dotenv.config();
if (!process.env.PORT) {
    console.log('Error: Couldn\'t load Environment Variables.');
}

createConnection().then(async connection => {
    const server = new Server();
    server.start();
}).catch(error => console.log(error));

/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
import ErrorsHandlingMiddleware from "./utils/middlewares/ErrorsHandlingMiddleware";
import TransactionsRouter from "./routes/TransactionsRouter";
import { RouterBuilder } from "./routes/RouterBuilder";
import { InexistentRouteMiddleware } from "./utils/middlewares/InexistentRouteMiddleware";
 
 dotenv.config();
/**
 * App Variables
 */
 if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();
/**
 *  App Configuration
 */
app
   .use(express.json())

//Routing config
app
   .use(
      RouterBuilder
         .withRoute('/transactions', new TransactionsRouter())
      );

//Error Handling config
app
   .all('*', InexistentRouteMiddleware)
   .use(ErrorsHandlingMiddleware);

/**
 * Server Activation
 */
 app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
 });
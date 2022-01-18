import express, { Router } from "express";
import TransactionController from "../controllers/TransactionController";
import { ICustomRouter } from "../interfaces/routes/ICustomRouter";

export default class TransactionsRouter implements ICustomRouter {
    private router: Router;
    private controller: TransactionController;

    constructor(){
        this.controller = new TransactionController();
        this.router = express.Router();
        this.endpointConfiguration();
    }

    private endpointConfiguration():void 
    {
        this.router.get("/", this.controller.listAll);
        this.router.get("/:id", this.controller.listSpecific)
        this.router.post("/", this.controller.create);
    }

    getConfiguration(): express.Router {
        return this.router;
    }
}
import { Request, Response } from "express";
import { TransactionService } from "../services/TransactionService";
import Logger from "../utils/decorators/HandleErrors";

export default class TransactionController
{

    private _service : TransactionService;

    constructor() {
        this._service = new TransactionService();
    }

    @Logger
    public listAll(req: Request, res: Response)
    {
        const transactionList = TransactionService.listAll();
        res.status(200).json(transactionList);
            
    }

    @Logger
    public create(req: Request, res: Response)
    {
        const transaction = TransactionService.create(req.body)
        res.status(200).json(transaction);
    }

    @Logger
    public listSpecific(req: Request, res: Response)
    {
        const transaction = TransactionService.listSpecific(req.params.id);
        res.status(200).json(transaction);
    }
}
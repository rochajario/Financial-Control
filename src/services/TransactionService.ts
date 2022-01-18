import { IRepository } from "../interfaces/repositories/IRepository";
import BaseTransaction from "../models/BaseTransaction";
import Transaction from "../models/Transaction";
import TransactionRepository from "../repositories/TransactionRepository";
import { StatusCodes } from "../utils/enums/StatusCodes";
import HttpException from "../utils/exceptions/HttpException";

export class TransactionService 
{
    private static _repo : IRepository<Transaction> = new TransactionRepository();

    public static listAll(): Array<Transaction>
    {
        const transactions = this._repo.findAll();
        if (transactions.length == 0) {
            throw new HttpException(StatusCodes.NotFound, "No entry found.");
        }
        return transactions;
    }

    public static listSpecific(id: string): Transaction
    {
        const transaction =  this._repo.listSpecific(parseInt(id));
        if(!transaction)
        {
            throw new HttpException(StatusCodes.NotFound, `No transaction found with id: ${id}.`);
        }
        return transaction;
    }

    public static create(input: BaseTransaction) : Transaction
    {
        const newEntry = new Transaction();
        newEntry.id = this.listAll().length+1;
        newEntry.value = input.value;
        newEntry.date = input.date;
        newEntry.description = input.description;

        return this._repo.create(newEntry);
    }
}
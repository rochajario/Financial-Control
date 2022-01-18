import { IRepository } from "../interfaces/repositories/IRepository";
import Transaction from "../models/Transaction";

export default class TransactionRepository implements IRepository<Transaction>
{
    private transactions : Array<Transaction> = [
        {
             id: 1,
             description: "Salary payment",
             date: "2020-01-01",
             value: 2200,
         }
     ];

    public create(entry: Transaction): Transaction {
        const id = this.transactions.push(entry);
        return this.transactions[id-1];
    }
    public update(id: number, entry: Transaction): Transaction {
        throw new Error("Method not implemented.");
    }
    public remove(id: number): void {
        throw new Error("Method not implemented.");
    }
    public findAll(): Transaction[] {
        return this.transactions;
    }
    public listSpecific(id: number): Transaction | null {
        return this.transactions.filter(x => x.id == id)[0];
    }
}

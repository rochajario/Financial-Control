export interface IRepository<T>
{
    //Command
    create(entry: T): T;
    update(id: number, entry: T): T;
    remove(id: number): void;
    
    //Query
    findAll() : Array<T>;
    listSpecific(id: number) : T | null;
}
import { getRepository} from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Entry } from "../entity/Entry";
import { HttpRequestError } from "../exceptions/HttpRequestError";
import { entrySanitizer } from "../domain/sanitizers/EntrySanitizer";

export class EntryController {

    private entryRepository = getRepository(Entry);

    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.entryRepository.find();
        if(!result) {            
            throw new HttpRequestError (404, "Nothing Found");
        }
        response.status(200).json(result);
    }

    async receivings(request: Request, response: Response, next: NextFunction) {
        const result = await this.entryRepository.find({
            where:{
                type: "Receiving"
            }
        });
        if(!result) {            
            throw new HttpRequestError (404, "Nothing Found");
        }
        response.status(200).json(result);
    }

    async payments(request: Request, response: Response, next: NextFunction) {
        const result = await this.entryRepository.find({
            where:{
                type: "Payment"
            }
        });
        if(!result) {            
            throw new HttpRequestError (404, "Nothing Found");
        }
        response.status(200).json(result);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try{
            const result = await this.entryRepository.findOne(request.params.id);
            if(!result) {
                throw new HttpRequestError (404, "Nothing Found");
            }
            response.status(200).json(result);
        } catch(e) {
            next(e);
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try 
        {
            const entry = entrySanitizer(request);
            const result = await this.entryRepository.save(entry);
            response.status(200).json(result);
        }
        catch (e)
        {
            next(e);
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let entryToRemove = await this.entryRepository.findOne(request.params.id);
        await this.entryRepository.remove(entryToRemove);
    }
}
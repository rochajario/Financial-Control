import { EntryService } from "../domain/services/EntryService";
import { NextFunction, Request, Response } from "express";

export class EntryController {

    private _service = new EntryService();

    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this._service.getAllEntries();
        response.status(200).json(result);
    }

    async receivings(request: Request, response: Response, next: NextFunction) {
        const result = await this._service.getAllReceivings();
        response.status(200).json(result);
    }

    async payments(request: Request, response: Response, next: NextFunction) {
        const result = await this._service.getAllPayments();
        response.status(200).json(result);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this._service.getSpecificEntry(request);
            response.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this._service.saveEntry(request);
            response.status(200).json(result);
        }
        catch (e) {
            next(e);
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this._service.updateEntry(request);
            response.status(200).json(result);
        }
        catch (e) {
            next(e);
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this._service.removeEntry(request);
    }
}
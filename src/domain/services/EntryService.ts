import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { EntrySanitizer } from "../sanitizers/EntrySanitizer";
import { entryRules } from "../validators/ValidationRules";
import { Entry } from "../../entity/Entry";
import { HttpRequestError } from "../../exceptions/HttpRequestError";
import * as jwt from 'jsonwebtoken';

export class EntryService {
    private _entrySanitizer = new EntrySanitizer(entryRules);
    private _entryRepository = getRepository(Entry);

    public async getAllEntries(): Promise<Array<Entry>> {
        const result = await this._entryRepository.find();
        if (!result.length) {
            throw new HttpRequestError(404, "Nothing Found");
        }
        return result;
    }

    public async getAllReceivings(): Promise<Array<Entry>> {
        return this.getEntriesWithTypeFilter("Receiving");
    }

    public async getAllPayments(): Promise<Array<Entry>> {
        return this.getEntriesWithTypeFilter("Payment");
    }

    public async getSpecificEntry(request: Request): Promise<Entry> {
        const result = await this._entryRepository.findOne(request.params.id);
        if (!result) {
            throw new HttpRequestError(404, "Nothing Found");
        }
        return result;
    }

    public async saveEntry(request: Request): Promise<Entry> {
        const entry = this._entrySanitizer.transformRequest(request);
        return await this._entryRepository.save(entry);
    }

    public async updateEntry(request: Request): Promise<Entry> {
        const id = request.params.id;
        const entry = this._entrySanitizer.transformRequest(request);
        await this._entryRepository.update(id, entry);
        return await this._entryRepository.findOne(id);
    }

    public async removeEntry(request: Request): Promise<void> {
        const entryToRemove = await this._entryRepository.findOne(request);
        await this._entryRepository.delete(entryToRemove);
    }

    private async getEntriesWithTypeFilter(filter: string): Promise<Array<Entry>> {
        const result = await this._entryRepository.find({
            where: {
                type: filter
            }
        });
        if (!result) {
            throw new HttpRequestError(404, "Nothing Found");
        }
        return result;
    }
}
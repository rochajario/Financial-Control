import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import { Entry, EntryRequest, getSanitizedEntry } from '../entity/Entry';
import { HttpException } from '../middlewares/HttpError';

export class EntryController {
    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.body.userId;
            const result = await getRepository(Entry).find({
                where: {
                    user: {
                        id: userId
                    }
                }
            });
            if(result.length === 0) {
                throw new HttpException(404,`No entry made by user with id: ${userId} was found.`)
            }

            res.status(200).json(result);
        }
        catch (err) {
            next(err)
        }
    }

    async one(req: Request, res: Response, next: NextFunction) {
        try {
            const itemId = req.params.id;
            const userId = req.body.userId;
            const result = await getRepository(Entry).findOne({
                where: {
                    id: itemId,
                    user: {
                        id: userId
                    }
                }
            });
            if(!result) {
                throw new HttpException(404,`No entry with id: ${itemId} was found.`)
            }

            res.status(200).json(result);
        }
        catch (err) {
            next(err)
        }
    }

    async receivings(req: Request, res: Response, next: NextFunction) {
        try{
            const userId = req.body.userId;
            const result = await EntryController.getEntriesWithTypeFilter("Receiving", userId);
            res.status(200).json(result);

        }catch(err){
            next(err);
        }
    }

    async payments(req: Request, res: Response, next: NextFunction) {
        try{
            const userId = req.body.userId;
            const result = await EntryController.getEntriesWithTypeFilter("Payment", userId);
            res.status(200).json(result);

        }catch(err){
            next(err);
        }
    }

    async save(req: Request, res: Response, next: NextFunction) {
        try {
            const entityManager = getManager();
            const queryResult = await entityManager.query(EntryController.insertQuery(req));
            const addedEntry = await getRepository(Entry).findOne({where:{id: queryResult.insertId}});
            res.status(201).json(addedEntry);
        }
        catch (e) {
            next(e);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            //TODO - Add a verification for id param. It must be number all times.
            const entityManager = getManager();
            await entityManager.query(EntryController.updateQuery(req));
            const updatededEntry = await getRepository(Entry).findOne({where:{id: req.params.id}});
            res.status(200).json(updatededEntry);
        }
        catch (e) {
            next(e);
        }
    }

    private static async getEntriesWithTypeFilter(filter: string, userId: number): Promise<Array<Entry>> {
        const result = await getRepository(Entry).find({
            where: {
                type: filter,
                user:{
                    id: userId
                }
            }
        });
        if (result.length === 0) {
            throw new HttpException(404, `No ${filter} entry was found for user with id: ${userId}.`);
        }
        return result;
    }

    private static insertQuery(request: Request):string {
        const parsedRequest = <any> getSanitizedEntry(request);

        return `INSERT INTO ${process.env.TYPEORM_DATABASE}.entry  ( description, value, type, category, userId ) VALUES ( "${parsedRequest.description}", ${parsedRequest.value}, "${parsedRequest.type}", "${parsedRequest.category}", "${parsedRequest.userId}");`;
    }

    private static updateQuery(request: Request):string {
        const parsedRequest = <any> getSanitizedEntry(request);

        return `UPDATE ${process.env.TYPEORM_DATABASE}.entry SET description = "${parsedRequest.description}", value = ${parsedRequest.value}, type = "${parsedRequest.type}", category = "${parsedRequest.category}" WHERE id = ${request.params.id} AND userId = ${parsedRequest.userId};`;
    }
}
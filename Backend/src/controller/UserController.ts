import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { getSanitizedUser, User } from "../entity/User";
import { HttpException } from "../middlewares/HttpError";

export class UserController {

    async one(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.body.userId;
            const result = <User>await getRepository(User).findOne(id);
            if (!result) {
                throw new HttpException(404, "Nothing found.");
            }
            res.status(200).json(result.toDto());
        }
        catch (err) {
            next(err)
        }
    }

    async save(req: Request, res: Response, next: NextFunction) {
        try {
            const user = getSanitizedUser(req);

            const result = await getRepository(User).findOne({ where: { email: user.email } });
            if(result) {
                throw new HttpException(422,'E-mail Already Registred');
            }

            const queryResult = await getRepository(User).save(user);
            queryResult.password = undefined;
            res.status(201).json(queryResult);
        }
        catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.body.userId;

            const user = getSanitizedUser(req);
            await getRepository(User).update(id, user);
            const result = <User>await getRepository(User).findOne(id);
            res.status(200).json(result.toDto());
        }
        catch (err) {
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.body.userId;

            await getRepository(User).delete(id);
            res.status(200).send()
        }
        catch (err) {
            next(err)
        }
    }

    async getByEmail(userEmail: string) {
        const result = await getRepository(User).findOne({ where: { email: userEmail } });
        if (!result) {
            throw new HttpException(404, "Nothing Found");
        }
        return result;
    }
}
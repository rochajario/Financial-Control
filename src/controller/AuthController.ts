import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { HttpException } from '../middlewares/HttpError';
import { UserController } from './UserController';

const getUserByEmail = async (email: string) => await new UserController().getByEmail(email);

export class AuthController {

    async login(request: Request, response: Response, next: NextFunction) {
        try {
            const databaseUser = await getUserByEmail(request.body.email);
            const validUser = await bcrypt.compare(request.body.password, databaseUser.password)
            if (!validUser) {
                throw new HttpException(400, "Login Credentials doesn't match");
            }
            const token = await jwt.sign({ id: databaseUser.id, username: databaseUser.username }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });
            response.status(200).json({
                user:{
                    id: databaseUser.id,
                    username: databaseUser.username,
                    email: databaseUser.email,
                    token: token
                }
            })
        }
        catch (err) {
            next(err)
        }
    }

    async authorize(request: Request, response: Response, next: NextFunction) {
        try {
            const token = request.headers["authorization"] as string;
            const payload = <any> jwt.verify(token, process.env.JWT_SECRET);
            request.body.userId = payload.id;
            next();
        }
        catch (err) {
            response.status(401).send({ message: err.message });
            return;
        }
    }
}
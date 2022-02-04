import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../domain/services/UserService';
import * as bcrypt from 'bcrypt';
import { HttpRequestError } from '../exceptions/HttpRequestError';

export class AuthController {
    private _userService = new UserService();
    async login(request: Request, response: Response, next: NextFunction) {
        try {
            const databaseUser = await this._userService.getByEmail(request);
            const validUser = await bcrypt.compare(request.body.password, databaseUser.password)
            if (!validUser) {
                throw new HttpRequestError(400, "Login Credentials doesn't match");
            }
            const token = await jwt.sign({ id: databaseUser.id, username: databaseUser.username }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });
            response.set('Authorization', token);
            response.send(204);
        }
        catch (err) {
            next(err)
        }
    }
}
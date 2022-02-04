import { NextFunction, Request, Response } from 'express';
import { UserService } from '../domain/services/UserService';

export class UserController {

    private _userService = new UserService();

    async getByEmail(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this._userService.getByEmail(request);
            response.status(200).json(result);
        } 
        catch (err) {
            next(err);
        }
    }

    async getUserById(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this._userService.getUserById(request);
            response.status(200).json(result);
        }
        catch (err) {
            next(err);
        }
    }

    async newUser(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this._userService.saveUser(request);
            response.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }

    async updateUser(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this._userService.updateUser(request);
            response.status(200).json(result);
        }
        catch (err) {
            next(err);
        }
    }

    async removeUser(request: Request, response: Response, next: NextFunction) {
        try {
            await this._userService.removeUser(request);
            response.status(204).json();
        }
        catch (err) {
            next(err);
        }
    }
}
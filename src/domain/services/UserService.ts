import { getRepository } from "typeorm";
import { Request } from "express";
import { User } from "../../entity/User";
import { HttpRequestError } from "../../exceptions/HttpRequestError";
import { UserSanitizer } from "../sanitizers/UserSanitizer";
import { userRules } from "../validators/ValidationRules";

export class UserService {
    private _userSanitizer = new UserSanitizer(userRules);
    private _userRepository = getRepository(User);

    public async getByEmail(request: Request): Promise<User> {
        const userEmail = this._userSanitizer.transformRequest(request).email;
        const result = await this._userRepository.findOne({where: {email: userEmail }});
        if (!result) {
            throw new HttpRequestError(404, "Nothing Found");
        }
        return result;
    }

    public async getUserById(request: Request): Promise<User> {
        const result = await this._userRepository.findOne(request.params.id);
        if (!result) {
            throw new HttpRequestError(404, "Nothing Found");
        }
        return UserService.removeSentitiveData(result);
    }

    public async saveUser(request: Request): Promise<User> {
        const user = this._userSanitizer.transformRequest(request);
        
        const previousUser = this.getByEmail(request);
        if(previousUser) {
            throw new HttpRequestError(422, `The e-mail: ${user.email} was already registred`);
        }

        const result = await this._userRepository.save(user);
        return UserService.removeSentitiveData(result);
    }

    public async updateUser(request: Request): Promise<User> {
        const newUserData = this._userSanitizer.transformRequest(request);
        await this._userRepository.update(request.params.id, newUserData)
        const result = await this.getUserById(request.params.id);
        return UserService.removeSentitiveData(result);
    }

    public async removeUser(request: Request):Promise<void> {
        const userToRemove = await this.getUserById(request);
        await this._userRepository.delete(userToRemove);
    }

    private static removeSentitiveData(user: User): User{
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            password: undefined
        }
    } 
}
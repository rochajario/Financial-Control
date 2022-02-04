import { Request } from 'express';
import { BaseUser } from "../../entity/User";
import { BaseSanitizer } from "./BaseSanitizer";
import * as bcrypt from "bcrypt";

export class UserSanitizer extends BaseSanitizer<BaseUser>
{
    protected parseToBaseType(req: Request): BaseUser {
        const body = req.body as any;
        return {
            email: body.email,
            username: body.username,
            password: body.password
        }
    }
    protected getSanitizedObject(dto: any): BaseUser {
        return {
            email: dto.email,
            username: dto.username,
            password: UserSanitizer.getEncryptedPassword(dto.password)
        }
    }

    private static getEncryptedPassword(password: string): string {
        return bcrypt.hashSync(password, 10);
    }

}
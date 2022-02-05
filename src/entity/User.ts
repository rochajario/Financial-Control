import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { IValidator, ValidationResult } from 'ts.validator.fluent/dist';
import { BaseSanitizer } from "./BaseSanitizer";
import { Request } from 'express';
import * as bcrypt from "bcrypt";
import { Entry } from "./Entry";

const userValidationRules = (validator: IValidator<UserRequest>): ValidationResult => {
    return validator
        .Email(u => u.email, "Email should be valid")
        .IsAlpha(u => u.username, "Username must contain only letters")
        .ToResult();
}

class UserSanitizer extends BaseSanitizer<UserRequest>
{
    protected parseToBaseType(req: Request): UserRequest {
        const body = req.body as any;
        return {
            email: body.email,
            username: body.username,
            password: body.password
        }
    }
    protected getSanitizedObject(dto: any): UserRequest {
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

export const getSanitizedUser = (request:Request) => new UserSanitizer(userValidationRules).transformRequest(request);

export interface UserRequest {
    email: string,
    username: string,
    password: string
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;
    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Entry, entry => entry.user)
    entries: Entry[]

    toDto():any
    {
        return {
            id: this.id,
            username: this.username,
            email: this.email
        }
    }
}


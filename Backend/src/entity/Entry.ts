import {Request} from 'express';
import { IValidator, ValidationResult } from "ts.validator.fluent/dist";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { BaseSanitizer } from './BaseSanitizer';
import { User } from "./User";

const entryValidationRules = (validator: IValidator<EntryRequest>): ValidationResult => {
    return validator
        .NotEmpty(e => e.description, "Description cannot be empty")
        .NotNull(e => e.description, "Description cannot be null")
        .NotNull(e => e.value, "Value cannot be null")
        .ToResult();
}

class EntrySanitizer extends BaseSanitizer<EntryRequest>
{
    constructor(validationRules: any) {
        super(validationRules);
    }

    protected parseToBaseType(req: Request): EntryRequest {
        const body = req.body as any;
        return {
            userId: body.userId,
            value: body.value,
            description: body.description,
            type: null,
            category: body.category
        }
    }

    protected getSanitizedObject(dto: any): EntryRequest {
        return {
            userId: dto.userId,
            description: dto.description,
            value: dto.value,
            type: EntrySanitizer.obtainEntryType(dto.value),
            category: EntrySanitizer.obtainEntryCategory(dto.value, dto.category)
        }
    }

    private static obtainEntryType(value: number): string {
        return value >= 0 ? "Receiving" : "Payment";
    }

    private static obtainEntryCategory(value: number, category: string | null): string {
        const validCategories = ['Food', 'Health', 'Home', 'Transport', 'Education', 'Leisure', 'Unforseen'];
        if (value >= 0) {
            return 'Earnings';
        }

        if (validCategories.includes(category)) {
            return category;
        }
        return 'Other';
    }
}

export const getSanitizedEntry = (request: Request) => new EntrySanitizer(entryValidationRules).transformRequest(request);

export interface EntryRequest
{
    userId: number,
    description: string,
    value: number,
    type: string,
    category: string | null
}

@Entity()
export class Entry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    type: string;

    @Column({
        nullable: false,
        default: () => Date.now.toString(), 
        type: 'timestamp',
      })
    date: Date;

    @Column()
    category: string;

    @ManyToOne(type => User, user => user.entries, { onDelete: "CASCADE" })
    user: User
}
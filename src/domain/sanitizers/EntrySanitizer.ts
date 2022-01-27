import { Request } from 'express';
import { BaseEntry } from "../../entity/BaseEntry";
import { BaseSanitizer } from "./BaseSanitizer";

export class EntrySanitizer extends BaseSanitizer<BaseEntry>
{
    constructor(validationRules: any) {
        super(validationRules);
    }

    protected parseToBaseType(req: Request): BaseEntry {
        const body = req.body as any;
        return {
            value: body.value,
            description: body.description,
            type: null,
            category: body.category
        }
    }

    protected getSanitizedObject(dto: any): BaseEntry {
        return {
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
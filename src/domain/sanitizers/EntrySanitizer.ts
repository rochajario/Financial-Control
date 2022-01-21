import { Request } from 'express';
import { Validator } from 'ts.validator.fluent/dist';
import { BaseEntry } from '../../entity/BaseEntry';
import { HttpRequestError } from '../../exceptions/HttpRequestError';
import { validateEntryRules } from '../validators/ValidationRules';

export const entrySanitizer : any = function (req: Request) {
    return EntrySanitizer.processRequest(req);
}

class EntrySanitizer
{
    public static processRequest(req: Request):BaseEntry
    {
        const dto = EntrySanitizer.parseToBaseEntry(req);
        EntrySanitizer.validateFields(dto);
        return EntrySanitizer.getSanitizedObject(dto);
    }

    private static parseToBaseEntry(req: Request):BaseEntry
    {
        const body = req.body as any;
        return {
            value: body.value,
            description: body.description,
            type:null
        }
    }

    private static validateFields(entry: BaseEntry) {
        const validationResult = new Validator(entry).Validate(validateEntryRules);
        if (!validationResult.IsValid) {
            throw new HttpRequestError(422, "Invalid parameter.", validationResult.Errors);
        }
    }

    private static getSanitizedObject(dto: BaseEntry): BaseEntry
    {
        return {
            description: dto.description,
            value: dto.value,
            type: EntrySanitizer.obtainEntryType(dto.value)
        }
    }

    private static obtainEntryType(value:number): string
    {
        return value >= 0 ? "Receiving" : "Payment";
    }
}
import { Request } from 'express';
import { Validator } from 'ts.validator.fluent/dist';
import { HttpException } from '../middlewares/HttpError';

export abstract class BaseSanitizer<T>
{
    constructor(private validationRules: any) {
    }

    public transformRequest(req: Request): T {
        const dto = this.parseToBaseType(req);
        this.validateFields(dto);
        return this.getSanitizedObject(dto);
    }

    private validateFields(dto: T): void {
        const validationResult = new Validator(dto).Validate(this.validationRules);
        if (!validationResult.IsValid) {
            throw new HttpException(422, "Invalid parameter.", validationResult.Errors);
        }
    }

    protected abstract parseToBaseType(req: Request) : T;

    protected abstract getSanitizedObject(dto): T;

}
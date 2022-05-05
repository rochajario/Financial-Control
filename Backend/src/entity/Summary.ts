import { Request } from "express";
import { IValidator, ValidationResult } from "ts.validator.fluent/dist";
import { BaseSanitizer } from "./BaseSanitizer";

const summaryValidationRules = (validator: IValidator<BaseSummary>): ValidationResult => {
    return validator
        .Length(s => s.year, 4, 4, "Year should have 4 digits (yyyy)")
        .Matches(s => s.year, '^[12][0-9]{3}$', "Year must be in between 1000-2999 range")
        .Length(s => s.month, 2, 2, "Month must have 2 digits (mm)")
        .Matches(s => s.month, '^(0[1-9]|1[012])$', "Month must be in between 01-12 range")
        .ToResult();
}

class SummarySanitizer extends BaseSanitizer<BaseSummary>
{
    constructor(validationRules: any) {
        super(validationRules);
    }

    protected parseToBaseType(req: Request) : BaseSummary {
        const params = req.params;
        return  {
            userId: req.body.userId,
            year: params.year,
            month: params.month
        }
    }
    protected getSanitizedObject(dto: any): BaseSummary {
        return  {
            userId: dto.userId,
            year: dto.year,
            month: dto.month
        }
    }
}

export const getSanitizedSummaryParams = (request: Request) => new SummarySanitizer(summaryValidationRules).transformRequest(request);


export interface BaseSummary 
{
    userId: number,
    year: string,
    month: string
}
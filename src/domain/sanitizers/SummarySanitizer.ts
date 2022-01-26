import { Request } from "express";
import { BaseSummary } from "../../entity/BaseSummary";
import { BaseSanitizer } from "./BaseSanitizer";

export class SummarySanitizer extends BaseSanitizer<BaseSummary>
{
    constructor(validationRules: any) {
        super(validationRules);
    }

    protected parseToBaseType(req: Request) : BaseSummary {
        const params = req.params;
        return  {
            year: params.year,
            month: params.month
        }
    }
    protected getSanitizedObject(dto: any): BaseSummary {
        return  {
            year: dto.year,
            month: dto.month
        }
    }
    
}
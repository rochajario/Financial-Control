import { Request, Response, NextFunction } from 'express';
import { getManager } from "typeorm";
import { SummarySanitizer } from '../domain/sanitizers/SummarySanitizer';
import { validateSummaryRules } from '../domain/validators/ValidationRules';

export class SummaryController {
    
    
    private entityManager = getManager();


    async monthSummary(request: Request, response: Response, next: NextFunction) {

        try
        {
            const sanitizer = new SummarySanitizer(validateSummaryRules);
            const reqBody = sanitizer.transformRequest(request);
    
            const entriesDetail = await this.entityManager.query(this.getEntriesDetail(reqBody.year,reqBody.month));
            const categoriesDetail = await this.entityManager.query(this.getCategoriesDetail(reqBody.year,reqBody.month));
    
            const resBody = 
            {
                balance: this.getTotalAmount(entriesDetail),
                entries: entriesDetail,
                categories: categoriesDetail
            }
    
            response.status(200).json(resBody);
        }
        catch (e)
        {
            next(e);
        }
        
    }

    private getEntriesDetail(year:string, month:string) 
    {
        return `SELECT e.type as 'type', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM financial_control.entry e WHERE e.date LIKE '%${year}-${month}%' GROUP BY e.type;`
    }
    private getCategoriesDetail(year:string, month:string)
    {
        return `SELECT e.category as 'type', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM financial_control.entry e WHERE e.date LIKE '%${year}-${month}%' GROUP BY e.category;`;
    }

    getTotalAmount(entries: Array<any>): number
    {
        let total: number;
        entries.forEach(e => {
            total =+ e.totalAmount;
        })
        return total;
    }

}
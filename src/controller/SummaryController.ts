import { Request, Response, NextFunction } from 'express';
import { getEarningsMonthSummary, getExpensesMonthSummary, getMonthSummary} from '../domain/services/SummaryService';

export class SummaryController {
    async monthSummary(request: Request, response: Response, next: NextFunction) {
        try
        {
            const resBody = await getMonthSummary(request);
            response.status(200).json(resBody);
        }
        catch (e)
        {
            next(e);
        }   
    }

    async expensesMonthSummary(request: Request, response: Response, next: NextFunction) {
        try
        {
            const resBody = await getExpensesMonthSummary(request);
            response.status(200).json(resBody);
        }
        catch (e)
        {
            next(e);
        }
    }

    async earningsMonthSummary(request: Request, response: Response, next: NextFunction) {
        try
        {
            const resBody = await getEarningsMonthSummary(request);
            response.status(200).json(resBody);
        }
        catch (e)
        {
            next(e);
        }
    }
}
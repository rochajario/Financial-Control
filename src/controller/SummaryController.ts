import { Request, Response, NextFunction } from 'express';
import { getManager } from 'typeorm';
import { getSanitizedSummaryParams } from '../entity/Summary';
import { HttpException } from '../middlewares/HttpError';

export class SummaryController {
    async monthSummary(request: Request, response: Response, next: NextFunction) {
        try
        {
            const resBody = await SummaryController.getMonthSummary(request);
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
            const resBody = await SummaryController.getExpensesMonthSummary(request);
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
            const resBody = await SummaryController.getEarningsMonthSummary(request);
            response.status(200).json(resBody);
        }
        catch (e)
        {
            next(e);
        }
    }

    private static async getMonthSummary(input: Request): Promise<any> {
        const reqBody = getSanitizedSummaryParams(input);
        const entriesDetail = await getManager().query(SummaryController.getEntriesDetail(reqBody.userId, reqBody.year, reqBody.month));
        const categoriesDetail = await getManager().query(SummaryController.getCategoriesDetail(reqBody.userId, reqBody.year, reqBody.month));

        const response = {
            balance: SummaryController.getTotalAmount(entriesDetail),
            entries: entriesDetail,
            categories: categoriesDetail
        }

        if (!response.balance) {
            throw new HttpException(404, "No entries found for selected period");
        }

        return response;
    }

    private static getEntriesDetail(userId: number, year: string, month: string) {
        return `SELECT e.type as 'type', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM ${process.env.TYPEORM_DATABASE}.entry e WHERE e.date LIKE '%${year}-${month}%' AND e.userId = ${userId} GROUP BY e.type;`
    }

    private static async getExpensesMonthSummary(input: Request): Promise<any> {
        const reqBody = getSanitizedSummaryParams(input);
        return await getManager().query(SummaryController.getCategoriesDetail(reqBody.userId, reqBody.year, reqBody.month, "Payment"));
    }

    private static async getEarningsMonthSummary(input: Request): Promise<any> {
        const reqBody = getSanitizedSummaryParams(input);
        return await getManager().query(SummaryController.getCategoriesDetail(reqBody.userId, reqBody.year, reqBody.month, "Receiving"));
    }

    private static getCategoriesDetail(userId: number, year: string, month: string, type: string = null) {
        if (type) {
            return `SELECT e.category as 'category', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM ${process.env.TYPEORM_DATABASE}.entry e WHERE e.type = '${type}' AND e.userId = ${userId} AND e.date LIKE '%${year}-${month}%' GROUP BY e.category;`;
        }
        return `SELECT e.category as 'type', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM ${process.env.TYPEORM_DATABASE}.entry e WHERE e.date LIKE '%${year}-${month}%' AND e.userId = ${userId} GROUP BY e.category;`;

    }

    private static getTotalAmount(entries: Array<any>): number {
        let earnings: number = 0;
        let expendings: number = 0;

        entries.forEach(e => {
            if (e.type == 'Receiving') {
                earnings = e.totalAmount;
            }
            else {
                expendings = Math.abs(e.totalAmount);
            }
        });

        return earnings - expendings;
    }
}




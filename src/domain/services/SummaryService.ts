import { Request } from 'express';
import { getManager } from "typeorm";
import { SummarySanitizer } from "../sanitizers/SummarySanitizer";
import { summaryRules } from "../validators/ValidationRules";
import { HttpRequestError } from '../../exceptions/HttpRequestError';

export const getMonthSummary = async (req: Request) => new SummaryService().getMonthSummary(req);
export const getExpensesMonthSummary = async (req: Request) => new SummaryService().getExpensesMonthSummary(req);
export const getEarningsMonthSummary = async (req: Request) => new SummaryService().getEarningsMonthSummary(req);

class SummaryService {
    private _entityManager = getManager();
    private _sanitizer = new SummarySanitizer(summaryRules);

    async getExpensesMonthSummary(input: Request): Promise<any> {
        const reqBody = this._sanitizer.transformRequest(input);
        return await this._entityManager.query(this.getCategoriesDetail(reqBody.year, reqBody.month, "Payment"));
    }

    async getEarningsMonthSummary(input: Request): Promise<any> {
        const reqBody = this._sanitizer.transformRequest(input);
        return await this._entityManager.query(this.getCategoriesDetail(reqBody.year, reqBody.month, "Receiving"));
    }

    async getMonthSummary(input: Request): Promise<any> {
        const reqBody = this._sanitizer.transformRequest(input);
        const entriesDetail = await this._entityManager.query(this.getEntriesDetail(reqBody.year, reqBody.month));
        const categoriesDetail = await this._entityManager.query(this.getCategoriesDetail(reqBody.year, reqBody.month));

        const response = {
            balance: this.getTotalAmount(entriesDetail),
            entries: entriesDetail,
            categories: categoriesDetail
        }

        if (!response.balance) {
            throw new HttpRequestError(404, "No entries found for selected period");
        }

        return response;
    }

    private getEntriesDetail(year: string, month: string) {
        return `SELECT e.type as 'type', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM financial_control.entry e WHERE e.date LIKE '%${year}-${month}%' GROUP BY e.type;`
    }
    private getCategoriesDetail(year: string, month: string, type: string = null) {
        if (type) {
            return `SELECT e.category as 'category', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM financial_control.entry e WHERE e.type = '${type}' AND e.date LIKE '%${year}-${month}%' GROUP BY e.category;`;
        }
        return `SELECT e.category as 'type', COUNT(e.id) as 'transactionCount', SUM(e.value) as 'totalAmount' FROM financial_control.entry e WHERE e.date LIKE '%${year}-${month}%' GROUP BY e.category;`;

    }

    private getTotalAmount(entries: Array<any>): number {
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
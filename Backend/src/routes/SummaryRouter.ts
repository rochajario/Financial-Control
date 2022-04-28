import { Router } from "express";
import { AuthController } from "../controller/AuthController";
import { SummaryController } from "../controller/SummaryController";

class SummaryRouter {
    private _router: Router = Router();
    private summaryController: SummaryController = new SummaryController();
    private authController: AuthController = new AuthController();

    public routes() {
        return [
            this.getYearMonth(),
            this.getExpensesYearMonth(),
            this.getEarningsYearMonth()
        ]
    }

    private getYearMonth() {
        return this.router.get('/:year/:month',
            this.authController.authorize,
            this.summaryController.monthSummary
        );
    }

    private getExpensesYearMonth() {
        return this.router.get('/expenses/:year/:month',
            this.authController.authorize,
            this.summaryController.expensesMonthSummary
        );
    }

    private getEarningsYearMonth() {
        return this.router.get('/earnings/:year/:month',
            this.authController.authorize,
            this.summaryController.earningsMonthSummary
        );
    }

    private get router() {
        return this._router
    }
}

export default new SummaryRouter()
import {Router} from "express";
import { AuthController } from "../controller/AuthController";
import { SummaryController } from "../controller/SummaryController";

export class SummaryRoutes {
    public router: Router;
    public summaryController: SummaryController = new SummaryController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/:year/:month', this.authController.authorize, this.summaryController.monthSummary);
        this.router.get('/expenses/:year/:month', this.authController.authorize, this.summaryController.expensesMonthSummary);
        this.router.get('/earnings/:year/:month', this.authController.authorize, this.summaryController.earningsMonthSummary);
    }
}
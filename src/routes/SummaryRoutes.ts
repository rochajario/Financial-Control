import { SummaryController } from "../controller/SummaryController";

export const SummaryRoutes = [
    {
        method: "get",
        route: "/summary/:year/:month",
        controller: SummaryController,
        action: "monthSummary"
    },
    {
        method: "get",
        route: "/summary/expenses/:year/:month",
        controller: SummaryController,
        action: "expensesMonthSummary"
    },
    {
        method: "get",
        route: "/summary/earnings/:year/:month",
        controller: SummaryController,
        action: "earningsMonthSummary"
    }
]
import { SummaryController } from "../controller/SummaryController";

export const SummaryRoutes = [
    {
        method: "get",
        route: "/summary/:year/:month",
        controller: SummaryController,
        action: "monthSummary"
    }
]
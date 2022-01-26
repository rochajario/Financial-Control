import { RouteBuilder } from "./routes/RotuerBuilder";
import { EntryRoutes } from "./routes/EntryRoutes";
import { SummaryRoutes } from "./routes/SummaryRoutes";

export const Routes = 
    new RouteBuilder()
        .withControllerRoutes(SummaryRoutes)
        .withControllerRoutes(EntryRoutes)
        .getRouter();




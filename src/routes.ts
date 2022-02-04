import { RouteBuilder } from "./routes/RotuerBuilder";
import { EntryRoutes } from "./routes/EntryRoutes";
import { SummaryRoutes } from "./routes/SummaryRoutes";
import { UserRoutes } from "./routes/UserRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";

export const Routes = 
    new RouteBuilder()
        .withControllerRoutes(SummaryRoutes)
        .withControllerRoutes(EntryRoutes)
        .withControllerRoutes(UserRoutes)
        .withControllerRoutes(AuthRoutes)
        .getRouter();




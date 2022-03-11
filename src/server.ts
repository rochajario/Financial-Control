import * as cors from 'cors';
import * as express from 'express';
import HttpExceptionFilter from './middlewares/HttpError';
import InexistentRoute from './middlewares/InexistentRoute';
import { WakeupRoute } from './routes/WakeupRoute';
import AuthRouter from './routes/AuthRouter';
import EntryRouter from './routes/EntryRouter';
import { SummaryRoutes } from './routes/SummaryRoutes';
import { UserRoutes } from './routes/UserRoutes';

const corsOptions: cors.CorsOptions = {
    origin: [
        'http://localhost:8080',
        'https://rochajario.github.io'
    ]
}

export class Server {
    public app: express.Application;

    constructor() {
        this.app = express()
        this.config();
        this.routes();
        this.middlewares();
    }

    private config(): void {
        this.app.disable("x-powered-by");
        this.app.use(express.json());
        this.app.use(cors(corsOptions));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.set("port", process.env.PORT || 3000);
    }

    private routes(): void {
        this.app.use("/api/wakeup", new WakeupRoute().router);
        this.app.use("/api/auth", AuthRouter.routes());
        this.app.use("/api/user", new UserRoutes().router);
        this.app.use("/api/entries", EntryRouter.routes());
        this.app.use("/api/summary", new SummaryRoutes().router);
    }

    private middlewares(): void {
        this.app.use(HttpExceptionFilter);
        this.app.all('*', InexistentRoute);
    }

    public start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log(
                "API is running at port:%d",
                this.app.get("port")
            );
        });
    }
}
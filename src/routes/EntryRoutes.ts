import {Router} from "express";
import { AuthController } from "../controller/AuthController";
import { EntryController } from "../controller/EntryController";
export class EntryRoutes {
    public router: Router;
    public entryController: EntryController = new EntryController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', this.authController.authorize, this.entryController.all);
        this.router.get('/:id', this.authController.authorize, this.entryController.one);
        this.router.get('/receivings', this.authController.authorize, this.entryController.receivings);
        this.router.get('/payments', this.authController.authorize, this.entryController.payments);
        this.router.post('/', this.authController.authorize, this.entryController.save);
        this.router.put('/:id', this.authController.authorize, this.entryController.update);
        this.router.delete('/:id', this.authController.authorize, this.entryController.delete);
    }
}